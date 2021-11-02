/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as admin from "firebase-admin";

async function uploadFileToBucket(uploadData: any): Promise<any> {
  try {
    const bucket = admin.storage().bucket();

    return bucket.upload(uploadData.file, {
      destination: `exports/${uploadData.name}`,
      public: true,
      metadata: {
        metadata: {
          contentType: uploadData.type,
        },
      },
    }).then((result: any) => {
      const file = result[0];
      return file.getMetadata();
    }).then((results: any) => {
      const metadata = results[0];
      console.log("metadata=", metadata.mediaLink);
      return metadata.mediaLink;
    }).catch((error: any) => {
      console.error(error);
    });
  } catch (err) {
    console.error("uploadFileToBucket", err);
  }
}

export default uploadFileToBucket;
