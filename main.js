function criarCartao ('categoria','pergunta','resposta'){
    let container = document.getElemntById('container');
    let cartao=document.createElement('article');
    cartao.className='cartao';
    carta.innerHTML=`   <div class="Cartao__conteudo">
<h3>${categoria}</h3>
<div class="Cartao__conteudo__pergunta">
    <p>${pergunta}</p>
</div>
<div class="Cartao__conteudo__resposta">
    <p>${resposta}</p>
</div>
</div>
`
container.appendChild(cartao);
}
 
