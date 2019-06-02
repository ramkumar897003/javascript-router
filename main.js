import { Router } from "./router.js";

const router = new Router();
router.root = "http://localhost:8081";
router.add({
  name: "about",
  path: "/about",
  handler: () => console.log("about page")
});
router.add({
  name: "contact",
  path: "/contact",
  handler: () => console.log("contact page")
});

const activeRoutes = Array.from(document.querySelectorAll("[route]"));
activeRoutes.forEach(route => {
  route.addEventListener("click", e => {
    e.preventDefault();
    router.navigate(e.target.getAttribute("route"));
  });
}, false);
