function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.querySelector('div#res')
    if(fano.value.length ==0 || Number(fano.value) > ano){
        window.alert(`Verifique os dados e tente novamente`)
    }else{
    var fsex= document.getElementsByName('radsex')
    var idade= ano -Number(fano.value)
    //res.innerHTML=`Idade calculada: ${idade}`
    var genero=''
    }
    if(fsex[0].checked){
        genero='Homem'
    }else if(fsex[1].checked){
        genero='Mulher'
    }
    res.style.texAlign='center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
}