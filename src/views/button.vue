<template>
  <div class="wrap">
    <h2>Button 按钮</h2>
    <span>常用的操作按钮。</span>
    <!-- 基础用法 -->
    <div class="base">
      <h3 style="font-weight:normal">基础用法</h3>
      <span>基础的按钮用法。</span>
      <div class="mediumBox">
        <ex-button>普通</ex-button>
        <ex-button type="primary">主要</ex-button>
        <ex-button type="error">失败</ex-button>
        <ex-button type="success">成功</ex-button>
        <ex-button type="ghost">幽灵</ex-button>
        <ex-button type="info">信息</ex-button>
        <ex-button type="icon" icon="icon-icon-test3"></ex-button>
        <ex-button type="icon" icon="icon-icon-test3">图文</ex-button>
        <br />
        <ex-button shape="round">普通</ex-button>
        <ex-button type="primary" shape="round">主要</ex-button>
        <ex-button type="error" shape="round">失败</ex-button>
        <ex-button type="success" shape="round">成功</ex-button>
        <ex-button type="ghost" shape="round">幽灵</ex-button>
        <ex-button type="info" shape="round">信息</ex-button>
        <ex-button type="icon" icon="icon-icon-test3" shape="round"></ex-button>
        <ex-button type="icon" icon="icon-icon-test3" shape="round">图文</ex-button>
      </div>
    </div>
    <!-- 禁用状态 -->
    <div class="disabled">
      <h3 style="font-weight:normal">禁用状态</h3>
      <span>按钮不可用状态。</span>
      <div class="mediumBox">
        <ex-button disabled>普通</ex-button>
        <ex-button type="primary" disabled>主要</ex-button>
        <ex-button type="error" disabled>失败</ex-button>
        <ex-button type="success" disabled>成功</ex-button>
        <ex-button type="ghost" disabled>幽灵</ex-button>
        <ex-button type="info" disabled>信息</ex-button>
        <ex-button type="icon" disabled icon="icon-icon-test3">图文</ex-button>
        <br />
        <ex-button shape="round" disabled>普通</ex-button>
        <ex-button type="primary" shape="round" disabled>主要</ex-button>
        <ex-button type="error" shape="round" disabled>失败</ex-button>
        <ex-button type="success" shape="round" disabled>成功</ex-button>
        <ex-button type="ghost" shape="round" disabled>幽灵</ex-button>
        <ex-button type="info" shape="round" disabled>信息</ex-button>
        <ex-button type="icon" icon="icon-icon-test3" shape="round" disabled></ex-button>
        <ex-button type="icon" icon="icon-icon-test3" shape="round" disabled>图文</ex-button>
      </div>
    </div>
    <!-- 不同尺寸 -->
    <div class="disabled">
      <h3 style="font-weight:normal">不同尺寸</h3>
      <span>
        Button
        组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
      </span>
      <div class="mediumBox">
        <ex-button size="mini">普通</ex-button>
        <ex-button type="primary" size="mini">主要</ex-button>
        <ex-button type="error" size="mini">失败</ex-button>
        <ex-button type="success" size="mini">成功</ex-button>
        <ex-button type="ghost" size="mini">幽灵</ex-button>
        <ex-button type="info" size="mini">信息</ex-button>
        <ex-button type="icon" icon="icon-icon-test3" size="mini"></ex-button>
        <ex-button type="icon" icon="icon-icon-test3" size="mini">图文</ex-button>
        <br />
        <ex-button size="large">普通</ex-button>
        <ex-button type="primary" size="large">主要</ex-button>
        <ex-button type="error" size="large">失败</ex-button>
        <ex-button type="success" size="large">成功</ex-button>
        <ex-button type="ghost" size="large">幽灵</ex-button>
        <ex-button type="info" size="large">信息</ex-button>
        <ex-button type="icon" icon="icon-icon-test3" size="large"></ex-button>
        <ex-button type="icon" icon="icon-icon-test3" size="large">图文</ex-button>
      </div>
    </div>
  </div>
</template>

<script>
import exButton from "@/components/exButton";
export default {
  components: {
    exButton
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding-left: 200px;
  padding-right: 600px;
  > h2 {
    margin: 10px 0 5px 0;
  }
  > span {
    font-size: 14px;
    color: rgb(100, 97, 97);

    margin-bottom: 50px;
  }
  .base {
    > h3 {
      font-weight: 500;
      margin-bottom: 20px;
    }
    > span {
      color: rgb(100, 97, 97);
      font-size: 14px;
    }
    .mediumBox {
      margin-top: 20px;
      border: 1px solid #ccc;
      padding: 10px;
    }
  }
  .disabled {
    margin-top: 30px;
    > h3 {
      font-weight: 500;
      margin-bottom: 20px;
    }
    > span {
      color: rgb(100, 97, 97);
      font-size: 14px;
    }
    .mediumBox {
      margin-top: 20px;
      border: 1px solid #ccc;
      padding: 10px;
    }
  }
}
</style>
