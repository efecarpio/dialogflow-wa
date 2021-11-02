/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { Result } from "../../../core/domain";
import { TYPES_REPOSITORIES } from "../../../core/types";
import {
  IUploadFileArticuloUseCase,
} from "../../handlers/articulo";
import uploadFileToBucket from "../../services/upload.service";
/* import {
  IArticulo,
} from "./../../../infra/mongoose/interfaces";*/

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
      const files = request.files;
      const codigo = request.id;
      const errorMessage = { code: 403, message: "Articulo not found" };

      if (codigo === 0) {
        throw errorMessage;
      } else {
        const articuloUpdated = await this.repository.findById(codigo);
        if (articuloUpdated !== null && articuloUpdated !== undefined) {
          return uploadFileToBucket(files).then(async (link: string) => {
            articuloUpdated.imagen = link;
            await this.repository.update(articuloUpdated);
            return Result.ok<any>(articuloUpdated);
          });
        } else {
          throw errorMessage;
        }
      }
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
