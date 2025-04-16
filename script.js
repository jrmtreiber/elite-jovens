// CELULAR

if (window.innerWidth <= 1080) {
    const toggleButton = document.getElementById('toggleButton');
    const container = document.getElementById('containerImagens');
    let expanded = false;

    toggleButton.addEventListener('click', () => {
        expanded = !expanded;
        container.style.display = expanded ? 'block' : 'none';
        toggleButton.textContent = expanded ? 'Ocultar imagens dos participantes' : 'Mostrar imagens dos participantes';
        document.body.classList.toggle('expanded', expanded);

        if (expanded) {
            const allFotos = document.querySelectorAll('.fotos');
            allFotos.forEach(fotosDiv => {
                fotosDiv.style.display = 'none';
            });

            activeCount = 0;

            const ej5 = document.querySelector('.ej5');
            if (ej5) {
                ej5.style.height = '1200px';
            }

            const alturaParticipantes = container.scrollHeight || 1200;
            document.body.style.height = `${2300 + alturaParticipantes}px`;
        } else {
            document.body.style.height = '2300px';
        }
    });

    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navList.classList.toggle('active');
    });

    navList.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        navList.classList.remove('active');
    });

    let activeCount = 0;

    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.toggle-btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                container.style.display = 'none';
                toggleButton.textContent = 'Mostrar imagens dos participantes';
                expanded = false;

                const fotosDiv = button.nextElementSibling;
                const isVisible = fotosDiv.style.display === 'flex';

                if (isVisible) {
                    fotosDiv.style.display = 'none';
                    activeCount--;
                } else {
                    fotosDiv.style.display = 'flex';
                    activeCount++;
                }

                const newHeight = 170 * activeCount;

                const ej5 = document.querySelector('.ej5');
                if (ej5) {
                    ej5.style.position = 'relative';
                    ej5.style.zIndex = '1';
                    ej5.style.height = `calc(1200px + ${newHeight}px)`;
                }

                const bodyBaseHeight = 2300;
                const extraHeightPerSection = 150;
                const totalBodyHeight = bodyBaseHeight + (extraHeightPerSection * activeCount);
                document.body.style.height = `${totalBodyHeight}px`;

                const containerDiv = document.querySelector('.container');
                if (containerDiv) {
                    containerDiv.style.display = 'flex';
                    containerDiv.style.flexDirection = 'column';
                    containerDiv.style.alignItems = 'center';
                }

                // document.body.style.overflowY = 'auto';
            });
        });
    });
}

// COMPUTADOR

if (window.innerWidth > 1080) {
    const toggleButton = document.getElementById('toggleButton');
    const container = document.getElementById('containerImagens');
    let expanded = false;

    toggleButton.addEventListener('click', () => {
        expanded = !expanded;
        container.style.display = expanded ? 'block' : 'none';
        toggleButton.textContent = expanded ? 'Ocultar imagens dos participantes' : 'Mostrar imagens dos participantes';
        document.body.classList.toggle('expanded', expanded);

        if (expanded) {
            const allFotos = document.querySelectorAll('.fotos');
            allFotos.forEach(fotosDiv => {
                fotosDiv.style.display = 'none';
            });

            activeCount = 0;

            const ej5 = document.querySelector('.ej5');
            if (ej5) {
                ej5.style.height = '1400px';
            }

            // const alturaParticipantes = container.scrollHeight || 1400;
            // document.body.style.height = `${2500 + alturaParticipantes}px`;
        } else {
            // document.body.style.height = '2500px';
        }
    });

    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navList.classList.toggle('active');
    });

    navList.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        navList.classList.remove('active');
    });

    let activeCount = 0;

    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.toggle-btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                container.style.display = 'none';
                toggleButton.textContent = 'Mostrar imagens dos participantes';
                expanded = false;

                const fotosDiv = button.nextElementSibling;
                const isVisible = fotosDiv.style.display === 'flex';

                if (isVisible) {
                    fotosDiv.style.display = 'none';
                    activeCount--;
                } else {
                    fotosDiv.style.display = 'flex';
                    activeCount++;
                }

                const newHeight = 250 * activeCount;

                const ej5 = document.querySelector('.ej5');
                if (ej5) {
                    ej5.style.position = 'relative';
                    ej5.style.zIndex = '1';
                    ej5.style.height = `calc(1400px + ${newHeight}px)`;
                }

                const bodyBaseHeight = 2500;
                const extraHeightPerSection = 300;
                const totalBodyHeight = bodyBaseHeight + (extraHeightPerSection * activeCount);
                // document.body.style.height = `${totalBodyHeight}px`;

                const containerDiv = document.querySelector('.container');
                if (containerDiv) {
                    containerDiv.style.display = 'flex';
                    containerDiv.style.flexDirection = 'column';
                    containerDiv.style.alignItems = 'stretch';
                }

                // document.body.style.overflowY = 'auto';
            });
        });
    });
}

// 

// LOADER

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 1.5s ease';
        setTimeout(() => loader.remove(), 500);
    }
});

// IMGS

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".fotos img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; 
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
