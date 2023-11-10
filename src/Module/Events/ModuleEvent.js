const { EventEmitter } = require('node:events')

const Event = require('./Event')

class ModuleEvent extends EventEmitter {
    /**
     * 
     * @param {Event} event 
     */
    sendEvent(event) {
        this.emit(event.name, event.data)
    }
}

module.exports = ModuleEvent
