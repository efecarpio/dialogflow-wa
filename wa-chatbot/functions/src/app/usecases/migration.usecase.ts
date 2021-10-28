/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { Result } from "../../core/domain";
/* import { DatabaseService } from "../../core/services";
@inject(TYPES_SERVICES.DatabaseService)
private readonly database: DatabaseService,*/
import { TYPES_REPOSITORIES } from "../../core/types";
import {
  // ArticuloRepository,
  StockRepository,
} from "../../infra/mongoose/repository";
/* import {
  Articulo,
  Stock,
} from "./../../infra/typeorm/entity";*/

@injectable()
export class MigrationUseCase {
  constructor(
    /* @inject(TYPES_REPOSITORIES.ArticuloRepository)
    private readonly repository: ArticuloRepository,*/
    @inject(TYPES_REPOSITORIES.StockRepository)
    private readonly repositoryStock: StockRepository
  ) {}

  async execute(): Promise<Result<boolean>> {
    try {
      /* const articuloRepo = await this.database
          .getRepository(ArticuloRepository);
      const stockRepo = await this.database
          .getRepository(StockRepository);*/

      /* const articulos: any[] = [
        {
          "codart": 1,
          "uniart": 0,
          "descrip": "CODIGO MERCADERIA - PRUEBA",
          "valor": 0,
          "resto": 1,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 1,
          "codprecan": "CJ",
          "codpreres": "",
          "factor": 0,
        },
        {
          "codart": 462,
          "uniart": 1,
          "descrip": "ECCO CEBADA 58GR*48UN",
          "valor": 0.058,
          "resto": 48,
          "unipaq": 2,
          "unidmin": 0,
          "peso": 0.06,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 470,
          "uniart": 1,
          "descrip": "SEMOLA MOLITALIA 20UN*200GR",
          "valor": 0.2,
          "resto": 20,
          "unipaq": 0,
          "unidmin": 20,
          "peso": 4,
          "codprecan": "PQ",
          "codpreres": "UN",
          "factor": 20,
        },
        {
          "codart": 471,
          "uniart": 1,
          "descrip": "ALACENA MAYON 12UN*475GR",
          "valor": 0.5,
          "resto": 12,
          "unipaq": 0.5,
          "unidmin": 0,
          "peso": 6,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 481,
          "uniart": 1,
          "descrip": "3 OSITO AV/ MACA 12UN*170GR",
          "valor": 0.17,
          "resto": 12,
          "unipaq": 0.5,
          "unidmin": 0,
          "peso": 2.04,
          "codprecan": "PQ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 486,
          "uniart": 1,
          "descrip": "PRIMOR ACEIT.VEGETALCLASI.1LT*12BOT",
          "valor": 1,
          "resto": 12,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 12,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 488,
          "uniart": 1,
          "descrip": "BOLIVAR DET.AV.FLORAL360GR*30UN",
          "valor": 0.36,
          "resto": 30,
          "unipaq": 1.25,
          "unidmin": 0,
          "peso": 10.8,
          "codprecan": "PQ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 489,
          "uniart": 1,
          "descrip": "IDEAL ACEITE 1LT*12BOT",
          "valor": 1,
          "resto": 12,
          "unipaq": 0.5,
          "unidmin": 0,
          "peso": 12,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 491,
          "uniart": 1,
          "descrip": "PRIMOR PREMIUM VEGETAL1LT*12BOT",
          "valor": 1,
          "resto": 12,
          "unipaq": 0.5,
          "unidmin": 0,
          "peso": 12,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 515,
          "uniart": 1,
          "descrip": "FANNY MERM SCH FRS 6DP*12U*100GR",
          "valor": 0.1,
          "resto": 6,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 7.2,
          "codprecan": "CJ",
          "codpreres": "DS",
          "factor": 0,
        },
        {
          "codart": 539,
          "uniart": 1,
          "descrip": "POMAROLA SALS/TOM 24UN*160GR",
          "valor": 0.16,
          "resto": 24,
          "unipaq": 0,
          "unidmin": 6,
          "peso": 3.84,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 545,
          "uniart": 1,
          "descrip": "FANNY MERM DOY PACK 8UN*800GR",
          "valor": 0.8,
          "resto": 8,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 6.4,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 550,
          "uniart": 1,
          "descrip": "FRUNA BLOCKS 12DP*20U*25GR",
          "valor": 0.5,
          "resto": 12,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 6,
          "codprecan": "CJ",
          "codpreres": "DS",
          "factor": 0,
        },
        {
          "codart": 551,
          "uniart": 1,
          "descrip": "GLORIA LCH.FRSC.TETRA.UHTNTR.1L*12UN",
          "valor": 1,
          "resto": 12,
          "unipaq": 0.5,
          "unidmin": 0,
          "peso": 12,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 552,
          "uniart": 1,
          "descrip": "GLORIA LCH.FRSC.TETRA.UHTLIGHT1L*12UN",
          "valor": 1,
          "resto": 12,
          "unipaq": 0.5,
          "unidmin": 0,
          "peso": 12,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 560,
          "uniart": 1,
          "descrip": "GLORIA LCH.LIGHT 1CJ*24UN*400GR",
          "valor": 1,
          "resto": 24,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 0.4,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 564,
          "uniart": 1,
          "descrip": "3 OSITO AV/ KIWICH 12UN*170GR",
          "valor": 0.17,
          "resto": 12,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 2.04,
          "codprecan": "PQ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 566,
          "uniart": 1,
          "descrip": "FRUGOS TETRAPACK  1.5 LT X 8UN",
          "valor": 1.5,
          "resto": 8,
          "unipaq": 0,
          "unidmin": 0,
          "peso": 12,
          "codprecan": "CJ",
          "codpreres": "UN",
          "factor": 0,
        },
        {
          "codart": 568,
          "uniart": 1,
          "descrip": "INKA KOLA GASEOSA1.5LT*6UNID",
          "valor": 1.5,
          "resto": 6,
          "unipaq": 0.25,
          "unidmin": 0,
          "peso": 9,
          "codprecan": "PQ",
          "codpreres": "UN",
          "factor": 0,
        },
      ]; */
      const stock: any[] = [
        {
          "articulo": {
            "codart": 470,
            "descrip": "SEMOLA MOLITALIA 20UN*200GR",
            "resto": 20,
            "peso": 4,
            "valor": 0.2,
          },
          "stock": 59,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 471,
            "descrip": "ALACENA MAYON 12UN*475GR",
            "resto": 12,
            "peso": 6,
            "valor": 0.5,
          },
          "stock": 141.694,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 481,
            "descrip": "3 OSITO AV/ MACA 12UN*170GR",
            "resto": 12,
            "peso": 2.04,
            "valor": 0.17,
          },
          "stock": 351,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 515,
            "descrip": "FANNY MERM SCH FRS 6DP*12U*100GR",
            "resto": 6,
            "peso": 7.2,
            "valor": 0.1,
          },
          "stock": 0.125,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 539,
            "descrip": "POMAROLA SALS/TOM 24UN*160GR",
            "resto": 24,
            "peso": 3.84,
            "valor": 0.16,
          },
          "stock": 470.001,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 545,
            "descrip": "FANNY MERM DOY PACK 8UN*800GR",
            "resto": 8,
            "peso": 6.4,
            "valor": 0.8,
          },
          "stock": 82.625,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 550,
            "descrip": "FRUNA BLOCKS 12DP*20U*25GR",
            "resto": 12,
            "peso": 6,
            "valor": 0.5,
          },
          "stock": 55.674,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 564,
            "descrip": "3 OSITO AV/ KIWICH 12UN*170GR",
            "resto": 12,
            "peso": 2.04,
            "valor": 0.17,
          },
          "stock": 0.003,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 566,
            "descrip": "FRUGOS TETRAPACK  1.5 LT X 8UN",
            "resto": 8,
            "peso": 12,
            "valor": 1.5,
          },
          "stock": 324,
          "fecha": "2/29/20",
        },
        /* {
          "articulo": {
            "codart": 609,
            "descrip": "COCOA WINTERS 12DSP*50UN*11GR",
            "resto": 12,
            "peso": 6.6,
          },
          "stock": 0.06,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 614,
            "descrip": "COCOA WINTERS 30UN*160GR",
            "resto": 30,
            "peso": 4.8,
          },
          "stock": 0.03,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 655,
            "descrip": "3 OSITO AV/ CLASS 12UN*220GR",
            "resto": 12,
            "peso": 2.64,
          },
          "stock": 10.583,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 669,
            "descrip": "COCOA WINTERS 60UN*45GR",
            "resto": 60,
            "peso": 2.7,
          },
          "stock": 0.1,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 710,
            "descrip": "MILO ACTIGEN-DOYPAK 200G*48UN",
            "resto": 48,
            "peso": 9.6,
          },
          "stock": 71.81,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 728,
            "descrip": "FANNY MERM VASO FRS 12UN*310GR",
            "resto": 12,
            "peso": 3.72,
          },
          "stock": 3.334,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 756,
            "descrip": "FANNY MERM BARRIL FRS 6UN*1KG",
            "resto": 6,
            "peso": 6,
          },
          "stock": 53.993,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 787,
            "descrip": "HENO D PRAVI /AMRILLO 36UN*150GR",
            "resto": 36,
            "peso": 5.4,
          },
          "stock": 0.055,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 853,
            "descrip": "TRIKIS C/CHISPAS CHOC X10SIXPAX32G",
            "resto": 10,
            "peso": 1.92,
          },
          "stock": 29.8,
          "fecha": "2/29/20",
        },
        {
          "articulo": {
            "codart": 865,
            "descrip": "DON VICTORI/FETTUCCINI 12UN*1KG",
            "resto": 12,
            "peso": 12,
          },
          "stock": 0,
          "fecha": "2/29/20",
        },*/
      ];
      // await articuloRepo.save(articulos);
      // await stockRepo.save(stock);
      // await this.repository.saveMany(articulos);
      await this.repositoryStock.saveMany(stock);
      return Result.ok<boolean>(true);
    } catch (e) {
      const obj = "Migration: " + e.message;
      return Result.fail<any>(obj);
    }
  }
}
