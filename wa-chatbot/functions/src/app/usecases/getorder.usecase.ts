/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { Result } from "../../core/domain";
import { TYPES_REPOSITORIES } from "../../core/types";
import { IGetOrderUseCase } from "../handlers";
import FetchDocumentRequest from "../../api/request/fetch-document.request";

import {
  StockRepository,
} from "./../../infra/mongoose/repository";

@injectable()
export class GetOrderUseCase implements IGetOrderUseCase {
  constructor(
    @inject(TYPES_REPOSITORIES.StockRepository)
    private readonly repository: StockRepository
  ) { }

  async execute(request: FetchDocumentRequest): Promise<Result<any>> {
    try {
      const { id } = request;
      const order = await this.repository.getOrderById(id);
      return Result.ok<any>(order);
    } catch (e) {
      let errorMessage = "An error has ocurred";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      const obj = "GetOrder " + errorMessage;
      return Result.fail<any>(obj);
    }
  }
}
