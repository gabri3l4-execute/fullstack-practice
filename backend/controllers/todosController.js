const todos = [{id: 1, text: 'Be happy'}];

export function getTodos(){
    return todos;
}

export function addTodos(todo){
    todos.push(todo);
}

export function deleteTodo(todoId) {
    return todos.filter((t) => t.id !== todoId);
}