export default function VideoPlayer() {
    return (
        <>
            <div className="border border-zinc-800 rounded-lg md:p-2 p-1 bg-zinc-800 md:max-w-6xl mx-auto md:my-20 my-10">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="rounded-xl w-full h-full"
                        src="https://www.youtube.com/embed/awpONSt1i7s?si=uu4nqZRQgKGAONVB&amp;controls=1"
                        title="Video Player"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    );
}
