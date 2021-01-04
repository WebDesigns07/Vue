import Vue from 'vue';
import Router from 'vue-router';
import { store } from './stores/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error404 from './pages/404';
import Stats from './pages/Stats';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/profile/:name?',
            name: 'profile',
            component: Profile,
            beforeEnter(to, from, next) {
                console.log("fetching some data"); // such as get the profile info
                console.log("updating state"); // clean up some background tasks

                next();
            },
            meta: { auth: true },
            children: [
                {
                    path: 'stats',
                    component: Stats
                }
            ]
        },
        {
            path: '*',
            name: '404',
            component: Error404
        }
    ]
})

router.beforeEach((to, from, next) => {
    function proceed() {
        if (to.matched.some(record => record.meta.auth)) {
            var authenticated = false;
            // check if authenticated
            if (authenticated) {
                // Login success
                next();
            } else {
                // redirect to login if the page needs authenticate and not logined
                // if (from.name !== "login")
                //     router.push("login");

                next();
            }
        }
        else {
            next();
        }
    }

    if (!store.state.appReady) {
        store.watch(
            state => state.appReady,
            ready => {
                if (ready) {
                    proceed();
                }
            }
        )
    } else {
        proceed();
    }
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.auth)) {
//         var authenticated = false;
//         // check if authenticated
//         if (authenticated) {
//             next();
//         } else {
//             // redirect to login
//             if (from.name !== "login")
//                 router.push("login");
//         }
//     }
//     else {
//         next();
//     }
// });

export default router;