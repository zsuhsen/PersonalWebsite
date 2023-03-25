import { DisplayLib } from "./display-lib";
import { Dropdown } from "./dropdown";
import { HelloWorld } from "./hello-world";

declare global {
  interface HTMLElementTagNameMap {
    'zs-hello-world': HelloWorld;
    'zs-dropdown': Dropdown;
    'zs-display-lib': DisplayLib;
  }
}