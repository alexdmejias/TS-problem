// internal
class Main {

  name: string;
  constructor(name) {
    console.log('i am the constructor');
    this.name = name;
  }

  public greet(person) {
    console.log(`hey ${person}, I'm ${this.name}`);
  }
}

export = Main;
