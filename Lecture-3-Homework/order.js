class Order {
    constructor(customer, cargoDriver, product, cargoDriversLocation, customersAddress) {
        this.customer = customer
        this.cargoDriver = cargoDriver
        this.product = product
        this.cargoDriversLocation = cargoDriversLocation
        this.customersAddress = customersAddress
    }
}

module.exports = Order