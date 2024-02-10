import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import routes from "./router/routes.js";
import Navbar from "./components/Navbar.jsx";
import "./index.css";

const root = document.getElementById("root");

const App = (props) => (
  <div class="w-screen flex justify-center">
    <div class="container flex flex-col px-4">
      <Navbar routes={routes} />
      <div class="bg-gray-100 p-3 rounded">{props.children}</div>
    </div>
  </div>
);

render(() => <Router root={App}>{routes}</Router>, root);
