'use strict';

class Color {
    static colors = {
        White: new Color("0"),
        Cyan: new Color("36"),
        Blue: new Color("34"),
        Green: new Color("32"),
        Yellow: new Color("33"),
        Red: new Color("31"),
        LightCyan: new Color("96")
    }

    constructor(color = "0") {
        this.color = color
    }

    /**
     * get String conversion for console colors
     */
    getColorString() {
        return `\x1b[${this.color}m`
    }
}

module.exports = Color