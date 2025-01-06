'use client'

import { useState } from 'react';
import { useTasks } from '@/hooks/useTask';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function AddTask() {
    const { addTask } = useTasks();
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTaskTitle.trim()) {
            addTask(newTaskTitle.trim());
            setNewTaskTitle('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl mx-4 sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md sm:mx-auto mx-4">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <h2 className="text-3xl font-extrabold text-gray-900">Task Management</h2>
                                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div>
                                            <input
                                                type="text"
                                                value={newTaskTitle}
                                                onChange={(e) => setNewTaskTitle(e.target.value)}
                                                placeholder="Enter a new task"
                                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500"
                                        >
                                            Add Task
                                        </button>
                                    </div>
                                </form>
                                <div className="flex w-full justify-end">
                                    <Link to={'/view-tasks'} className='text-indigo-600 font-semibold flex items-center'><ArrowRight className='w-5 h-5 mr-2' /> View Tasks</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 text-center">
                <Link to={'/'} className='relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500'>Go to Home</Link>
            </div>
        </div>
    );
}

