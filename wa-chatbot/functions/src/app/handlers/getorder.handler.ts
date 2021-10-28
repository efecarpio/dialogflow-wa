/* eslint-disable @typescript-eslint/no-explicit-any */
import FetchDocumentRequest from "../../api/request/fetch-document.request";
import { Result } from "../../core/domain";
import UseCase from "../../core/domain/use-case.interface";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGetOrderUseCase extends
UseCase<FetchDocumentRequest, Result<any>> {}
