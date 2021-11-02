import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import StatusCodes from "http-status-codes";
import BasePresenter from "../../base/basePresenter";
import { TYPES_USECASE } from "../../../core/types";
import {
  IFindAllArticuloUseCase,
} from "../../../app/handlers/articulo";

@controller("/articulo")
export class FindAllArticuloController {
  public constructor(
    @inject(TYPES_USECASE.FindAllArticuloUseCase)
    private readonly usecase: IFindAllArticuloUseCase
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @httpGet("/")
  public async index(req: Request, res: Response) {
    try {
      // const filter = (req.query.name !== undefined) ?
      // req.query.name : "";
      const filter = req.query;
      const result = await this.usecase.execute(filter);

      const output = BasePresenter.populateView(result);
      return res.status(result.statusCode).json(output);
    } catch (e) {
      const output = BasePresenter.errorView(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(output);
    }
  }
}
