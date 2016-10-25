import HomePageData from "./home.json"

var slider_images = require.context('./sliders', false, /\.(png|jpg|gif|svg)$/)
var cover_images = require.context('./covers', false, /\.(png|jpg|gif|svg)$/)


HomePageData.top.forEach((x)=> {
    x.img_url = slider_images('./' + x.img_url)
})

HomePageData.promotions.forEach((x)=> {
    x.img_url = cover_images('./' + x.img_url)
})

export default {
    getHomeData() {
        return HomePageData
    }
}