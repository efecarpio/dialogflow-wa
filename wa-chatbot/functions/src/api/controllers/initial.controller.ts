import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import StatusCodes from "http-status-codes";
import BasePresenter from "../base/basePresenter";
import { TYPES_USECASE } from "../../core/types";
import { MigrationUseCase } from "../../app/usecases";


@controller("/migration")
export class MigrationController {
  public constructor(
    @inject(TYPES_USECASE.MigrationUseCase)
    private readonly usecase: MigrationUseCase
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @httpGet("/")
  public async index(req: Request, res: Response) {
    try {
      const result = await this.usecase.execute();

      const output = BasePresenter.populateView(result);
      return res.status(result.statusCode).json(output);
    } catch (e) {
      const output = BasePresenter.errorView(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(output);
    }
  }
}
