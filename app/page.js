import Homepage from "@/sections/Homepage";
import Expertise from "@/sections/Expertise";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9 sm:p-5">
      <h1>HELLO WORLD!</h1>
      <Homepage />
      <Expertise />
      <Projects />
    </main>
  );
}
