import { useState, useEffect } from 'react';
import { getTasks, addTaskToStore, deleteItem } from '../utils/localStorage';


export function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = getTasks('tasks');
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    addTaskToStore('tasks', updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    addTaskToStore('tasks', updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => {
      return item.id !== id
    })

    setTasks(updatedTasks);
    addTaskToStore('tasks', updatedTasks)
  }

  return { tasks, addTask, toggleTask, deleteTask };
}
