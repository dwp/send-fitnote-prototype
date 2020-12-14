const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.route('/v7a-three-options-select')
  .post((req, res, next) => {
    let redirectUrl
    switch (req.body['obtained-fit-note']) {
      case 'paper':
        redirectUrl = 'v7a-upload-paper'
        break
      case 'sms':
        redirectUrl = 'v7a-upload-sms'
        break
      case 'email':
        redirectUrl = 'v7a-upload-email'
        break
      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })

router.route('/v7a-additional-do-you-have-a-fit-note')
  .post((req, res, next) => {
    let redirectUrl
    console.table(req.body)
    switch (req.body['do-you-have-a-fit-note-v7a']) {
      case 'yes':
        redirectUrl = 'v7a-three-options'
        break
      case 'no':
        redirectUrl = 'v7a-no-fit-note'
        break
      default:
        redirectUrl = req.path
        break
    }
    res.redirect(redirectUrl)
  })

module.exports = router
