let agora=new Date()
let hora = agora.getHours()
console.log(`Agora são ${hora} horas`);
if(hora<12){
    console.log(`Bom dia sr(a)`)
}else if(hora==12 && hora<18){
    console.log(`Boa tarde sr(a)`)
}else{
    console.log(`Boa noite sr(a)`)
}
