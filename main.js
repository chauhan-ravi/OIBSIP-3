window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list_element = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please Enter some task");
      return;
    }
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input_el);
    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "DELETE";

    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_element.appendChild(task_el);
    input.value = "";
    console.log("List updated!!!");

    task_delete_el.addEventListener("click", () => {
      list_element.removeChild(task_el);
      console.log("element deleted==>" + " " + task);
    });
  });
});
