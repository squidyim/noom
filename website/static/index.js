function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}
function navigate() {
  document.getElementById("home").onclick = function () {
    location.href = "home.html";
  };
  document.getElementById("about").onclick = function () {
    location.href = "about.html";
  };
  document.getElementById("thoughts").onclick = function () {
    location.href = "thoughts.html";
  };
}

