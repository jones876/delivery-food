const bascetButton = document.querySelector('#bascet-button'),
      modal = document.querySelector('.modal'),
      close = document.querySelector('.close');

bascetButton.addEventListener('click', function(event){
    modal.classList.add('active');
});
close.addEventListener('click', function(event){
    modal.classList.remove('active');
});

new WOW().init();