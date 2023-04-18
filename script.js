//escolher número aleatório
var number1 = Math.floor(Math.random() * 6) + 1;

//escolhe um segundo número aleatório 
var number2 = Math.floor(Math.random() * 6) + 1;

//criar uma string com o diretório completo da primeira imagem
var image1 = "dice" + number1 + ".png";
var imageSource1 = "images/" + image1;


//criar uma string com o diretório completo da segunda imagem
var image2 = "dice" + number2 + ".png";
var imageSource2 = "images/" + image2;

//selecionar a primeira imagem a partir do DOM
var image1 = document.querySelectorAll("img")[0];
//alterar a imagem para a direcionada
image1.setAttribute("src", imageSource1);

//seleciona a segunda imagem a partir do DOM
var image2 = document.querySelectorAll("img")[1];
//alterar a imagem para a direcionada
image2.setAttribute("src", imageSource2);

if (number1 > number2){
    document.querySelector("h1").innerHTML = "✌️Player 1 wins!";
} else if (number2 > number1){
    document.querySelector("h1").innerHTML = "Player 2 wins!✌️";
} else {
    document.querySelector("h1").innerHTML = "✌️Draw!✌️";
}