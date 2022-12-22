const { Router, util } = require('eroc')

const router = Router()

let pl = null

const check = async () => {
    if (!pl) {
        pl = util.deferred()
        return
    }

    await pl
    await check()
}

router.get('/', async (req, res, next) => {
    await check()
    
    // Doing async-IO
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    pl.resolve()
    pl = null
    
    res.success()
})

module.exports = router
