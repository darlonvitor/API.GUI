const carregarDados = () => {
    let id = new URLSearchParams(window.location.search).get("id");
    
    load("Produto/"+id, produto => {
        document.getElementById('descricao').setAttribute("value",produto.descricao);
        document.getElementById('quantidade').setAttribute("value",produto.quantidade);
        document.getElementById('categoria').setAttribute("value",produto.categoria.descricao);
    });
}

const deleteProduto = () =>{
    let id = new URLSearchParams(window.location.search).get("id");
    erase("Produto/" + id, ()=>{window.location.href = "produto.html"});
}