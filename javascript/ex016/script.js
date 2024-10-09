function contar(){

let inicio=document.getElementById('txti')
let fim=document.getElementById('txtf')
let passos=document.getElementById('txtp')
let result= document.getElementById('res')
if(inicio.value.length==0 || fim.value.length==0 ||passos.value.length==0){
    window.alert(`Faltam dados`)
}else{
 result.innerHTML='contando...'
 let i=Number(inicio.value)
 let f=Number(fim.value)
 let p=Number(passos.value)

 for(let c=i;c<=f; c+=p){
    result.innerHTML += `${c}`
 }
}

}