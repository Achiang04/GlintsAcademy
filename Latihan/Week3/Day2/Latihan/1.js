class Animal {
    // Code class di sini
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

let sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log("\n");

// =====================================================================================================

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        console.log("Hop Hop");
    }
}
let kodokkeselek = new Frog("Asep");
console.log(kodokkeselek.name)
console.log(kodokkeselek.legs)
console.log(kodokkeselek.cold_blooded) // false
kodokkeselek.jump();
console.log("\n");

class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
    yell() {
        console.log("Auooooo");
    }
}
let gokong = new Ape("Bambang");
console.log(gokong.name)
console.log(gokong.legs)
console.log(gokong.cold_blooded) // false
gokong.yell();
console.log("\n");

// =====================================================================================================

function Clock({
    template
}) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({
    template: 'h:m:s'
});

clock.start();
clock.stop();