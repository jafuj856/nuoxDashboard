import React from 'react'

function TodaysCard({cardData}) {
  return (
    <div
      className="p-2 rounded-lg flex flex-col gap-3 max-h-[184px]"
      style={{ backgroundColor: cardData?.bgColor }}
    >
      {cardData?.svg}
      <h1 className="text-[20px] font-semibold">{cardData?.heading}</h1>
      <p className="text-[14px] font-[500] text-[#425166]">
        {cardData?.subText}
      </p>
      <p className="text-[12px] font-[500] text-[#4079ED]">
        {cardData?.smallText}
      </p>
    </div>
  );
}

export default React.memo(TodaysCard);
