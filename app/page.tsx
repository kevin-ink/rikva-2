import Navbar from "@/components/navbar";
import ScrollCanvas from "@/components/scroll-canvas";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ScrollCanvas frames={252} />
      <div className="h-screen w-full">Introduction</div>
    </div>
  );
}
