require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const pdfRouter = require('./pdf/pdfRoute')
const fileupload = require('express-fileupload')
const signatureRouter = require('./signature/signatureRouter')

const {NODE_ENV, CLIENT_DEV, CLIENT_PRO} = process.env


app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
  origin: NODE_ENV === 'DEVELOPMENT' ? CLIENT_DEV : CLIENT_PRO,
  methods: ["GET", "POST", "PATCH", "DELETE"]
}))
app.use(fileupload())

app.use('/signature', signatureRouter)
app.use('/pdf', pdfRouter)

app.get('/', (req, res) => {
  res.json({message: 'everything is great'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
})
