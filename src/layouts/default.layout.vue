<script setup lang="ts"></script>
<template>
<!-- 
    <div>
      <router-view />
    </div> -->
  <n-space vertical>
    <n-layout>
        <n-layout-header>
            <port-compt-header></port-compt-header>
        </n-layout-header>
        <n-layout-content class="m-0 p-0">
            <main class="min-h-[100vh-5rem] w-screen overflow-hidden pb-[1rem]">
                <router-view /> 
            </main>
        </n-layout-content>
    </n-layout>
  </n-space>
</template>
