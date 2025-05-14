import React from "react";
import { useSelector } from "react-redux";

function Topbar() {
  const toggleSidebar = useSelector((state) => state.root.toggleSidebar);

  return (
    <div
      className={`flex items-center justify-end md:justify-between h-[100px] bg-white px-6  w-full`}
    >
      <h1 className="font-bold text-[26px] xl:text-[30px] 2xl:text-[36px] md:block hidden">
        Dashboard
      </h1>

      <div className="flex items-center gap-8">
        {/* 11111 */}
        <div className="hidden items-center gap-3 px-3 p-2 h-10 rounded-lg bg-[#F9FAFB] w-[300px] sm:w-[400px] md:flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
              fill="#5D5FEF"
            />
          </svg>
          <input
            type="text"
            className="w-full bg-transparent outline-none h-5"
            placeholder="Search..."
          />
        </div>
        {/* 2222 */}
        <div className="hidden items-center gap-3 md:flex">
          <img src="/flage.svg" alt="" />
          <p className="font-bold text-[20px]">Eng (US)</p>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99976 9.49585C8.10019 9.49585 8.19773 9.52582 8.28003 9.58081L8.3562 9.64331L11.6462 12.9431L11.9998 13.2976L12.3533 12.9431L15.6208 9.67456C15.6914 9.61601 15.7764 9.57868 15.866 9.56519L15.9597 9.5603C16.054 9.56395 16.1445 9.5939 16.2214 9.64624L16.2937 9.70581C16.3604 9.7725 16.4066 9.85634 16.4275 9.94702L16.4402 10.0398C16.4449 10.163 16.4026 10.2829 16.324 10.3777L12.3474 14.3552C12.2776 14.4244 12.1895 14.4708 12.0945 14.49L11.9978 14.4998H11.9968C11.9312 14.5001 11.8662 14.4874 11.8054 14.4626C11.775 14.4502 11.7458 14.4348 11.7185 14.4167L11.6423 14.3552L7.64331 10.3562C7.54889 10.2617 7.49585 10.1334 7.49585 9.99976C7.49589 9.89955 7.52603 9.80262 7.58081 9.72046L7.64331 9.64331C7.71421 9.57241 7.80423 9.52499 7.90112 9.50562L7.99976 9.49585Z"
                fill="#A098AE"
                stroke="#A098AE"
              />
            </svg>
          </button>
        </div>
        {/* 3333 */}
        <img src="/notification.svg" className="sm:block hidden" alt="" />
        {/* 4444 */}
        <div className="flex items-start gap-3">
          <img src="/profile.svg" alt="" />
          <div>
            <p className="text-[16px] font-[#151D48]">Musfiq</p>
            <p className="text-[#737791] text-[14px]">Admin</p>
          </div>
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#151D48"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
