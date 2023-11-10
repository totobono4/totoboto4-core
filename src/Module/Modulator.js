'use strict';

const ModuleEvent = require('./Events/ModuleEvent')
const EventLaunch = require('./Events/EventLaunch')
const EventLaunched = require('./Events/EventLaunched')

const ModuleAPI = require('./ModuleAPI')

const { Client } = require('discord.js')

class Modulator {
    static #singleton = null

    moduleEvent = new ModuleEvent()
    events = {
        LAUNCH: new EventLaunch,
        LAUNCHED: new EventLaunched
    }

    #loadedModules = []
    #moduleAPIs = {}

    constructor() {}

    /**
     * @returns Modulator
     */
    static getInstance() {
        if (this.#singleton === null) this.#singleton = new Modulator()
        return this.#singleton
    }

    /**
     * @param {Client} client 
     */
    launch(client) {
        this.events.LAUNCH.setData({
            client: client,
            loaded: [],
            moduleAPIs: this.#moduleAPIs
        })

        this.moduleEvent.on(this.events.LAUNCHED.name, data => {
            this.#loadedModules = [ ...this.#loadedModules, ...data.loaded ]
            this.events.LAUNCH.setData({
                client: client,
                loaded: this.#loadedModules,
                moduleAPIs: this.#moduleAPIs
            })
            this.moduleEvent.sendEvent(this.events.LAUNCH)
        })

        this.moduleEvent.sendEvent(this.events.LAUNCH)
    }
}

module.exports = Modulator
