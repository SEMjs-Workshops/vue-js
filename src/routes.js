import Home from "./Home.vue";
import Lab1App from "./lab-1/App.vue";
import FinalApp from "./final/App.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/final", component: FinalApp },
    { path: "/lab-1", component: Lab1App },
];

export default routes;
