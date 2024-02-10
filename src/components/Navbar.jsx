import { For } from "solid-js";

function Navbar(props) {
  return (
    <nav class="bg-black text-white p-4 font-mono rounded my-5">
      <ul class="flex space-x-3">
        <For each={props.routes}>
          {(route) => (
            <li class="hover:text-red-200 transition-colors">
              <a href={route.path}>~/{route.label}</a>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}

export default Navbar;
