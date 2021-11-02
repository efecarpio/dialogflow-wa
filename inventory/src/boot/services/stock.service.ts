import http from "./http-common";

class StockService {
  route: string;

  constructor() {
    this.route = "/stock";
  }

  findAll() {
    return http.get(this.route);
  }

  findById(id) {
    return http.get(`${this.route}/${id}`);
  }

  save(data) {
    return http.post(this.route, data);
  }

  update(id, data) {
    return http.put(`${this.route}/${id}`, data);
  }

  delete(id) {
    return http.delete(`${this.route}/${id}`);
  }

  deleteAll() {
    return http.delete(`${this.route}`);
  }
}

export default new StockService();
