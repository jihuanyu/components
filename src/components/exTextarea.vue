<template>
  <textarea :disabled='disabled||$parent.$parent.disabled' :placeholder='placeholder' :max='max'> </textarea>
</template>

<script>
export default {
   name: "exTextarea",
   props: {
    disabled: { type: Boolean, default: false },
    placeholder: { type: String },
    max: { type: Number },
    value: { type: String }
  },
};
</script>

<style lang="scss" scoped>
textarea {
  box-sizing: border-box;
  width: 280px;
  height: 72px;
  border-radius: 3px;
  border: 1px solid rgba(48, 48, 48, 1);
  padding: 7px 12px;
  background: #303030;
  resize: none;
}
textarea:hover {
  border-color: rgba(67, 67, 67, 1);
}
textarea:focus {
  outline: none;
  border-radius: 3px;
  border: 2px solid rgba(67, 67, 67, 1);
  padding: 6px 10px;
}
textarea[disabled] {
  background: rgba(20, 21, 22, 1);
  border: 1px solid rgba(29, 29, 29, 1);
}
</style>
