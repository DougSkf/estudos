function carregar(){

    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data=new Date()
    var hora=data.getHours()
    msg.innerHTML= `Agora são ${hora} horas`
    
        if(hora >=0 && hora<12){
        //bom dia
        im.src=''
        document.body.style.backgroundColor='#e2cd9f'
        }else if(hora>12 && hora<18){
        //boa tarde  
        img.src='tarde.png'  
        document.body.style.backgroundColor='#b9846f'
        }
        else{
        //boa noite
        img.src='noite.png'
        document.body.style.backgroundColor='#515154'
        }
    }
    carregar();