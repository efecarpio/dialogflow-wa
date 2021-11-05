/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { injectable } from "inversify";
import {
  Connection,
  createConnection,
  getConnection,
  ObjectType,
} from "typeorm";
import { config } from "../../infra/config";


@injectable()
export class DatabaseService {
  private static connection: Connection;

  public async getConnection(): Promise<Connection> {
    if (DatabaseService.connection instanceof Connection) {
      return DatabaseService.connection;
    }

    try {
      DatabaseService.connection = getConnection(config.name);
      return DatabaseService.connection;
    } catch (e) {
      DatabaseService.connection = await createConnection(config);
      return DatabaseService.connection;
    }
  }

  public async getRepository<T>(repository: ObjectType<T>) {
    const connection = await this.getConnection();
    return await connection.getCustomRepository<T>(repository);
  }
}
