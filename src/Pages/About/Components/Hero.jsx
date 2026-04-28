import aboutHero from "../../../assets/About hero.jpg";

export default function Hero() {
  return (
    <div className="relative h-[360px] max-[1024px]:h-[340px] max-[768px]:h-[320px] max-[413px]:h-[300px]">
      <img src={aboutHero} alt="hero" className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end pb-[50px] px-4 sm:px-10 md:px-[100px] max-[413px]:pb-[40px] max-[413px]:px-[22px]">
        <p className="font-mont font-bold text-[14px] leading-[21px] tracking-[2.24px] align-middle uppercase text-white/60 mb-4 max-[413px]:mb-3">
          HOME / ABOUT US
        </p>
        <h1 className="
  font-mont font-semibold 
  text-[54px] leading-[62px] 
  text-white max-w-full md:max-w-[650px]

  max-[1024px]:text-[48px] max-[1024px]:leading-[56px]
  max-[768px]:text-[44px] max-[768px]:leading-[52px]

  max-[413px]:text-[28px] 
  max-[413px]:leading-[28px] 
  max-[413px]:max-w-[340px]
">
          <span className="max-[413px]:whitespace-nowrap">Spangles Webx is a </span>
          <br className="hidden max-[413px]:block" />
          tech-driven company
        </h1>
      </div>
    </div>
  );
}
