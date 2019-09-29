var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8'); //le o arquivo file.txt
var line = input.split('\n');//pega todas as linhas da variavel input
line = line[0];//pega apenas a primeira linha do arquivo file.txt
var states = {"61": "Brasilia",
              "71": "Salvador",
              "11": "Sao Paulo",
              "21": "Rio de Janeiro",
              "32": "Juiz de Fora",
              "19": "Campinas",
              "27": "Vitoria",
              "31": "Belo Horizonte"}
console.log(typeof states[line] === "undefined"
    ? "DDD nao cadastrado" : states[line]);
