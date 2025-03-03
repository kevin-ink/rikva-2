export default function Bib() {
  return (
    <div className="h-screen w-screen flex flex-row text-xl font-maven-pro flex-wrap pb-10">
      <div className="flex flex-col flex-1 items-center pt-16">
        <h1>Works Cited</h1>
        <iframe
          src="https://drive.google.com/file/d/1V_B2X9PQXNPNIGFARSWaP0g6eIkIeytT/preview"
          allow="autoplay"
          className="border-black border-2 rounded"
          width="850"
          height="100%"
        />
      </div>
      <div className="flex flex-col flex-1 items-center pt-16">
        <h1>Annotated Bibliography</h1>
        <iframe
          width="850"
          height="100%"
          src="https://drive.google.com/file/d/1FPTQtoV23D9RgIAY-xwD81TzIG-FuYzx/preview"
          allow="autoplay"
          className="border-black border-2 rounded"
        />
      </div>
    </div>
  );
}
