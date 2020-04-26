<template>
  <div class="home">
    <ex-form ref="form" :label-position="'top'" :model="formData" :rules="rules">
      <ex-form-item label="名称" prop="name">
        <ex-input type="text" v-model="formData.name"></ex-input>
      </ex-form-item>
      <ex-form-item label="邮箱" prop="mail">
        <ex-input type="text" v-model="formData.mail"></ex-input>
      </ex-form-item>
    </ex-form>
  </div>
</template>

<script>
import exForm from "@/components/form/exForm";
import exFormItem from "@/components/form/exFormItem";
import exInput from "@/components/exInput";
export default {
  name: "Home",
  components: {
    exForm,
    exFormItem,
    exInput
  },
  data() {
    return {
      formData: {
        name: "",
        mail: ""
      },
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ]
      }
    };
  }
};
</script>
