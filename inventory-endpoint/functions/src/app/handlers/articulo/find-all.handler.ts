/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUseCase, Result } from "../../../core/domain";
import { IArticulo } from "../../../infra/mongoose/interfaces";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFindAllArticuloUseCase extends
IUseCase<any, Result<IArticulo[]>> {}
