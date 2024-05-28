"use client";

import { checkSubdirectory, dbPush } from "@/actions/db";
import { Skeleton } from "@/components/ui/skeleton";
import { UploadDropzone } from "@/utils/uploadthing";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page({ params }: { params: { filename: string } }) {
    const [url, setUrl] = useState("");
    const [isImg, setIsImg] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function init() {
            try {
                let subDir = await checkSubdirectory(params.filename);
                console.log("SubDir: ", subDir);
                if (subDir){
                    if(subDir.includes(".png") || subDir.includes(".jpg") || subDir.includes(".jpeg") || subDir.includes(".gif") || subDir.includes(".webp")){
                        setIsImg(true);
                    }
                    toast.success("File Found", { duration: 2000, style: { color: "black", backgroundColor: "white", border: "0px" } });
                }
                setUrl(subDir);
            } catch (error) {
                toast.error("Error fetching data", { duration: 2000, style: { color: "black", backgroundColor: "white", border: "0px" } });
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        }
        init();
        return () => {
            console.log("Unmounting");
        }
    }, [params.filename]);

    return (
        <main className="bg-zinc-950 text-white min-h-screen px-2 overflow-auto">
            <div className="md:max-w-screen-2xl mx-auto sm:mx-12 text-white border-x-2 border-zinc-900 min-h-screen flex justify-center items-center">
                <div className="flex flex-col w-full justify-center items-center gap-5 p-5 h-screen">
                    {loading ? (
                        <>
                            <div className="flex flex-col space-y-3 mb-4">
                                <Skeleton className="h-[125px] w-[250px] rounded-xl bg-zinc-900" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px] bg-zinc-900" />
                                    <Skeleton className="h-4 w-[200px] bg-zinc-900" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3 mb-4">
                                <Skeleton className="h-[125px] w-[250px] rounded-xl bg-zinc-900" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px] bg-zinc-900" />
                                    <Skeleton className="h-4 w-[200px] bg-zinc-900" />
                                </div>
                            </div>

                        </>
                    ) : url ? (
                        <div className="w-full h-full flex justify-center items-center mx-auto rounded-xl p-2">
                            {isImg ? (
                                <img src={url} className="rounded-lg contain w-full h-full object-contain border border-zinc-900" alt="File Preview" />
                            ) : (
                                <iframe src={url} className="rounded-lg w-full h-full max-w-full max-h-full" title="File Preview"></iframe>
                            )}
                        </div>
                    ) : (
                        <>
                            <UploadDropzone
                                className="mb-4 border-4 border-zinc-900 rounded border-solid bg-zinc-950 text-white p-4 w-auto h-auto overflow-auto"
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    console.log("Files: ", res);
                                    setUrl(res[0].url);
                                    dbPush(res[0], params.filename);
                                    toast.success("File Uploaded", { duration: 2000, style: { color: "black", backgroundColor: "white", border: "0px" } });
                                }}
                                onUploadError={(error: Error) => {
                                    toast.error("Error Uploading File", { duration: 2000, position: "top-right", style: { color: "black", backgroundColor: "white", border: "0px" } });
                                }}
                            />
                            <UploadDropzone
                                className="mb-4 border-4 border-zinc-900 rounded border-solid bg-zinc-950 text-white p-4 w-auto h-auto overflow-auto"
                                endpoint="pdfUploader"
                                onClientUploadComplete={(res) => {
                                    console.log("Files: ", res);
                                    setUrl(res[0].url);
                                    dbPush(res[0], params.filename);
                                    toast.success("File Uploaded", { duration: 2000, style: { color: "black", backgroundColor: "white", border: "0px" } });
                                }}
                                onUploadError={(error: Error) => {
                                    toast.error("Error Uploading File", { duration: 2000, position: "top-right", style: { color: "black", backgroundColor: "white", border: "0px" } });
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
