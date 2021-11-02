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
      const errorMessage = { code: 500, message: error };
      console.error(error);
      throw errorMessage;
    });
  } catch (err) {
    const errorMessage = { code: 500, message: err };
    console.error("uploadFileToBucket", err);
    throw errorMessage;
  }
}

export default uploadFileToBucket;
