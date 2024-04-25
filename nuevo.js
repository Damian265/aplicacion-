// Arreglo para almacenar las canciones
let playlist = [];

// Función para agregar una canción a la lista de reproducción
function addSong() {
    // Obtener los valores de los campos de entrada
    let songName = document.getElementById("songName").value;
    let artist = document.getElementById("artist").value;

    // Validar que ambos campos no estén vacíos
    if (songName.trim() === '' || artist.trim() === '') {
        alert("Por favor, ingrese el nombre de la canción y el artista.");
        return;
    }

    // Crear un objeto para representar la canción
    let song = {
        name: songName,
        artist: artist,
        deleted: false // Agregar un campo para marcar si la canción está eliminada
    };

    // Agregar la canción al arreglo de la lista de reproducción
    playlist.push(song);

    // Limpiar los campos de entrada
    document.getElementById("songName").value = '';
    document.getElementById("artist").value = '';

    // Actualizar la lista de reproducción en la interfaz
    renderPlaylist();
}

// Función para renderizar la lista de reproducción en la interfaz
function renderPlaylist() {
    let playlistElement = document.getElementById("playlist");
    playlistElement.innerHTML = '';

    // Recorrer el arreglo de canciones y agregarlas a la lista
    playlist.forEach((song, index) => {
        if (!song.deleted) { // Solo mostrar canciones que no estén eliminadas
            let listItem = document.createElement("div");
            listItem.innerHTML = `<strong>${song.name}</strong> - ${song.artist} <button onclick="removeSong(${index})">Eliminar</button>`;
            playlistElement.appendChild(listItem);
        }
    });
}

// Función para eliminar una canción de la lista de reproducción
function removeSong(index) {
    // Marcar la canción como eliminada
    playlist[index].deleted = true;

    // Actualizar la lista de reproducción en la interfaz
    renderPlaylist();
}

// Actualizar la página cada minuto (60 segundos)
setInterval(function() {
    location.reload();
}, 60000);

// Asignar la función addSong al evento submit del formulario
document.getElementById("addSongForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    addSong();
});
