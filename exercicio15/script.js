function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique a data novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            sexo = 'Gênero Masculino'
            if (idade >= 0 && idade < 3){
                //bêbe
                img.setAttribute('src', 'bebe.png')
            }else if (idade > 3 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if(idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'o-jovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adulto.png')
            }else{
                //idoso
                img.setAttribute('src','idoso.png')
            }
            
        } else if (fsex[1].checked){
            sexo = 'Gênero Feminino'
            if (idade >= 0 && idade < 3){
                //bêbe
                img.setAttribute('src', 'bebe.png')
            }else if (idade > 3 && idade < 10){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if(idade > 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'a-jovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulta.png')
            }else{
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
    }
}
