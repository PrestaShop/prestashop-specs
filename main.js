(() => {
  // <stdin>
  var menuItems = document.querySelectorAll("ul.topics li.isParent > a");
  var isTouchDevice = "ontouchstart" in window;
  function findParent(current, expected) {
    while (current !== expected) {
      current = current.parentNode;
    }
    return current;
  }
  function toggleIcon(icon) {
    if (icon.classList.contains("fa-angle-up")) {
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    } else {
      icon.classList.add("fa-angle-up");
      icon.classList.remove("fa-angle-down");
    }
  }
  menuItems.forEach((e) => {
    e.addEventListener("click", (event) => {
      if (event.target.classList.contains("fa")) {
        event.preventDefault();
        const icon = e.querySelector("i.fa");
        $(e.parentElement.querySelector(":scope > ul")).slideToggle();
        if (e.parentElement.classList.contains("parent") && !e.parentElement.classList.contains("active")) {
          e.parentElement.classList.remove("parent");
        } else {
          if (e.parentElement.classList.contains("parent")) {
            e.parentElement.classList.toggle("parent");
          }
          e.parentElement.classList.toggle("active");
          e.parentElement.classList.toggle("visited");
        }
        toggleIcon(icon);
      }
    });
  });
  if (isTouchDevice) {
    document.querySelectorAll(".version-selector").forEach((el) => {
      el.addEventListener("click", (e) => {
        const target = findParent(e.target, el);
        target.classList.toggle("hover");
      });
    });
  }
})();
