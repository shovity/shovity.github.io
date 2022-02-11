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
        await sleep(100)
        document.querySelector('.modal-bottom .green-button').click()
        document.querySelector('.mining-hub-menu a').click()
        await sleep(5000)
    }
    
    clearInterval(window.__a_interal)
    window.__a_interal = setInterval(async () => {
        
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

        log('waiting for next action')
    }, 1000)
})();
