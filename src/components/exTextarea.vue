<template>
  <textarea
    :disabled="disabled || $parent.$parent.disabled"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
  >
  </textarea>
</template>

<script>
export default {
  name: "exTextarea",
  props: {
    disabled: { type: Boolean, default: false },
    placeholder: { type: String },
    rows: { type: Number, default: 4 },
    cols: { type: Number, default: 34 },
    max: { type: Number },
    value: { type: String }
  }
};
</script>

<style lang="scss" scoped>
textarea {
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid rgba(48, 48, 48, 1);
  color: rgba(255, 255, 255, 0.85);
  padding: 7px 12px;
  background: #303030;
  resize: none;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 22px;
}
textarea:hover {
  border-color: rgba(67, 67, 67, 1);
}
textarea:focus {
  outline: none;
  border-radius: 3px;
  border: 2px solid rgba(67, 67, 67, 1);
  padding: 6px 11px;
}
textarea[disabled] {
  background: rgba(20, 21, 22, 1);
  border: 1px solid rgba(29, 29, 29, 1);
}
</style>
