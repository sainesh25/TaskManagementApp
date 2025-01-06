import './App.css'
import AddTask from './pages/AddTask/AddTask'
import Home from './pages/Home/Home'
import { Link, Route, Routes } from 'react-router'
import ViewTasks from './pages/ViewTasks/ViewTasks'

function App() {

  return (
    <>
      <div className="min-h-screen flex-justify-center items-center flex-col">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='add-task' element={<AddTask />} />
          <Route path='view-tasks' element={<ViewTasks />} />
        </Routes>
      </div>
    </>
  )
}

export default App
