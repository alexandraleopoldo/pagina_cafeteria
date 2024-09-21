document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Remover destaque de qualquer outro elemento
      document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));

      // Adicione a classe de destaque à seção clicada
      targetElement.querySelector('h3').classList.add('highlight');

      // Remove o destaque após 2 segundos
      setTimeout(() => {
        targetElement.querySelector('h3').classList.remove('highlight');
      }, 2000);
    });
});

