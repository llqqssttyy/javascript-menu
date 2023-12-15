class Coach {
  #name;

  #hateMenus;

  #recommendMenus;

  constructor(name) {
    this.#validateName(name);
    this.#name = name;
  }

  isDuplicatedMenu(menu) {}

  isHateMenu(menu) {}

  #validateName(input) {}
}

export default Coach;
