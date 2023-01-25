import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Cats from "@/views/Cats.vue";
import Cat from "@/views/Cat.vue";
import NotFound from "@/views/NotFound.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats,
  },
  {
    path: "/cats/:name",
    name: "Cat",
    component: Cat,
    props: true,
 },
 {
  path: "/:catchAll(.*)",
  component: NotFound,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;