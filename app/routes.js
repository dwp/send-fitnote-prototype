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
    // console.table(req.body)
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

router.route('/v7b-additional-do-you-have-a-fit-note')
   .post((req, res, next) => {
     let redirectUrl
     // console.table(req.body)
     switch (req.body['do-you-have-a-fit-note-v7b']) {
       case 'yes':
         redirectUrl = 'v7b-upload-accordion'
         break
       case 'no':
         redirectUrl = 'v7b-no-fit-note'
         break
       default:
         redirectUrl = req.path
         break
     }
     res.redirect(redirectUrl)
   })

   router.route('/dev-do-you-have-a-fit-note')
      .post((req, res, next) => {
        let redirectUrl
        // console.table(req.body)
        switch (req.body['dev-do-you-have-a-fit-note']) {
          case 'yes':
            redirectUrl = 'dev-three-options'
            break
          case 'no':
            redirectUrl = 'dev-no-fit-note'
            break
          default:
            redirectUrl = req.path
            break
        }
        res.redirect(redirectUrl)
      })

      router.route('/dev-three-options-select')
        .post((req, res, next) => {
          let redirectUrl
          switch (req.body['dev-obtained-fit-note']) {
            case 'paper':
              redirectUrl = 'dev-upload-paper'
              break
            case 'sms':
              redirectUrl = 'dev-upload-sms'
              break
            case 'email':
              redirectUrl = 'dev-upload-email'
              break
            default:
              redirectUrl = req.path
              break
          }
          res.redirect(redirectUrl)
        })

           router.route('/welsh-dev-do-you-have-a-fit-note')
              .post((req, res, next) => {
                let redirectUrl
                // console.table(req.body)
                switch (req.body['welsh-dev-do-you-have-a-fit-note']) {
                  case 'ydy':
                    redirectUrl = 'welsh-dev-three-options'
                    break
                  case 'na':
                    redirectUrl = 'welsh-dev-no-fit-note'
                    break
                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })


                    router.route('/welsh-dev-three-options-select')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['welsh-dev-obtained-fit-note']) {
                          case 'paper':
                            redirectUrl = 'welsh-dev-upload-paper'
                            break
                          case 'sms':
                            redirectUrl = 'welsh-dev-upload-sms'
                            break
                          case 'email':
                            redirectUrl = 'welsh-dev-upload-email'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


                    router.route('/v8-three-options-select')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['v8-obtained-fit-note']) {
                          case 'paper':
                            redirectUrl = 'v8-upload-paper'
                            break
                          case 'sms':
                            redirectUrl = 'v8-upload-sms'
                            break
                          case 'email':
                            redirectUrl = 'v8-upload-email'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


           router.route('/v8-do-you-have-a-fit-note')
              .post((req, res, next) => {
                let redirectUrl
                // console.table(req.body)
                switch (req.body['v8-do-you-have-a-fit-note']) {
                  case 'yes':
                    redirectUrl = 'v8-three-options'
                    break
                  case 'no':
                    redirectUrl = 'v8-no-fit-note'
                    break
                  default:
                    redirectUrl = req.path
                    break
                }
                res.redirect(redirectUrl)
              })

                 router.route('/v9-do-you-have-a-fit-note')
                    .post((req, res, next) => {
                      let redirectUrl
                      // console.table(req.body)
                      switch (req.body['v9-do-you-have-a-fit-note']) {
                        case 'yes':
                          redirectUrl = 'v9-three-options'
                          break
                        case 'no':
                          redirectUrl = 'v9-no-fit-note'
                          break
                        default:
                          redirectUrl = req.path
                          break
                      }
                      res.redirect(redirectUrl)
                    })

                    router.route('/v9-three-options-select')
                      .post((req, res, next) => {
                        let redirectUrl
                        switch (req.body['v9-obtained-fit-note']) {
                          case 'paper':
                            redirectUrl = 'v9-upload-paper'
                            break
                          case 'sms':
                            redirectUrl = 'v9-upload-sms'
                            break
                          case 'email':
                            redirectUrl = 'v9-upload-email'
                            break
                          default:
                            redirectUrl = req.path
                            break
                        }
                        res.redirect(redirectUrl)
                      })


module.exports = router
