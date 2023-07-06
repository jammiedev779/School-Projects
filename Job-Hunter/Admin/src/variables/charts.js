import axiosClient from "axios-client";
import { useStateContext } from "context/ContextProvider";
import { useEffect, useState } from "react";

export const PieChartInfo = () => {
  const {users,companies} = useStateContext();
  const pieChartData = [companies.length, users.length];
  const pieChartOptions = {
    labels: ["Companies", "Users"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
    },
  };
  return {pieChartData, pieChartOptions};
}

export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

export const pieChartOptions = {
  labels: ["Users", "Companies"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
  },
};

// export const pieChartData = [users.length, companies.length];

export const barChartDataWeeklyRevenue = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#6AD2Fa",
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#4318FF",
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#EFF4FB",
  },
];

export const barChartOptionsWeeklyRevenue = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  // colors:['#ff3322','#faf']
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    theme: 'dark',
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

export const Graph = () => {
  const dynamicUsersData = [0, 0, 0]; 
  const dynamicComsData = [0, 0, 0]; 
  const [lineChartDataTotalSpent, setLineChartDataTotalSpent] = useState([
    {
      name: "Users",
      data: dynamicUsersData,
      color: "#6AD2FF",
    },
    {
      name: "Companies",
      data: dynamicComsData,
      color: "#4318FF",
    },
  ]);

  useEffect(() => {
    axiosClient.get("/data-current-month")
    .then(({data}) => {
      console.log(data)
      if (data.recentUsers && data.recentUsers.length > 0) {
        data.recentUsers.forEach((item) => {
          const month = item.month; 
          const count = item.count;
          console.log(count);
          if (month >= 4 && month <= 6) {
            dynamicUsersData[month - 4] = count;
          }
        });
      }
      if (data.recentCompanies && data.recentCompanies.length > 0) {
        data.recentCompanies.forEach((item) => {
          const month = item.month; 
          const count = item.count;
        
          if (month >= 4 && month <= 6) {
            dynamicComsData[month - 4] = count;
          }
        });
      }
      setLineChartDataTotalSpent([
        {
          name: "Users",
          data: dynamicUsersData,
          color: "#6AD2FF",
        },
        {
          name: "Companies",
          data: dynamicComsData,
          color: "#4318FF",
        },
      ]);
    });
  },[])
  
  const currentDate = new Date();
  const currentMon = currentDate.getMonth() + 1;
  
  const currentMonth = new Date(0, (currentMon) - 1).toLocaleString('default', { month: 'long' });
  const prevMonth = new Date(0, (currentMon-1) - 1).toLocaleString('default', { month: 'long' });
  const prev2Month = new Date(0, (currentMon -2) - 1).toLocaleString('default', { month: 'long' });
  
  const lineChartOptionsTotalSpent = {
  
    legend: {
      show: false,
    },
  
    theme: {
      mode: "light",
    },
    chart: {
      type: "line",
  
      toolbar: {
        show: false,
      },
    },
  
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
      theme: 'dark',
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: [prev2Month, prevMonth, currentMonth],
    },
  
    yaxis: {
      show: false,
    },
  };

  return {lineChartDataTotalSpent, lineChartOptionsTotalSpent}
}
