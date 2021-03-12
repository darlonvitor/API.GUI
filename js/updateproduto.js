const carregarDados = ()=>{
    const id = new URLSearchParams(window.location.search).get("id");
    load("Produto/"+id, element =>{
        document.getElementById('descricao').setAttribute("value",element.descricao);
        document.getElementById('quantidade').setAttribute("value",element.quantidade);
        listarCategorias(element.categoriaId);
    });
}

const listarCategorias = (id) =>{
    const select = document.getElementById("categoria");

    load("Categoria",data => {

        data.forEach(categoria => {
            const op = newElement("option",{value:categoria.id,innerText:categoria.descricao});
            
            if (categoria.id == id) {
                op.selected = true;
            }

            select.append(op);
        });
    });
}

const updateProduto = ()=>{
    const form = new FormData(document.getElementById("updateprodutoform"));
    let data = {
        id:new URLSearchParams(window.location.search).get("id"),
        descricao:form.get('descricao'),
        quantidade:form.get('quantidade'),
        categoriaId:form.get('categoria')
    }
    update("Produto/"+data.id,data,()=>{window.location.href="produto.html"});
}