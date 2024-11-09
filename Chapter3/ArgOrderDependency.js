class Gear {
    #chainring;
    #cog;
    #wheel

    constructor(args) {
        this.#chainring = args.chainring;
        this.#cog = args.cog;
        this.#wheel = args.wheel;
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
        return this.ratio() * this.#wheel.diameter();
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

const gear = new Gear({
    chainring: 52,
    cog: 11,
    wheel: new Wheel(26, 1.5)
})

console.log(gear.ratio())