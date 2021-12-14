function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagem/manhã.png'
        document.body.style.background = '#e0ffff'  
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#bdb76b'
    } else {
        img.src = 'imagem/noite.png'
        document.body.style.background = '#1c1c1c'

    }
}