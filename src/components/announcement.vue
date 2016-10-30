<template>
    <div class="announcement">
        <label>{{label}}</label>
        <span>{{content}}</span>
    </div>
</template>
<style>
    
</style>
<script type="text/ecmascript-6">
    export default{
        props: ['label', 'content']
    }
</script>