const Deliver = require('./deliver')

class CargoDriver {
    constructor(name, location, destination, product) {
        this.name = name
        this.location = location
        this.destination = destination
        this.product = product

        this.delivers = []
    }

    deliver(customer, product) {
        const deliver = new Deliver(customer, this, product)

        this.delivers.push(deliver)

        return deliver
    }

    printDeliverHistory() {
        this.delivers.forEach(printDeliver)
    }
}

function printDeliver(deliver) {
    console.log(`${deliver.cargoDriver.name.green} delivered ${deliver.product.blue} to ${deliver.customer.name.green}`)
}

module.exports = CargoDriver 