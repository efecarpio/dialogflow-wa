/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { TYPES_REPOSITORIES } from "../../../core/types";
import { Result } from "../../../core/domain";
import { ISaveArticuloUseCase } from "../../handlers/articulo";
import { IArticulo } from "../../../infra/mongoose/interfaces";
import {
  ArticuloRepository,
} from "../../../infra/mongoose/repository";


@injectable()
export class SaveArticuloUseCase implements ISaveArticuloUseCase {
  constructor(
    @inject(TYPES_REPOSITORIES.ArticuloRepository)
    private readonly repository: ArticuloRepository
  ) { }

  async execute(articulo: IArticulo): Promise<Result<any>> {
    try {
      if (articulo.codart === 0) {
        const articuloSaved = await this.repository.save(articulo);
        return Result.ok<any>(articuloSaved);
      } else {
        const articuloUpdated = await this.repository.update(articulo);
        if (articuloUpdated !== null && articuloUpdated !== undefined) {
          return Result.ok<any>(articuloUpdated);
        } else {
          const errorMessage = { code: 403, message: "Articulo not found" };
          throw errorMessage;
        }
      }
    } catch (e) {
      let errorMessage = "An error has ocurred";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      const obj = "SaveArticuloUseCase " + errorMessage;
      return Result.fail<any>(obj);
    }
  }
}
