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
        <main className="flex flex-col w-full bg-zinc-950 text-white min-h-screen px-2 overflow-auto">
            <div className="md:max-w-screen-2xl md:pt-36 pt-20 sm:pb-20 md:pb-10 mx-auto sm:mx-12 text-white border-x-2 border-zinc-900 min-h-screen">
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
            </div>
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