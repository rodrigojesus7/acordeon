const resposta = document.querySelectorAll('.resposta');
const setaAtiva = document.querySelectorAll('#seta-ativa');
const setaInativa = document.querySelectorAll('#seta-inativa');
const faqAberto = document.querySelectorAll('.faq-content')
const pergunta = document.querySelectorAll('.pergunta')



// PRIMEIRA SETA

setaInativa[0].addEventListener('click', function(){

    ocultarTudo()
    resposta[0].classList.remove('ocultar')
    faqAberto[0].classList.add('faq-content-aberto')
    setaAtiva[0].classList.remove('ocultar')

    setaInativa[0].classList.add('ocultar')

    setaInativa[1].classList.remove('ocultar')
    setaInativa[2].classList.remove('ocultar')
})


setaAtiva[0].addEventListener('click', function(){
 
    ocultarTudo()

    setaAtiva[0].classList.add('ocultar')

    setaInativa[0].classList.remove('ocultar')
    setaInativa[1].classList.remove('ocultar')
    setaInativa[2].classList.remove('ocultar')
})









// SEGUNDA SETA

setaInativa[1].addEventListener('click', function(){

    ocultarTudo()
    resposta[1].classList.remove('ocultar')
    faqAberto[1].classList.add('faq-content-aberto')
    setaAtiva[1].classList.remove('ocultar')

    setaInativa[1].classList.add('ocultar')

    setaInativa[0].classList.remove('ocultar')
    setaInativa[2].classList.remove('ocultar')
})


setaAtiva[1].addEventListener('click', function(){
 
    ocultarTudo()

    setaAtiva[1].classList.add('ocultar')

    setaInativa[0].classList.remove('ocultar')
    setaInativa[1].classList.remove('ocultar')
    setaInativa[2].classList.remove('ocultar')
})








// TERCEIRA SETA

setaInativa[2].addEventListener('click', function(){

    ocultarTudo()
    resposta[2].classList.remove('ocultar')
    faqAberto[2].classList.add('faq-content-aberto')
    setaAtiva[2].classList.remove('ocultar')

    setaInativa[2].classList.add('ocultar')

    setaInativa[0].classList.remove('ocultar')
    setaInativa[1].classList.remove('ocultar')
})


setaAtiva[2].addEventListener('click', function(){
 
    ocultarTudo()

    setaAtiva[2].classList.add('ocultar')

    setaInativa[0].classList.remove('ocultar')
    setaInativa[1].classList.remove('ocultar')
    setaInativa[2].classList.remove('ocultar')
})







function ocultarTudo(){

    setaInativa[0].classList.add('ocultar')
    setaInativa[1].classList.add('ocultar')
    setaInativa[2].classList.add('ocultar')

    setaAtiva[0].classList.add('ocultar')
    setaAtiva[1].classList.add('ocultar')
    setaAtiva[2].classList.add('ocultar')

    resposta[0].classList.add('ocultar')
    resposta[1].classList.add('ocultar')
    resposta[2].classList.add('ocultar')

    faqAberto[0].classList.remove('faq-content-aberto')
    faqAberto[1].classList.remove('faq-content-aberto')
    faqAberto[2].classList.remove('faq-content-aberto')
}

