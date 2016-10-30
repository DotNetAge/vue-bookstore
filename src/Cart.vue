<template>
    <div>
    	<div v-if="is_empty" class="empty">
    		您的购物车空空如也
    	</div>
    </div>
</template>
<style>
	.empty {
		color: #ccc;
		text-align: center;
		margin: 50% auto;
		height: 100%;
		vertical-align: middle;
		display: block;
		background: transparent;
		font-size: 24px;
	}
</style>
<script type="text/ecmascript-6">
    export default{
    	data (){
    		return {
    			storeKey:"VUE-CART",
    			items:[]
    		}
    	},
    	computed: {
    		is_empty () {
    			return this.items == undefined || this.items.length == 0
    		}
    	},
    	created () {
    		if (localStorage[this.storeKey]!=undefined) {
    			this.items =JSON.parse(localStorage[this.storeKey])
    		}
    	},
    	mehtods: {
    		saveStore () {
    			localStorage.setItem(this.storeKey,JSON.stringify(this.items))
    		},
    		checkout() {
    		}	
    	}
    }
</script>