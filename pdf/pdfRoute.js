const pdfRouter = require('express').Router()
const fs = require('fs')
const path = require('path')

pdfRouter.post('/upload_pdf_file', (req, res) => {
  try {
    const dirPath = path.resolve('./static')
    const file = req.files.file
    const fileName = file.name
    console.log(dirPath);

    file.mv(`${dirPath}/${fileName}`, err => {
      if (err) {
        res.status(500).json({message: 'File upload thât bại'})
      }
      res.json({message: 'File upload thành công', file_name: fileName})
    })
  } catch (e) {
    res.status(500).json({message: e.message})
  }
})

pdfRouter.get('/:file_name', (req, res) => {
  let {file_name} = req.params
  // fs.readdir('./static', (err, files) => {
  //   files.forEach(file => {
  //     console.log(file);
  //   })
  // }) 
  res.sendFile(path.resolve('./static/'+file_name))
})

module.exports = pdfRouter