<template>
    <div class="book-list">
        <div class="header">
            <div class="heading">{{ heading }}</div>
            <div class="more">更多...</div>
        </div>
        <div class="book-items">
            <router-link class="book" v-for="book in books"
                         tag="div"
                         :to="{ name:'BookDetail' , params:{ id: book.id } }">
                <div class="cover">
                    <img :src="book.img_url"/>
                </div>
                <div class="title">{{ book.title }}</div>
                <div class="authors">{{ book.authors | join }}</div>
            </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import "./booklist.less"

    export default{
        props: ['heading', 'books'],
        filters: {
            join(args){
                return args.join(',')
            }
        }
    }
</script>