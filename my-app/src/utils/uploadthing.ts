import { ourFileRouter } from "@/app/api/uploadthing/core";
import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
   
  export const UploadButton = generateUploadButton<ourFileRouter>();
  export const UploadDropzone = generateUploadDropzone<ourFileRouter>();