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

    /* return query.then((data: any[]) => {
      return data;
    })
    .catch((error: Error) => {
        throw "StockRepository getOrderById " + error;
    });*/
  }

  async save(stockDto: any): Promise<any> {
    const articulo = new Stock(stockDto);
    return await articulo.save();
  }

  async saveMany(stockDto: any[]): Promise<any[]> {
    return await Stock.insertMany(stockDto);
  }
}
