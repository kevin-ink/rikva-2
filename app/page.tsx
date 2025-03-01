import ScrollCanvas from "@/components/scroll-canvas";

export default function Home() {
  return (
    <>
      <ScrollCanvas frames={252} />
      <div className="h-screen w-full flex flex-col items-center p-32 font-maven-pro">
        <p className="text-4xl text-center">
          Our narrative details some of the more significant consequences like
          discrimination and hazardous pollution. We focused on analyzing
          datasets gathered from various sources dedicated to tracking air
          traffic, air pollution, air noise complaints, and air travel
          discrimination. These datasets reveal two important issues surrounding
          air travel, which is reflected by the following questions:
        </p>
      </div>
    </>
  );
}
