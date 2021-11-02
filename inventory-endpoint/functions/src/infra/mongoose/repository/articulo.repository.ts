/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import { IArticulo } from "../interfaces";
import Articulo from "../models/articulo";

declare global {
  interface Array<T> {
    addOption(callback: any);
  }
}

Array.prototype.addOption = function(option: any) {
  if (option !== null) {
    this.push(option);
  }
};

@injectable()
export class ArticuloRepository {
  async findById(codigo: number): Promise<IArticulo> {
    return await Articulo.findOne({
      codart: codigo,
    });
  }

  async findAll(filtros: any): Promise<unknown> {
    let filter = {};
    if (filtros !== null) {
      filter = { chat: filtros };
    }
    return await Articulo.find(filter).exec();
    /* return new Promise((resolve, reject) => {
      let filter = {};
      if (filtros !== null) {
        filter = { chat: filtros };
      }
      Articulo.find(filter).exec((error: any, populated: any) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
        return true;
      });
    });*/
  }

  async save(articuloDto: IArticulo): Promise<IArticulo> {
    const articulo = new Articulo(articuloDto);
    return await articulo.save();
  }

  async update(articuloDto: IArticulo) {
    return await Articulo.findOneAndUpdate({
      codart: articuloDto.codart,
    }, articuloDto);
  }

  async saveMany(articulosDto: IArticulo[]): Promise<IArticulo[]> {
    return await Articulo.insertMany(articulosDto);
  }

  async findStock(params: any): Promise<any[]> {
    /* const filter = (params.name !== "") ?
      { descrip: { $regex: params.name, $options: "i" } } : {};*/

    const options = [{
      $lookup: {
        from: "stocks",
        localField: "codart",
        foreignField: "articulo.codart",
        as: "stock_info",
      },
    },
    {
      $addFields: {
        stock: {
          $sum: "$stock_info.stock",
        },
      },
    },
    {
      $project: {
        stock_info: 0,
      },
    }];
    options.addOption(this.sort(params.sort));
    options.addOption(this.filter(params.name));

    return await Articulo.aggregate(options);
  }

  private filter(param: string) {
    if (param !== "") {
      return { $match: { descrip: { $regex: param, $options: "i" } } };
    }
    return null;
  }

  private sort(sort: string) {
    // -1: DESC, 1 ASC
    switch (decodeURI(sort)) {
      case "nombre":
        return { $sort: { descrip: -1 } };
      case "precio más bajo":
        return { $sort: { valor: 1 } };
      default:
        return null;
    }
  }
}
