import React from "react";

const Services = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#FFC0B4] pb-4 z-[-1]">
        <div className="flex flex-col bg-[#FFC0B4] pb-6">
          <h1 className="text-4xl text-center p-[30px] text-[#02313C] mt-[5rem]">
            Services and Pricing
          </h1>
          <div className="flex flex-col w-full text-[#02313C] md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col text-center w-[320px] h-[440px] bg-[#faf0e6] rounded-t-lg rounded-b-lg shadow-2xl">
              <div className="h-[70px] w-full bg-[#02313C] rounded-t-lg">
                <h2 className="text-[22px] text-[#faf0e6] leading-[70px] align-middle">
                  Basic Logo Design Package
                </h2>
              </div>
              <div className="h-full bg-[#faf0e6] flex flex-col justify-between rounded-b-lg">
                <p className="text-[20px] mb-[90px] mt-[15px]">INCLUDES</p>
                <p>1 Main logo</p>
                <p>1 Alternative logo</p>
                <p className="text-[30px] text-[#02313C] mt-[110px] mb-[15px]">
                  $400
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center w-[320px] h-[440px] bg-[#faf0e6] rounded-t-lg rounded-b-lg shadow-2xl">
              <div className="h-[70px] w-full bg-[#02313C] mb-3 rounded-t-lg">
                <h2 className="text-[22px] text-[#faf0e6] leading-[70px] align-middle">
                  Gold Logo Design Package
                </h2>
              </div>
              <div className="h-full bg-[#faf0e6] flex flex-col justify-between rounded-b-lg">
                <p className="text-[20px] mb-[40px]">INCLUDES</p>
                <p>1 Main Logo</p>
                <p>1 Alternative Logo</p>
                <p>
                  1 Marketing Material Design <br />
                  (Business cards, trifolds, stickers, post cards, etc..)
                </p>
                <p>1 Moodboard Design</p>
                <p>Social Media Cover Art</p>
                <p>Branding Design Assets</p>
                <p className="mt-10 mb-[15px] text-[30px] text-[#02313C]">
                  $750
                </p>
              </div>
            </div>
            <div className="flex flex-col text-center w-[320px] h-[440px] bg-[#faf0e6] rounded-t-lg rounded-b-lg shadow-2xl">
              <div className="h-[70px] w-full bg-[#02313C] mb-3 rounded-t-lg">
                <h2 className="text-[22px] text-[#faf0e6] leading-[70px] align-middle">
                  Platinum Logo Design Package
                </h2>
              </div>
              <div className="h-full bg-[#faf0e6] flex flex-col justify-between rounded-b-lg">
                <p className="text-[20px] mb-7">INCLUDES</p>
                <p>1 Main Logo</p>
                <p>2 Alternative Logos</p>
                <p>
                  3 Marketing Material Designs <br />
                  (Business cards, trifolds, stickers, gift cards, post cards,
                  vouchers, email signatures, etc..)
                </p>
                <p>1 Moodboard Design</p>
                <p>Social Media Cover Art</p>
                <p>Branding Design Assets</p>
                <p className="mt-8 mb-[15px] text-[30px] text-[#02313C]">
                  $1200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
