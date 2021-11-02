import * as express from "express";

export class HelpersBase {
  private _req: express.Request;
  private _bodyUTF= "";
  private _bodyFormData: any;

  constructor(req: express.Request) {
    this._req = req;
  }

  requestBody(field: string): any {
    /* this._req.on("data", data => {
      // Decode and parse data
      const parsedData = decodeURIComponent(data).split("&")

      for (let data of parsedData) {
        const decodedData = decodeURIComponent(data.replace(/\+/g, "%20"));
        const [key, value] = decodedData.split("=");
        // Accumulate submitted
        // data in an object
        // const formData[key] = value
        const formData = key;
      }
    });
    this._req.emit("data");*/
    const body = this._req.body;
    const bodyString = JSON.stringify(body);
    const bufferOriginal = Buffer.from(JSON.parse(bodyString).data);
    this._bodyUTF = bufferOriginal.toString("utf8");
    this._bodyFormData = this._getBoundary(field);
    return this._bodyFormData;
  }

  requestId(): string | number {
    return this._bodyFormData.data.id;
  }

  requestUserLogin(): any {
    return {
      user: this._bodyFormData.username,
      password: this._bodyFormData.password,
    };
  }

  private _getBoundary(field: string) {
    const content = this._req.header("content-type");
    if (content && content.indexOf("boundary=") > -1) {
      const parts = content.split("boundary=");
      const boundary: string = (parts!==undefined) ? parts[1] : "";
      const splitBody = this._bodyUTF.split(boundary);
      const jsonBody = splitBody[1].split("name=\"request\"");
      const k = (jsonBody !== undefined) ?
        jsonBody[1].replace("\r\n\r\n{", "{").replace("}\r\n--", "}") :
        "{}";
      return JSON.parse(k);
    }
    return undefined;
  }
}
