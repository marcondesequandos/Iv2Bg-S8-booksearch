const pesquisa = document.getElementById('pesquisa')
pesquisa.focus()
const main = document.getElementById('main')


function loadlivros() {
    if (main.innerHTML != "") {
        main.innerHTML = "" 
        loadlivrosContent() 
    } else {
        loadlivrosContent()   
    }

}

function loadlivrosContent() {  

    var busca = document.getElementById('pesquisa').value
    var tipo = document.getElementById('selec').value      
        
        let url = `https://www.googleapis.com/books/v1/volumes?q=+${tipo}:${busca}&key=AIzaSyDxrAniSAvumfVDVPizI6cYywwqTmrcU-8`
        let loader = `      
        <div class="demo-card-square mdl-card mdl-shadow--2dp" align="center" style="margin-top: 10px; width:33%; justify-content:center; align-items:center" > 
            <p>Carregando...</p>
            <progress id="progress" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></progress>  
            
        </div>         
        `     
        main.innerHTML = loader            

        fetch(url).then((response) => {
            return response.json()
        }).then((data) => { 
            main.innerHTML = ""                          
            for (let i = 0; i <= data.items.length; i++) {                
                main.innerHTML +=        
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
                    Avaliação média: ${data.items[i].volumeInfo.averageRating + " de 5"}
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
                    <div id="moreinfo" style= "display: flex; justify-content: center; flex-wrap: wrap;">
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

document.getElementById('pesquisa').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('srcbtn').click();
    }
});