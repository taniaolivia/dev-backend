const { v4: uuidv4 } = require('uuid');

class Robot{
    constructor(ref, color){
        this.ref = uuidv4();
        this.color = color;
    }

    who_am_i(){
        return `I am the robot "${this.ref}" and I am ${this.color}`;
    }
}

module.exports = Robot;