export function randomizeNotes() {
  const notes = document.querySelectorAll(".note");

  // Faste, men "tilfældige" positioner (procent af boardets størrelse)
  const positions = [
    { left: "10%", top: "10%", rot: -5 },
    { left: "30%", top: "15%", rot: 8 },
    { left: "60%", top: "12%", rot: -3 },
    { left: "75%", top: "25%", rot: 6 },
    { left: "50%", top: "28%", rot: -8 },
    { left: "15%", top: "35%", rot: 4 },
    { left: "40%", top: "40%", rot: 10 },
    { left: "70%", top: "42%", rot: -6 },
    { left: "20%", top: "55%", rot: 7 },
    { left: "55%", top: "55%", rot: -5 },
    { left: "80%", top: "58%", rot: 3 },
    { left: "10%", top: "70%", rot: -4 },
    { left: "35%", top: "72%", rot: 6 },
    { left: "60%", top: "75%", rot: -7 },
    { left: "75%", top: "80%", rot: 5 }
  ];

  notes.forEach((note, i) => {
    const pos = positions[i % positions.length];
    note.style.left = pos.left;
    note.style.top = pos.top;
    note.style.transform = `rotate(${pos.rot}deg)`;
  });
}
