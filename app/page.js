import Homepage from "@/sections/Homepage";
import Expertise from "@/sections/Expertise";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Homepage />
      <Expertise />
      <Projects />
    </main>
  );
}
