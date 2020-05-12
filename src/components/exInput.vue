<template>
  <div>
    <div
      v-if="type == 'number'"
      :class="
        size == 'big ' ? 'big_num ex_num_input' : 'default_num ex_num_input'
      "
    >
      <input
        type="text"
        ref="input"
        :disabled="disabled || $parent.$parent.disabled"
        :placeholder="placeholder"
        :value="currentValue1"
        @input="handleInput"
        @blur="handleBlur"
      />
      <div class="ex_click_btn">
        <i class="ex_up_number" v-if="type == 'number'" @click="handle_up"></i>
        <i class="ex_up_center" v-if="type == 'number'"></i>
        <i class="ex_dw_number" v-if="type == 'number'" @click="handle_dw"></i>
      </div>
    </div>
    <input
      v-else
      ref="input"
      :disabled="disabled || $parent.$parent.disabled"
      :type="type"
      :size="size || $parent.$parent.size"
      :placeholder="placeholder"
      :value="currentValue"
      @input="handleInput"
      @blur="handleBlur"
      :class="size == 'big' ? 'big' : 'default'"
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
    value: { type: String }
  },
  watch: {
    value(value) {
      this.currentValue = value;
    }
  },
  data() {
    return {
      currentValue: this.value,
      id: this.label,
      currentValue1: this.value1
    };
  },
  created() {
    this.size = this.$parent.$parent.size;
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
    },
    handle_up() {},
    handle_dw() {}
  }
};
</script>
<style lang="scss" scoped>
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.ex_num_input {
  width: 280px;
  position: relative;
}
.big_num {
  height: 40px;
  input {
    width: 280px;
    height: 40px;
    border-radius: 3px;
    padding: 8px 36px 8px 12px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    line-height: 24px;
    background: #303030;
    border: 1px solid rgba(48, 48, 48, 1);
  }
  input:focus {
    outline: none;
    border-radius: 3px;
    border: 2px solid rgba(67, 67, 67, 1);
    padding: 7px 35px 7px 11px;
  }
  .ex_click_btn {
    width: 24px;
    height: 40px;
    border-radius: 0px 4px 4px 0px;
    border-left: 1px solid rgba(67, 67, 67, 1);
    position: absolute;
    top: 0;
    right: 0;
    .ex_up_number {
      position: absolute;
      left: 9px;
      bottom: 28px;
    }
    .ex_dw_number {
      position: absolute;
      left: 9px;
      bottom: 8px;
    }
  }
}
.default_num {
  height: 32px;
  input {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    padding: 5px 32px 5px 8px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    line-height: 24px;
    background: #303030;
    border: 1px solid rgba(48, 48, 48, 1);
  }
  input:focus {
    outline: none;
    border-radius: 3px;
    border: 2px solid rgba(67, 67, 67, 1);
    padding: 4px 31px 4px 7px;
  }
  .ex_click_btn {
    width: 24px;
    height: 32px;
    border-radius: 0px 4px 4px 0px;
    border-left: 1px solid rgba(67, 67, 67, 1);
    position: absolute;
    top: 0;
    right: 0;
    .ex_up_number {
      position: absolute;
      left: 9px;
      bottom: 20px;
    }
    .ex_dw_number {
      position: absolute;
      left: 9px;
      bottom: 4px;
    }
  }
}

.ex_up_number {
  display: inline-block;
  border-top: 4px solid transparent;
  border-bottom: 4px solid rgba(183, 185, 188, 1);
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}
.ex_up_center {
  display: inline-block;
  width: 100%;
  height: 1px;
  background: rgba(67, 67, 67, 1);
}
.ex_dw_number {
  display: inline-block;
  border-top: 4px solid rgba(183, 185, 188, 1);
  border-bottom: 4px solid transparent;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}
</style>
