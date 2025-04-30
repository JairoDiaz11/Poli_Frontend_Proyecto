// Aquí podrías agregar funcionalidad como navegación entre secciones
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      alert(`Has seleccionado: ${item.innerText}`);
    });
  });
  