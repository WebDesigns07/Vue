<template>
  <div id="app">
    <button @click="exportWorkbook">xlsx导出</button>
      <!-- <button @click="exportWorkbook">ExcelJS导出</button>

      <download-excel
      :data = "json_data"
      :fields = "json_fields"
      name = "远程诊断报告导出.xls">
      <button>vue-json-excel导出</button>
      </download-excel> -->
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  name: "App",
  components: {
  },data() {
    return {
      json_fields: {
        "头部-诊断名称": "name",    //常规字段
        "头部-联系电话": "phone.mobile", //支持嵌套属性
        "头部-损坏区域代码": {
          field: "phone.landline",
                    //自定义回调函数
          callback: value => {
            return `损坏区域代码 - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: "损坏的组件一",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010"
          }
        },
        {
          name: "损坏的组件二",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244"
          }
        }
      ],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    };
  },
  methods: {
    async exportWorkbook(){

      // Excel工作簿
      console.dir(this.$workbook);
      let wopts = { bookType:'xlsx', bookSST:false, type:'array' };
      console.dir(wopts);
      
      let wbout = XLSX.write(this.$workbook, wopts);
      console.dir(wbout);

      XLSX.writeFile(this.$workbook, 'test.xlsx');
      XLSX.writeFile(this.$workbook, 'test.xlsx');

      // await this.$workbook.xlsx.writeFile('exceldata.xlsx');


      // let fs = window.require('fs');
      // let path = window.require('path');
      
      // console.dir(fs);
      // console.dir(path);
      // console.dir(path.resolve(__dirname, './1.txt'));

      // fs.readFile('', (err, data) =>
      // {
      //     console.dir(err);
      //     console.dir(data);
      // });
      // fs.readFile(path.resolve(__dirname, './1.txt'), (err,data) => {
      //   // 写入文件；如果对应路径上文件不存在，会自动创建一个文件
      //   fs.writeFile(path.resolve(__dirname, './2.txt'), data, (err) => {
      //   console.log("写入成功");
      //   console.log(err);
      //   });
        // });
      // this.$workbook.xlsx.write(stream);
  }
}
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
