const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  e.target.className = "fill hold";
  setTimeout(() => {
    e.target.className = "";
  }, 0);
}

function dragEnd(e) {
  e.target.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.target.className = "empty hovered";
}

function dragLeave(e) {
  e.target.className = "empty";
}

function dragDrop(e) {
  e.target.className = "empty";
  e.target.append(fill);
}
