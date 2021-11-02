/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUseCase, Result } from "../../../core/domain";
import { IArticulo } from "../../../infra/mongoose/interfaces";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISaveArticuloUseCase extends
IUseCase<IArticulo, Result<IArticulo>> {}
