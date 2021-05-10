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



                                       router.route('/v10-do-you-have-a-fit-note')
                                          .post((req, res, next) => {
                                            let redirectUrl
                                            // console.table(req.body)
                                            switch (req.body['v10-do-you-have-a-fit-note']) {
                                              case 'yes':
                                                redirectUrl = 'v10-three-options'
                                                break
                                              case 'no':
                                                redirectUrl = 'v10-no-fit-note'
                                                break
                                              default:
                                                redirectUrl = req.path
                                                break
                                            }
                                            res.redirect(redirectUrl)
                                          })

                                          router.route('/v10-three-options-select')
                                            .post((req, res, next) => {
                                              let redirectUrl
                                              switch (req.body['v10-obtained-fit-note']) {
                                                case 'paper':
                                                  redirectUrl = 'v10-upload-paper'
                                                  break
                                                case 'sms':
                                                  redirectUrl = 'v10-upload-sms'
                                                  break
                                                case 'email':
                                                  redirectUrl = 'v10-upload-email'
                                                  break
                                                default:
                                                  redirectUrl = req.path
                                                  break
                                              }
                                              res.redirect(redirectUrl)
                                            })


                                          router.route('/v11-do-you-have-a-fit-note')
                                             .post((req, res, next) => {
                                               let redirectUrl
                                               // console.table(req.body)
                                               switch (req.body['v11-do-you-have-a-fit-note']) {
                                                 case 'yes':
                                                   redirectUrl = 'v11-does-your-fit-note-have-a-signature'
                                                   break
                                                 case 'no':
                                                   redirectUrl = 'v11-no-fit-note'
                                                   break
                                                 default:
                                                   redirectUrl = req.path
                                                   break
                                               }
                                               res.redirect(redirectUrl)
                                             })


                                                router.route('/v11-does-your-fit-note-have-a-signature')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v11-does-your-fit-note-have-a-signature']) {
                                                       case 'yes':
                                                         redirectUrl = 'v11-three-options'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v11-no-signature'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })


                                                router.route('/v11-fit-note-template')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v11-fit-note-template']) {
                                                       case 'yes':
                                                         redirectUrl = 'v11-upload-paper-1'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v11-wrong-template'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })



                                             router.route('/v11-three-options-select')
                                               .post((req, res, next) => {
                                                 let redirectUrl
                                                 switch (req.body['v11-obtained-fit-note']) {
                                                   case 'paper':
                                                     redirectUrl = 'v11-fit-note-template'
                                                     break
                                                   case 'sms':
                                                     redirectUrl = 'v11-upload-sms-1'
                                                     break
                                                   case 'email':
                                                     redirectUrl = 'v11-upload-email-1'
                                                     break
                                                   default:
                                                     redirectUrl = req.path
                                                     break
                                                 }
                                                 res.redirect(redirectUrl)
                                               })


                                                router.route('/v12-do-you-have-a-fit-note')
                                             .post((req, res, next) => {
                                               let redirectUrl
                                               // console.table(req.body)
                                               switch (req.body['v12-do-you-have-a-fit-note']) {
                                                 case 'yes':
                                                   redirectUrl = 'v12-does-your-fit-note-have-a-signature'
                                                   break
                                                 case 'no':
                                                   redirectUrl = 'v12-no-fit-note'
                                                   break
                                                 default:
                                                   redirectUrl = req.path
                                                   break
                                               }
                                               res.redirect(redirectUrl)
                                             })


                                                router.route('/v12-does-your-fit-note-have-a-signature')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v12-does-your-fit-note-have-a-signature']) {
                                                       case 'yes':
                                                         redirectUrl = 'v12-three-options'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v12-no-signature'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })


                                                router.route('/v12-fit-note-template')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v12-fit-note-template']) {
                                                       case 'yes':
                                                         redirectUrl = 'v12-upload-paper-1'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v12-wrong-template'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })



                                             router.route('/v12-three-options-select')
                                               .post((req, res, next) => {
                                                 let redirectUrl
                                                 switch (req.body['v12-obtained-fit-note']) {
                                                   case 'paper':
                                                     redirectUrl = 'v12-fit-note-template'
                                                     break
                                                   case 'sms':
                                                     redirectUrl = 'v12-upload-sms-1'
                                                     break
                                                   case 'email':
                                                     redirectUrl = 'v12-upload-email-1'
                                                     break
                                                   default:
                                                     redirectUrl = req.path
                                                     break
                                                 }
                                                 res.redirect(redirectUrl)
                                               })



                                                router.route('/v13a-do-you-have-a-fit-note')
                                             .post((req, res, next) => {
                                               let redirectUrl
                                               // console.table(req.body)
                                               switch (req.body['v13a-do-you-have-a-fit-note']) {
                                                 case 'yes':
                                                   redirectUrl = 'v13a-does-your-fit-note-have-a-signature'
                                                   break
                                                 case 'no':
                                                   redirectUrl = 'v13a-no-fit-note'
                                                   break
                                                 default:
                                                   redirectUrl = req.path
                                                   break
                                               }
                                               res.redirect(redirectUrl)
                                             })


                                                router.route('/v13a-does-your-fit-note-have-a-signature')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v13a-does-your-fit-note-have-a-signature']) {
                                                       case 'yes':
                                                         redirectUrl = 'v13a-three-options'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v13a-no-signature'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })


                                                router.route('/v13a-fit-note-template')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v13a-fit-note-template']) {
                                                       case 'yes':
                                                         redirectUrl = 'v13a-upload-paper-1'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v13a-wrong-template'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })



                                             router.route('/v13a-three-options-select')
                                               .post((req, res, next) => {
                                                 let redirectUrl
                                                 switch (req.body['v13a-obtained-fit-note']) {
                                                   case 'paper':
                                                     redirectUrl = 'v13a-upload-paper'
                                                     break
                                                   case 'sms':
                                                     redirectUrl = 'v13a-upload-sms'
                                                     break
                                                   case 'email':
                                                     redirectUrl = 'v13a-upload-email'
                                                     break
                                                   default:
                                                     redirectUrl = req.path
                                                     break
                                                 }
                                                 res.redirect(redirectUrl)
                                               })


                                                router.route('/v13b-do-you-have-a-fit-note')
                                             .post((req, res, next) => {
                                               let redirectUrl
                                               // console.table(req.body)
                                               switch (req.body['v13b-do-you-have-a-fit-note']) {
                                                 case 'yes':
                                                   redirectUrl = 'v13b-does-your-fit-note-have-a-signature'
                                                   break
                                                 case 'no':
                                                   redirectUrl = 'v13b-no-fit-note'
                                                   break
                                                 default:
                                                   redirectUrl = req.path
                                                   break
                                               }
                                               res.redirect(redirectUrl)
                                             })


                                                router.route('/v13b-does-your-fit-note-have-a-signature')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v13b-does-your-fit-note-have-a-signature']) {
                                                       case 'yes':
                                                         redirectUrl = 'v13b-three-options'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v13b-no-signature'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })


                                                router.route('/v13b-fit-note-template')
                                                   .post((req, res, next) => {
                                                     let redirectUrl
                                                     // console.table(req.body)
                                                     switch (req.body['v13b-fit-note-template']) {
                                                       case 'yes':
                                                         redirectUrl = 'v13b-upload-paper'
                                                         break
                                                       case 'no':
                                                         redirectUrl = 'v13b-wrong-template'
                                                         break
                                                       default:
                                                         redirectUrl = req.path
                                                         break
                                                     }
                                                     res.redirect(redirectUrl)
                                                   })



                                             router.route('/v13b-three-options-select')
                                               .post((req, res, next) => {
                                                 let redirectUrl
                                                 switch (req.body['v13b-obtained-fit-note']) {
                                                   case 'paper':
                                                     redirectUrl = 'v13b-upload-paper'
                                                     break
                                                   case 'sms':
                                                     redirectUrl = 'v13b-upload-sms'
                                                     break
                                                   case 'email':
                                                     redirectUrl = 'v13b-upload-email'
                                                     break
                                                   default:
                                                     redirectUrl = req.path
                                                     break
                                                 }
                                                 res.redirect(redirectUrl)
                                               })



module.exports = router
