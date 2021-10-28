/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from "../../core/domain";
import UseCase from "../../core/domain/use-case.interface";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INewOrderUseCase extends
UseCase<any, Result<any>> {}
