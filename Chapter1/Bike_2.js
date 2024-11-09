class Gear {
    #chainring;
    #cog;
    #wheel

    constructor(chainring, cog, wheel = null) {
        this.#chainring = chainring;
        this.#cog = cog;
        this.#wheel = wheel;
    }

    get chainring() {
        return this.#chainring;
    }

    get cog() {
        return this.#cog;
    }

    get wheel() {
        return this.#wheel;
    }

    ratio() {
        return this.#chainring / this.#cog;
    }

    gear_inches() {
        if (!this.#wheel) {
            throw new Error('Wheel must be provided to calculate gear inches');
        }
        return this.ratio() * (this.wheel.rim + (this.wheel.tire * 2));
    }
}


class Wheel {
    constructor(rim, tire) {
        this.rim = rim;
        this.tire = tire;
    }

    diameter() {
        return this.rim + (this.tire * 2)
    }
    
    circumference() {
        return this.diameter() * Math.PI;
    }
}


const wheel_1 = new Wheel(26, 1.5);

console.log(wheel_1.circumference())

let bike = new Gear(52, 11, wheel_1);
console.log(bike.gear_inches())


const gear_1 = new Gear(52, 11)
console.log(gear_1.ratio())

//console.log(gear_1.gear_inches())













