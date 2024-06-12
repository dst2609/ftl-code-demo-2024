console.log("Script.js");

document.addEventListener("DOMContentLoaded", () => {
  // Get the data from data.js
  const data = playlistsData;
  console.log(data);

  // Get the playlists from the data and render them on the screen
  const playlistContainer = document.getElementById("playlist-container");
  console.log(playlistContainer);

  data.playlists.forEach((playlist) => {
    const tile = createPlaylistTile(playlist);
    playlistContainer.appendChild(tile);
  });

  // Function to create a playlist tile element (CArd)
  function createPlaylistTile(playlist) {
    const tile = document.createElement("div");
    tile.className = "playlist-tile";
    tile.innerHTML = `
        <img src="${playlist.cover}" alt = "cover">
        <h3>${playlist.name}</h3>
        <p>Creator: ${playlist.creator}</p>
        <span class="heart-icon">&#x2665;</span>
        <span class="like-count">${playlist.likes}</span>
    `;

    tile.addEventListener("click", (event) => {
      // Check if the click is not on the heart icon
      if (!event.target.classList.contains(".heart-icon")) {
        openModal(playlist);
      }

      // Add a click event listener to the heart icon to like the playlist
      const heartIcon = tile.querySelector(".heart-icon");
      heartIcon.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the tile
        const likeCountElement = heartIcon.nextElementSibling;
        let likeCount = parseInt(likeCountElement.textContent);
        likeCount++; //add 1 to the like
        heartIcon.classList.add("liked");
        likeCountElement.textContent = likeCount;
      });
    });

    // Function to open the modal with playlist details
    function openModal(playlist) {
      console.log("clicked tile");
      // Populate song list in the modal
      const modal = document.getElementById("playlist-modal");
      document.getElementById("modal-cover").src = playlist.cover;
      document.getElementById("modal-name").textContent = playlist.name;
      document.getElementById(
        "modal-creator"
      ).textContent = `Creator: ${playlist.creator}`;

      const songList = document.getElementById("modal-songs");
      songList.innerHTML = "";

      // Populate song list in the modal
      playlist.songs.forEach((song) => {
        const songItem = document.createElement("li");
        songItem.textContent = `${song.title} - ${song.artist} - ${song.duration}`;
        songList.appendChild(songItem);
      });

      modal.style.display = "block";
    }

    // Event listener to close the modal
    document.querySelector(".close-button").addEventListener("click", () => {
      document.getElementById("playlist-modal").style.display = "none";
    });

    // Event listener to shuffle songs in the modal
    document.getElementById("shuffle-button").addEventListener("click", () => {
      //shuffle songs randmoly
      const songList = document.getElementById("modal-songs");
      //do random shuffle
      const songs = Array.from(songList.children);
      songs.sort(() => Math.random() - 0.5);
      songList.innerHTML = "";
      songs.forEach((song) => songList.appendChild(song)); //appends shuffled songs
    });

    return tile;
  }
});
