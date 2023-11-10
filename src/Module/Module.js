const Modulator = require('./Modulator')
const EventLaunch = require('./Events/EventLaunch')
const EventLaunched = require('./Events/EventLaunched')

const { Client } = require('discord.js')

class Module {
    #modulator = null
    #moduleEvent

    constructor (modulator) {
        this.#modulator = modulator

        this.name = 'default module name'
        this.version = '0.0.0'

        this.commands = []

        this.dependencies = []

        this.#moduleEvent = this.#modulator.moduleEvent

        const launchEvent = new EventLaunch()
        const launchedEvent = new EventLaunched()

        this.#moduleEvent.on(launchEvent.name, data => {
            if (data.loaded.includes(this.name)) return
            if (! this.dependencies.every(dependency => data.loaded.includes(dependency))) return
            console.log("Module " + this.name + " loaded " + data.loaded)
            data.loaded.push(this.name)
            this.launch(data)
            launchedEvent.setData(data)
            this.#moduleEvent.sendEvent(launchedEvent)
        })
    }

    /**
     * @param {Client} client 
     */
    launch(data) {}
}

module.exports = Module
