<template>
  <section class="footer_auto_content clearfix">
    <form class="clearfix container">
      <el-row>
        <el-col :span="8" :xs="24">
          <ul>
            <li>
              <input type="text" name="name" placeholder="姓名" id="name" v-model="name" ref="name" />
            </li>
            <li>
              <input type="text" name="qq" placeholder="QQ" id="qq" v-model="qq" ref="qq" />
            </li>
            <li>
              <input
                type="text"
                name="phoneNumber"
                placeholder="电话"
                id="phoneNumber"
                v-model="phoneNumber"
                ref="phoneNumber"
              />
            </li>
            <li>
              <input type="text" name="Email" placeholder="邮箱" id="Email" v-model="Email" ref="Email" />
            </li>
          </ul>
        </el-col>
        <el-col :span="16" :xs="24">
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="在这里咨询留言吧"
            v-model="content"
            ref="content"
          ></textarea>
          <br />
          <button type="button" class="zxf-btn hover-opacity-8" @click="Submit">发送</button>
        </el-col>
      </el-row>
    </form>
  </section>
</template>
<script>
export default {
  name: "IDFooter",
  data() {
    return {
      name: "",
      qq: "",
      phoneNumber: "",
      Email: "",
      content: "",
      index : ""
    };
  },
  methods: {
    Submit() {
      const { name, qq, phoneNumber, Email, content } = this;

      if (!name) {
        alert("请输入姓名");
        this.refFocus('name')
      } else if (!qq) {
        alert("请输入qq");
        this.refFocus('qq')
      } else if (!phoneNumber) {
        alert("请输入电话");
        this.refFocus('phoneNumber')
      } else if (!Email) {
        alert("请输入邮箱");
        this.refFocus('Email')
      } else if (!content) {
        alert("请输入留言内容");
        this.refFocus('content')
      } else {
        alert("提交成功");
        this.name = this.qq = this.phoneNumber = this.Email = this.content = "";
      }
      /*switch ( true ) {
        case name === "":
          alert("请输入姓名");
          this.refFocus('name')
          break;
        case qq === "":
          alert("请输入qq");
          this.refFocus('qq')
          break;
        case phoneNumber === "":
          alert("请输入电话");
          this.refFocus('phoneNumber')
          break;
        case Email === '':
          alert("请输入邮箱");
          this.refFocus('Email')
          break;
        case content === "":
          alert("请输入留言内容");
          this.refFocus('content')
          break;
        default:
          alert("提交成功");
          this.name = this.qq = this.phoneNumber = this.Email = this.content = "";
      }*/
    },
    refFocus(index){
      this.$refs[index].focus();
    }
  }
};
</script>
<style lang="scss">
.footer_auto_content {
  background: #f2f2f2;
  padding: .9rem 0;
  box-sizing: border-box;
  margin: .2rem 0;
  li input {
    border: 1px solid #808080;
    padding: 0.17rem 0 0.17rem 0.13rem;
    box-sizing: border-box;
    color: #808080;
    background: none;
    width: 100%;
    display: block;
  }
  textarea {
    padding: 0.17rem 0 0 0.13rem;
    box-sizing: border-box;
    width: 100%;
    height: 1.65rem;
    background: none;
    border-bottom: none;
    resize: none;
    float: left;
  }
  button {
    width: 100%;
    float: left;
    padding: 0.15rem 0;
    box-sizing: border-box;
    background: #b60005;
    border: none;
    color: #fff;
    font-size: 0.16rem;
  }
}
</style>
