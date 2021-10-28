/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EntityRepository,
  Repository,
} from "typeorm";
import { Articulo } from "../entity";

@EntityRepository(Articulo)
export class ArticuloRepository extends Repository<Articulo> {
  constructor() {
    super();
  }

  async getOrderById(order: number): Promise<Articulo> {
    const query = await this.findOne({
      where: {
        id: order,
      },
    });

    return query;
  }
}
