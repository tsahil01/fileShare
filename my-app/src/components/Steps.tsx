import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import React from "react"
  

export default function Steps() {
    return <>
    <div className="flex flex-col gap-0 items-center justify-around border-y-2 border-zinc-800 px-3 md:px-28 md:mt-36 mt-20">
        <CardDetails title="Step-1" content="/step1.gif" classValue="">
            <div className="">
                <span className="rounded flex flex-col gap-1">
                    <span className="hover:underline">
                        <span className="">Go to: </span>
                        <span className="text-white italic">ezfiles.vercel.app/ </span>
                        <span className="text-white italic font-bold">yourKeyword</span> <br/>
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Replace <span className="text-white"> yourKeyword </span> with your custom word.</span>
                </span>
            </div>
        </CardDetails>

        <CardDetails title="Step-2" content="/step2.gif" classValue="">
            <div className="">
            <span className="">Upload your file </span>
            </div>
        </CardDetails>

        <CardDetails title="Step-3" content="/step3.gif" classValue="border-b-0">
            <div className="">
            <span className="">Access your files for 24 hrs! </span>
            <span className="">Share the link with anyone with! </span>
            </div>
        </CardDetails>
        </div>
    </>
}

function CardDetails({title, content, footer, classValue, children }: {title?: string, content?: string, footer?: string, classValue?: string, children: React.ReactNode}){
    return <>
    <Card className={`w-full rounded-none border-zinc-800 border-0 border-x-2 border-b-2 pt-3 ${classValue}`}>
        <CardHeader className="p-3">
            <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-700">{title}</CardTitle>
            <CardDescription className="text-sm text-zinc-500">{children}</CardDescription>
        </CardHeader>

        <CardContent className="p-2 border-t-2 border-zinc-900 flex justify-center">
            <img className="border-2 border-zinc-700 rounded-md" src={content} alt="img" />
        </CardContent>
    </Card>
    </>
}