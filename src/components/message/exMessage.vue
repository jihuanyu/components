<template>
  <transition name="message-fade">
    <div v-if="visible" :class="wrapClasses" class="ex_message">
      <img class="message_img" :src="typeImg" />
      <span class>{{ message }}</span>
    </div>
  </transition>
</template>

<script>
const prefixCls = "message";
export default {
  name: "message",
  data() {
    return {
      visible: false,
      type: "info",
      message: "",
      duration: 3000
    };
  },
  computed: {
    typeImg() {
      // return require(`./assets/${this.type}.svg`);
      return "";
    },
    wrapClasses() {
      return [`${prefixCls}`, `${prefixCls}-${this.type}`];
    }
  },
  methods: {
    setTimer() {
      setTimeout(() => {
        this.close(); // 3000ms之后调用关闭方法
      }, this.duration);
    },
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
      }, 500);
    }
  },
  mounted() {
    this.setTimer(); // 挂载的时候就开始计时，3000ms后消失
  }
};
</script>

<style lang="scss" scoped>
.message-fade-enter-active,
.message-fade-leave-active {
  transition: 0.5s;
}

.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
}
.ex_message {
  font-size: 14px;
  min-width: 432px;
  min-height: 40px;
  background: rgba(212, 177, 6, 0.08);
  border-radius: 3px;
  position: fixed;
  right: 30px;
  top: 20px;
  z-index: 1000000;
  padding: 10px 15px 10px 20px;
}
.message-success {
  background: #f0f9eb;
  border: 1px solid #e1f3d8;
  color: #67c23a;
}
.message-warn {
  background: #fdf6ec;
  border: 1px solid #faedc8;
  color: #e6a23c;
}
.message-info {
  background: #edf2fc;
  border: 1px solid #ebeef5;
  color: #909399;
}

.message-error {
  background: #fef0f0;
  border: 1px solid #fde2e2;
  color: #f56c6c;
}
</style>
