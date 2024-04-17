// Components
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <div className="w-full h-[92vh] flex flex-col justify-center items-center gap-8">
        {/* Custom symbols */}
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="rounded-full text-2xl">
            🎨
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-2xl">
            💻
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-2xl">
            🎬
          </Button>
        </div>
        {/* Headline */}
        <div className="py-16 px-32">
          <h1 className="text-7xl font-bold text-center">Creative Developer</h1>
        </div>

        {/* Service */}
        <ul className="w-full flex justify-center items-center gap-4 list-none">
          <li className="italic">creative</li>
          <li className="underline">developer</li>
          <li className="font-bold">design</li>
        </ul>
      </div>

      <div className="h-screen flex flex-col gap-4 justify-center items-center">
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">i</Button>
        <Button variant="destructive">Cancel</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </>
  );
}

export default Home;
