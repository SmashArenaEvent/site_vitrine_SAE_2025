import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/index.vue'),
      meta: {
        title: 'Edition 2025 Smash Arena Event'
      }
    },
    {
      path: '/aPropos',
      component: () => import('@/pages/aPropos.vue'),
      meta: {
        title: 'SAE 2025 - A propos'
      }
    },
    {
      path: '/contact',
      component: () => import('@/pages/contact.vue'),
      meta: {
        title: 'SAE 2025 - Contact'
      }
    },
    {
      path: '/CookiesPersonalisation',
      component: () => import('@/pages/CookiesPersonalisation.vue'),
      meta: {
        title: 'SAE 2025 - Personalisation des cookies'
      }
    },
    {
      path: '/faq',
      component: () => import('@/pages/faq.vue'),
      meta: {
        title: 'SAE 2025 - FAQ'
      }
    },
    {
      path: '/mentionsLegales',
      component: () => import('@/pages/mentionsLegales.vue'),
      meta: {
        title: 'SAE 2025 - Mentions Legales'
      }
    },
    {
      path: '/PolitiqueDeConfidentialite',
      component: () => import('@/pages/PolitiqueDeConfidentialite.vue'),
      meta: {
        title: 'SAE 2025 - Politique de confidentialité'
      }
    },
    {
      path: '/regles',
      component: () => import('@/pages/regles.vue'),
      meta: {
        title: 'SAE 2025 - Régles'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/[...404].vue'),
      meta: {
        title: 'SAE 2025 - Page introuvable'
      }
    },
    {
      path: '/test',
      component: () => import('@/pages/test.vue'),
      meta: {
        title: 'GG t\'à trouver une page secrète'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = typeof to.meta?.title === 'string' ? to.meta.title : 'Smash Arena Event',
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')