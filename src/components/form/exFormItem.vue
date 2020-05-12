<template>
  <div :class="labelPosition ? labelPosition : $parent.labelPosition">
    <div
      class="label"
      :style="
        labelWidth ? `width:${labelWidth}px` : `width:${$parent.labelWidth}px`
      "
    >
      <label :for="labelFor" v-if="label">{{ label }}</label>
    </div>
    <div>
      <slot></slot>
      <span v-if="isShowMes" class="message">{{ message }}</span>
    </div>
  </div>
</template>
<script>
import AsyncValidator from "async-validator";
import Emitter from "@/mixins/emitter.js";
export default {
  name: "exFormItem",
  mixins: [Emitter],
  inject: ["form"],
  props: {
    label: { type: String, default: "" },
    prop: { type: String },
    labelPosition: { type: String, default: "top" },
    labelWidth: { type: String }
  },
  data() {
    return {
      isRequired: false,
      isShowMes: false,
      message: "",
      labelFor: "input" + new Date().valueOf()
    };
  },
  mounted() {
    if (this.prop) {
      this.dispatch("exForm", "form-add", this);
      this.initialValue = this.fieldValue;
      this.setRules();
    }
  },
  beforeDestroy() {
    this.dispatch("exForm", "form-remove", this);
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
  methods: {
    setRules() {
      let rules = this.getRules();
      if (rules.length) {
        rules.forEach(rule => {
          if (rule.required !== undefined) this.isRequired = rule.required;
        });
      }
      this.$on("form-blur", this.onFieldBlur);
      this.$on("form-change", this.onFieldChange);
    },
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return formRules;
    },
    // 过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    validate(trigger, cb) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) return true;
      const validator = new AsyncValidator({ [this.prop]: rules });
      let model = { [this.prop]: this.fieldValue };
      validator.validate(model, { firstFields: true }, errors => {
        this.isShowMes = errors ? true : false;
        this.message = errors ? errors[0].message : "";
        if (cb) cb(this.message);
      });
    },
    resetField() {
      this.message = "";
      this.form.model[this.prop] = this.initialValue;
    },
    onFieldBlur() {
      this.validate("blur");
    },
    onFieldChange() {
      this.validate("change");
    }
  }
};
</script>

<style lang="scss" scoped>
.label {
  display: block;
  width: 280px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  line-height: 22px;
}
.message {
  line-height: 20px;
  font-size: 12px;
  color: rgba(214, 69, 60, 1);
  font-family: PingFangSC-Regular, PingFang SC;
}
.left {
  display: flex;
  margin: 5px 0;
  .label {
    padding-left: 20px;
    width: 80px;
  }
}
.right {
  display: flex;
  text-align: right;
  .label {
    padding-right: 20px;
    width: 80px;
  }
}
</style>
