<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
import VCLiveTime from 'valaxy-addon-components/components/VCLiveTime.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
	<div><a href="https://icp.gov.moe/?keyword=20247120" target="_blank">萌ICP备20247120号</a></div>
    
	<div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>

    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>

    <VCLiveTime mt="2" start-time="2020-01-12">
      <template #live-time-before>
        <span>本站已运行</span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>