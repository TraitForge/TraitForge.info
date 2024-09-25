import Link from "next/link";

export const StrategySection = () => {
  return (
    <section className={`flex  justify-center items-center h-[80vh] w-full`}>
      <div className="w-6/12 mx-auto flex flex-col items-center">
        <h3
          className="text-[64px] mb-4 from-[#057977] to-[#0ADFDB] bg-gradient-to-r text-transparent bg-clip-text font-race text-center"
        >
          Game Strategy
        </h3>
        <p className="text-center font-monserat text-2xl">
          Whether you're into active market trading, seeking quick returns with
          Mint and Nuke, or building a powerful lineage through strategic
          long-term forging, there's a path for every player to succeed.
        </p>
        <Link
          href={"/"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-6 bg-gradient-to-r from-[#057977] to-[#0ADFDB] mt-12 rounded-full font-race inline-block text-center"
        >
          Play Now (test-net)
        </Link>
      </div>
    </section>
  );
};
