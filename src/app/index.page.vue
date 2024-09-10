<route lang="json5">
{
  meta: {
    layout: 'default.layout'
  }
}
</route>

<script setup lang="ts">
const router= useRouter()
const data = ref('')
// router.push("/success/")
</script>
<template>
  <port-compt-home></port-compt-home>
  <!-- <div class="flex flex-col">
    <div>
      <port-compt-header></port-compt-header>
    </div>
    <div class="bg-white">
      <h1>TEST</h1>
    </div>
  </div> -->
</template>
