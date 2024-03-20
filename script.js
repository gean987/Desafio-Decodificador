const texto = document.getElementById('conteudo__principal__digite')

const codific = document.getElementById("conteudo__texto__caixa")

const textNull =  sessionStorage.getItem('novo texto')

function btnCript(){

   /* condicao criada para nao armazenar um valor em branco */
    if(texto.value == '') {
            window.alert('o campo de texto deve ser preenchido')
    } 
   

    else {
    let textoStr = criptografar(texto)

    sessionStorage.setItem('novo texto', textoStr)

    /* criando condicao para troca de pagina */
    if(textNull == null){

    window.location.assign('pagina2.html')
    
}
    
    else {
        codific.value = sessionStorage.getItem('novo texto')
    }

}


}
function btnDescript(){

    if(texto.value == '') {
        window.alert('o campo de texto deve ser preenchido')
} 

    else {

        let textoStr = descriptografar(texto)

        sessionStorage.setItem('novo texto', textoStr)

        if(textNull == null){

        window.location.assign('pagina2.html')
    
}

        else {
            codific.value = sessionStorage.getItem('novo texto')
        }

    }
}
 /* condicao criada para manter o texto dentro do campo desejado e nao retornar ao index */
if(codific.innerHTML == ''){

    codific.value = sessionStorage.getItem('novo texto')

    }

function criptografar(stringCript){

    let e =  texto.value.replaceAll('e','enter')

    let i = e.replaceAll('i','imes')

    let a = i.replaceAll('a', 'ai')

    let o = a.replaceAll('o','ober')

    let u = o.replaceAll('u','ufat')

    stringCript = u

    return stringCript
}


function descriptografar(stringDescript){

    let e =  texto.value.replaceAll('enter','e')

    let i = e.replaceAll('imes','i')

    let a = i.replaceAll('ai', 'a')

    let o = a.replaceAll('ober','o')

    let u = o.replaceAll('ufat','u')

    stringDescript = u

    return stringDescript

}

function copiar(){  

    var copia = codific

        copia.select()

        copia.setSelectionRange(0, 99999)

        navigator.clipboard.writeText(copia.value)
}


    /* funcao criada para limpar o cache da palavra criptografada ou descriptografada 
    e criar uma condição para que o refresh volte ao index */ 

function limpar(){

    if(codific.value != ''){
        sessionStorage.removeItem('novo texto')
    }

}

if(codific.value == ''){
    location.href = 'index.html'
}
