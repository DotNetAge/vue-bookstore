<template>
    <div v-if="page_data">
        <div class="section">
            <slider :slides="page_data.top"></slider>
            <announcement label="快讯" content="今日上架的图书全部8折"></announcement>
        </div>
        <div class="section">
            <book-list :books="page_data.promotions"
                       heading="最新更新">
            </book-list>
        </div>
        <div class="section">
            <book-list :books="page_data.recommended"
                       heading="编辑推荐">
            </book-list>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Announcement from "./announcement.vue"
    import Slider from "./slider.vue"
    import BookList from "./booklist.vue"

    import faker from "../fixtures/faker"

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

            this.page_data = faker.getHomeData()

//            this.$http.get('/books/promotions', (res)=> {
//                this.page_data = res.data
//            }, (error)=> {
//                // 处理出错信息
//            })

        },
        components: {Announcement, Slider, BookList}
    }
</script>