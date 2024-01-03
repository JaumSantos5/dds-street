//pesquisar elementos

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const allElements = document.querySelectorAll(".blouse-card, .t-shirt-card, .shorts-card, .cap-card, .title, .t-shirt-container, .blouse-container, .shorts-container, cap-container"); // Selecione os elementos que você deseja pesquisar

    allElements.forEach(element => {
        const textContent = element.textContent.toLowerCase(); // Obtém o conteúdo de texto do elemento
        if (textContent.includes(searchTerm)) {
            element.style.display = "flex"; // Mostra o elemento se contiver o termo de pesquisa
        } else {
            element.style.display = "none"; // Oculta o elemento se não contiver o termo de pesquisa
        }
    });
});




//carrossel

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage()
}, 5000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true
}




//Menu responsivo

const menuIcon = document.getElementById("menuIcon");
const navList = document.getElementById("navList");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});




// zoom de imagens 

const clickableImages = document.querySelectorAll('.clickable-image');

clickableImages.forEach(image => {
    image.addEventListener('click', function () {
        // Crie um elemento de imagem para a versão maior da imagem
        const enlargedImage = document.createElement('img');
        enlargedImage.src = this.src;
        enlargedImage.alt = this.alt;
        enlargedImage.classList.add('enlarged-image');

        // Crie uma div para o fundo escuro
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.appendChild(enlargedImage);

        // Adicione a div do overlay ao corpo do documento
        document.body.appendChild(overlay);

        // Adicione um evento de clique à div do overlay para fechá-la quando clicada
        overlay.addEventListener('click', function () {
            document.body.removeChild(this);
        });
    });
});





// carrossel de produtos iguais



const carousels = document.querySelectorAll('.t-shirt-card, .blouse-card, .cap-card, .shorts-card');

carousels.forEach(carousel => {
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const images = carousel.querySelector('.img-container');
    const carouselNumber = images.getAttribute('data-carousel');
    let counter = 0;
    
    const imageWidth = carousel.clientWidth; // Largura do contêiner do carrossel

    // Ajuste para tornar as imagens responsivas
    const carouselImages = images.querySelectorAll('t-shirt-img');
    carouselImages.forEach(image => {
        image.style.width = `${imageWidth}px`;
    });


    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = 0;
        }
        images.style.transform = `translateX(${-imageWidth * counter}px)`;
    });

    nextBtn.addEventListener('click', () => {
        const maxCounter = images.querySelectorAll('img').length - 1;
        counter++;
        if (counter > maxCounter) {
            counter = maxCounter;
        }
        images.style.transform = `translateX(${-imageWidth * counter}px)`;
    });
});





// Selecione os botões de cores
const pretoButtonA = document.getElementById("preto-a");
const brancoButtonA = document.getElementById("branco-a");
const brancoButtonB = document.getElementById("branco-b");
// const pretoButtonC = document.getElementById("preto-c");
const verdeButtonD = document.getElementById("verde-d");
const roxoButtonE = document.getElementById("roxo-e");
const brancoButtonF = document.getElementById("branco-f");
const pretoButtonG = document.getElementById("preto-g");
const cinzaButtonH = document.getElementById("cinza-h");
const brancoButtonI = document.getElementById("branco-i");
const brancoButtonI1 = document.getElementById("branco-i1");
const pretoButtonJ = document.getElementById("preto-j");
const brancoButtonK = document.getElementById("branco-k");
const pretoButtonL = document.getElementById("preto-l");
const pretoButtonM = document.getElementById("preto-m");
const pretoButtonN = document.getElementById("preto-n");
const pretoButtonO = document.getElementById("preto-o");
const pretoButtonO1 = document.getElementById("preto-o1");
const pretoButtonP = document.getElementById("preto-p");
const brancoButtonP1 = document.getElementById("branco-p1");
const pretoButtonQ = document.getElementById("preto-q");
const pretoButtonR = document.getElementById("preto-r");
const pretoButtonS = document.getElementById("preto-s");
const marromButtonS1 = document.getElementById("marrom-s1");
// const pretoButtonT = document.getElementById("preto-t");
// const begeButtonT1 = document.getElementById("bege-t1");
// const pretoButtonU = document.getElementById("preto-u");
// const pretoButtonV = document.getElementById("preto-v");
// const pretoButtonW = document.getElementById("preto-w");



//Opções de cores e tamanho

