const listarProdutos = () =>{
    // Tabela que contem as informações dos produtos em estoque
    const tabelaProdutos = document.getElementById("tabela_produtos");

    // Limpando as linhas da tabela 
    //clear(document.getElementsByClassName('conteudo-tabela'));

    // Preenchendo com os elementos atualizados
    load('Produto', data =>{
        // Ordenando os dados em ordem alfabética pela descricao do produtos
        data.sort((p1,p2)=>{
            return p1.descricao == p2.descricao ? 0 : p1.descricao > p2.descricao ? 1 : -1;
        });
        data.forEach(produto =>{
            // Criando linha da tabela
            let tr = newElement('tr',{className:"conteudo-tabela"});

            // celulas com os 'botoes' para edição e exclusao de item
            let editLink  = newElement('td');
            let trashLink =  newElement('td');

            // Criando os botões de edição e exclusão, respectivamente
            editLink.append( newElement("a",
                {
                    className : "w3-hover-text-orange w3-text-teal fa fa-edit",
                    href : "updateproduto.html?id="+produto.id,
                    title :"Editar"
                }
            ));
        
            trashLink.append( newElement('a',
                {
                    className : "w3-hover-text-red w3-text-teal fa fa-trash",
                    href : "deleteproduto.html?id="+produto.id,
                    title :"Excluir"
                }
            ));

            // Array com as células que comporão a linha da tabela
            let linha = [
                newElement('td',{innerText : produto.descricao}),
                newElement('td',{innerText : produto.quantidade}),
                newElement('td',{innerText : produto.categoria.descricao}),
                editLink,
                trashLink                
            ];

            // Adicionando as células à sua linha correspondente 
            linha.forEach(td => tr.append(td));
            // Adicionando a linha à tabela
            tabelaProdutos.append(tr);
        })
    });
}

// Carregando as categorias de produto disponiveis no banco de dados
const listarCategorias = () =>{
    // Select que vai conter as opções de categoria disponíveis
    let select = document.getElementById("categoriaproduto");

    // Requisitando as categorias 
    load("Categoria",data => {
        // Percorrendo o array de categorias retornado
        data.forEach(cat => {
            // criando um option e preenchendo com dados da categoria
            const op = newElement("option",{value:cat.id,innerText:cat.descricao})
            // adicionando o option ao select
            select.append(op);
        });
    });
}

const novoProduto = () =>{
    // Formulario com os dados do novo produto
    const form =  new FormData(document.getElementById("novoprodutoform"));
   
    // Extraindo dados do produto a ser criado
    const data = {
        descricao: form.get("descricaoproduto"),
        quantidade: parseInt(form.get("quantidadeproduto")),
        categoriaId: parseInt(form.get("categoriaproduto"))
    };
    // Requisição POST para criação do novo produto 
    create("Produto",data,() => {window.location.href="produto.html"});
}

