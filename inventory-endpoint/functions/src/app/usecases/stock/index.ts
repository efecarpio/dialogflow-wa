/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { Result } from "../../../core/domain";
import { TYPES_REPOSITORIES } from "../../../core/types";
import {
  IFindAllStockUseCase,
} from "../../handlers/stock";
import {
  IStock,
} from "./../../../infra/mongoose/interfaces";

import {
  StockRepository,
} from "./../../../infra/mongoose/repository";

@injectable()
export class FindAllStockUseCase implements IFindAllStockUseCase {
  constructor(
    @inject(TYPES_REPOSITORIES.StockRepository)
    private readonly repository: StockRepository
  ) { }

  async execute(request: any): Promise<Result<IStock[]>> {
    try {
      const result = await this.repository.findAll({});

      return Result.ok<any>(result);
    } catch (e) {
      let errorMessage = "An error has ocurred";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      const obj = "FindAllStockUseCase " + errorMessage;
      return Result.fail<any>(obj);
    }
  }
}
