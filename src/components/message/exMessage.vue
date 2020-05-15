<template>
  <transition name="message-fade">
    <div
      v-if="visible && action == 'default'"
      :class="wrapClasses"
      class="ex_message"
    >
      <img class="message_img" :src="typeImg" />
      <span class>{{ message }}</span>
    </div>
    <div
      v-if="visible && action == 'close'"
      :class="wrapClasses"
      class="ex_message"
    >
      <img class="message_img" :src="typeImg" />
      <span class>{{ message }}</span>
      <img
        :src="require('@/assets/message/close.png')"
        alt
        class="message_close"
        @click="message_close"
      />
    </div>
    <div
      v-if="visible && action == 'title'"
      :class="wrapClasses"
      class="ex_message_title"
    >
      <div>
        <img class="message_img" :src="typeImg" />
        <h4>{{ title }}</h4>
        <img
          :src="require('@/assets/message/close.png')"
          alt
          class="message_close"
          @click="message_close"
        />
      </div>
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
      action: "default",
      visible: false,
      type: "info",
      message: "",
      duration: 3000,
      tiile: ""
    };
  },
  computed: {
    typeImg() {
      return require(`@/assets/message/${this.type}.png`);
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
    },
    message_close() {
      this.close();
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
  max-width: 640px;
  min-height: 40px;
  max-height: 106px;
  background: rgba(212, 177, 6, 0.08);
  border-radius: 3px;
  position: fixed;
  right: 30px;
  top: 20px;
  z-index: 1000000;
  align-items: center;
  display: flex;
  .message_img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0 12px 0 16px;
  }
  span {
    display: inline-block;
    line-height: 20px;
    margin-right: 20px;
  }
  .message_close {
    position: absolute;
    right: 16px;
    padding-left: 32px;
    cursor: pointer;
  }
}

.message-success {
  background: rgba(20, 180, 101, 0.08);
  color: #fff;
  border-radius: 3px;
}
.message-warn {
  background: rgba(212, 177, 6, 0.08);
  color: #fff;
  border-radius: 3px;
}
.message-info {
  background: rgba(23, 125, 220, 0.08);
  color: #fff;
  border-radius: 3px;
}

.message-error {
  background: rgba(214, 69, 60, 0.08);
  color: #fff;
  border-radius: 3px;
}
.ex_message_title {
  font-size: 14px;
  min-width: 432px;
  max-width: 640px;
  height: 76px;
  max-height: 106px;
  background: rgba(212, 177, 6, 0.08);
  border-radius: 3px;
  position: fixed;
  right: 30px;
  top: 20px;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 12px;
    height: 24px;
    display: flex;
    align-items: center;
    .message_img {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin: 0 12px 0 16px;
    }
    h4 {
      line-height: 20px;
      margin-right: 20px;
    }
    .message_close {
      position: absolute;
      right: 16px;
      cursor: pointer;
    }
  }
  > span {
    margin: 8px 52px 12px;
  }
}
</style>
