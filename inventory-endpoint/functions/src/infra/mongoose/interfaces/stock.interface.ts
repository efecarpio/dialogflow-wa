export interface IArticuloStock {
  codart: number;
  descrip: string;
  resto: number;
  peso: number;
  valor: number;
}

export interface IStock {
  stock: number;
  fecha: string;
  articulo: IArticuloStock;
}
