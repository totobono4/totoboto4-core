'use strict';

const Color = require('./Color')

class Category {
    text
    color

    constructor(text = "", color = "0") {
        this.text = text
        this.color = color
    }

    /**
     * 
     * @returns String
     */
    getString() {
        return `${this.color.getColorString()}[${this.text}]${Color.colors.White.getColorString()}`
    }
}

module.exports = Category