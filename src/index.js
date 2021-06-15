import "./styles.css";

const onClickAdd = () => {
  // Get a value in the textbox
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// Delete from the incomplete list (My Tasks)
const deleteFromIncompleteList = (target) => {
  // Delete parent tag(li)
  document.getElementById("incomplete-list").removeChild(target);
};

// Add to the incomplete list (My Tasks)
const createIncompleteList = (text) => {
  // Create li
  const li = document.createElement("li");

  // Create div
  const div = document.createElement("div");
  div.className = "list-row";

  // Create p
  const p = document.createElement("p");
  p.innerText = text;

  // Create done button
  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    // Delete parent tag(li)
    deleteFromIncompleteList(li);

    // Element to add to the complete list
    const addTarget = li;
    // Get text
    const text = addTarget.firstChild.firstChild.innerText;

    // Initialize under li
    addTarget.textContent = null;

    // Create div
    const div = document.createElement("div");
    div.className = "list-row";

    // Create p
    const p = document.createElement("p");
    p.innerText = text;

    // Create back button
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.addEventListener("click", () => {
      // Delete li from the complete list
      const deleteTarget = li;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // Get text
      const text = div.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // Add child elements to li tag
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    // Add to the complete list
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // Delete parent tag(li)
    deleteFromIncompleteList(li);
  });

  // Create child elements under li tag
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // Add to the incomplete list
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
