import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import "reflect-metadata";
import express from "express";
import morgan = require("morgan");
import cors = require("cors");
import { container } from "./core/container";
import { InversifyExpressServer } from "inversify-express-utils";
import * as serviceAccount from "./firebase-config.json";
import { connect } from "./infra/mongoose/config";
import "./api/controllers";

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

admin.initializeApp({
  credential: admin.credential.cert(params),
  storageBucket: serviceAccount.storageBucket,
});

const server = new InversifyExpressServer(container);
server.setConfig((app1) => {
  app1.use(express.json());
  app1.use(express.urlencoded({ extended: true }));
  app1.use(cors({ origin: "*" }));
  app1.use(morgan("dev"));
});

connect();
/* container.get<DatabaseService>(TYPES_SERVICES.DatabaseService)
    .getConnection().then();*/

const main = server.build();
const app = express();

app.use("/", main);
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

exports.api = functions.https.onRequest(app);
