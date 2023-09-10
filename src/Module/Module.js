const { Client } = require('discord.js')

class Module {
    constructor () {
        this.name = 'default module name'
        this.version = '0.0.0'

        this.commands = []
    }

    /**
     * @param {Client} client
     */
    launch (client) {}
}

module.exports = Module
