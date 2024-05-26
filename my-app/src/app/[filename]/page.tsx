"use client";

import { checkSubdirectory, dbPush } from "@/actions/db";
import { UploadDropzone } from "@/utils/uploadthing";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export default function Page({params}: {params: {filename: string}}) {
    const [url, setUrl] = useState("");

    useEffect(()=>{
        async function init(){
        let subDir = await checkSubdirectory(params.filename);
        if(subDir)
            toast.success("File Found", {duration: 2000, style: {color: "black", backgroundColor:"white", border:"0px"}});
        setUrl(subDir);
        }
        init();
        return () => {
            console.log("Unmounting");
        }
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-900 text-white">
            <h1 className="text-4xl font-bold">UploadThing Example</h1>
            {url && 
                <div className="w-full h-full flex flex-col justify-center mx-auto border">
                    <iframe src={url} className="h-full w-full" title="File Preview" />
                </div>}
            {!url && <>
            
        <UploadDropzone
            endpoint="imageUploader" 
            onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setUrl(res[0].url);
                dbPush(res[0], params.filename);
                toast.success("File Uploaded", {duration: 2000, style: {color: "black", backgroundColor:"white", border:"0px"}});
            }}
            onUploadError={(error: Error) => {
                // Do something with the error
                toast.error("Error Uploading File", {duration: 2000, position: "top-right", style: {color: "black", backgroundColor:"white", border:"0px"}});
            }}
            />
        <UploadDropzone
            endpoint="pdfUploader"
            onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setUrl(res[0].url);
                dbPush(res[0], params.filename);
                toast.success("File Uploaded", {duration: 2000, style: {color: "black", backgroundColor:"white", border:"0px"}});
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.\
                toast.error("Error Uploading File", {duration: 2000, position: "top-right", style: {color: "black", backgroundColor:"white", border:"0px"}});
            }}
            />
            </>
            }
        </main>
    );
}

async function deleteFile(url: string) {
    const del = await axios.delete("/api/uploadthing", {
        data: {
            url
        }
    });
    console.log(del.data);
}