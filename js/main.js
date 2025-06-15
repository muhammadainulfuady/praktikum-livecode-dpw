alert("Welcome to the junggle brooo☠️🗿🗿🗿🗿");

function tambah() {
  let contentDiv = document.querySelector(".content");
  let semuaGambar = contentDiv.querySelectorAll("img");
  if (semuaGambar.length < 9) {
    let gambarBaru = document.createElement("img");
    gambarBaru.src = "./assets/mountains.jpg";
    gambarBaru.alt = "Gambar Gunung Tambahan";
    contentDiv.appendChild(gambarBaru);
  } else {
    alert("Gambar maksimal 9");
  }
}

function hapus() {
  let contentDiv = document.querySelector(".content");
  let semuaGambar = contentDiv.querySelectorAll("img");
  if (semuaGambar.length > 4) {
    contentDiv.removeChild(semuaGambar[0]);
  } else if (semuaGambar.length <= 4) {
    alert("Gambar minimal lebih dari 4 untuk menghapus.");
  }
}
