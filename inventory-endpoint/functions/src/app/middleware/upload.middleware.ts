import express from "express";
import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import Busboy from "busboy";
import * as path from "path";
import * as os from "os";
import * as fs from "fs";
import uploadFileToBucket from "../services/upload.service";
import { IUploadMiddleware } from "./IUploadMiddlewara.interface";


@injectable()
export class UploadFileMiddleware extends BaseMiddleware {
  public async handler(
      req: express.Request & {docs: IUploadMiddleware},
      res: express.Response,
      next: express.NextFunction
  ): Promise<void> {
    try {
      const busboy = Busboy({ headers: req.headers });
      let uploadData = null;

      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const filepath = path.join(os.tmpdir(), filename);
        uploadData = { file: filepath, type: mimetype, name: filename };
        file.pipe(fs.createWriteStream(filepath));
      });

      busboy.on("finish", async () => {
        if (uploadData !== null) {
          uploadFileToBucket(uploadData).then((link: string) => {
            req.docs = {
              link: link,
              id: req.params.id,
            };
            next();
          });
        } else {
          req.docs = {
            link: "",
            id: req.params.id,
          };
          next();
        }
      });
      busboy.end(req.body);
      return;
    } catch (error) {
      console.error("Error created files:", error);
      res.status(403).send("Unauthorized");
      return;
    }
  }
}
