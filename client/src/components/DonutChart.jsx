import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = ({ url, slice, title }) => {
  if (!slice) {
    slice = 0;
  }
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

  return (
    <div>
      <div className="border py-2 rounded-lg my-2 overflow-auto lg:overflow-hidden">
        <Chart
          type="donut"
          width={600}
          series={total}
          options={{
            title: {
              text: `${title.slice(0, 1).toUpperCase() + title.slice(1)} Donut Chart`,
              style: {
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "system-ui",
                color: "#263238",
              },
            },
            noData: { text: "Empty Data" },
            labels: data,
            total: {
              show: true,
              showAlways: true,
              label: "Total",
            },
          }}
        ></Chart>
      </div>
    </div>
  );
};

export default DonutChart;
