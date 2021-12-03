const data = require('../assets/data')

function getProducts(query) {
    if (query === undefined) return data
    return data.filter((el) =>
        el.name.toLowerCase().includes(query.toLowerCase())
    )
}

module.exports = { getProducts }
