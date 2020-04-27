<template>
  <div class="home">
    <ex-form
      ref="form"
      :model="formData"
      :rules="rules"
    >
      <ex-form-item label="名称" prop="name">
        <ex-input type="text" v-model="formData.name"></ex-input>
      </ex-form-item>
      <ex-form-item label="邮箱" prop="mail" >
        <ex-input type="text" v-model="formData.mail" ></ex-input>
      </ex-form-item>
      <ex-form-item label="文本域" prop="text">
        <ex-textarea  v-model="formData.text" > </ex-textarea>
      </ex-form-item>
    </ex-form>
  </div>
</template>

<script>
import exForm from "@/components/form/exForm";
import exFormItem from "@/components/form/exFormItem";
import exInput from "@/components/exInput";
import exTextarea from "@/components/exTextarea";
export default {
  name: "Home",
  components: {
    exForm,
    exFormItem,
    exInput,
    exTextarea
  },
  data() {
    return {
      formData: {
        name: "",
        mail: "",
        text:""
      },
      rules: {
        name: [
          { required: true, message: "不能为空", trigger: "blur" },
          { pattern: /^1[34578]\d{9}$/, message: "您的手机号码输入错误" }
        ],
        mail: [
          { required: true, message: "不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ],
        text:[
          { required: true, message: "不能为空", trigger: "blur" },
        ]
      }
    };
  }
};
</script>
