import { ListTodo, PlusCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="border rounded-lg m-6">
      <h1 className='text-2xl sm:text-4xl font-bold text-center my-8'>Task Management App</h1>

      <div className="flex min-h-40 justify-center items-center sm:flex-row flex-col gap-5 p-10">
        <Link to={'/add-task'} className='bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center font-semibold text-white rounded-md sm:p-4 p-2 w-full sm:max-w-32 text-center'>
          <PlusCircle className="h-5 w-5 inline mr-2" />
          Add Task
        </Link>
        <Link to={'/view-tasks'} className='border border-indigo-600 flex items-center font-semibold text-indigo-600 hover:bg-slate-100 rounded-md sm:p-4 p-2 w-full sm:max-w-36 text-center'>
          <ListTodo className="h-5 w-5 inline mr-2" />
          View Tasks
        </Link>
      </div>
    </div>
  )
}
