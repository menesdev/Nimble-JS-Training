const fs = require('fs') // file system
const flatted = require('flatted')

const save = (filename, objects) => {
    fs.writeFileSync(`./${filename}.json`, flatted.stringify(objects, null, 2))
}

const load = (filename) => {
    const file = fs.readFileSync(`${filename}.json`,'utf8')
    return flatted.parse(file)
}

const insert = (filename, object) => {
    const objects = load(filename)
    save(filename, objects.concat(object))
}

const remove = (filename, index) => {
    const objects = load(filename)

    objects.splice(index, 1) // indexten itibaren 1 eleman sil.
}

const findByName = (filename, name) => {
    const objects = load(filename)

    return objects.find(o => o.name == name)
}

module.exports = { save, load, insert, remove, findByName }