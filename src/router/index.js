import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Produtos from "../views/Produtos.vue";
import Produto from "../views/Produto.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/products",
    name: "Products",
    component: Produtos,
  },
  {
    path: "/products/:id",
    name: "Product",
    component: Produto,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
