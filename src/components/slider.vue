<template>
    <div class="slide-wrapper" ref="slider">
        <router-link v-for="slide in slides" :to="{ name: 'book_detail' , params:{id: slide.id } }">
            <div class="slide">
                <img :src="slide.img_url"/>
            </div>
        </router-link>
    </div>
</template>
<style></style>
<script type="text/ecmascript-6">
    export default{
        props: ['slides'],
        mounted(){
            //new Swiper(this.$refs.slider, {
            //})
        }
    }
</script>