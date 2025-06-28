import { TitleHeading } from "../TitleHeader";
import { workSteps } from "../../constants/howItWorksConstant";
import dottedwave from "../../assets/dottedwave.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works lg:py-16 md:py-12 py-8" id="how-it-works">
      <div className="bg-black">
        <div className="container relative">
          <div className="text-center mb-16">
            <TitleHeading className="text-center text-primary mb-4">
              How it works
            </TitleHeading>
            <p className="mb-5 md:text-base text-sm text-gray-400 font-light">
              Mobile banking differs from mobile payments, which involves the
              use of <br /> a mobile device
            </p>
          </div>

          <div className="relative xl:h-[450px] lg:h-[500px] h-full">
            <div className="relative h-full flex flex-row lg:flex-nowrap flex-wrap items-center justify-between z-10">
              {workSteps.map((step, s) => {
                return (
                  <div
                    key={s}
                    className={`relative ${step.className} lg:w-1/5 md:w-1/3`}
                  >
                    <div className="flex flex-col items-center">
                      {step.src ? (
                        // <img
                        //   src={step.src}
                        //   alt={step.title}
                        //   className="w-8 h-8"
                        // />
                        <div className="bg-black text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md border-2 border-primary">
                          <>{step.src}</>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                          <span className="text-white text-xl">{s + 1}</span>
                        </div>
                      )}
                      <h3 className="lg:text-lg md:text-base text-sm font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="lg:text-lg md:text-base text-sm text-white font-light text-center">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:block hidden absolute top-0 left-0 right-0 w-4/5 m-auto z-1">
              {/* <img src={dottedwave} className="w-full" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  d="M0,320L48,309.3C96,299,192,277,288,224C384,171,480,85,576,85.3C672,85,768,171,864,192C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-dasharray="10"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
