const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const upadateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 500

        if (c <target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(upadateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    upadateCounter()
})