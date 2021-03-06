import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import('../views/login.vue')
  },
  {
    path:'/forget',
    component:()=>import('../views/forget.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/register')
  },
  {
    path:'/student',
    component:()=>import('../views/student'),
    children:[
      {path:'/exam',
    component:()=>import('../student/exam.vue')},
    {path:'/person',
  component:()=>import('../student/person.vue')},
  {path:'/message',
component:()=>import('../student/message.vue')},
{path:'/start',
component:()=>import('../student/start.vue')}
    ]
  },
  {
    path:'/teacher',
    component:()=>import('../views/teacher'),
    children:[
      {path:'/tiku',
    component:()=>import('../teacher/tiku.vue')},
    {path:'/tikuDetail',
  component:()=>import('../teacher/tikuDetail.vue')},
  {path:'/problem',
component:()=>import('../teacher/problem.vue')},
{
  path:'/allMessage',
  component:()=>import('../teacher/allMessage.vue')
},
{path:'/sysMessage',
component:()=>import('../teacher/sysMessage.vue')},
{path:'/studentManage',
component:()=>import('../teacher/studentManage.vue')},
{path:'/myExam',
component:()=>import('../teacher/myExam.vue')},
{path:'/myProblem',
component:()=>import('../teacher/myProblem.vue')},
{path:'/createExam',
component:()=>import('../teacher/createExam.vue')},
{path:'/record',
component:()=>import('../teacher/record.vue')},
{path:'/recordA',
component:()=>import('../teacher/recordA.vue')},
{path:'/createPaper',
component:()=>import('../teacher/createPaper.vue')},
{path:'/check',
component:()=>import('../teacher/check.vue')},
{path:'/checkPaper',
component:()=>import('../teacher/checkPaper.vue')}

    ]
  },
  {path:'/manage',
component:()=>import('../views/manage.vue'),
children:[
  {path:'/manage/student',
component:()=>import('../manager/student.vue')},
{path:'/manage/message',
component:()=>import('../manager/message.vue')},
{path:'/manage/teacher',
component:()=>import('../manager/teacher.vue')}
]}

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
