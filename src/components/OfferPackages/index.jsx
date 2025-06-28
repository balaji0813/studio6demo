import { TitleHeading } from "../TitleHeader";
import { offerPackages } from "../../constants/offerPackagesConstant";
import { PricingBackground } from "../../svg/svg";

const OfferPackages = () => {
  return (
    <>
      <section
        className="offer-packages lg:py-16 md:py-12 py-8"
        id="offer-packages"
      >
        <div className="bg-black">
          <div className="container">
            <div className="text-center mb-10">
              <TitleHeading className="text-center text-white mb-4 uppercase">
                Offer Packages
              </TitleHeading>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {offerPackages.map((packageItem, index) => (
                <div key={index}>
                  <div className="bg-white relative">
                    <div className="relative xl:h-[500px] lg:h-[420px] md:h-[340px] sm:[280px] h-[200px]">
                      <img
                        src={packageItem.src}
                        alt={packageItem.name}
                        className="w-full h-full object-cover mb-4"
                      />
                      {/* <span className="bg-[#E87070] p-2 absolute top-5 left-5 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      -30%
                    </span> */}
                    </div>

                    <div className="px-6 py-4">
                      {/* <div className="uppercase lg:text-lg md:text-base text-sm text-black">
                      offer
                    </div> */}
                      <h3 className="lg:text-xl md:text-lg text-base font-bold text-black mb-2 uppercase">
                        {packageItem.name}
                      </h3>
                      <p className="lg:text-base md:text-sm text-xs text-gray-600 mb-2">
                        {packageItem.type}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[#A36E2A] font-bold lg:text-lg md:text-base text-sm">
                          {packageItem.newPrice}
                        </span>
                        {/* <span className="text-gray-500 line-through lg:text-lg md:text-base text-sm">
                        {packageItem.oldPrice}
                      </span> */}
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-[129px] h-[108px]">
                      <PricingBackground />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferPackages;
