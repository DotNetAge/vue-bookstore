<template>
    <div id="app">
        <router-view class="content-view"></router-view>
        <app-tabs></app-tabs>
    </div>
</template>

<script>
    import AppContent from "./components/AppContent.vue"
    import AppTabs from "./components/AppTabs.vue"
    export default {
        data () {
            return {
                msg: 'Hello Vue!'
            }
        },
        components: {AppContent, AppTabs}
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
