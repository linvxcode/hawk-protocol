import Hero from "@/common/module/Hero/Hero";
import Service from "@/common/module/Service/Service";
import News from "@/common/module/News/News";
import Subscribe from "@/common/module/Subscribe/Subscribe";
import SliderTechLeader from "@/common/module/Hero/components/SliderTechLeader";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
      <Hero />
      <div className="w-full lg:mt-10 py-20 max-w-[1500px] px-5">
        <SliderTechLeader />
      </div>
      <Service />
      <News />
      <Subscribe />
    </div>
  );
}
