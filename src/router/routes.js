import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import User from '../pages/User.vue'

import HomeInventario from '../inventario/pages/Home.vue'
import HomeArchivio from '../archivio/pages/Home.vue'
// authentication
import Login from '../pages/Login.vue'
import Logout from '../pages/Logout.vue'

// Inventario
import MainLayoutInv from '../inventario/layouts/MainLayout.vue'
import ListItemsInv from'../inventario/components/Item/ListItems.vue'
import CreateItemInv from '../inventario/components/Item/CreateItem.vue'
import HomeInv from '../inventario/pages/Home.vue'
import searchInv from '../inventario/components/Item/SearchItem.vue'
import EditItemInv from '../inventario/components/Item/EditItem.vue'
import userInv from '../inventario/pages/User.vue'

const routes = [
        { path: '/login/:program',  name: 'login', component: Login,props:true},
        { path: '',  name: 'home', component: Home,props:true  },
        { path: '/logout',  name: 'logout', component: Logout },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
        { path: '/archivio', name: 'homeArchivio', component: HomeArchivio ,meta: { requiresAuth: true }},
        // INVENTARIO
    { path: '/', component: MainLayoutInv, children: [
        { path: '/inventario', name: 'homeInventario', component: HomeInventario,meta: { requiresAuth: true }},
            { path: '/inventario/home',  name: 'homeInv', component: HomeInv,props:true  },
            { path: '/inventario/:collection', name: 'listInv', component: ListItemsInv ,props: true,meta: { requiresAuth: true }},
            { path: '/inventario/create/:collection', name: 'createInv', component: CreateItemInv, props: true,meta: { requiresAuth: true } },
            { path: '/inventario/search', name: 'searchInv', component: searchInv, props: true,meta: { requiresAuth: true } },
            { path: '/inventario/edit/:collection/:id', name: 'editItemInv', component: EditItemInv, props: true, },
            { path: '/inventario/profile', name: 'userInv', component: userInv, props: true, },

       
    ] },

        { path: '/user', name: 'user', component: User ,meta: { requiresAuth: true }},
       


]

export default routes