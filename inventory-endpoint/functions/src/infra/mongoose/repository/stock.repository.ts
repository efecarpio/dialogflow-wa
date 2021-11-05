/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import { IStock } from "../interfaces";
import Stock from "../models/stock";

@injectable()
export class StockRepository {
  async findById(order: number): Promise<IStock> {
    return await Stock.findOne({
      "articulo.codart": order,
    });
  }

  async findAll(filtros: any): Promise<unknown> {
    let filter = {};
    if (filtros !== null) {
      filter = { chat: filtros };
    }
    return await Stock.find(filter).exec();
  }

  async save(stockDto: IStock): Promise<IStock> {
    const articulo = new Stock(stockDto);
    return await articulo.save();
  }

  async saveMany(stockDto: IStock[]): Promise<IStock[]> {
    return await Stock.insertMany(stockDto);
  }
}
