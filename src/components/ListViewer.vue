<template>
  <pre class="code">{{ displayed }}</pre>
</template>

<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
  value:{
    type: Array,
    required:true
  }
})
const displayed = computed(()=>
  JSON.stringify(props.value,null,2)
)
</script>

<style lang="scss" scoped>
.code {
  overflow: auto;
  width: 100%;
  max-height: 300px;
  background: #eaeaea;
  box-sizing: border-box;
  padding: 8px;
}

</style>