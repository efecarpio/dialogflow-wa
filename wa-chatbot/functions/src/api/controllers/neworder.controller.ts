import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost } from "inversify-express-utils";
import StatusCodes from "http-status-codes";
import BasePresenter from "../base/basePresenter";
import { TYPES_USECASE } from "../../core/types";
import { INewOrderUseCase } from "../../app/handlers";

@controller("/order")
export class NewOrderController {
  public constructor(
    @inject(TYPES_USECASE.NewOrderUseCase)
    private readonly usecase: INewOrderUseCase
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @httpPost("/")
  public async index(req: Request, res: Response) {
    try {
      const result = await this.usecase.execute(req.body.data);
      const output = BasePresenter.populateView(result);

      return res.status(result.statusCode).json(output);
    } catch (e) {
      const output = BasePresenter.errorView(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(output);
    }
  }
}
