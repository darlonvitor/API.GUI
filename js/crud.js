const create = (path, data,func) => {
    
    fetch("https://localhost:5001/api/" + path,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(func)
    .catch(err => console.log("Erro", err));
}

const update = (path,data,func) => {

    fetch("https://localhost:5001/api/" + path,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(func);
}

const load = (path,func) =>{    
    fetch("https://localhost:5001/api/" + path)
    .then(responseStream => responseStream.json())
    .then(func);
}

const erase = (path,func)=>{
    fetch("https://localhost:5001/api/" + path,{
        method:"DELETE"
    })
    .then(func);
}

const clear = (child) => {
    while(child.length > 0){
        child[0].parentNode.removeChild(child[0]);
    }
}

const newElement = (tipo,atributos) => {
    const elemento = document.createElement(tipo);
    
    for(let k in atributos){
        elemento[k] = atributos[k];
    }

    return elemento;
}


