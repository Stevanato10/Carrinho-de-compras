let produtoNoCarrinho = []
let campoLista = document.getElementById('lista-produtos')
let campoItemDaLista = campoLista.querySelector('.carrinho__produtos__produto')
let campoValorTotal = document.getElementById('valor-total')
let totalGeral = 0
function limpar(){
    campoItemDaLista.innerHTML = '';
    campoValorTotal.innerHTML = 'R$0,00';
    produtoNoCarrinho = []
    totalGeral = 0
}

limpar()

function adicionar() {
    let productInput = document.getElementById('produto')
    let produto = productInput.value;
    let quantidade = document.getElementById('quantidade').value;
    quantidade > 1 ? quantidade = quantidade : quantidade = 1
    let nomeProduto = produto.split('-')[0]
    let precoProduto = parseInt(produto.split('R$')[1]) * quantidade
    let addProduto = `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span> </section> </section>`;
    totalGeral = totalGeral + precoProduto
    campoValorTotal.innerHTML = totalGeral
    produtoNoCarrinho.push(addProduto)
    campoItemDaLista.innerHTML = produtoNoCarrinho
}