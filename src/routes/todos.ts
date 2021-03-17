import { Router } from 'express';

import { Todo } from '../models/todos';

type RequestParams = { id: string };

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
  const body = req.body as Todo;

  const newTodo: Todo = {
    id: new Date().getTime().toString(),
    text: body.text,
  };

  todos.push(newTodo);

  res.status(201).json({ message: 'Added To do', todo: newTodo });
});

router.put('/todo/:id', (req, res, next) => {
  const params = req.params as RequestParams;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === params.id);
  if (todoIndex >= 0) {
    const todo = todos[todoIndex];
    todos[todoIndex] = { ...todo, text: req.body.text };
    return res.status(200).json({ message: 'todo updated', todo: todo });
  }

  res.status(404).json({ message: 'Todo could not be found' });
});

router.delete('todo/:id', (req, res, next) => {
  const params = req.params as RequestParams;
  todos = todos.filter((todoItem) => todoItem.id !== params.id);
  res.status(200).json({ todos: todos });
});

export default router;
