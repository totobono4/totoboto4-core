'use strict';

const Category = require('./Category')
const Color = require('./Color')

class Debugger {
    layers = {
        Unknown: new Category("unknown", Color.colors.White),
        Bot: new Category("totoboto4", Color.colors.Cyan),
        Client: new Category("client", Color.colors.Blue),
        Command: new Category("command", Color.colors.LightCyan)
    }
    types = {
        None: new Category("none", Color.colors.White),
        Debug: new Category("debug", Color.colors.Green),
        Warning: new Category("warning", Color.colors.Yellow),
        Error: new Category("error", Color.colors.Red)
    }

    cosntructor () {}

    /**
     * 
     * @param {String} layerId 
     * @param {String} layer 
     */
    addLayer(layerId, layer) {
        this.layers[layerId] = new Category(layer, Color.colors.Cyan)
    }

    /**
     * 
     * @param {Category} layer 
     * @param {Category} type 
     * @param {String} description 
     * @param {Array[String]} content 
     */
    debug(layer, type, description, content = []) {
        const time = new Category(new Date(Date.now()).toLocaleTimeString(), Color.colors.LightCyan)
        let log = time.getString() + " " +
        (layer != null ? layer.getString() : layer.Unknown.getString()) + " " +
        (type != null ? type.getString() : this.types.None.getString()) + " " +
        description
        content.forEach(value => log += `\n    ${value}`)
        console.log(log)
    }
}

module.exports = Debugger