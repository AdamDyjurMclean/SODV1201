const input = document.getElementById("names");
const file = "data.json";

input.addEventListener("click", () => {
    getTodos(file).then(array => {
      printTodos(array);
    });
  });

  const getTodos = file => {
    return new Promise((resolve, reject) => {
      return fetch(file)
        .then(data => resolve(data.json()))
        .catch(err => reject(err, "Error"));
    });
  };

  const printTodos = array => {
    const ul = document.getElementById("list");
    array.forEach(array => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(array.quote));
      ul.appendChild(li);
    });
  };