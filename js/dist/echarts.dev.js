"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

if (option && (typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
  myChart.setOption(option, true);
}