import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const RadialChart = ({ selectedUrl, label, title }) => {
  // console.log(selectedUrl);
  // console.log(label);
  // console.log(title);
  const [avg, setAvg] = useState(null);

  useEffect(() => {
    axios.get(selectedUrl).then((response) => {
      try {
        var data = response.data[0];
        // console.log("data print: ", data);
        if (label === "Intensity") {
          const rounded = data.avg.toFixed(3);
          setAvg(rounded);
        } else {
          const rounded = (data.avg * 10).toFixed(3);
          setAvg(rounded);
        }
        // console.log("avg print: ", rounded);
      } catch (error) {
        console.log(error);
      }
    });
  }, [selectedUrl]);

  var series = [avg];
  var options = {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },

        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "13px",
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },

    stroke: {
      lineCap: "round",
    },
    labels: [`Average ${label}`],
    title: {
      text: `${title.slice(0, 1).toUpperCase() + title.slice(1)}`,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "system-ui",
        color: "#263238",
      },
    },
  };

  return (
    <div className="border py-2 rounded-lg my-2 overflow-auto lg:overflow-hidden flex flex-col items-center">
      <Chart
        type="radialBar"
        options={options}
        series={series}
        width="600"
        className="p-1"
      />
    </div>
  );
};

export default RadialChart;
