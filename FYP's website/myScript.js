// sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}




// ---------- CHARTS ------------ //

// BAR CHART

var barChartOptions = {
    series: [{
    data: [20, 19, 5, 1, 8, 1]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1",
    "#6c32c9",
  ],
  plotOptions: {
    bar: {
        distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Happy", "Normal", "Sad", "Angry", "Surprise", "Fear"],
  },

  yaxis: {
    title: {
        text: "Count"
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();

  var areaChartOptions = {
    series: [{
    name: 'Graph',
    type: 'area',
    data: [20, 19, 5, 1, 8, 1]
  }, 
    ],
    chart: {
    height: 350,
    type: 'area',
    toolbar: {
        show: false,
    },
  },
  colors: ["#4f35a1"],
  datalabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35],
  },
  labels: ['Happy', 'Normal', 'Sad', 'Angry', 'Surprise', 'Fear'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Emotions',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

  