const conteudo = document.getElementById('conteudo')

function loadlivros() {
    if (conteudo.innerHTML != "") {
        conteudo.innerHTML = "" 
        loadlivrosContent()
    } else {
        loadlivrosContent()
    }

}

function loadlivrosContent() {
    

//APAGAR ISSO DEPOIS:
//verificar se consegue escrever uma função que substitui undefined deixando o campo hidden ou algo assim
//adicionar preço
//Design responsivo
//Animação carregamento



    var busca = document.getElementById("Input").value
    var tipo = document.getElementById("selec").value
    
    

  
        
        let url = `https://www.googleapis.com/books/v1/volumes?q=+${tipo}:${busca}&key=AIzaSyDxrAniSAvumfVDVPizI6cYywwqTmrcU-8`
        
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            for (let i = 0; i <= data.items.length; i++) {
                conteudo.innerHTML +=        
                    `<div class="demo-card-wide mdl-card mdl-shadow--2dp" align="center" style="width:49%; justify-content:center; align-items:center">
                    <img id="thumbnail" src="${data.items[i].volumeInfo.imageLinks.thumbnail}" style="width:200px;">
                    <p id="title" class="hi">
                        Titulo: ${data.items[i].volumeInfo.title}
                    </p>
                    <p id="subt" class="hi">
                        Subtitulo: ${data.items[i].volumeInfo.subtitle}
                    </p>
                    <p>
                        Categoria: ${data.items[i].volumeInfo.categories}
                    </p>
                    <p id="autor" class="hi">
                    Avaliação média: ${data.items[i].volumeInfo.averageRating + "/5"}
                    </p>
                    <p id="autor" class="hi">
                        Autor: ${data.items[i].volumeInfo.authors}
                    </p>
                    <p id="date" class="hi">
                        Data de Publicação: ${data.items[i].volumeInfo.publishedDate}
                    </p>
                    <p id="desc" style="text-align:justify">
                        Descrição: ${data.items[i].volumeInfo.description}
                    </p>
                    <div id="moreinfo">
                    <a href="${data.items[i].volumeInfo.infoLink}" class="link" target="_blank">
                        Mais Informações
                    </a>
                    <a id="apilivro" target="_blank" class="link" href="${data.items[i].volumeInfo.previewLink}">
                    Prévia do Livro
                    </a>
                    <a href="${data.items[i].saleInfo.buyLink}" class="link" target="_blank">
                        Link de Compra
                    </a>
                    </div>
                    </>`
            }
            
        }) 
}

document.getElementById("Input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("srcbtn").click();
    }
});