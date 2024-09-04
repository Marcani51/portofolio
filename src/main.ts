import { createApp } from 'vue'
import './assets/css/style.css'
import 'virtual:svg-icons-register'

import { ref } from 'vue'
import App from './App.vue'
import { Env } from './config';


const meta = document.createElement('meta');
meta.name='naive-ui-style'

document.head.appendChild(meta)

const app = createApp(App)

const plugins=import.meta.glob('./plugins/*.ts',{
    eager:true
})

Object.values(plugins).forEach((module:any)=>{
    app.use(module.default)
})

app.mount('#app')


const currentUrl= window.location.href
const queryParams = new URLSearchParams(new URL(currentUrl).search)
const env = await Env(parseInt(queryParams.get('OrganizationId') as string))
// const env = await Env(2)
console.log('VITE_ENVIRONMENT:', env?.VITE_ENVIRONMENT)
console.log('SECRET_ID:', env?.SECRET_ID)

