const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 4000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === "/sendMessageToServer") {
        // console.log("req", req)

        try {
          const respons = await fetch(
            'https://open.larksuite.com/open-apis/bot/v2/hook/dfc10a80-25f2-4014-87cb-7600315f2835',
            {
              method: 'POST',
              body: '{"msg_type":"text","content":{"text":"request example"}}',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          const responsJson = await respons.json()
          res.statusCode = respons.status;
          res.statusMessage = respons.statusText;
          res.end(JSON.stringify(responsJson))
        } catch (e) {
          res.statusCode = 500;
          res.statusMessage = "Internal Server Error"
          res.end()
        }
      } else {
        await handle(req, res, parsedUrl)
      }

    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
