/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import Articulo from "../models/articulo";

@injectable()
export class ArticuloRepository {
  async getOrderById(order: number): Promise<any> {
    return await Articulo.findOne({
      codart: order,
    });
  }

  async save(articuloDto: any): Promise<any> {
    const articulo = new Articulo(articuloDto);
    return await articulo.save();
  }

  async saveMany(articulosDto: any[]): Promise<any[]> {
    return await Articulo.insertMany(articulosDto);
  }
}
