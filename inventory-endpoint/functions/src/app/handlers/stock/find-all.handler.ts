/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUseCase, Result } from "../../../core/domain";
import { IStock } from "../../../infra/mongoose/interfaces";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFindAllStockUseCase extends
IUseCase<any, Result<IStock[]>> {}
