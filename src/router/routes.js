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
import infoItemInv from '../inventario/components/Item/InfoItem.vue'


// ARCHIVIO
import MainLayoutArc from '../archivio/layouts/MainLayout.vue'
import ListItemsArc from'../archivio/components/Item/ListItems.vue'
import searchArc from '../archivio/components/Item/SearchItem.vue'
import CreateItemArc from '../archivio/components/Item/CreateItem.vue'
import EditItemArc from '../archivio/components/Item/EditItem.vue'
import userArc from '../archivio/pages/User.vue'
import InfoItemArch from '../archivio/components/Item/InfoItem.vue'
import model1Arch from '../archivio/components/Item/PrintItem/model1.vue'

const routes = [
        { path: '/login/:program',  name: 'login', component: Login,props:true},
        { path: '',  name: 'home', component: Home,props:true  },
        { path: '/logout',  name: 'logout', component: Logout },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
        // INVENTARIO
    { path: '/', component: MainLayoutInv, children: [

    { path: '/', component: MainLayoutInv, children: [
        { path: '/inventario', name: 'homeInventario', component: HomeInventario,meta: { requiresAuth: true }},
            { path: '/inventario/home',  name: 'homeInv', component: HomeInv,props:true  },
            { path: '/inventario/:collection', name: 'listInv', component: ListItemsInv ,props: true,meta: { requiresAuth: true }},
            { path: '/inventario/create/:collection', name: 'createInv', component: CreateItemInv, props: true,meta: { requiresAuth: true } },
            { path: '/inventario/search', name: 'searchInv', component: searchInv, props: true,meta: { requiresAuth: true } },
            { path: '/inventario/edit/:collection/:id', name: 'editItemInv', component: EditItemInv, props: true, },
            { path: '/inventario/profile', name: 'userInv', component: userInv, props: true, },
            { path: '/inventario/items/:collection/:id', name: 'infoItemInv', component: infoItemInv, props: true, },
            
            
        ] },
            { path: '/', component: MainLayoutArc, children: [
                { path: '/archivio/home', name: 'homeArchivio', component: HomeArchivio ,meta: { requiresAuth: true }},
                { path: '/archivio/:collection', name: 'listArc', component: ListItemsArc ,props: true,meta: { requiresAuth: true }},
                { path: '/archivio/search', name: 'searchArc', component: searchArc, props: true,meta: { requiresAuth: true } },
                { path: '/archivio/create/:collection', name: 'createArc', component: CreateItemArc, props: true,meta: { requiresAuth: true } },
                { path: '/archivio/edit/:collection/:id', name: 'editItemArc', component: EditItemArc, props: true, },
                { path: '/archivio/profile', name: 'userArc', component: userArc, props: true,meta: { requiresAuth: true } },
                { path: '/archivio/items/:collection/:id', name: 'InfoItemArch', component: InfoItemArch, props: true, },
                { path: '/archivio/print/', name: 'model1Arch', component: model1Arch, props: true, },

    ] },
    ] },
       
    

        { path: '/user', name: 'user', component: User ,meta: { requiresAuth: true }},
       


]

export default routes