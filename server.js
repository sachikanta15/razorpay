const express = require('express')
const app = express()
const port = 3000
const expressLayouts= require('express-ejs-layouts')
const bodyParser= require('body-parser')



app.use(bodyParser.urlencoded({extended:false}))
app.use(expressLayouts)
app.set('view engine','ejs')
app.use('/',require('./routes/index'))
app.use('/checkout-page',require('./routes/razorpay'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})