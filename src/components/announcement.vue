<template>
    <div class="announcement">
        <label>{{label}}</label>
        <span>{{content}}</span>
    </div>
</template>
<style>
    .announcement {
        font-size: 12px;
    }

    .announcement > label {
        padding: 8px 10px;
        margin: 3px 10px;
        background: #FACCB7;
        border-radius: 3px;
        color: #FF5102;
    }

    .announcement > span {
        padding: 8px 10px;
        color: #333;
    }
</style>
<script type="text/ecmascript-6">
    export default{
        props: ['label', 'content']
    }
</script>