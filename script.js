// Store original positions and enable dragging + reset
document.addEventListener('DOMContentLoaded', () => {
  const plants = Array.from(document.querySelectorAll('.plant'));
  const orig = new Map();

  // Record original positions and ensure each plant has inline left/top
  plants.forEach(p => {
    // compute offset relative to offsetParent
    const left = p.offsetLeft;
    const top = p.offsetTop;
    p.style.left = left + 'px';
    p.style.top = top + 'px';
    orig.set(p.id || p, { left: p.style.left, top: p.style.top });
  });

  // Attach drag behavior
  plants.forEach(p => dragElement(p));

  // Reset button handler
  const resetBtn = document.getElementById('reset-button');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      plants.forEach(p => {
        const key = p.id || p;
        const pos = orig.get(key);
        if (pos) {
          // setting left/top will animate because of CSS transition
          p.style.left = pos.left;
          p.style.top = pos.top;
        }
      });
    });
  }
});

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.style.touchAction = 'none'; // prevent touch scrolling while dragging
    terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        // capture pointer so we continue receiving events even if pointer leaves element
        terrariumElement.setPointerCapture?.(e.pointerId);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }
    function stopElementDrag(e) {
        document.onpointerup = null;
        document.onpointermove = null;
        terrariumElement.releasePointerCapture?.(e?.pointerId);
    }
}
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
