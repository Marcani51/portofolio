import { VueQueryPlugin } from "@tanstack/vue-query"
import { definePlugin } from "../core"

export default definePlugin((app) => {
    app.use(VueQueryPlugin)
})
