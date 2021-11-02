/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { Result } from "../../../core/domain";
import { TYPES_REPOSITORIES } from "../../../core/types";
import {
  IUploadFileArticuloUseCase,
} from "../../handlers/articulo";

import {
  ArticuloRepository,
} from "./../../../infra/mongoose/repository";

@injectable()
export class UploadFileArticuloUseCase implements IUploadFileArticuloUseCase {
  constructor(
    @inject(TYPES_REPOSITORIES.ArticuloRepository)
    private readonly repository: ArticuloRepository
  ) { }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async execute(request: any): Promise<Result<any>> {
    try {
      const link = request.files;
      const codigo = request.id;
      const errorMessage = { code: 403, message: "Articulo not found" };

      if (codigo === 0) {
        throw errorMessage;
      } else {
        if (link !== "") {
          const articuloUpdated = await this.repository.updateById(
              codigo, { $set: { image: link } }
          );
          if (articuloUpdated !== null && articuloUpdated !== undefined) {
            return Result.ok<any>({ link: link });
          } else {
            throw errorMessage;
          }
        }
        return Result.ok<any>({ link: link });
      }
    } catch (e) {
      let errorMessage = "An error has ocurred";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      const obj = "UploadFileArticuloUseCase " + errorMessage;
      return Result.fail<any>(obj);
    }
  }
}
