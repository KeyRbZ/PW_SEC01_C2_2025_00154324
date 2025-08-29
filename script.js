document.addEventListener('DOMContentLoaded', () => {
    // Botón para ordenar columnas como filas
    const btnOrdenar = document.getElementById('btnOrdenar');
    const parallelParagraphs = document.querySelector('.parallel-paragraphs');
    let isRowLayout = false;

    btnOrdenar.addEventListener('click', () => {
        isRowLayout = !isRowLayout;
        if (isRowLayout) {
            parallelParagraphs.classList.add('row-layout');
        } else {
            parallelParagraphs.classList.remove('row-layout');
        }
    });

    // Botón para cambiar el título de la página
    const btnCambiarTitulo = document.getElementById('btnCambiarTitulo');
    const newTitleInput = document.getElementById('newTitle');
    const pageTitle = document.querySelector('.page-title');

    btnCambiarTitulo.addEventListener('click', () => {
        const nuevoTitulo = newTitleInput.value.trim();
        if (nuevoTitulo) {
            pageTitle.textContent = nuevoTitulo;
            newTitleInput.value = '';
        } else {
            alert('Por favor, ingresa un nuevo título.');
        }
    });

    // Botón para cambiar el color y tipo de letra del subtítulo y la descripción
    const btnCambiarColor = document.getElementById('btnCambiarColor');
    const subtitle = document.getElementById('subtitle-description');
    const descriptionParagraphs = document.querySelectorAll('.description-text');
    let isFirstColor = true;

    btnCambiarColor.addEventListener('click', () => {
        if (isFirstColor) {
            subtitle.classList.add('changed-color-one');
            subtitle.classList.remove('changed-color-two');
            descriptionParagraphs.forEach(p => {
                p.classList.add('changed-color-one');
                p.classList.remove('changed-color-two');
            });
        } else {
            subtitle.classList.add('changed-color-two');
            subtitle.classList.remove('changed-color-one');
            descriptionParagraphs.forEach(p => {
                p.classList.add('changed-color-two');
                p.classList.remove('changed-color-one');
            });
        }
        isFirstColor = !isFirstColor;
    });

    //Botón para agregar una imagen
    const btnAgregarImagen = document.getElementById('btnAgregarImagen');
    const imageOptions = document.getElementById('imageOptions');
    const btnSubir = document.getElementById('btnSubir');
    const btnAleatoria = document.getElementById('btnAleatoria');
    const imageContainer = document.getElementById('image-container');

    // Mostrar o cultar menú de opciones de la imagen a cargar
    btnAgregarImagen.addEventListener('click', () => {
        imageOptions.style.display = imageOptions.style.display === 'flex' ? 'none' : 'flex';
    });

    // Agregar imagen aleatoria desde una URL externa
    btnAleatoria.addEventListener('click', () => {
        const imageUrl = 'https://picsum.photos/400/300';
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Imagen aleatoria';

        imageContainer.innerHTML = '';
        imageContainer.appendChild(imgElement);

        imageOptions.style.display = 'none';
    });

    // Subir imagen desde la computadora
    btnSubir.addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imgElement.alt = file.name;

                    imageContainer.innerHTML = '';
                    imageContainer.appendChild(imgElement);
                };
                reader.readAsDataURL(file);
            }
        });

        fileInput.click();
        imageOptions.style.display = 'none';
    });
});