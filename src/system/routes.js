import  index from '../pages/index'
import vuejs from '../pages/vuejs'
import vuejs from '../pages/auth'
import vuejs from '../pages/cpp'
import vuejs from '../pages/js'
import vuejs from '../pages/linux'

export const routes = [
    { path: '/', component: index},
    { path: '/vuejs', component: vuejs},
    { path: '/auth', component: auth },
    { path: '/v', component: cpp},
    { path: '/js', component: js},
    { path: '/linux', component: linux},
]