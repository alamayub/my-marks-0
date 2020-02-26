
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import CatalogPage from '../pages/catalog.vue';
import ProductPage from '../pages/product.vue';
import SettingsPage from '../pages/settings.vue';

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

import AnnouncementAdd from '../pages/student/addannouncement.vue';
//student
import Message from '../pages/student/message.vue';
import MessageShowPage from '../pages/student/messageshow.vue';
import Exam from '../pages/student/exam.vue';
import Announcement from '../pages/student/announcement.vue';
import AnnouncementShowPage from '../pages/student/announcementshow.vue';
import TimeTable from '../pages/student/timetable.vue';
import Attendance from '../pages/student/attendance.vue';
import Quiz from '../pages/student/quiz.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },

  {
    path: '/addannouncement/',
    component: AnnouncementAdd
  },
  //student
  {
    path: '/timetable/',
    component: TimeTable,
  },
  {
    path: '/messages/',
    component: Message,
  },
  {
    path: '/messageshow/:id/',
    component: MessageShowPage,
  },
  {
    path: '/attendance/',
    component: Attendance,
  },
  {
    path: '/exam/',
    component: Exam,
  },
  {
    path: '/announcement/',
    component: Announcement,
  },
  {
    path: '/announcementshow/:id/',
    component: AnnouncementShowPage,
  },
  {
    path: '/quiz/',
    component: Quiz,
  },

  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
