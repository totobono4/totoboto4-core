'use strict';

class Event {
    name
    data

    constructor(name) {
        this.name = name
    }

    setData(data) {
        this.data = data
    }
}

module.exports = Event