import * as path from "path";
import * as os from "os";
import * as fs from "fs";

import * as admin from "firebase-admin";

async function exportToFile(orders: string): Promise<void> {
  try {
    const fileName = "orders.csv";
    const tempFilePath = path.join(os.tmpdir(), fileName);
    console.log({ tempFilePath });
    const content = "ticketid,productid,quantity,description,netPrice,phone";
    await fs.writeFileSync(tempFilePath, content + orders);

    const bucket = admin.storage().bucket();

    await bucket.upload(tempFilePath, {
      destination: `exports/${fileName}`,
      public: true,
    });
    /* const [metadata] = file.getMetadata();
    return metadata.mediaLink;*/
  } catch (err) {
    console.error("exportToFile", err);
  }
}

export default exportToFile;
