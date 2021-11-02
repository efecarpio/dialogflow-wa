/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import StatusCodes from "http-status-codes";
import BasePresenter from "../../base/basePresenter";
import {
  TYPES_USECASE,
  TYPES_MIDDLEWARE,
} from "../../../core/types";
import {
  IUploadFileArticuloUseCase,
} from "../../../app/handlers/articulo";
import {
  IUploadMiddleware,
} from "../../../app/middleware/IUploadMiddlewara.interface";

@controller("/articulo")
export class UploadFileArticuloController {
  public constructor(
    @inject(TYPES_USECASE.UploadFileArticuloUseCase)
    private readonly repository: IUploadFileArticuloUseCase
  ) {}

  @httpPost("/upload/:id", TYPES_MIDDLEWARE.UploadFileMiddleware)
  public async index(req: Request & {docs: IUploadMiddleware}, res: Response) {
    try {
      const filter = req.docs;
      const result = await this.repository.execute({
        files: filter.link,
        id: filter.id,
      });

      const output = BasePresenter.populateView(result);
      return res.status(result.statusCode).json(output);
    } catch (e) {
      const output = BasePresenter.errorView(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(output);
    }
  }
}
