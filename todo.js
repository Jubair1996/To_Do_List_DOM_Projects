let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  count += 1;
  const myInputValue = document.getElementById("input-value");
  const myInputText = myInputValue.value;
  myInputValue.value = "";

  const parent = document.getElementById("content-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${count}</td>
  <td>${myInputText}</td>
  <td>
  <button class="btn btn-danger deleteBtn">Delete</button>
  <button class="btn btn-primary doneBtn">Done</button>
  </td>
  `;
  parent.appendChild(tr);

  // Delete

  const elements = document.querySelectorAll(".deleteBtn");
  for (const element of elements) {
    element.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }

  // done

  const doneBtn = document.querySelectorAll(".doneBtn");
  for (const element of doneBtn) {
    element.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.textDecoration = "underline";
      event.target.parentNode.parentNode.style.backgroundColor = "blue";
    });
  }
  // ClearAll
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", function (event) {
    event.target.parentNode.style.display = "none";
  });
});

// Enter click

const input = document.getElementById("input-value");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    count += 1;
    const myInputValue = document.getElementById("input-value");
    const myInputText = myInputValue.value;
    myInputValue.value = "";

    const parent = document.getElementById("content-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputText}</td>
    <td>
    <button class="btn btn-danger deleteBtn">Delete</button>
    <button class="btn btn-primary doneBtn">Done</button>
    </td>
    `;
    parent.appendChild(tr);

    // Delete

    const elements = document.querySelectorAll(".deleteBtn");
    for (const element of elements) {
      element.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.style.display = "none";
      });
    }

    // done

    const doneBtn = document.querySelectorAll(".doneBtn");
    for (const element of doneBtn) {
      element.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.style.textDecoration = "underline";
        event.target.parentNode.parentNode.style.backgroundColor = "blue";
      });
    }
    // ClearAll
    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", function (event) {
      event.target.parentNode.style.display = "none";
    });
  }
});
