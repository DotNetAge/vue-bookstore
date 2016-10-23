<template>
    <div v-if="page_data">
        <div class="page-header">
            <slider :slides="page_data.top"></slider>
        </div>
        <div class="announces">
            <announcement :announcement="page_data.announcement"></announcement>
        </div>
        <div class="recently">
            <book-list :books="page_data.recently"
                       :heading="最新更新">
            </book-list>
        </div>
        <div class="recommended">
            <book-list :books="page_data.recommended"
                       :heading="编辑推荐">
            </book-list>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Announcement from "./announcement.vue"
    import Slider from "./slider.vue"
    import BookList from "./booklist.vue"

    export default{
        data () {
            return {
                page_data: undefined
            }
        },
        mounted(){
            document.title = "Book store"
        },
        created() {

//            this.$http.get('/books/promotions', (res)=> {
//                this.page_data = res.data
//            }, (error)=> {
//                // 处理出错信息
//            })

        },
        components: {Announcement, Slider, BookList}
    }
</script>