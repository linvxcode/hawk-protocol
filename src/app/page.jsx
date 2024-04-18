import Hero from "@/common/module/Hero/Hero";
import Service from "@/common/module/Service/Service";
import News from "@/common/module/News/News";
import Subscribe from "@/common/module/Subscribe/Subscribe";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
    <Hero />
    <Service />
    <News />
    <Subscribe />
    </div>
  );
}
