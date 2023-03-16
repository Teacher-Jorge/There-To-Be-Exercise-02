let btnIs = document.getElementById("btnIs")
let btnAre = document.getElementById("btnAre")
let btnArent = document.getElementById("btnArent")
let answer = document.getElementById('answer')
let btnTranslate = document.getElementById('btnTranslate')

btnIs.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    answer.innerHTML = 'is'
    btnIs.style.background = 'lime'
    answer.style.color = 'lime'
    btnIs.disabled = 'true'
    btnAre.disabled = 'true'
    btnArent.disabled = 'true'
})

btnAre.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    answer.innerHTML = 'are'
    btnAre.style.background = 'red'
    answer.style.color = 'red'
    btnAre.disabled = 'true'
})

btnArent.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    answer.innerHTML = "aren't"
    answer.style.color = 'red'
    btnArent.disabled = 'true'
})

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Não há eletricidade pra carregar o carro.'
    setTimeout(() => {
        btnTranslate.innerHTML = 'Translate.'
    }, 3000);
})



