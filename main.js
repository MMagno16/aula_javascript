function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //console.log(document.getElementsByID("agradecimento"));
   // alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://www.linkedin.com/feed/update/urn:li:activity:6843987705429331969/");
    window.location.href = "https://www.linkedin.com/feed/update/urn:li:activity:6843987705429331969/";
}

function trocar (elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
 elemento.innerHTML = "obrigado por passar o mouse aqui"
   // alert ("trocar texto");
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
elemento.innerHTML = "passe o mouse aqui"
}

function load (){
    alert("pagina carregada");
}
   
function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
      validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
/*

/*
var d = new Date();
console.log("hoje é" + d.getDate());
*/

/*
var d = new Date();
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
//var frutas = [{nome:"maça", cor: "vermelho"}, {nome:"uva", cor: "roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);
*/
/*
//var fruta = {nome: "maça", cor: "vermelho"};
//console.log(fruta.nome);
//alert(fruta.cor);
*/

//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Marianna Magno";
//var idade  =  29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));s