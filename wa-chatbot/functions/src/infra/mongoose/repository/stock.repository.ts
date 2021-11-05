/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import Stock from "../models/stock";

@injectable()
export class StockRepository {
  async getOrderById(order: number): Promise<any> {
    return await Stock.findOne({
      "articulo.codart": order,
    });
  }

  async save(stockDto: any): Promise<any> {
    const articulo = new Stock(stockDto);
    return await articulo.save();
  }

  async saveMany(stockDto: any[]): Promise<any[]> {
    return await Stock.insertMany(stockDto);
  }
}
