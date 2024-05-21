export default function Page( params: { params: {filename: string } } ){
    return <div>Filename: {params.params.filename}</div>
}