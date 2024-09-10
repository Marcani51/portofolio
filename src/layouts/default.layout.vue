<script setup lang="ts"></script>
<template>
<!-- 
    <div>
      <router-view />
    </div> -->
  <n-space vertical>
    <n-layout>
        <n-layout-header class="w-screen">
            <port-compt-header></port-compt-header>
        </n-layout-header>
        <n-layout-content class="m-0 bg-[#0a192f]">
            <main class="min-h-[100vh-5rem] w-screen overflow-hidden px-[150px]">
                <router-view /> 
            </main>
        </n-layout-content>
    </n-layout>
  </n-space>
</template>
