<template>
    <svg aria-hidden="true">
      <use :href="symbolId" />
    </svg>
  </template>
  
  <script lang="ts">
    import { defineComponent, computed } from 'vue'
    export default defineComponent({
      name: 'SSvg',
      props: {
        prefix: {
          type: String,
          default: 'icon',
        },
        name: {
          type: String,
          required: true,
        }
      },
      setup(props) {
        const symbolId = computed(() => `#${props.prefix}-${props.name}`)
        return { symbolId }
      },
    })
  </script>