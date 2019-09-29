var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8'); //le o arquivo file.txt
var lines = input.split('\n');//pega cada linha do arquivo file.txt
var passwords = lines;

var upper = false;
var lower = false;
var number = false;
var specials = false;
for(var i in passwords) {
  if(passwords[i].length >= 6 && passwords[i].length <= 32) {
    upper = /[A-Z]/gm.test(passwords[i]) ? true : false; //verifica se tem caracteres maiusculos
    lower = /[a-z]/gm.test(passwords[i]) ? true : false; //verifica se tem caracteres minuscu
    number = /[0-9]/gm.test(passwords[i]) ? true : false;//verifica se tem numeros
    specials = /[záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ.,:!? ]/gm.test(passwords[i])
      ? true : false;//verifica se tem acentuacoes pontuacoes ou espaco

    if(upper && lower && number && !specials) {
      console.log('Senha valida.');
    }
    else{
      console.log('Senha invalida.');
    }
  }
  else {
    console.log('Senha invalida.');
  }
}
