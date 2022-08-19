import React, { useEffect, useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { Line, Bar } from "react-chartjs-2";
import "./style.css";
import config1 from "../../config/config1";
import config2 from "../../config/config2";
import data1 from "../../chartsData/data2";
const Index = (props) => {
  const BarChart = () => {
    const { chart } = data1;
    const { data, options } = config2(
      ["M", "T", "W", "T", "F", "S", "S"] || [],
      { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] } || {}
    );
    return (
      <>
        <Bar data={data} options={options} />
      </>
    );
  };
  const [variant, setVariant] = useState("");
  const { data, options } = config1(
    props.chart.labels || [],
    props.chart.datasets || {}
  );
  useEffect(() => {
    setVariant(props.variant);
  }, [variant]);
  const vriantBase = () => {
    switch (variant) {
      case "primary":
        return (
          <div className={`Chart-Container ${variant}`}>
            <BarChart />
          </div>
        );
        break;
      case "success":
        return (
          <div className={`Chart-Container ${variant}`}>
            <Line data={data} options={options} />
          </div>
        );
        break;
      case "dark":
        return (
          <div className={`Chart-Container ${variant}`}>
            <Line data={data} options={options} />
          </div>
        );
        break;
      default:
        return null;
        break;
    }
  };
  return (
    <>
      <div className="Chart-Card-Container">
        {vriantBase()}
        <div className="Chart-Card-Body">
          <h1>{props.h1}</h1>
          <p>
            <span>{props.h2}</span> {props.p1}
          </p>
        </div>
        <hr />
        <div className="Chart-Card-Footer">
          <p>
            <HiOutlineClock />
            {props.time}
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
