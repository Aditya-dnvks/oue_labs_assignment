const request = require('request')

const getGoogleHomePage = () =>
  new Promise((resolve, reject) => {
    request('http://www.google.com', (error, response, body) => {
      if (error) {
        console.error('error:', error)
        reject(error)
      } else {
        console.log('statusCode:', response && response.statusCode)
        console.log('body:')
        resolve(body)
      }
    })
  })

getGoogleHomePage()
  .then(result => {
    console.log('RESULT==>', result)
  })
  .catch(error => {
    console.error('ERROR==>', error)
  })
