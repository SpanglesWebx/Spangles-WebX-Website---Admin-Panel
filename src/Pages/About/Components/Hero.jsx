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
  text-white w-full max-w-none

  max-[1024px]:text-[48px] max-[1024px]:leading-[56px]
  max-[768px]:text-[38px] max-[768px]:leading-[46px]

  max-[413px]:text-[24px] 
  max-[413px]:leading-[30px]
">
          About Spangles Webx
          <span className="block text-[0.75em] font-medium text-white/90 mt-1.5 max-[413px]:mt-1">
            — Where Ideas Become Digital Solutions
          </span>
        </h1>
      </div>
    </div>
  );
}
