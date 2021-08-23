const colors = require('colors')
const db = require('./database')
const Customer = require('./customer')
const CargoDriver = require('./cargoDriver')

// const mustafa = new Customer('Mustafa', 'Sungurlu')
// const mert = new Customer('Mert', 'Ankara')

const yusuf = new CargoDriver('Yusuf', 'Ankara', 'Sungurlu', 'Airpods')

mustafa.order(yusuf, 'Airpods', yusuf.location, mustafa.address)
yusuf.deliver(mustafa, 'Airpods')

// yusuf.printDeliverHistory(mustafa)

db.save('customers', [mustafa, mert])
db.save('cargoDrivers', [yusuf])

db.load('customers')

mustafa.printOrderHistory(mustafa)







