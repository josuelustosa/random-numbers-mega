var qntdNumSort = [1, 2, 3, 4, 5, 6],
  numerosSorteados = [];

// entrada do usuário
const min = parseInt(prompt("Informe Número Inicial: "));
const max = parseInt(prompt("Informe Número Final: "));

for (let numeroSort of qntdNumSort) {
  let numeroRepetido = true;

  while (numeroRepetido) {
    numeroSort = Math.floor(Math.random() * (max - min + 1) + min);
    numeroRepetido = numerosSorteados.includes(numeroSort);
  }

  numerosSorteados.push(numeroSort);
}

// ordenando os números aleatórios
const numerosOrdenados = numerosSorteados.map(function (item, index) {
  return { index: index, value: item };
});

numerosOrdenados.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

const resultNumerosOrdenados = numerosOrdenados.map((item) => {
  return numerosSorteados[item.index];
});

// exibe os números aleatórios (ordenados)
document.querySelector("#mensagem").innerHTML = 'Seus números da sorte são:'
document.querySelector("#numeros-sorteados").innerHTML = resultNumerosOrdenados
  .map((index) => {
    return (
      '<span class="badge text-bg-success mb-2" style="font-size: 16px">' +
      index +
      "</span>"
    );
  })
  .join(" ");
