<template>
  <div class="wrap">
    <div class="top"></div>
    <div class="content">
      <div class="left">
        <router-link tag="button" to="/button">按钮</router-link>
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;

  .top {
    width: 100%;
    height: 50px;
    background: #111213;
  }
  .content {
    flex: 1;
    display: flex;
    .left {
      width: 200px;
      height: 100%;
      background: #263043;
      > button {
        color: #fff;
        width: 100%;
        height: 40px;
        cursor: pointer;
        border: none;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        background: transparent;
        outline: none;
      }
      > button:hover {
        background: #fff;
        color: #000;
      }
      > button:focus {
        background: #fff;
        color: #000;
      }
      .router-link-active {
        background: #eee;
        color: #000;
      }
    }
    .right {
      flex: 1;
    }
  }
}
</style>
