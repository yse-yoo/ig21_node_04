const item = require('../models/item')

exports.index = (req, res) => {
    let data = {}
    data.items = item.values
    res.render('item/index.ejs', data)
}

exports.show = (req, res) => {
    const id = req.params.id
    console.log(id)
    let data = {}
    data.item = item.find(id)
    res.render('item/show.ejs', data)
}