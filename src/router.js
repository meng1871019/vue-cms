//导入vue-router包
import VueRouter from 'vue-router'
//router组件
import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopping from './components/tabbar/ShopcarContainer.vue'
import search from './components/tabbar/SearchContainer.vue'

/*home组件*/
import newslist from './components/news/NewsList.vue'
import newsInfo from './components/news/NewsInfo.vue'

/*图片分享*/
import pictureSharing from './components/share/PictureSharing.vue'


/*商品列表*/
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


//创建路由对象
var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopping',component:shopping},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/news/newsInfo',component:newsInfo},
        {path:'/home/pictureSharing',component:pictureSharing},
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }

    ]
})


//把路由对象暴露出去
export default router
