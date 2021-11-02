import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import StatusCodes from "http-status-codes";
import BasePresenter from "../../base/basePresenter";
import { TYPES_USECASE } from "../../../core/types";
import {
  ISaveArticuloUseCase,
} from "../../../app/handlers/articulo";

@controller("/articulo")
export class SaveArticuloController {
  public constructor(
    @inject(TYPES_USECASE.SaveArticuloUseCase)
    private readonly usecase: ISaveArticuloUseCase
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @httpPost("/")
  public async index(req: Request, res: Response) {
    try {
      const articulo = req.body.data;
      const result = await this.usecase.execute(articulo);

      const output = BasePresenter.populateView(result);
      return res.status(result.statusCode).json(output);
    } catch (e) {
      const output = BasePresenter.errorView(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(output);
    }
  }
}
