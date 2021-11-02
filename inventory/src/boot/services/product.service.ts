import http from "./http-common";

class ProductService {
  route: string;

  constructor() {
    this.route = "/product";
  }

  getAll() {
    return http.get(this.route);
  }

  get(id) {
    return http.get(`${this.route}/${id}`);
  }

  create(data) {
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

export default new ProductService();
