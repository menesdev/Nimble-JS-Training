const colors = require('colors')

function printOrders(order) {
    console.log(`${order.cargoDriver.name.red} delivering ${order.product.blue} from ${order.cargoDriver.location.green} to ${order.customer.name.red} in ${order.customer.address.green}`)
}

class Customer {
    constructor(name, address) {
        this.name = name 
        this.address = address
        this.orders = []
    }

    order(cargoDriver, product, cargoDriversLocation, customersAddress){
        const order = new Order(this, cargoDriver, product, cargoDriversLocation, customersAddress)

        this.orders.push(order)

        return order
    }

    printOrderHistory() {
        this.orders.forEach(printOrders)
    }
}

class CargoDriver {
    constructor(name, location, destination, product){
        this.name = name 
        this.location = location 
        this.destination = destination
        this.product = product 
    }
}

class Order {
    constructor(customer, cargoDriver, product, cargoDriversLocation, customersAddress){
        this.customer = customer  
        this.cargoDriver = cargoDriver
        this.product = product 
        this.cargoDriversLocation = cargoDriversLocation 
        this.customersAddress = customersAddress
    }
}

class Deliver {

}

const mustafa = new Customer('Mustafa', 'Sungurlu')
const yusuf = new CargoDriver('Yusuf', 'Ankara', 'Sungurlu')

mustafa.order(yusuf, 'Airpods', yusuf.location)
mustafa.printOrderHistory(mustafa)