const size1 = document.getElementById("size1");
const sizeA = document.getElementById("size-a");
const sizeA1 = document.getElementById("size-a1");
const sizeB = document.getElementById("size-b");
// const sizeC = document.getElementById("size-c");
const sizeD = document.getElementById("size-d");
const sizeE = document.getElementById("size-e");
const sizeF = document.getElementById("size-f");
const sizeG = document.getElementById("size-g");
const sizeH = document.getElementById("size-h");
const sizeI = document.getElementById("size-i");
const sizeI1 = document.getElementById("size-i1");
const sizeJ = document.getElementById("size-j");
const sizeK = document.getElementById("size-k");
const sizeL = document.getElementById("size-l");
const sizeM = document.getElementById("size-m");
const sizeN = document.getElementById("size-n");
const sizeO = document.getElementById("size-o");
const sizeO1 = document.getElementById("size-o1");
const sizeP = document.getElementById("size-p");
const sizeP1 = document.getElementById("size-p1");
const sizeQ = document.getElementById("size-q");
const sizeR = document.getElementById("size-r");
const sizeS = document.getElementById("size-s");
const sizeS1 = document.getElementById("size-s1");
// const sizeT = document.getElementById("size-t");
// const sizeT1 = document.getElementById("size-t1");
// const sizeU = document.getElementById("size-u");
// const sizeV = document.getElementById("size-v");
// const sizeW = document.getElementById("size-w");









function desativarBotoesAtivos() {
    pretoButtonA.classList.remove("active");
    brancoButtonA.classList.remove("active");
    brancoButtonB.classList.remove("active");
    // pretoButtonC.classList.remove("active");
    verdeButtonD.classList.remove("active");
    roxoButtonE.classList.remove("active");
    brancoButtonF.classList.remove("active");
    pretoButtonG.classList.remove("active");
    cinzaButtonH.classList.remove("active");
    brancoButtonI.classList.remove("active");
    brancoButtonI1.classList.remove("active");
    pretoButtonJ.classList.remove("active");
    brancoButtonK.classList.remove("active");
    pretoButtonL.classList.remove("active");
    pretoButtonM.classList.remove("active");
    pretoButtonN.classList.remove("active");
    pretoButtonO.classList.remove("active");
    pretoButtonO1.classList.remove("active");
    pretoButtonP.classList.remove("active");
    brancoButtonP1.classList.remove("active");
    pretoButtonQ.classList.remove("active");
    pretoButtonR.classList.remove("active");
    pretoButtonS.classList.remove("active");
    marromButtonS1.classList.remove("active");
    // pretoButtonT.classList.remove("active");
    // begeButtonT1.classList.remove("active");
    // pretoButtonU.classList.remove("active");
    // pretoButtonV.classList.remove("active");
    // pretoButtonW.classList.remove("active");
}



sizeA.addEventListener("click", () => {  //camiseta chronic 1
    pretoButtonA.classList.add("active");
    brancoButtonA.classList.remove("active");
    event.stopPropagation();
});

sizeA1.addEventListener("click", () => {  //camiseta chronic 1
    brancoButtonA.classList.add("active");
    pretoButtonA.classList.remove("active");
    event.stopPropagation();
});

sizeB.addEventListener("click", () => {  //camiseta chronic 2
    brancoButtonB.classList.add("active");
    event.stopPropagation();
});

// sizeC.addEventListener("click", () => {  //camiseta chronic 3
//     pretoButtonC.classList.add("active");
//     event.stopPropagation();
// });

sizeD.addEventListener("click", () => {  //camiseta high 1
    verdeButtonD.classList.add("active");
    event.stopPropagation();
});

sizeE.addEventListener("click", () => {  //camiseta high 2
    roxoButtonE.classList.add("active");
    event.stopPropagation();
});

sizeF.addEventListener("click", () => {  //camiseta high 3
    brancoButtonF.classList.add("active");
    event.stopPropagation();
});

sizeG.addEventListener("click", () => {  //camiseta adidas 1
    pretoButtonG.classList.add("active");
    event.stopPropagation();
});

sizeH.addEventListener("click", () => {  //camiseta plus size 1
    cinzaButtonH.classList.add("active");
    event.stopPropagation();
});

sizeI.addEventListener("click", () => {  //camiseta dgk 1
    brancoButtonI.classList.add("active");
    brancoButtonI1.classList.remove("active");
    event.stopPropagation();
});

sizeI1.addEventListener("click", () => {  //camiseta dgk 2
    brancoButtonI1.classList.add("active");
    brancoButtonI.classList.remove("active");
    event.stopPropagation();
});

sizeJ.addEventListener("click", () => {  //camiseta nike 1
    pretoButtonJ.classList.add("active");
    event.stopPropagation();
});

sizeK.addEventListener("click", () => {  //camiseta nike 2
    brancoButtonK.classList.add("active");
    event.stopPropagation();
});

sizeL.addEventListener("click", () => {  //camiseta santa cruz 1
    pretoButtonL.classList.add("active");
    event.stopPropagation();
});

sizeM.addEventListener("click", () => {  //camiseta santa cruz 2
    pretoButtonM.classList.add("active");
    event.stopPropagation();
});

