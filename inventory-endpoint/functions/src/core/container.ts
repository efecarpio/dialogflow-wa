import { Container } from "inversify";
import {
  TYPES_USECASE,
  TYPES_REPOSITORIES,
} from "./types";

import {
  FindAllArticuloUseCase,
  SaveArticuloUseCase,
  UploadFileArticuloUseCase,
} from "../app/usecases/articulo";

import {
  FindAllStockUseCase,
} from "../app/usecases/stock";

import {
  ArticuloRepository,
  StockRepository,
  OrderRepository,
} from "../infra/mongoose/repository";

// Inicializa el container
export const container = new Container();

// UseCase.
// ----- ARTICULOS -----
container.bind(TYPES_USECASE.FindAllArticuloUseCase).to(FindAllArticuloUseCase);
container.bind(TYPES_USECASE.SaveArticuloUseCase).to(SaveArticuloUseCase);
container.bind(TYPES_USECASE.UploadFileArticuloUseCase)
    .to(UploadFileArticuloUseCase);

// ----- STOCK -----
container.bind(TYPES_USECASE.FindAllStockUseCase).to(FindAllStockUseCase);

// Repositories.
// ----- REPOSITORIES -----
container.bind(TYPES_REPOSITORIES.ArticuloRepository).to(ArticuloRepository);
container.bind(TYPES_REPOSITORIES.StockRepository).to(StockRepository);
container.bind(TYPES_REPOSITORIES.OrderRepository).to(OrderRepository);
