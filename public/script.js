export function randomizeNotes() {
  const notes = document.querySelectorAll(".note");
  notes.forEach(note => {
    const x = Math.random() * 750; // bredde justeret efter board
    const y = Math.random() * 450; // højde justeret efter board
    const rot = (Math.random() * 20 - 10); // -10 til +10 grader

    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
    note.style.transform = `rotate(${rot}deg)`;
  });
}

