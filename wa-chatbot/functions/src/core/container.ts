import { Container } from "inversify";
import { DatabaseService } from "./services/database.service";
import {
  TYPES_SERVICES,
  TYPES_USECASE,
  TYPES_REPOSITORIES,
} from "./types";

import {
  GetOrderUseCase,
  NewOrderUseCase,
  MigrationUseCase,
} from "../app/usecases";

import {
  ArticuloRepository,
  StockRepository,
  OrderRepository,
} from "../infra/mongoose/repository";

// Inicializa el container
export const container = new Container();

// Servicios.
container.bind(TYPES_SERVICES.DatabaseService).to(DatabaseService);

// UseCase.
// ----- STOCK Y PRODUCTOS -----
container.bind(TYPES_USECASE.GetOrderUseCase).to(GetOrderUseCase);
container.bind(TYPES_USECASE.MigrationUseCase).to(MigrationUseCase);
container.bind(TYPES_USECASE.NewOrderUseCase).to(NewOrderUseCase);

// Repositories.
// ----- STOCK Y PRODUCTOS -----
container.bind(TYPES_REPOSITORIES.ArticuloRepository).to(ArticuloRepository);
container.bind(TYPES_REPOSITORIES.StockRepository).to(StockRepository);
container.bind(TYPES_REPOSITORIES.OrderRepository).to(OrderRepository);
