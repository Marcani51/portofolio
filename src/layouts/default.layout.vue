<script setup lang="ts"></script>
<template>
  <n-space vertical>
    <n-layout>
        <n-layout-header class="w-screen">
            <port-compt-header></port-compt-header>
        </n-layout-header>
        <n-layout-content class="m-0 bg-[#0a192f]">
            <main class="min-h-[100vh-5rem] overflow-x-hidden px-[150px] scrollAble" id="scrollStyle" :style="{ height: `calc(100vh - 54px)`} ">
                <router-view /> 
            </main>
        </n-layout-content>
    </n-layout>
  </n-space>
</template>
