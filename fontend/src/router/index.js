import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/MainLayout.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Login from '@/views/Login.vue';
import ExamView from '@/views/ExamView.vue';
import TestLayout from '@/components/TestLayout.vue';
import SelectPastExam from '@/views/SelectPastExam.vue';
import TestExam from '@/views/TestExam.vue';
import ExamDetailView from '@/views/ExamDetailView.vue';
import BaseView from '@/views/BaseView.vue';
import NewsView from '@/views/NewsView.vue';
import DocumentView from '@/views/DocumentView.vue';
import DocumentViewListening from '@/views/DocumentViewListening.vue';
import DocumentViewSpeaking from '@/views/DocumentViewSpeaking.vue';

const routes = [
  {
    path: '/',
    component: MainLayout, 
    children: [
      { path: '', name: 'Home', component: HomeView },
      { path: 'about', name: 'About', component: AboutView },
      { path: 'login', name: 'Login', component: Login },
      { path: 'exams', name: 'Exams', component: ExamView},
      { path: 'exam-detail', name: 'ExamDetail', component: ExamDetailView},
      { path: 'base', name: 'Base', component: BaseView},
      { path: 'news', name: 'News', component: NewsView},
      { path: 'document', name: 'Document', component: DocumentView },
      { path: 'document/listening', name: 'Listening', component: DocumentViewListening},
      { path: 'document/speaking', name: 'Speaking', component: DocumentViewSpeaking},
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
