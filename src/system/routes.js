import  index from '../pages/index'
import vuejs from '../pages/vuejs'
import auth from '../pages/auth'
import cpp from '../pages/cpp'
import js from '../pages/js'
import linux from '../pages/linux'

export const routes = [
    { path: '/', component: index},
    { path: '/vuejs', component: vuejs},
    { path: '/auth', component: auth },
    { path: '/v', component: cpp},
    { path: '/js', component: js},
    { path: '/linux', component: linux},
]