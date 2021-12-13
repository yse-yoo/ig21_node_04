const express = require('express')

const homeController = require('./controllers/HomeController')
const loginController = require('./controllers/LoginController')

const item = require('./models/item')
const router = express.Router()

//HomeController
router.get('/', homeController.index)
router.get('/profile', homeController.profile)

//LoginController
router.get('/login', loginController.index)
router.post('/auth', loginController.auth)

//ItemController
router.get('/item/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    let data = {}
    data.item = item.find(id)
    res.render('item/show.ejs', data)
})

module.exports = router