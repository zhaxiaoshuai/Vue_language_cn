<template>
  <section class="footer_auto_content clearfix">
    <form class="clearfix container">
      <el-row>
        <el-col :span="8" :xs="24">
          <ul>
            <li>
              <input type="text" name="name" placeholder="姓名" id="name" v-model="name" />
            </li>
            <li>
              <input type="text" name="qq" placeholder="QQ" id="qq" v-model="qq" />
            </li>
            <li>
              <input
                type="text"
                name="phoneNumber"
                placeholder="电话"
                id="phoneNumber"
                v-model="phoneNumber"
              />
            </li>
            <li>
              <input type="text" name="Email" placeholder="邮箱" id="Email" v-model="Email" />
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
      content: ""
    };
  },
  methods: {
    Submit() {
      const { name, qq, phoneNumber, Email, content } = this;
      if (!name) {
        alert("请输入姓名");
        return;
      } else if (!qq) {
        alert("请输入qq");
        return;
      } else if (!phoneNumber) {
        alert("请输入电话");
        return;
      } else if (!Email) {
        alert("请输入邮箱");
        return;
      } else if (!content) {
        alert("请输入留言内容");
        return;
      } else {
        alert("提交成功");
      }
      this.name = this.qq = this.phoneNumber = this.Email = this.content = "";
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