const carregarDados = ()=>{
    const id = new URLSearchParams(window.location.search).get("id");
    load("Categoria/" + id,data => {
        const deleteinput = document.getElementById("descricao");
        deleteinput.setAttribute('value',data.descricao);
        
    });
}

const deletar = () =>{
    const id = new URLSearchParams(window.location.search).get("id");
    erase("Categoria/" + id, ()=>{window.location.href="index.html"});
}

carregarDados();
