import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ url, slice, title }) => {
  const [total, setTotal] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      try {
        var data = response.data;
        // console.log(data);
        data = data.slice(slice, 7);
        setTotal(data?.map((item) => item.total));
        setData(data?.map((item) => item._id));
      } catch (error) {
        console.log(error);
      }
    });
  }, [url]);

  const series = [
    //data on the y-axis
    {
      name: "Total",
      data: total,
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "donut-chart" },
    xaxis: {
      categories: data,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    title: {
      text: `${title.slice(0, 1).toUpperCase() + title.slice(1)} Bar-Chart`,
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "system-ui",
        color: "#263238",
      },
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="border py-2 rounded-lg my-2 overflow-auto lg:overflow-hidden">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="600"
        className="p-1"
      />
    </div>
  );
};

export default BarChart;
