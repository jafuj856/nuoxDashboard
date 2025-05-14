import React from 'react'

function DashboardHeading({text}) {
  return (
      <h1 className="text-[20px] font-[600] text-[#05004E]">{text }</h1>
  );
}

export default React.memo(DashboardHeading)
