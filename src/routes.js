import Home from "./views/Home.vue";
import AboutMe from "./views/AboutMe.vue";
import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/aboutme", component: AboutMe },
  { path: "/:path(.*)", component: NotFound },
];
