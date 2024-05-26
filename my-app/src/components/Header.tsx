export default function Header() {
    return (
        <>
        <div className="flex flex-col items-center justify-center border-y-2 border-zinc-900 py-2">
            <h1 className="font-bold md:text-6xl text-3xl text-center px-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-950">Effortlessly </span>  
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-white to-gray-400">Share Your Files </span> 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-950">Anywhere!</span> 
            </h1>    
            <div className="text-xs md:text-xl text-zinc-400 text-center max-w-sm md:max-w-2xl mt-4 md:px-4 px-7">Simplify your file sharing experience with our intuitive platform. Seamlessly upload, share, and access your files anytime, anywhere. Start sharing smarter today!</div>
        </div>
        </>
       );
    }
