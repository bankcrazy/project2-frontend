import Vue from 'vue'
import Router from 'vue-router'
import GroupIndex from '@/components/Group/Index'
import LoginIndex from '@/components/Login/Index'
import RegisterIndex from '@/components/Register/Index'
import PostForm from '@/components/Post/PostForm'
import PostShow from '@/components/Post/Show'
import HelloIndex from '@/components/Hello'
import GroupNew from '@/components/Group/NewGroup'
import GroupShow from '@/components/Group/Show'
import CategoryIndex from '@/components/Category/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home.index',
      component: CategoryIndex
    },
    {
      path: '/group',
      name: 'Group.index',
      component: GroupIndex
    },
    {
      path: '/hello',
      name: 'Hello.index',
      component: HelloIndex
    },
    {
      path: '/login',
      name: 'Login.index',
      component: LoginIndex
    },
    {
      path: '/register',
      name: 'Register.index',
      component: RegisterIndex
    },
    {
      path: '/post/new',
      name: 'Post.form',
      component: PostForm
    },
    {
      path: '/post/show',
      name: 'Post.show',
      component: PostShow
    },
    {
      path: '/group/new',
      name: 'Group.New',
      component: GroupNew
    },
    {
      path: '/group/show',
      name: 'Group.show',
      component: GroupShow
    }

  ]
})
