import { createRouter, createWebHistory } from 'vue-router'

import ConsultarPage from '@/Page/ConsultarVehiculoPage.vue'
import GuardarPage from '@/Page/GuardarVehiculoPage.vue'
import InicioPage from '@/Page/InicioPage.vue'
import NotPage from '@/Page/NotFoundPage.vue'

const routes = [
{
path: '/',
name: 'Inicio',
component: InicioPage
},
{
path: '/consultar',
name: 'Consultar',
component: ConsultarPage
},
{   
path: '/guardar',
name: 'Guardar',
component: GuardarPage
},
{
path: '/:pathMatch(.*)*',
name: 'NotFound',
component: NotPage
}
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router