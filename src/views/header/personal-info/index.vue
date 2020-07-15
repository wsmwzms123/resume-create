<template>
  <div class="personal-info">
    <div class="name-block">
      <span class="name">王富贵</span>
      <Icon href="#icon-male" width="24px"/>
    </div>
    <div class="label-block">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item>
           <Icon href="#icon-work" width="14px" right="10"/>
          <span>18年工作经验</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
           <Icon href="#icon-degree" width="14px" right="10"/>
          <span>本科学历</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
           <Icon href="#icon-group" width="14px" right="10"/>
          <span>在职-考虑机会</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-breadcrumb separator="|">
        <el-breadcrumb-item>
           <Icon href="#icon-phone" width="14px" right="10"/>
          <span>12315456511</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
           <Icon href="#icon-wechat" width="14px" right="10"/>
          <span>王富贵123</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
           <Icon href="#icon-mail" width="14px" right="10"/>
          <span>wangfugui@wangfugui.com</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'PersonalInfo',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
  .personal-info {
    flex: 1;
    .name-block {
      font-size: 24px;
      font-weight: 400;
      padding-bottom: 20px;
      .name {
        margin-right: 15px;
      }
    }
    .label-block {
      .el-breadcrumb {
        padding-bottom: 20px;
        /deep/ .el-breadcrumb__separator {
          margin: 0 25px;
        }
      }
    }
  }
</style>
