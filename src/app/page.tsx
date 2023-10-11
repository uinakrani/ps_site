import Image from "next/image";
import SimpleAnimation from "../component/SimpleAnimation";
import Header from "../component/Header";
import ScrollSmoother from "../component/ScrollSmoother";


export default function Home() {
  return (
    <main id="scrollsmoother-container">
      <Header />
      {/* <ScrollSmoother /> */}
      <SimpleAnimation />
    </main>
  );
}
