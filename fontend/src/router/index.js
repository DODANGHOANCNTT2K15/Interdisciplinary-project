import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/MainLayout.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Login from '@/views/Login.vue';
import CourseView from '@/views/CourseView.vue';
import ExamView from '@/views/ExamView.vue';
import TestLayout from '@/components/TestLayout.vue';
import SelectPastExam from '@/views/SelectPastExam.vue';
import TestExam from '@/views/TestExam.vue';

const routes = [
  {
    path: '/',
    component: MainLayout, 
    children: [
      { path: '', name: 'Home', component: HomeView },
      { path: 'about', name: 'About', component: AboutView },
      { path: 'login', name: 'Login', component: Login },
      { path: 'course', name: 'Course', component: CourseView},
      { path: 'exams', name: 'Exams', component: ExamView}
    ]
  },
  {
    path: '/test-online',
    component: TestLayout, 
    children: [
      { path: '', name: 'TestOnline', component: SelectPastExam},
      { path: 'test', name: 'TestExam', component: TestExam}
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
