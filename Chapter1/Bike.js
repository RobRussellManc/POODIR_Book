class Gear {
    #chainring;
    #cog;
    #rim;
    #tire;

    constructor(chainring, cog, rim, tire) {
        this.#chainring = chainring;
        this.#cog = cog;
        this.#rim = rim;
        this.#tire = tire;
    }

    get chainring() {
        return this.#chainring;
    }

    get cog() {
        return this.#cog;
    }

    get rim() {
        return this.#rim;
    }

    get tire() {
        return this.#tire;
    }

    ratio() {
        return this.chainring / this.cog;
    }

    gear_inches() {
        return ratio() * (rim + (tire * 2));
    }
}


//console.log(new Gear(52, 11).ratio())
//console.log(new Gear(30, 27).ratio())


let bike = new Gear(40, 8);
console.log(bike.cog)
console.log(bike.tire)






