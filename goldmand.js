(async () => {
    const log = (m) => {
        document.querySelector('.header--username').innerHTML = m
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const transfer = async (index=1) => {
        document.querySelectorAll('.plus')[index].click()
        document.querySelector('.max-staking').click()
        document.querySelector('.button.green-button').click()
        await sleep(5000)
    }

    const mine = async () => {
        document.querySelectorAll('.start-mining-button')[2].click()
        document.querySelector('.modal-bottom .green-button').click()
        await sleep(3000)
        document.querySelector('.mining-hub-menu a').click()
        await sleep(2000)
    }

    const tick = async () => {
        if (document.querySelectorAll('.start-mining-button')[2]) {
            log('mining')
            await mine()
            return
        }

        if (!!document.querySelectorAll('.header-resources-numbers')[1].innerText.replace(/[^1-9]/g, '')) {
            log('transfer GMM')
            await transfer(1)
            return
        }
        
        if (!!document.querySelectorAll('.header-resources-numbers')[2].innerText.replace(/[^1-9]/g, '')) {
            log('transfer GME')
            await transfer(2)
            return
        }

        log(`Waiting for next action ${new Date().getSeconds()}`)

        await sleep(1000)
    }

    document.querySelector('.mining-hub-menu a').click()
    window.__t = Date.now()
    const __t = window.__t

    while (true) {
        if (window.__t !== __t) {
            break
        }

        await tick()
    }
})();
