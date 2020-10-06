class Animal {
  constructor(sonido = 'ola-k-ase') {
    this.sonidoPrimitivo = sonido;
  }

  emitirSonido() {
    console.log(this.sonidoPrimitivo);
  }
}

class Persona extends Animal {
  constructor(altura) {
    super('Hola! Soy una persona!');
    this.altura = 1.20;
  }

  hablar() {
    return this.emitirSonido();
  }

  getAltura() {
    return this.altura;
  }

  correr() {
    console.log('Hey, vamo a correr!');
  }
}