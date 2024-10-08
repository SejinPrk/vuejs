import { createWebHistory, createRouter } from "vue-router";
import BlogList from "./components/BlogList.vue";
import BlogHome from "./components/BlogHome.vue";
import BlogDetail from "./components/BlogDetail.vue";
import BlogAuthor from "./components/BlogAuthor.vue";
import BlogComment from "./components/BlogComment.vue";

const routes = [
  {
    path: "/list",
    component: BlogList
  },
  {
    path: "/",
    component: BlogHome,
  },
  {
    path: "/detail/:id",
    component: BlogDetail,
    children: [
      {
        path: "author",
        component: BlogAuthor,
      },
      {
        path: "comment",
        component: BlogComment,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 