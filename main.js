var qntdNumSort = [1, 2, 3, 4, 5, 6],
  numerosSorteados = [];

  console.log(qntdNumSort)

// entrada do usuário
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

for (let numeroSort of qntdNumSort) {
  let numeroRepetido = true;

  while (numeroRepetido) {
    numeroSort = Math.floor(Math.random() * (max - min + 1) + min);
    numeroRepetido = numerosSorteados.includes(numeroSort);
  }

  numerosSorteados.push(numeroSort);
}

// exibe os números aleatórios
console.log(
  `Valor aleatório entre ${min} e ${max} são: ${numerosSorteados}`
);

document.getElementById("numeros-sorteados").innerHTML = numerosSorteados.map((item, index) => {
  return '<span class="badge text-bg-success mb-2" style="font-size: 16px">' + item + '</span>'
}).join(" ")
