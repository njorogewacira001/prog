let todos: string[] = [];

function addTodo(todo: string): void {
  todos.push(todo);
  console.log(`Added "${todo}" to your list!`);
}

function listTodos(): void {
  if (!todos.length) {
    console.log("No tasks to show!");
    return;
  }
  console.log("Your to-do list:");
  for (const todo of todos) {
    console.log(`- ${todo}`);
  }
}

addTodo("Buy groceries");
addTodo("Finish project report");
listTodos();