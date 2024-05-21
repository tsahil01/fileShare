import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-5 p-4">
      <Button variant={"destructive"} size={"lg"}>Hello</Button>
    </div>
  );
}
