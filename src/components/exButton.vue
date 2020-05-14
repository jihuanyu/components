<template>
  <div class="ex_button" :type="type" @click="button_click">
    <slot class="ex_button_content"></slot>
  </div>
</template>

<script>
export default {
  name: "exButton",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  methods: {
    button_click() {
      this.$emit("click");
    }
  }
};
</script>

<style>
.ex_button {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  border: 1px solid #000;
  font-family: PingFangSC-Medium, PingFang SC;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  box-sizing: border-box;
  padding: 0 16px;
  margin: 5px 10px;
}
.ex_button[type="submit"] {
  background: #d4b106;
  border: none;
}
.ex_button[type="cancel"] {
  border: 1px solid rgba(212, 177, 6, 1);
  background: transparent;
  color: rgba(212, 177, 6, 1);
}
.ex_button_content {
}
</style>
