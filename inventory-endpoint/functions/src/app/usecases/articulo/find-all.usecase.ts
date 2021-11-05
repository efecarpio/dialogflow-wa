/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { Result } from "../../../core/domain";
import { TYPES_REPOSITORIES } from "../../../core/types";
import {
  IFindAllArticuloUseCase,
} from "../../handlers/articulo/find-all.handler";
import {
  IArticulo,
} from "./../../../infra/mongoose/interfaces";

import {
  ArticuloRepository,
} from "./../../../infra/mongoose/repository";

@injectable()
export class FindAllArticuloUseCase implements IFindAllArticuloUseCase {
  constructor(
    @inject(TYPES_REPOSITORIES.ArticuloRepository)
    private readonly repository: ArticuloRepository
  ) { }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async execute(request: any): Promise<Result<IArticulo[]>> {
    try {
      return await this.repository.findStock(request).then((response: any) => {
        return Result.ok<any>(response);
      });
    } catch (e) {
      let errorMessage = "An error has ocurred";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      const obj = "FindAllArticuloUseCase " + errorMessage;
      return Result.fail<any>(obj);
    }
  }
}
