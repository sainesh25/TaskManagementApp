import { FaRegTrashAlt } from "react-icons/fa";

export function Task({ task, onToggle, onDelete }) {
    return (
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={`flex-1 break-words ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
            </span>
            <button className="p-2 rounded-md text-xs" onClick={() => { onDelete(task.id) }}><FaRegTrashAlt className="text-red-600" size={20}/></button>
        </div>
    );
}

