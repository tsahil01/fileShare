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
    <div className="flex flex-col gap-0 items-center justify-around border-y-2 border-zinc-900 px-3 md:px-28 md:mt-36 mt-20">
        <CardDetails title="Step-1" content="/step1.gif" classValue="">
            <div className="">
            <span className="">Go to: </span>
            <span className="rounded bg-zinc-950 hover:underline hover:bg-zinc-900">
                <span className="text-white italic">ezfiles.vercel.app/ </span>
                <span className="text-white italic font-bold">anyString</span>
            </span>
            </div>
        </CardDetails>

        <CardDetails title="Step-2" content="/step1.gif" classValue="">
            <div className="">
            <span className="">Upload your file </span>
            </div>
        </CardDetails>
        </div>
    </>
}

function CardDetails({title, content, footer, classValue, children }: {title?: string, content?: string, footer?: string, classValue?: string, children: React.ReactNode}){
    return <>
    <Card className={`w-full rounded-none border-zinc-900 border-0 border-x-2 border-b-2 pt-3 ${classValue}`}>
        <CardHeader className="p-3">
            <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-700">{title}</CardTitle>
            <CardDescription className="text-sm text-zinc-500">{children}</CardDescription>
        </CardHeader>

        <CardContent className="p-2 border-t-2 border-zinc-900 flex justify-center">
            <img className="" src={content} alt="img" />
        </CardContent>
    </Card>
    </>
}