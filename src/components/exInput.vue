<template>
  <div>
    <input
      ref="input"
      :disabled="disabled"
      :type="type"
      :size="size"
      :placeholder="placeholder"
      :value="currentValue"
      @input="handleInput"
      @blur="handleBlur"
      :class="size === 'default' ? 'default' : 'big'"
    />
  </div>
</template>
<script>
import Emitter from "@/mixins/emitter.js";
export default {
  name: "exInput",
  mixins: [Emitter],
  props: {
    type: { type: String, default: "text" },
    size: { type: String, default: "default" },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String },
    max: { type: Number },
    value: { type: String }
  },
  watch: {
    value(value) {
      this.currentValue = value;
    }
  },
  data() {
    return { currentValue: this.value, id: this.label };
  },
  mounted() {
    if (this.$parent.labelFor) this.$refs.input.id = this.$parent.labelFor;
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("exFormItem", "form-change", value);
    },
    handleBlur() {
      this.dispatch("exFormItem", "form-blur", this.currentValue);
    }
  }
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
.default {
  width: 280px;
  height: 32px;
  border-radius: 3px;
  padding: 5px 8px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 24px;
  background: #303030;
  border: 1px solid rgba(48, 48, 48, 1);
}
.default:focus {
  outline: none;
  border-radius: 3px;
  border: 2px solid rgba(67, 67, 67, 1);
  padding: 4px 7px;
}
.big {
  width: 280px;
  height: 40px;
  border-radius: 3px;
  padding: 8px 12px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  line-height: 24px;
  background: #303030;
  border: 1px solid rgba(48, 48, 48, 1);
}
.big:focus {
  outline: none;
  border-radius: 3px;
  border: 2px solid rgba(67, 67, 67, 1);
  padding: 7px 11px;
}
input:hover {
  border-color: rgba(67, 67, 67, 1);
}

input[disabled] {
  background: rgba(20, 21, 22, 1);
  border: 1px solid rgba(29, 29, 29, 1);
}
input {
  caret-color: rgba(67, 67, 67, 1);
  -moz-appearance: textfield;
}
</style>
