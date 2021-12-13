const express = require('express')

const homeController = require('./controllers/HomeController')

const item = require('./models/item')
const router = express.Router()

const default_login_name = process.env.LOGIN_NAME
const default_passsword = process.env.PASSWORD

//HomeController
router.get('/', homeController.index)
router.get('/profile', homeController.profile)

router.get('/login', (req, res) => {
    res.render('login/index.ejs')
})

router.post('/auth', (req, res) => {
    let message = 'ログインできません'
    const login_name = req.body.login_name
    const password = req.body.password

    if (login_name == default_login_name
        && password == default_passsword) {
        message = 'ログインしました'
    }
    res.send(message)
})

router.get('/item/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    let data = {}
    data.item = item.find(id)
    res.render('item/show.ejs', data)
})

module.exports = router