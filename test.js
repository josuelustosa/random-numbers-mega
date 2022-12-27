function sortearNumeros() {
  const floatingMin = document.querySelector("#floatingMin").value;
  const floatingMax = document.querySelector("#floatingMax").value;

  var qntdNumSort = [1, 2, 3, 4, 5, 6];
  var numerosSorteados = [];

  for (let numeroSort of qntdNumSort) {
    let numeroRepetido = true;

    while (numeroRepetido) {
      numeroSort = Math.floor(
        Math.random() * (floatingMax - floatingMin + 1) + floatingMin
      );
      numeroRepetido = numerosSorteados.includes(numeroSort);
    }

    numerosSorteados.push(numeroSort);
  }

  // exibe os números aleatórios (ordenados)
  document.querySelector("#mensagem").innerHTML = "Seus números da sorte são:";
  document.querySelector("#numeros-sorteados").innerHTML =
    '<span class="badge text-bg-success mb-2" style="font-size: 16px">' +
    numerosSorteados.join(", ") +
    "</span>";
}
