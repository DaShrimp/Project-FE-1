const btn_toggle = document.querySelector(".button_toggle_menu");
const menu_drop_down = document.querySelector(".menu_drop_down");
export function toggle_menu() {
  btn_toggle.addEventListener("click", () => {
    let curr_classname = menu_drop_down.className;
    if (curr_classname == "menu_drop_down off") {
      menu_drop_down.className = "menu_drop_down on";
      console.log("HI");
    } else {
      menu_drop_down.className = "menu_drop_down off";
    }
  });
}
