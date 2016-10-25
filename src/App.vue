<template>
    <div id="app">
        <tabs></tabs>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Tabs from "./components/tabs.vue"
    import "./assets/less/site.less"
    export default {
        components: {Tabs}
    }
</script>

