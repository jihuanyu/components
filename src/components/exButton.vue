<template>
  <button class="ex_button" :type="type" @click="button_click" :class="size" :shape="round">
    <span v-if="icon">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconLink" />
      </svg>
      <slot class="ex_button_content" :ref="'icon_content'"></slot>
    </span>

    <slot class="ex_button_content" v-else></slot>
  </button>
</template>

<script>
export default {
  name: "exButton",
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "medium "
    },
    round: {
      type: String,
      default: ""
    },
    plain: {
      type: String,
      default: "medium "
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconLink() {
      return "#" + this.icon;
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
  font-family: PingFangSC-Medium, PingFang SC;
  border-radius: 3px;
  font-weight: 500;
  box-sizing: border-box;
  margin: 5px 10px;
  outline: none;
  border: none;
  cursor: pointer;
  border: 1px solid rgba(48, 48, 48, 1);
}
.ex_button:disabled {
  cursor: not-allowed;
}

.mini[shape="round"] {
  border-radius: 12px;
}
.medium[shape="round"] {
  border-radius: 16px;
}
.large[shape="round"] {
  border-radius: 20px;
}
/* 大 */
.large {
  font-size: 16px;
  padding: 8px 24px;
}

/* 中 */
.medium {
  font-size: 14px;
  padding: 5px 16px;
}

/* 小 */
.mini {
  font-size: 14px;
  padding: 2px 11px;
}

/* 主要按钮 */
.ex_button[type="primary"] {
  background: rgba(212, 177, 6, 1);
  border: none;
  border: 2px solid transparent;
}
.ex_button[type="primary"]:hover {
  background: rgba(217, 186, 32, 1);
  border: 2px solid transparent;
}
.ex_button[type="primary"]:active {
  background: rgba(188, 158, 10, 1);
  border: 2px solid transparent;
}
.ex_button[type="primary"]:focus {
  background: rgba(217, 186, 32, 1);
  border-radius: 3px;
  border: 2px solid rgba(251, 220, 70, 1);
}
.ex_button[type="primary"]:disabled {
  background: rgba(85, 71, 0, 1);
  color: #3a3102;
  cursor: not-allowed;
}

/* 幽灵按钮 */
.ex_button[type="ghost"] {
  border: 1px solid rgba(212, 177, 6, 1);
  background: transparent;
  color: rgba(212, 177, 6, 1);
}
.ex_button[type="ghost"]:hover {
  border: 1px solid rgba(217, 186, 32, 1);
  background: transparent;
}
.ex_button[type="ghost"]:active {
  border: 1px solid rgba(188, 158, 10, 1);
}
.large[type="ghost"]:focus {
  border: 2px solid rgba(217, 186, 32, 1);
  padding: 7px 23px;
}
.medium[type="ghost"]:focus {
  border: 2px solid rgba(217, 186, 32, 1);
  padding: 4px 15px;
}
.mini[type="ghost"]:focus {
  border: 2px solid rgba(217, 186, 32, 1);
  padding: 1px 10px;
}
.ex_button[type="ghost"]:disabled {
  border: 1px solid rgba(85, 71, 0, 1);
  color: #554700;
  cursor: not-allowed;
}

/* 危险按钮 */
.ex_button[type="error"] {
  background: rgba(214, 69, 60, 1);
  border: 2px solid transparent;
}
.ex_button[type="error"]:hover {
  background: rgba(235, 81, 72, 1);
  border: 2px solid transparent;
}
.ex_button[type="error"]:active {
  background: rgba(185, 50, 41, 1);
  border: 2px solid transparent;
}
.ex_button[type="error"]:focus {
  background: rgba(235, 81, 72, 1);
  border: 2px solid rgba(251, 118, 110, 1);
}
.ex_button[type="error"]:disabled {
  background: rgba(68, 4, 0, 1);
  color: #000;
  border: 2px solid transparent;
  cursor: not-allowed;
}

/* 买按钮 */
.ex_button[type="success"] {
  background: rgba(20, 180, 101, 1);
  border: 2px solid transparent;
}
.ex_button[type="success"]:hover {
  background: rgba(31, 200, 117, 1);
  border: 2px solid transparent;
}
.ex_button[type="success"]:active {
  background: rgba(10, 152, 82, 1);
  border: 2px solid transparent;
}
.ex_button[type="success"]:focus {
  background: rgba(31, 200, 117, 1);
  border: 2px solid rgba(53, 228, 142, 1);
}
.ex_button[type="success"]:disabled {
  background: rgba(10, 54, 32, 1);
  color: #000;
  border: 2px solid transparent;
  cursor: not-allowed;
}

/* 次按钮 */
.ex_button[type="info"] {
  background: rgba(38, 38, 38, 1);
  color: #d4b106;
  border: 2px solid transparent;
}
.ex_button[type="info"]:hover {
  background: rgba(48, 48, 48, 1);
  color: #d4b106;
  border: 2px solid transparent;
}
.ex_button[type="info"]:active {
  background: rgba(29, 29, 29, 1);
  color: #d4b106;
  border: 2px solid transparent;
}
.ex_button[type="info"]:focus {
  background: rgba(48, 48, 48, 1);
  border: 2px solid rgba(67, 67, 67, 1);
  color: #d4b106;
}
.ex_button[type="info"]:disabled {
  background: rgba(16, 16, 16, 1);
  color: #d4b106;
  border: 2px solid rgba(67, 67, 67, 1);
  cursor: not-allowed;
}

/* 图标按钮 */
.mini[type="icon"] {
  border: 1px solid rgba(48, 48, 48, 1);
  .icon {
    width: 16px;
    height: 16px;
  }
  .icon::after {
    margin-right: 4px;
  }
}

.medium[type="icon"] {
  border: 1px solid rgba(48, 48, 48, 1);
  .icon {
    width: 16px;
    height: 16px;
  }
}
.large[type="icon"] {
  border: 1px solid rgba(48, 48, 48, 1);
  .icon {
    width: 20px;
    height: 20px;
  }
}
.ex_button[type="icon"]:hover {
  border: 1px solid rgba(67, 67, 67, 1);
}
.ex_button[type="icon"]:active {
  border: 1px solid rgba(38, 38, 38, 1);
}
.mini[type="icon"]:focus {
  border: 2px solid rgba(67, 67, 67, 1);
  padding: 1px 10px;
  .icon {
    width: 16px;
    height: 16px;
  }
}
.medium[type="icon"]:focus {
  border: 2px solid rgba(67, 67, 67, 1);
  padding: 4px 15px;
  .icon {
    width: 16px;
    height: 16px;
  }
}
.large[type="icon"]:focus {
  border: 2px solid rgba(67, 67, 67, 1);
  padding: 7px 23px;
  .icon {
    width: 20px;
    height: 20px;
  }
}
.ex_button[type="icon"]:disabled {
  border: 1px solid rgba(29, 29, 29, 1);
  cursor: not-allowed;
}
</style>
