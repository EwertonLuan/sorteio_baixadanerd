
var list = []
var name  

window.onload = function() {
    //Verifica o suporte para a FIle API
    if (window.FileReader) {
        var fileSelected = document.getElementById('txtfiletoread');
        var list_1 = []
        fileSelected.addEventListener('change', function (e) {

            //Seta a extensão para o arquivo
            var fileExtension = /text.*/;

            // Pega o obejeto aquivo
            var fileTobeRead = fileSelected.files[0];

            if (fileTobeRead.type.match(fileExtension)) {

                var fileReader = new FileReader();
                fileReader.onload = function (e) {

                var part = fileReader.result
                for (i in part.split('\n')){
                    list.push(part.split('\n')[i])
                }

                document.getElementById('arquivo').style.display = "none"
                // document.getElementById('sorteio').style.display = "inline-block"
            }
                fileReader.readAsText(fileTobeRead);
            }
            else {
                alert("Por favor selecione arquivo texto");
            }
        }, false);
    } else {
        alert("Arquivo(s) não suportado(s)");
    }
}

function sorteio (list){
    document.getElementById('nome').innerHTML = "Loading..."
    var selecionando = Math.floor(Math.random() * list.length)
    var sortudo = list[selecionando]
    nome = list[selecionando]

    delet(list, selecionando)
    document.getElementById('web').value = sortudo
    setTimeout(function(){

    document.getElementById('nome').innerHTML = sortudo
},2000)
}

function delet(list, escolhidos){
    list.splice(escolhidos,1)
}


function validaForm(frm){
    console.log(frm.nome.value)
}