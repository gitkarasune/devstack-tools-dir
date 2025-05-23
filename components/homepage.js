import { ContainerTextFlip } from "./ui/containertextflip";

export default function Homepage() {
  return (
    <>
      <section className="p-7 mb-[210px]">
        <p className="text-lg lg:text-xl font-extralight italic mb-8 flex justify-center items-center">
            A collection of tools to help you build your next project
          </p>
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl lg:text-2xl font-bold mb-4">
            Discover The Tools for
          </p>

          <ContainerTextFlip
            words={[
              "Developers",
              "Designers",
              "CopyWriters",
              "Startup Founders",
            ]}
            className="text-6xl lg:text-8xl mb-14"
            interval={3000}
            // textClassName="text-blue-800"
            animationDuration={700}
          />

          <button className="bg-blue-800 px-12 py-3 lg:px-14 lg:py-4 rounded-md text-lg lg:text-xl font-medium flex justify-center items-center">
            Get Started
          </button>
        </div>

      </section>

      <section className="bg-blue-900 h-72 mb-48">
        <div className="flex justify-center items-center gap-10 h-[284px]">
          <div className="text-xl lg:text-4xl bg-[#fff] text-black rounded-full py-5 lg:px-7 text-nowrap">
            Developers
          </div>
          <div className="text-xl lg:text-4xl bg-[#fff] text-black rounded-full py-5 lg:px-7 text-nowrap">
            Designers
          </div>
          <div className="text-xl lg:text-4xl bg-[#fff] text-black rounded-full py-5 lg:px-7 text-nowrap">
            Startup Founders
          </div>
        </div>
      </section>
    </>
  );
}
