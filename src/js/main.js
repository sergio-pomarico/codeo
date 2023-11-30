class App {
  constructor() {
    this.menu = document.getElementById("menu");
    this.close = document.getElementById("close");
    this.open = document.getElementById("menu-button");
    this.header = document.querySelector(".header");
    this.items = document.querySelectorAll(".navigation-item");
    this.active = false;
  }

  init() {
    this.bindUIActions();
  }

  toggleActive() {
    this.active = !this.active;
  }

  bindUIActions() {
    this.open.addEventListener("click", () => {
      this.toggleMenu();
    });
    window?.addEventListener("scroll", (_) => {
      this.header?.classList.toggle("h-sticky", window.scrollY > 150);
    });
    this.close.addEventListener("click", () => {
      this.toggleMenu();
    });
  }
  toggleMenu() {
    this.toggleActive();
    this.menu?.classList.toggle("active");
    this.toggleItems();
  }

  toggleItems() {
    const items = this.active ? this.items : [...this.items].reverse();
    items.forEach((item, i) => {
      setTimeout(
        () => {
          if (this.active) {
            item.classList.add("item-active");
          } else {
            item.classList.remove("item-active");
          }
        },
        800 + i * 120,
      );
    });
  }
}

const app = new App();

document.addEventListener("astro:page-load", () => {
  app.init();
});
