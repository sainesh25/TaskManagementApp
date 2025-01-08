import React from 'react'
import { Task } from '../../components2/Task/Task'
import { useTasks } from '@/hooks/useTask';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function ViewTasks() {
    const { tasks, toggleTask, deleteTask } = useTasks();

    return (
        <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>

            <div className="relative py-3 mx-4 sm:max-w-xl min-w-60 sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="min-w-60 sm:mx-auto mx-4">
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                    <h2 className="text-3xl font-extrabold text-gray-900">View Tasks</h2>

                                    <div className="mt-4 space-y-4 max-h-80 overflow-y-scroll" style={{scrollbarWidth: 'thin'}}>

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
            <div className="mt-16 text-center">
                <Link to={'/'} className='relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500'>Go to Home</Link>
            </div>
        </div>
    )
}
