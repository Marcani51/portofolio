<route lang="yaml">
    meta:
      layout: auth.layout
    </route>
    
    <script setup lang="ts">
    import{ref} from 'vue'
    const payload = ref<any>({})
    </script>
    
    <template>
      <n-space vertical :size="0">
        <n-space class="p-4" vertical :size="24">
          <n-h1>Hello world</n-h1>
          <n-h1>Hello world</n-h1>
          <n-h1>Hello world</n-h1>
          <n-h1>Hello world</n-h1>
        </n-space>
      </n-space>
    </template>
    