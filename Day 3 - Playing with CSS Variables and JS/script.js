    const inputs = document.querySelectorAll('.controls input'); //Selecciona y controla todos los input en la página.
// NodeList es una colección estática, lo que significa que cualquier cambio posterior en el DOM no afecta el contenido de la colección. document.querySelectorAll () devuelve un NodeList estático.
    function handleUpdate() {
      const suffix = this.dataset.sizing || ''; //esto proviene del data-set del HTML y el valor es el px
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate)); //El método forEach() llama a una  función callback específica una vez por cada elemento sobre el que itera dentro de un arreglo. 
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //addEventListener() Registra un evento a un objeto en específico.
