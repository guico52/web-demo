import {createWebHashHistory,createRouter} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        children:[
            {
                name: 'article',
                path: 'article:id',
                component: () => import('@/views/Article.vue')
            }
        ]
    },{
        name: 'login',
        path: '/login',
        component: () => import('@/views/Login.vue'),
        children: [
            {
                name: 'loginForm',
                path: 'loginForm',
                component: () => import('@/components/user/LoginForm.vue')
            },{
                name: 'registerForm',
                path: 'registerForm',
                component: () => import('@/components/user/RegisterForm.vue')
            }
        ]
    },{
        name:'backstage',
        path:'/backstage',
        component: () => import('@/views/Backstage.vue'),
        children: [
            {
                name: 'userManage',
                path: 'userManage',
                component: () => import('@/components/backstage/UserManage.vue')
            },{
                name: 'addArticle',
                path: 'addArticle',
                component: () => import('@/components/backstage/AddArticle.vue')
            },{
                name: 'articleTypeManage',
                path: 'articleTypeManage',
                component: () => import('@/components/backstage/ArticleTypeManage.vue')
            },{
                name: 'articleList',
                path: 'articleList',
                component: () => import('@/components/backstage/ArticleList.vue')
            },{
                name: 'accountManage',
                path: 'accountManage',
                component: () => import('@/components/backstage/AccountManage.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})



export default router