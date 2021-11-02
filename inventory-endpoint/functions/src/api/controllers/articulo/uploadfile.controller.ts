import { Request, Response } from "express";
import Busboy from "busboy";
import * as path from "path";
import * as os from "os";
import * as fs from "fs";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import StatusCodes from "http-status-codes";
import BasePresenter from "../../base/basePresenter";
import { TYPES_USECASE } from "../../../core/types";
import {
  IUploadFileArticuloUseCase,
} from "../../../app/handlers/articulo";

@controller("/articulo")
export class UploadFileArticuloController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public constructor(
    @inject(TYPES_USECASE.UploadFileArticuloUseCase)
    private readonly repository: IUploadFileArticuloUseCase
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @httpPost("/upload/:id")
  public async index(req: Request, res: Response) {
    try {
      const busboy = Busboy({ headers: req.headers });
      let result = null;
      let uploadData = null;

      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const filepath = path.join(os.tmpdir(), filename);
        uploadData = { file: filepath, type: mimetype, name: filename };
        file.pipe(fs.createWriteStream(filepath));
      });
      busboy.on("finish", async () => {
        result = await this.repository.execute({
          files: uploadData,
          id: req.params.id,
        });
      });
      busboy.end(req.body);

      const output = BasePresenter.populateView(result);
      return res.status(result.statusCode).json(output);
    } catch (e) {
      const output = BasePresenter.errorView(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(output);
    }
  }
}
