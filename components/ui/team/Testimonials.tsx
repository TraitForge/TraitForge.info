import { TestimonialItem } from "./TestimonialItem";

export const Testimonials = () => {
  return (
    <section className="relative pb-[150px] md:pb-[250px]">
      <div className="flex flex-col justify-center items-center p-2 z-10">
        <h3 className="text-[32px] mb-24 text-center font-bold font-monserat">
          What the Developers & Players Say
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-[50px] container lg:w-[80%] 2xl:w-[70%] mx-auto">
          <TestimonialItem
            description={` <p>
            TraitForge is an absolutely insane NFT strategy game that
            rewards real players instead of just rich whales.
          </p>
          <p class="pt-5">
            Because there are countless gameplay strategies available to
            all players, there are always ways for people to win, over and
            over again.
          </p>`}
            developer="- developer ManPeach.0x"
          />
          <TestimonialItem
            description={`<p>
              The game is dynamic to the point of being totally chaotic.
            </p>
            <p class="pt-5">
              We wanted to find a way to bring people together online
              through creative NFT art, strategic gameplay, and a real sense
              of humor and fun.
            </p>`}
            developer="- developer Journey"
          />
          <TestimonialItem
            description={`<p>
              For me, the most interesting thing about this game, is that it
              has a strong sense of fair play.
            </p>
            <p class="pt-5">
              The gameplay is always changing; it’ll be very interesting to
              see how people find all the different successful ways through
              the game.
            </p>`}
            developer="- player Llewyn Bonisagus"
          />
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(53,255,231,.2)_0%,_rgba(53,255,231,0)_70%)] absolute bottom-0 translate-y-1/4 right-10 w-[700px] h-[700px] z-0"></div>
    </section>
  );
};
