/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Repository,
  EntityRepository,
} from "typeorm";
import { Stock } from "../entity";

@EntityRepository(Stock)
export class StockRepository extends Repository<Stock> {
  constructor() {
    super();
  }
}
