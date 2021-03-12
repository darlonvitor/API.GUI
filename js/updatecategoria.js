const carregarDados = () =>{
    const input = document.getElementById("descricao");
    const id = new URLSearchParams(window.location.search).get("id");
    
    load("Categoria/"+id,data => {
        input.setAttribute("value",data.descricao);
    })
}

const updateCategoria = () => {
    let data = {
        id: new URLSearchParams(window.location.search).get("id"),
        descricao: new FormData(document.getElementById("updatecategoriaform")).get('descricao')
    }
    update("Categoria/"+data.id,data, ()=>{
        window.location.href = 'index.html'
    });    
}

carregarDados();