import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
 import EditEnvView from "@/views/env/EditEnvView.vue";
import AllBranchView from "@/views/env/branch/AllBranchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path:"/edit-env/:id",
      name:"edit-env",
      component:EditEnvView
    },
    {
      path:"/env-branch/:id",
      name:"env-branch",
      component:AllBranchView
    }
  ],
});

export default router;
