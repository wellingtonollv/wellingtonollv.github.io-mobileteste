var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
  
option = null;
option = {
   
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            fontSize: 10
          }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            fontSize: 10
          }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}