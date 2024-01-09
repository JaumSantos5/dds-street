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




//mudança de cores de acordo com o tamanho


const cores = [
    'preto-t1', 'branco-t1', 'branco-t2', 'preto-t3', 'verde-t4', 'roxo-t5',
    'branco-t6', 'preto-t7', 'cinza-t8', 'branco-t9', 'branco-t9', 'preto-t10',
    'branco-t11', 'preto-t12', 'preto-t13', 'preto-t14', 'preto-t15', 'preto-t16',
    'branco-t16', 'bege-t17', 'preto-t18', 'preto-t19', 'preto-t20', 'branco-t20',
    'preto-t21', 'preto-t22', 'laranja-t23', 'preto-t24', 'preto-t25', 'azul-t26',
    'preto-t27', 'preto-t28', 'branco-t29', 'preto-t29', 'branco-t29', 'preto-t30',
    'preto-t31', 'preto-bl1', 'preto-bl2', 'preto-bl3', 'marrom-bl3', 'preto-bm1',
    'bege-bm1', 'preto-bm2',
];

const sizes = [
    'size-t1', 'size-t1-1', 'size-t2', 'size-t3', 'size-t4', 'size-t5', 'size-t6',
    'size-t7', 'size-t8', 'size-t9', 'size-t9-1', 'size-t10', 'size-t11', 'size-t12',
    'size-t13', 'size-t14', 'size-t15', 'size-t16', 'size-t16-1', 'size-t17', 'size-t18',
    'size-t19', 'size-t20', 'size-t20-1', 'size-t21', 'size-t22', 'size-t23', 'size-t24',
    'size-t25', 'size-t26', 'size-t27', 'size-t28', 'size-t29', 'size-t29-1', 'size-t29-2',
    'size-t30', 'size-t31', 'size-bl1', 'size-bl2', 'size-bl3', 'size-bl3-1', 'size-bm1',
    'size-bm1-1', 'size-bm2'
];

const tShirtColors = {
    'preto-t1': 'preto',
    'branco-t1': 'branco',
    // Adicione outras cores conforme necessário
};

function mudarImagem(tshirtId, cor) {
    const tshirtImage = document.querySelector(`#${tshirtId} .t-shirt-img`);
    const imageMap = {
        'preto': './assets/camiseta-8.2.jpg',
        'branco': './assets/camiseta-8.1.jpg',
        // Adicione outras cores conforme necessário
    };
    tshirtImage.src = imageMap[cor] || './assets/camiseta-8.1.jpg';
}

function activateButton(buttonId, tshirtId, cor) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', function () {
        mudarImagem(tshirtId, cor);
    });
}

function desativarBotoesAtivos() {
    cores.forEach((cor) => {
        const button = document.getElementById(cor);
        button.classList.remove('active');
    });
}

cores.forEach((cor, index) => {
    activateButton(cor, 't-shirt', tShirtColors[cor]);

    // Verifica se o elemento com o ID em sizes[index] existe antes de adicionar o event listener
    const size = document.getElementById(sizes[index]);
    if (size) {
        size.addEventListener('click', () => {
            desativarBotoesAtivos();
            const button = document.getElementById(cor);
            button.classList.add('active');
        });
    }
});

document.addEventListener('click', (event) => {
    const areaClicada = event.target;
    const isCorButton = cores.includes(areaClicada.id);
    const isSizeButton = sizes.includes(areaClicada.id);
    const isButtonActive = isCorButton || isSizeButton;

    if (!isButtonActive) {
        desativarBotoesAtivos();
    }
});


document.addEventListener('DOMContentLoaded', function () {
    activateButton('preto-t1', 't-shirt', 'preto');
    activateButton('branco-t1', 't-shirt', 'branco');
});


