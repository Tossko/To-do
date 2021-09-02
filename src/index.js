import './styles.css';

import { Todo, TodoList } from './classes'
import { CrearTodoHtml } from './js/componentes';

export const todoList = new TodoList()

todoList.todos.forEach( CrearTodoHtml )