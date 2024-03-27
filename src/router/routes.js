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
import modelFavI from "../inventario/components/Item/PrintItem/modelFav.vue";
import printItemI from "../inventario/components/Item/PrintItem/printItem.vue";
import ItemsMap from '../inventario/components/Item/ItemsMap.vue'


// ARCHIVIO
import MainLayoutArc from '../archivio/layouts/MainLayout.vue'
import ListItemsArc from'../archivio/components/Item/ListItems.vue'
import searchArc from '../archivio/components/Item/SearchItem.vue'
import CreateItemArc from '../archivio/components/Item/CreateItem.vue'
import EditItemArc from '../archivio/components/Item/EditItem.vue'
import userArc from '../archivio/pages/User.vue'
import InfoItemArch from '../archivio/components/Item/InfoItem.vue'
import modelFav from '../archivio/components/Item/PrintItem/modelFav.vue'
import modelSan from '../archivio/components/Item/PrintItem/modelSan.vue'
import modelPres from '../archivio/components/Item/PrintItem/modelPres.vue'
import CreateItem from '../archivio/components/Item/CreateItem.vue'

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
            { path: '/inventario/search/:query', name: 'searchInv', component: searchInv, props: true,meta: { requiresAuth: true } },
            { path: '/inventario/edit/:collection/:id', name: 'editItemInv', component: EditItemInv, props: true, },
            { path: '/inventario/profile', name: 'userInv', component: userInv, props: true, },
            { path: '/inventario/print/single/:id', name: 'printItemI', component: printItemI, props: true, },
            { path: '/inventario/print/pref', name: 'modelFavI', component: modelFavI, props: true, },
            { path: '/inventario/map', name: 'ItemsMap', component: ItemsMap, props: true, },
            
            
        ] },
            { path: '/', component: MainLayoutArc, children: [
                { path: '/archivio/home', name: 'homeArchivio', component: HomeArchivio ,meta: { requiresAuth: true }},
                { path: '/archivio/:collection', name: 'listArc', component: ListItemsArc ,props: true,meta: { requiresAuth: true }},
                { path: '/archivio/search', name: 'searchArc', component: searchArc, props: true,meta: { requiresAuth: true } },
                { path: '/archivio/create/:collection', name: 'createArc', component: CreateItemArc, props: true,meta: { requiresAuth: true } },
                { path: '/archivio/edit/:collection/:id', name: 'editItemArc', component: EditItemArc, props: true, },
                { path: '/archivio/profile', name: 'userArc', component: userArc, props: true,meta: { requiresAuth: true } },
                { path: '/archivio/items/:collection/:id', name: 'InfoItemArch', component: InfoItemArch, props: true, },
                { path: '/archivio/print/favorite', name: 'modelFav', component: modelFav, props: true, },
                { path: '/archivio/print/sanitaria/:id', name: 'modelSan', component: modelSan, props: true, },
                { path: '/archivio/print/prestito/:id', name: 'modelPres', component: modelPres, props: true, },
                { path: '/archivio/print/:collection/create', name: 'CreateArc', component: CreateItem, props: true, },

    ] },
    ] },
       
    

        { path: '/user', name: 'user', component: User ,meta: { requiresAuth: true }},
       


]

export default routes