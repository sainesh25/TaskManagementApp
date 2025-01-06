import React from 'react'
import { Task } from '../../components2/Task/Task'
import { useTasks } from '@/hooks/useTask';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function ViewTasks() {
    const { tasks, toggleTask, deleteTask } = useTasks();

    return (
        <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>

            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                    <h2 className="text-3xl font-extrabold text-gray-900">View Tasks</h2>

                                    <div className="mt-4 space-y-4">

                                        {
                                            tasks.length > 0 ?
                                                tasks.map((task) => (
                                                    <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                                                )) :
                                                <p className='text-center text-sm'>
                                                    No tasks added!
                                                </p>}
                                    </div>
                                </div>
                                <div className="flex w-full justify-end">
                                    <Link to={'/add-task'} className='text-indigo-600 font-semibold flex items-center'><ArrowRight className='w-5 h-5 mr-2' /> Add Tasks</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
