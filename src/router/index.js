import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";

Vue.use(VueRouter);
// This is the routing for all the pages in the app which allows us to jump to different pages without constantly need to request from a server. Requests are handles directly in vue due to router
const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
];

const router = new VueRouter({
  //Instance for router being created
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
