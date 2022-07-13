<template>
  <div class="app-container">
    <el-form :inline="true" ref="queryForm" class="demo-form-inline" label-width="80px">
      <el-form-item label="版本名称">
        <el-select v-model="version" size="small" placeholder="请选择版本名称">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <!-- table -->
    <el-table
      ref="table"
      id="editAbletrendsTable"
      v-loading="loading"
      :row-class-name="rowClassName"
      :data="dataList"
      border
      style="width: 100%"
    >
      <!-- <el-table-column min-width="100px" label="车型三位码" align="center" fixed="left" prop="code"></el-table-column> -->
      <!-- <el-table-column min-width="100px" label="PR号" align="center" fixed="left" prop="prCode"></el-table-column> -->
      <el-table-column
        min-width="140px"
        label="车型名称"
        align="center"
        fixed="left"
        prop="modelName"
      ></el-table-column>
      <template v-for="(item, index) in column">
        <el-table-column
          :key="index"
          :label="item.name"
          align="center"
          width="120px"
          :prop="item.column"
        >
          <template slot-scope="scope">
            <input
              v-if="!scope.row.flag"
              type="text"
              :style="inputStyle()"
              v-model="scope.row[item.column]"
              @input="setNum(scope.row)"
              placeholder="请输入"
            />
            <div v-else>{{ scope.row[item.column] }}</div>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        min-width="120px"
        label="合计"
        align="center"
        fixed="right"
        prop="total"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      loading: false,
      version: 1,
      options: [{ label: '答案生', value: 1 }],
      column: [
        { name: '2021-01', column: 'ONE_MONTH' },
        { name: '2021-02', column: 'TWO_MONTH' },
        { name: '2021-03', column: 'THREE_MONTH' },
        { name: '2021-04', column: 'FOUR_MONTH' },
        { name: '2021-05', column: 'FIVE_MONTH' },
        { name: '2021-06', column: 'SIX_MONTH' },
        { name: '2021-07', column: 'SEVEN_MONTH' },
        { name: '2021-08', column: 'EIGHT_MONTH' },
        { name: '2021-09', column: 'NINE_MONTH' },
        { name: '2021-10', column: 'TEN_MONTH' },
        { name: '2021-11', column: 'ELEVEN_MONTH' },
        { name: '2021-12', column: 'TWELVE_MONTH' },
      ],
      dataList: [],
      list: [
        {
          name: '大众',
          arr: [
            {
              code: '889',
              prCode: 'HTVTIS',
              modelName: '捷达',
              total: 66,
              ONE_MONTH: 1,
              TWO_MONTH: 2,
              THREE_MONTH: 3,
              FOUR_MONTH: 4,
              FIVE_MONTH: 5,
              SIX_MONTH: 6,
              SEVEN_MONTH: 7,
              EIGHT_MONTH: 8,
              NINE_MONTH: 9,
              TEN_MONTH: 10,
              ELEVEN_MONTH: 11,
              TWELVE_MONTH: 12,
              parament: '大众',
            },
            {
              code: '889',
              prCode: 'HTVTIS',
              modelName: '宝来',
              total: 66,
              ONE_MONTH: 1,
              TWO_MONTH: 2,
              THREE_MONTH: 3,
              FOUR_MONTH: 4,
              FIVE_MONTH: 5,
              SIX_MONTH: 6,
              SEVEN_MONTH: 7,
              EIGHT_MONTH: 8,
              NINE_MONTH: 9,
              TEN_MONTH: 10,
              ELEVEN_MONTH: 11,
              TWELVE_MONTH: 12,
              parament: '大众',
            },
            {
              code: '889',
              prCode: 'HTVTIS',
              modelName: '速腾',
              total: 66,
              ONE_MONTH: 1,
              TWO_MONTH: 2,
              THREE_MONTH: 3,
              FOUR_MONTH: 4,
              FIVE_MONTH: 5,
              SIX_MONTH: 6,
              SEVEN_MONTH: 7,
              EIGHT_MONTH: 8,
              NINE_MONTH: 9,
              TEN_MONTH: 10,
              ELEVEN_MONTH: 11,
              TWELVE_MONTH: 12,
              parament: '大众',
            },
          ],
        },
        {
          name: '本田',
          arr: [
            {
              code: '889',
              prCode: 'HTVTIS',
              modelName: '雅阁',
              total: 66,
              ONE_MONTH: 1,
              TWO_MONTH: 2,
              THREE_MONTH: 3,
              FOUR_MONTH: 4,
              FIVE_MONTH: 5,
              SIX_MONTH: 6,
              SEVEN_MONTH: 7,
              EIGHT_MONTH: 8,
              NINE_MONTH: 9,
              TEN_MONTH: 10,
              ELEVEN_MONTH: 11,
              TWELVE_MONTH: 12,
              parament: '本田',
            },
            {
              code: '889',
              prCode: 'HTVTIS',
              modelName: '汉兰达',
              total: 66,
              ONE_MONTH: 1,
              TWO_MONTH: 2,
              THREE_MONTH: 3,
              FOUR_MONTH: 4,
              FIVE_MONTH: 5,
              SIX_MONTH: 6,
              SEVEN_MONTH: 7,
              EIGHT_MONTH: 8,
              NINE_MONTH: 9,
              TEN_MONTH: 10,
              ELEVEN_MONTH: 11,
              TWELVE_MONTH: 12,
              parament: '本田',
            },
          ],
        },
      ],
    };
  },
  created() {
    this.dataList = this.dataList1;
    this.getData();
  },
  methods: {
    getData() {
      // 原数组
      let originalArr = this.list;
      // 处理后的新数组
      let newArr = [];

      // 遍历原数组
      for (let i = 0; i < originalArr.length; i++) {
        let obj = {};
        let item = originalArr[i];
        newArr = newArr.concat(item.arr);

        // 新合计
        obj.modelName = item.name;
        obj.total = 0;
        obj.flag = true;

        // 竖直合计
        for (let j = 0; j < this.column.length; j++) {
          let child = this.column[j];
          let _a = item.arr.reduce((sum = 0, _item) => sum + Number(_item[child['column']]), 0);
          obj[child['column']] = _a;
          obj.total += _a;
        }

        // 横向合计
        for (let k = 0; k < item.arr.length; k++) {
          var num = 0;

          for (let j = 0; j < this.column.length; j++) {
            let child = this.column[j];
            num += Number(item.arr[k][child['column']]);
          }
          item.arr[k].total = num;
        }

        newArr.push(obj);
      }

      // 大合计
      var flagArr = newArr.filter((item) => {
        if (item.flag) return item;
      });
      var flagObj = {};
      (flagObj.modelName = 'FAW-VW'),
        //代表合计行
        (flagObj.flag = true);
      flagObj.total = 0;
      // 循环动需要合计的动态列
      for (let j = 0; j < this.column.length; j++) {
        let child = this.column[j];
        let num = flagArr.reduce((sum = 0, _item) => sum + Number(_item[child['column']]), 0);
        flagObj[child['column']] = num;
        flagObj.total += num;
      }

      newArr.push(flagObj);

      this.dataList = newArr;
    },
    setNum(row) {
      this.list.forEach((item) => {
        if (item.name == row.parament) {
          item.arr.forEach((_item) => {
            if (_item.modelName == row.modelName) {
              _item = row;
            }
          });
        }
      });
      this.getData();
    },
    // 总计 横行样式
    rowClassName({ row }) {
      if (row.flag) {
        if (row.modelName == 'FAW-VW') {
          return 'row-style-item';
        } else {
          return 'row-style-sum';
        }
      }
    },
    // input 样式
    inputStyle() {
      return {
        width: '90%',
        padding: '4px 6px',
        textAlign: 'center',
        border: '1px solid #eaeaea',
      };
    },
  },
};
</script>
<style>
.row-style-sum {
  background-color: #c8e7f2 !important;
}
.row-style-item {
  background-color: #deefff !important;
}
input {
  background: none;
  outline: none;
}
</style>
