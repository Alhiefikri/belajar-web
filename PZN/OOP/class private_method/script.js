class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.info("Hello");
  }

  #sayWithName(name) {
    console.info(`Hello ${name}`);
  }
}

const ali = new Person();
ali.say("Ali");
// ali.#sayWithoutName(); tidak bisa di akses
