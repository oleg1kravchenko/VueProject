import Vue from 'vue'
import Router from 'vue-router'
import frontPage from '@/pages/frontPage'
import aboutPage from '@/pages/aboutPage'
import teamPage from '@/pages/teamPage'
import newsPage from '@/pages/newsPage'
import contactsPage from '@/pages/contactsPage'



import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'frontPage',
      component: frontPage
    },
    {
      path: '/about',
      name: 'aboutPage',
      component: aboutPage
    },
    {
      path: '/team',
      name: 'teamPage',
      component: teamPage
    },
    {
      path: '/news',
      name: 'newsPage',
      component: newsPage
    },
    {
      path: '/contacts',
      name: 'contactsPage',
      component: contactsPage
    }
  ]
})
