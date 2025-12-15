function pedido(pacote) {
  const telefone = "5511960527970"; // coloque o WhatsApp da empresa
  const mensagem = `Olá! Gostaria de pedir o pacote: ${pacote}`;
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

