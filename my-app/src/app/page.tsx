import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black text-white min-h-screen">
        <div className="md:max-w-screen-2xl md:pt-36 pt-20 sm:pb-20 md:pb-10 mx-auto sm:mx-12 text-white border-x-2 border-zinc-900 min-h-screen">
        {/* <hr className="h-px border-0 bg-gray-800 mb-1"/> */}
        <Header />
        {/* <hr className="h-px border-0 bg-gray-800 mt-1"/> */}
        <VideoPlayer/>
      </div>
    </main>
  );
}
