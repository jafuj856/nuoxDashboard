import React from 'react'
import TodaysSales from '../../components/dashboard/todaysSales/TodaysSales';
import VisitorInsights from '../../components/dashboard/visitorInsights/VisitorInsights';
import BarChart from '../../components/dashboard/secondSection/Barchart';
import CustomerSatisfactionChart from '../../components/dashboard/secondSection/CustomerSatisfactionChart';
import TargetVsRealityChart from '../../components/dashboard/secondSection/TargetVsRealityChart';
import TopProducts from '../../components/dashboard/thirdSection/TopProducts';
import VolumeVsServiceChart from '../../components/dashboard/thirdSection/VolumeChart';
import MyVectorMap from '../../components/dashboard/thirdSection/SalesMap';

function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start gap-5 w-full">
        <TodaysSales />
        <VisitorInsights />
      </div>
      <div className="flex flex-wrap mt-5 gap-5">
        <BarChart />
        <CustomerSatisfactionChart />
        <TargetVsRealityChart />
      </div>
      <div className="flex flex-wrap mt-5 gap-5">
        <TopProducts />
        <MyVectorMap />
        <VolumeVsServiceChart />
      </div>
    </div>
  );
}

export default Dashboard
