const signatureRouter = require('express').Router()
const fs = require('fs')
const path = require('path')


let signatureArr = []


signatureRouter.post('/upload_signature', (req, res) => {
  try {
    const {signature} = req.body
    signatureArr.push(signature)
    console.log(signatureArr);
    res.json({message: 'Xác nhận thành công'})
  } catch (e) {
    res.status(500).json({message: e.message})
  }
})

signatureRouter.get('/:file_name', (req, res) => {
  let {file_name} = req.params
  // fs.readdir('./static', (err, files) => {
  //   files.forEach(file => {
  //     console.log(file);
  //   })
  // }) 
  res.sendFile(path.resolve('./static/'+file_name))
})

module.exports = signatureRouter