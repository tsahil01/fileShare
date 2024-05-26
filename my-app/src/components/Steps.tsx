import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Steps() {
    return <>
    <div className="flex sm:flex-col lg:flex-row gap-4 items-center justify-around border-y-2 border-zinc-900 p-3 mt-9">
        <CardDetails title="Step-1" description="Go to any /" content="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww"/>
        <CardDetails title="Step-2" description="Go to any /" content="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww"/>
        <CardDetails title="Step-3" description="Go to any /" content="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww"/>
    </div>
    </>
}

function CardDetails({title, description, content, footer, classValue}: {title?: string, description?: string, content?: string, footer?: string, classValue?: string}){
    return <>
    <Card className={`rounded-none border-zinc-900 ${classValue}`}>
        <CardHeader className="p-3">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-sm text-zinc-500">{description}</CardDescription>
        </CardHeader>

        <CardContent className="p-2 border border-t-2 border-zinc-900 flex justify-center">
            <img className="rounded w-96" src={content} alt="img" />
        </CardContent>
    </Card>
    </>
}