<template>
  <div class="home">
    <div class="input">
      <ex-form ref="form" :model="formData" :rules="rules">
        <ex-form-item label="名称" prop="name">
          <ex-input type="text" v-model="formData.name"></ex-input>
        </ex-form-item>

        <ex-form-item label="邮箱" prop="mail">
          <ex-input type="text" v-model="formData.mail"></ex-input>
        </ex-form-item>

        <ex-form-item label="数字" prop="mail">
          <ex-input type="number" v-model="aaa" size="big"></ex-input>
        </ex-form-item>

        <ex-form-item label="文本域" prop="text">
          <ex-textarea v-model="formData.text"></ex-textarea>
        </ex-form-item>
      </ex-form>
    </div>
    <!-- 按钮 -->
    <ex-button type="primary" size="medium" @click="success">success</ex-button>
    <ex-button type="info" size="medium" @click="info">info</ex-button>
    <ex-button type="error" size="medium" @click="error">error</ex-button>
    <ex-button type="success" size="medium" @click="warn">warn</ex-button>
    <ex-button type="ghost" size="medium" @click="warn">warn</ex-button>
    <ex-button @click="handleClick" type="primary">打开弹框</ex-button>
    <!-- 弹框 -->
    <ex-dialog
      :show="showDialog"
      @confirm="confirm"
      @cancel="cancel"
      @before-close="before_close"
      :title="'新标题'"
    >
      <ex-form ref="form" :model="formData" :rules="rules">
        <ex-form-item label="名称" prop="name" labelPosition="left">
          <ex-input type="text" v-model="formData.name"></ex-input>
        </ex-form-item>

        <ex-form-item label="邮箱" prop="mail" labelPosition="left">
          <ex-input type="text" v-model="formData.mail"></ex-input>
        </ex-form-item>

        <ex-form-item label="数字" prop="mail" labelPosition="left">
          <ex-input type="number" v-model="aaa" size="big"></ex-input>
        </ex-form-item>

        <ex-form-item label="文本域" prop="text" labelPosition="left">
          <ex-textarea v-model="formData.text"></ex-textarea>
        </ex-form-item>
      </ex-form>
    </ex-dialog>
  </div>
</template>

<script>
import exForm from "@/components/form/exForm";
import exFormItem from "@/components/form/exFormItem";
import exInput from "@/components/exInput";
import exTextarea from "@/components/exTextarea";
import exDialog from "@/components/exDialog";
import exButton from "@/components/exButton";
export default {
  name: "Home",
  components: {
    exForm,
    exFormItem,
    exInput,
    exTextarea,
    exDialog,
    exButton
  },
  data() {
    return {
      formData: {
        name: "",
        mail: "",
        text: ""
      },
      aaa: "111",
      rules: {
        name: [
          { required: true, message: "不能为空", trigger: "blur" },
          { pattern: /^1[34578]\d{9}$/, message: "您的手机号码输入错误" }
        ],
        mail: [
          { required: true, message: "不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ],
        text: [{ required: true, message: "不能为空", trigger: "blur" }]
      },
      showDialog: false
    };
  },
  methods: {
    cancel() {
      this.showDialog = false;
    },
    confirm() {
      this.showDialog = false;
    },
    handleClick() {
      this.showDialog = true;
    },
    before_close() {
      this.showDialog = false;
    },
    success() {
      this.$exMessage({
        type: "success",
        message: "这是一条成功的信息",
        title: "这是标题",
        action: "title",
        duration: 1000
      });
    },
    error() {
      this.$exMessage({
        type: "error",
        message: "这是一条错误的信息"
      });
    },
    warn() {
      this.$exMessage({
        type: "warn",
        message: "这是一条警告的信息"
      });
    },
    info() {
      this.$exMessage({
        type: "info",
        message: "这是一条信息提示",
        action: "close"
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
