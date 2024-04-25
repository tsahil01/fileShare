import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
   
  export const UploadButton = generateUploadButton({
    url: "http://localhost:35545/api/uploadthing",
  });
  export const UploadDropzone = generateUploadDropzone({
    url: "http://localhost:35545/api/uploadthing",
    });