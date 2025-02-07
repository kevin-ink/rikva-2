import ScrollCanvas from "@/components/scroll-canvas";

export default function Home() {
  return (
    <>
      <ScrollCanvas frames={252} />
      <div className="h-screen w-full"></div>
    </>
  );
}
