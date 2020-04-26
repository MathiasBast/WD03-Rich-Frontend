const router = require('express').Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getData()
    .then(apiRes => {
      res.json(apiRes)
    })
})

router.put('/add', (req, res) => {
  const data = req.body
  db.addData(data)
    .then(apiRes => {
      console.log(apiRes)
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router