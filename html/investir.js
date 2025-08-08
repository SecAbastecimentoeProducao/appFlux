document.addEventListener('DOMContentLoaded', () => {
    // Lógica para a barra de busca
    const searchInput = document.getElementById('searchInput');
    const projectCards = document.querySelectorAll('.project-card-invest');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            projectCards.forEach(card => {
                const projectTitle = card.querySelector('.project-title').textContent.toLowerCase();
                const projectDescription = card.querySelector('.project-description').textContent.toLowerCase();

                if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Lógica para o menu de navegação
    const menuItems = document.querySelectorAll('.bottom-menu .menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remove a classe 'active' de todos os itens
            menuItems.forEach(i => i.classList.remove('active'));
            // Adiciona a classe 'active' ao item clicado
            item.classList.add('active');
            
            // NOTE: Não usamos e.preventDefault() aqui para permitir que o navegador
            // siga o link para a página 'index.html'.
        });
    });
});