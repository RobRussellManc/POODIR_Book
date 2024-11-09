class ObscuringReferences {
    constructor(data) {
        this.data = data;
    }

    diameters() {
        return this.data.map(cell => cell[0] + (cell[1] * 2));
    }
}

// 
class RevealingReferences {
    constructor(data) {
        this.wheels = data.map(x => new Wheel(x));
    }

    diameters() {
        return this.wheels.map(wheel => wheel.rim + (wheel.tire * 2));
    }

}

// Enforced single responsibility on diameters - create new class
class RevealingReferences2 {
    constructor(data) {
        this.wheels = data.map(x => new Wheel(x));
    }

    diameters() {
        return this.wheels.map(wheel => this.diameter(wheel));
    }

    diameter(wheel) {
        return wheel.rim + (wheel.tire * 2)
    }

}


class Wheel {
    constructor(data) {
        this.rim = data[0];
        this.tire = data[1];
    }
}


const data = [[622, 20], [622, 23], [559, 30], [559, 40]]

let x = new RevealingReferences(data);


console.log(x.diameters())

console.log('hi')