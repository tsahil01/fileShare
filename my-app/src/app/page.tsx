import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <main className="flex flex-col w-full border border-black bg-zinc-900 text-white min-h-screen">
        <div className="md:max-w-screen-2xl md:pt-36 pt-20 sm:pb-20 md:pb-10 mx-auto px-4 sm:px-12 text-white">
        <Header />
        <VideoPlayer/>
      </div>
    </main>
  );
}
