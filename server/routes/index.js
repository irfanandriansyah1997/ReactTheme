const path = require('path')
const router = require('express').Router()

// eslint-disable-next-line no-unused-vars
router.get('/*', (req, res, next) => {
  const routePath = path.join(`${__dirname}..`, '..', '..', 'dist/index.html')
  res.sendFile(routePath)
})

module.exports = router
