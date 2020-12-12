import Vue from "vue";
import App from "./App.vue";
// import JsonExcel from 'vue-json-excel'
// import ExcelJS from "exceljs";
// import XLSX, {utils} from 'xlsx';
import XLSX from 'xlsx';

Vue.config.productionTip = false;

// jsxlsx
// const jsxlsx = new JSxlsx();

// JsonExcel
// Vue.component('downloadExcel', JsonExcel);

const workbook = XLSX.utils.book_new();
var ws_name = "SheetJS";

/* make worksheet */
// var ws_data = [
//   [ "S", "h", "e", "e", "t", "J", "S" ],
//   [  1 ,  2 ,  3 ,  4 ,  5 ]
// ];

var ws_data = [
  [ "设备IP", "端口", "设备ID", "源网络号", "源地址号" ],
  [ "192.168.1.159", 47808, 9980, "-", "-"]
];
var ws = XLSX.utils.aoa_to_sheet(ws_data);

/* Add the worksheet to the workbook */
XLSX.utils.book_append_sheet(workbook, ws, ws_name);

const excelPlugin = {
  install(Vue){
    Vue.prototype.$workbook = workbook;
  }
}

Vue.use(excelPlugin);


// // ExcelJS
// const workbook = new ExcelJS.Workbook();
// workbook.creator = 'Me';
// workbook.lastModifiedBy = 'Her';
// workbook.created = new Date(1985, 8, 30);
// workbook.modified = new Date();
// workbook.lastPrinted = new Date(2016, 9, 27);
// // 将工作簿日期设置为 1904 年日期系统
// workbook.properties.date1904 = true;

// const sheet = workbook.addWorksheet('My Sheet');
// sheet.state = 'visible';

// console.log(sheet.state);

// const excelJSPlugin = {
//   install(Vue){
//     Vue.prototype.$workbook = workbook;
//   }
// }

// Vue.use(excelJSPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
