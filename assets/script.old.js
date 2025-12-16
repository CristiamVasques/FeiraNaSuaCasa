function pedido(pacote) {
  const telefone = "5511960527970"; // coloque o WhatsApp da empresa
  const mensagem = `Olá! Gostaria de pedir o pacote: ${pacote}`;
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function exibirRelogio() {
  var data = new Date();
  var horas = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();
  
  // Adiciona um zero à esquerda se as horas, minutos ou segundos forem menores que 10
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;
  
  var tempo = horas + ":" + minutos + ":" + segundos;

  // Adiciona a data no formato: dia da semana, dia do mês, mês e ano
  var diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  var diaDaSemana = diasDaSemana[data.getDay()];
  var diaDoMes = data.getDate();
  var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var mes = meses[data.getMonth()];
  var ano = data.getFullYear();
  var dataFormatada = diaDaSemana + ', ' + diaDoMes + ' de ' + mes + ' de ' + ano;

  document.getElementById("digiClock").innerHTML = dataFormatada + ' ' + tempo;
  
  // Atualiza o relógio a cada 1000 milissegundos (1 segundo)
  setTimeout(exibirRelogio, 1000);
}

exibirRelogio(); // Chama a função para iniciar o relógio

window.onload = function() {
    var element = document.getElementById('dailyVersesWrapper');
    if (element) {
        element.style.pointerEvents = 'none';
    }
}


