<template>
    <div class="tabs">
        <ul>
            <router-link to="/home" tag="li">
                <div>
                    <img src="../assets/images/home.svg">
                </div>
                <div>首页</div>
            </router-link>
            <router-link to="/categories" tag="li">
                <div><img src="../assets/images/category.svg"></div>
                <div>分类</div>
            </router-link>
            <router-link to="/shopping-cart" tag="li">
                <div><img src="../assets/images/cart.svg"></div>
                <div>购物车</div>
            </router-link>
            <router-link to="/me" tag="li">
                <div><img src="../assets/images/me.svg"></div>
                <div>我</div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import "./tabs.less"
    export default {}
</script>
