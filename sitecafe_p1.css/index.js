const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
const dataFormatada = `${ano}-${mes}`;
document.getElementById('validade').value = dataFormatada;


function openWindow(machine) {
    let width = 280;
    let height = 530;
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;

    let windowFeatures = `width=${width},height=${height},top=${top},left=${left},scrollbars=no`;

    let newWindow = window.open("", "", windowFeatures);

    
    newWindow.document.write(`
        <html>
        <head>
            <title>${machine}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                img { width: 100%; }
                h2 { color: #4b2c20; }
                ul { list-style: none; padding-left: 0; }
                li { margin: 5px 0; }
                button { margin-top: 20px; padding: 10px 20px; background-color: #4b2c20; color: #fff; border: none; cursor: pointer; }
            </style>
        </head>
        <body>
            <h2>${machine}</h2>
            <img src="path_to_image_of_${machine}.jpg" alt="${machine}">
            <ul>
                <li>Produto 1 - R$ XX,XX</li>
                <li>Produto 2 - R$ XX,XX</li>
            </ul>
            <button onclick="window.close()">Fechar</button>
        </body>
        </html>
    `);
}
function showDetails(tipo, modelo, fotoSrc, preco) {
    let fotoId = '';
    let precoId = '';
    
    switch(modelo) {
        case 'Piccolo':
            fotoId = 'foto-1';
            precoId = 'preco-1';
            break;
        case 'Inissia C40':
            fotoId = 'foto-2';
            precoId = 'preco-2';
            break;
        case 'U C50':
            fotoId = 'foto-3';
            precoId = 'preco-3';
            break;
        case 'HD7811/96':
            fotoId = 'foto-4';
            precoId = 'preco-4';
            break;
    }
    
  
    document.getElementById(fotoId).innerHTML = `<img src="${fotoSrc}" alt="${tipo} ${modelo}" style="width: 100px; display: block; margin: 0 auto;">`;

    document.getElementById(precoId).innerHTML = preco;
}
function updateSelecionados() {
    const maquinas = document.getElementById('maquinas').value;
    const saches = document.getElementById('saches').value;
    const selecionados = document.getElementById('selecionados');

    selecionados.value = `Máquina: ${maquinas}\nSachês: ${saches}`;

    let valor = 0;
    if (maquinas.includes('Piccolo')) valor += 340;
    if (maquinas.includes('Inissia C40')) valor += 300;
    if (maquinas.includes('U C50')) valor += 400;
    if (maquinas.includes('HD7811/96')) valor += 230;
    if (saches.includes('Expresso')) valor += 24;
    if (saches.includes('Descafeinado')) valor += 21;
    if (saches.includes('Livanto')) valor += 35;
    if (saches.includes('Ristretto')) valor += 42;
    if (saches.includes('Vanillo')) valor += 46;
    if (saches.includes('Clássico')) valor += 14;
    if (saches.includes('Intenso')) valor += 14;

    document.getElementById('valor').value = `R$ ${valor},00`;
}

function removeSelecionado() {
    document.getElementById('maquinas').value = '';
    document.getElementById('saches').value = '';
    document.getElementById('selecionados').value = '';
    document.getElementById('valor').value = '';
}

