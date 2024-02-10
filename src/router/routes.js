import { lazy } from "solid-js";

const routes = [
  {
    path: "/",
    label: "Home",
    component: lazy(() => import("../pages/Home.jsx"))
  },
  {
    path: "/about",
    label: "About",
    component: lazy(() => import("../pages/About.jsx"))
  }
  //   {
  //     path: "/pokemon",
  //     component: () => import("../pages/Pokemon")
  //   },
  //   {
  //     path: "/pokemon/:id",
  //     component: () => import("../pages/PokemonDetail")
  //   },
  //   {
  //     path: "/:catchAll(.*)",
  //     component: () => import("../pages/NotFound")
  //   }
];

export default routes;
