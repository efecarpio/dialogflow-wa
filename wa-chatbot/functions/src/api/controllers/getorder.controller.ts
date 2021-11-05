import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import StatusCodes from "http-status-codes";
import BasePresenter from "../base/basePresenter";
import { TYPES_USECASE } from "../../core/types";
import { IGetOrderUseCase } from "../../app/handlers";
import FetchDocumentRequest from "../request/fetch-document.request";


@controller("/order")
export class GetOrderController {
  public constructor(
    @inject(TYPES_USECASE.GetOrderUseCase)
    private readonly usecase: IGetOrderUseCase
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @httpGet("/:order")
  public async index(req: Request, res: Response) {
    try {
      const orderNumber = Number(req.params.order);
      const result = await this.usecase.execute(
          new FetchDocumentRequest(orderNumber)
      );

      const output = BasePresenter.populateView(result);
      return res.status(result.statusCode).json(output);
    } catch (e) {
      const output = BasePresenter.errorView(e);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(output);
    }
  }
}
