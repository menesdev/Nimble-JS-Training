const colors = require('colors')
const Customer = require('./customer')
const CargoDriver = require('./cargoDriver')

const mustafa = new Customer('Mustafa', 'Sungurlu')
const yusuf = new CargoDriver('Yusuf', 'Ankara', 'Sungurlu', 'Airpods')

mustafa.order(yusuf, 'Airpods', yusuf.location, mustafa.address)
yusuf.deliver(mustafa, 'Airpods')

mustafa.printOrderHistory(mustafa)
yusuf.printDeliverHistory(yusuf)






