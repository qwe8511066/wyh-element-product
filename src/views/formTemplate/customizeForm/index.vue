<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList6"></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>  
          &lt;wyhElementTable :column=&quot;column&quot; listServe=&quot;/getList1&quot;&gt;
      &lt;template slot=&quot;item&quot;&gt;
        &lt;el-table-column label=&quot;日期&quot; width=&quot;320&quot;&gt;
          &lt;template slot-scope=&quot;{row,$index}&quot;&gt;{{`row.user.mtime`}}&lt;/template&gt;
        &lt;/el-table-column&gt;

        &lt;el-table-column label=&quot;图片&quot; width=&quot;320&quot;&gt;
          &lt;template slot-scope=&quot;{row}&quot;&gt;
            &lt;el-image style=&quot;width: 50px; height: 50px&quot; :src=&quot;row.user.img&quot;&gt;&lt;/el-image&gt;
          &lt;/template&gt;
        &lt;/el-table-column&gt;
      &lt;/template&gt;
    &lt;/wyhElementTable&gt;
 
  data() {
    return {
      column: [
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
        },
      ],
    }
  },  
}
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customizeForm',
  components: {},
  data() {
    return {
      column: [
        {
          label: '操作',
          render: (h, scope) => {
            return (
              <div class="buttonDivide">
                <buttonPermission
                  name="编辑"
                  onClick={() =>
                    this.$router.push('/formTemplate/customizeForm/customForm/' + scope.row.id)
                  }
                ></buttonPermission>
              </div>
            )
          },
        },
        {
          prop: 'name',
          label: '表单名称',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
