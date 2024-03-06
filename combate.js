/**
 * 
 * @param {string} word El string a capitalizar 
 * @returns devuelve la palabra con la primera letra en mayúscula
 */

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }



class Person {
    /**
     * 
     * @param {string} name el nombre del personaje
     * 
     * @example const persona1 = new Persona("pepe")
     */
    constructor(name) {
      this.name = name;
      this.hp = 100;
      this.attack = Math.floor(Math.random()*10);
      this.defense = 5;
    }
    /**
     * Se presenta
     */
    sayHello() {
      console.log(`Hola, mi nombre es ${this.name}, tengo ${this.attack} de ataque y ${this.hp} de vida`);
    }
    /**Ataca a otro pj
     * 
     * @param {Persona} other Espera un objeto Persona
     */
    battle(other) {
      other.hp -= this.attack;
    }
  }

  
  function pelea(){
    const persona1 = new Person("pepe")
    const persona2 = new Person("luis")
    persona1.sayHello();
    persona2.sayHello();
    while(persona1.hp > 0 && persona2.hp > 0){ //mientras que la vida de persona1 o persona2 sea mayor que 0, ejecuta
        console.log("funciono")
        persona1.battle(persona2)
        persona2.battle(persona1)
    }
    persona1.sayHello()
    persona2.sayHello()
}
pelea()