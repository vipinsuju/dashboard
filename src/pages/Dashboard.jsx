import React from "react";
import Button from "../Components/Button/Button";
import PlusIcon from "../images/Button/plus.svg";
import PersonalCard from "../Components/Card/PersonalCard/Personal";
import TableCard from "../Components/Card/TableCard/Table";
import VideoCard from "../Components/Card/VideoCard/Video";
import ChartCard from "../Components/Card/ChartCard/Chart";

const Dashboard = ({ open }) => {
  return (
    <div className={`${open} mt-12 p-4`}>
      <div className="flex flex-wrap justify-between my-3 mx-3">
        <h2 className="text-2xl font-semibold py-5 text-mainColor">Overview</h2>
        <Button name="Add Funds" svg={PlusIcon} />
      </div>
      <div className="flex flex-wrap">
        <ChartCard type="area" />
        <ChartCard/>
        <PersonalCard />
        <TableCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Dashboard;