sizeN.addEventListener("click", () => {  //camiseta sufgang 1
    pretoButtonN.classList.add("active");
    event.stopPropagation();
});

sizeO.addEventListener("click", () => {  //camiseta sufgang 2
    pretoButtonO.classList.add("active");
    pretoButtonO1.classList.remove("active");
    event.stopPropagation();
});

sizeO1.addEventListener("click", () => {  //camiseta sufgang 3
    pretoButtonO1.classList.add("active");
    pretoButtonO.classList.remove("active");
    event.stopPropagation();
});

sizeP.addEventListener("click", () => {  //camiseta sufgang 4
    pretoButtonP.classList.add("active");
    brancoButtonP1.classList.remove("active");
    event.stopPropagation();
});

sizeP1.addEventListener("click", () => {  //camiseta sufgang 5
    brancoButtonP1.classList.add("active");
    pretoButtonP.classList.remove("active");
    event.stopPropagation();
});

sizeQ.addEventListener("click", () => {  //blusa high 1
    pretoButtonQ.classList.add("active");
    event.stopPropagation();
});

sizeR.addEventListener("click", () => {  //blusa vans 1
    pretoButtonR.classList.add("active");
    event.stopPropagation();
});

sizeS.addEventListener("click", () => {  //blusa sufgang 1
    pretoButtonS.classList.add("active");
    marromButtonS1.classList.remove("active");
    event.stopPropagation();
});

sizeS1.addEventListener("click", () => {  //blusa sufgang 1
    marromButtonS1.classList.add("active");
    pretoButtonS.classList.remove("active");
    event.stopPropagation();
});

// sizeT.addEventListener("click", () => {  //bermuda high 1
//     pretoButtonT.classList.add("active");
//     begeButtonT1.classList.remove("active");
//     event.stopPropagation();
// });

// sizeT1.addEventListener("click", () => {  //bermuda high 1
//     begeButtonT1.classList.add("active");
//     pretoButtonT.classList.remove("active");
//     event.stopPropagation();
// });

// sizeU.addEventListener("click", () => {  //blusa vans 1
//     pretoButtonU.classList.add("active");
//     event.stopPropagation();
// });

// sizeV.addEventListener("click", () => {  //blusa vans 1
//     pretoButtonV.classList.add("active");
//     event.stopPropagation();
// });

// sizeW.addEventListener("click", () => {  //blusa vans 1
//     pretoButtonW.classList.add("active");
//     event.stopPropagation();
// });



document.addEventListener("click", (event) => {
    const areaClicada = event.target;
    if (areaClicada !== pretoButtonA && areaClicada !== brancoButtonA && areaClicada !== brancoButtonB //&& areaClicada !== pretoButtonC//
         && areaClicada !== verdeButtonD
        && areaClicada !== roxoButtonE && areaClicada !== brancoButtonF && areaClicada !== pretoButtonG && areaClicada !== cinzaButtonH && areaClicada !== brancoButtonI
        && areaClicada !== brancoButtonI1 && areaClicada !== pretoButtonJ && areaClicada !== brancoButtonK && areaClicada !== pretoButtonL && areaClicada !== pretoButtonM
        && areaClicada !== pretoButtonN && areaClicada !== pretoButtonO && areaClicada !== pretoButtonO1 && areaClicada !== pretoButtonP && areaClicada !== brancoButtonP1
        // && areaClicada !== pretoButtonQ && areaClicada !== pretoButtonR && areaClicada !== pretoButtonS && areaClicada !== marromButtonS1 && areaClicada !== pretoButtonT
        // && areaClicada !== begeButtonT1 && areaClicada !== pretoButtonU && areaClicada !== pretoButtonV && areaClicada !== pretoButtonW
        ) {
        desativarBotoesAtivos();
    }
});












function mudarImagem(shortsId, cor) {
    const shortsImage = document.querySelector(`#${shortsId} .shorts-img`);
    
    // Lógica para alterar a imagem de acordo com a cor
    switch (cor) {
        case 'preto':
            shortsImage.src = "./assets/bermuda-2.jpg";
            break;
        case 'bege':
            shortsImage.src = "./assets/bermuda-3.jpg";
            break;
        // Adicione mais casos conforme necessário
        default:
            shortsImage.src = "./assets/bermuda-2.jpg"; // Imagem padrão se a cor não for reconhecida
            break;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const pretoButtonT = document.getElementById("preto-t");
    const begeButtonT1 = document.getElementById("bege-t1");

    pretoButtonT.addEventListener("click", function () {
        mudarImagem("shorts", 'preto');
    });

    begeButtonT1.addEventListener("click", function () {
        mudarImagem("shorts", 'bege');
    });
});


