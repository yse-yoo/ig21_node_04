const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const host = process.env.HOST
const port = process.env.PORT

//routes.js を読み込む
const routes = require('./routes')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

//routes.js を使う
app.use(routes)

//テンプレートエンジンをEJSにする
app.set('view engine', 'ejs')

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})
