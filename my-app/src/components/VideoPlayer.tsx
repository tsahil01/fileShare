export default function VideoPlayer() {
    return (
        <>
        <div className="w-full border-y-2 border-zinc-900 md:my-20 my-10 py-2">
            <div className="md:max-w-4xl mx-auto px-3">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-full rounded"
                        src="https://www.youtube.com/embed/awpONSt1i7s?si=uu4nqZRQgKGAONVB&amp;controls=1"
                        title="Video Player"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        ></iframe>
                </div>
            </div>
        </div>
        </>
    );
}
