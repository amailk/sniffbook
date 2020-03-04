import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'


const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
];

export default routes;