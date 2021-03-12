const listarCategorias = () => {
    const tabelaCategorias = document.getElementById('tabela_categorias')
    clear(document.getElementsByClassName("conteudo-tabela"));
    //percorrendo o array com as categorias e inserindo no ul
    load(
        "Categoria", 
        data => {
            data.sort((a,b) => {
                return a.descricao == b.descricao ? 0 : a.descricao > b.descricao ? 1 : -1;
            });
            data.forEach(cat => {
                // Nova linha da tabela
                let tr = newElement('tr',{className:'conteudo-tabela'});
                
                // Botoes para edição e exclusão da categoria, respectivamente
                let editLink = newElement('td');
                editLink.append(newElement('a',{className:"w3-hover-text-orange w3-text-teal fa fa-edit",href:'updatecategoria.html?id='+cat.id,title:'Editar'}));
                let trashLink = newElement('td');
                trashLink.append(newElement('a',{className: "w3-hover-text-red w3-text-teal fa fa-trash",href:'deletecategoria.html?id='+cat.id,title:'Excluir'}));
                // celulas da tabela
                let cells = [
                    newElement('td',{innerText:cat.descricao}),
                    editLink,
                    trashLink
                ];

                // Adicionando as células à sua respectiva linha
                cells.forEach(c => tr.append(c));
                // Adicionando linha à tabela
                tabelaCategorias.append(tr);

            });
        });
}

const novaCategoria = () => {
    create("Categoria",{
        descricao: new FormData(document.getElementById("novacategoriaform")).get("descricao")
    },listarCategorias);
}
