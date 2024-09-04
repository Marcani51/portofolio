<script setup lang="ts">
import type { GlobalThemeOverrides, MessageProviderProps } from 'naive-ui'
import { defaultTheme } from './theme'
import { computed, ref } from 'vue';

const procedureKitTheme = computed<GlobalThemeOverrides>(() => {
  return {
    ...defaultTheme,
    common: {
      primaryColor: '#2A3593',
      primaryColorHover: '#1c227e',
      primaryColorPressed: '#3b49ab',
      primaryColorSuppl: '#2A3593',

      infoColor: '#4D9B35',
      infoColorHover: '#367921',
      infoColorPressed: '#57aa3d',
      infoColorSuppl: '#4D9B35'
    },
    Card: {
      paddingMedium: '16px'
    },
    Checkbox: {
      colorChecked: '#00BD84',
      border: 'solid 1px #89939E',
      borderChecked: 'solid 1px #00BD84',
      borderRadius: '4px',
      colorDisabledChecked: '#B2B6D1',
      checkMarkColorDisabledChecked: '#FFFFFF',
      textColorDisabled: '#333639'
    },
    Radio: {
      colorActive: '#FFFFFF',
      dotColorActive: '#00BD84',
      boxShadowActive: 'inset 0 0 0 1px #00BD84',
      boxShadowHover: 'inset 0 0 0 1px #00BD84',
      boxShadow: 'inset 0 0 0 1px #89939E'
    }
  }
})
const placement = ref<MessageProviderProps['placement']>('top-right')

</script>

<template>
    <n-notification-provider>
    <n-dialog-provider>
      <n-message-provider :placement="placement">
        <n-config-provider :theme-overrides="procedureKitTheme">
          <router-view />
        </n-config-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-notification-provider>
</template>


