const Order = require('./order')

class Customer {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.orders = []
    }

    order(cargoDriver, product, cargoDriversLocation, customersAddress) {
        const order = new Order(this, cargoDriver, product, cargoDriversLocation, customersAddress)

        this.orders.push(order)

        return order
    }

    printOrderHistory() {
        this.orders.forEach(printOrder)
    }
}

function printOrder(order) {
    console.log(`${order.cargoDriver.name.red} delivering ${order.product.blue} from ${order.cargoDriver.location.green} to ${order.customer.name.red} in ${order.customer.address.green}`)
}


module.exports = Customer