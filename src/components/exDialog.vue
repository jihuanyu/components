<template>
  <transition name="fade">
    <div v-if="showSelf" class="dialog" :style="{ 'z-index': zIndex }">
      <div class="dialog-mark" @click="closeMyself" :style="{ 'z-index': zIndex + 1 }"></div>

      <div class="dialog-sprite" :style="{ 'z-index': zIndex + 2 }">
        <!-- 标题 -->
        <section v-if="title" class="header">
          {{ title }}
          <img
            src="@/assets/icon/dialog_close.png"
            alt
            class="dialog_close"
            @click="closeMyself"
          />
        </section>

        <!-- 弹窗的主题内容 -->
        <section class="dialog-body">
          <slot></slot>
        </section>

        <!-- 按钮 -->
        <section class="dialog-footer" v-if="showCancel">
          <div class="btn btn-refuse" @click="cancel">
            <span>{{ cancelText }}</span>
          </div>
          <div class="btn btn-confirm" @click="confirm">
            <span>{{ confirmText }}</span>
          </div>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "exDialog",
  props: {
    //弹窗组件是否显示 默认不显示 必传属性
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    showCancel: {
      typs: Boolean,
      default: true,
      required: false
    },
    cancelText: {
      type: String,
      default: "取消",
      required: false
    },
    confirmText: {
      type: String,
      default: "确定",
      required: false
    }
  },
  data() {
    return {
      name: "dialog",
      showSelf: false,
      zIndex: this.getZIndex()
    };
  },
  watch: {
    show: {
      immediate: true,
      handler() {
        this.showSelf = this.show;
      }
    }
  },
  created() {},
  mounted() {
    this.showSelf = this.show;
  },
  methods: {
    /**  每次获取之后 zindex 自动增加 */
    getZIndex() {
      let zIndexInit = 20190315;
      return zIndexInit++;
    },

    /** 取消按钮操作 */
    cancel() {
      this.$emit("cancel", false);
    },

    /** 确认按钮操作 */
    confirm() {
      this.$emit("confirm");
    },

    /** 点击遮罩关闭弹窗 */
    closeMyself() {
      this.$emit("before-close");
    }
  }
};
</script>

<style lang="scss" scoped>
// 弹窗动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// 最外层 设置position定位
// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  // 内容层 z-index要比遮罩大，否则会被遮盖
  .dialog-mark {
    position: absolute;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
}

.dialog-sprite {
  // 移动端使用felx布局
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 480px;
  overflow: hidden;
  z-index: 23456765435;
  background: #111213;
  .header {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    height: 60px;
    line-height: 60px;
    padding-left: 24px;
    color: rgba(255, 255, 255, 0.85);
    position: relative;
  }
  .dialog_close {
    position: absolute;
    right: 24px;
    top: 20px;
    width: 20px;
    cursor: pointer;
  }
  .dialog-body {
    flex: 1;
    padding: 0 15px 20px 15px;
  }
  .dialog-footer {
    position: relative;
    display: flex;
    width: 480px;
    height: 60px;
    justify-content: flex-end;
    .btn {
      cursor: pointer;
      margin-top: 14px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      height: 32px;
      border-radius: 3px;
    }
    .btn-refuse {
      margin-right: 8px;
      border: 1px solid rgba(212, 177, 6, 1);
      background: transparent;
      span {
        display: block;
        color: rgba(212, 177, 6, 1);
        padding: 0px 16px;
        line-height: 32px;
        font-weight: 500;
      }
    }
    .btn-confirm {
      margin-right: 24px;
      background: rgba(212, 177, 6, 1);
      span {
        color: rgba(0, 0, 0, 1);
        padding: 0px 16px;
        line-height: 32px;
        font-weight: 500;
      }
    }
  }
}
</style>
