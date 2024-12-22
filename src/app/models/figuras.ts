// Clase abstracta FiguraGeometrica
abstract class FiguraGeometrica {
    abstract calcularPerimetro(): number;
}

// Clase Circulo
class Circulo extends FiguraGeometrica {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Clase TrianguloEscaleno
class TrianguloEscaleno extends FiguraGeometrica {
    private ladoA: number;
    private ladoB: number;
    private ladoC: number;

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super();
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}

// Clase TrianguloEquilatero
class TrianguloEquilatero extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularPerimetro(): number {
        return 3 * this.lado;
    }
}