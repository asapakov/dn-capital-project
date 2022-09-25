import './App.scss';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './routes/Sidebar';
import Mainbar from './routes/Mainbar';
import TaskForm from './components/Task/TaskForm';
import EditTask from './components/Task/EditTask';
import DeleteConfirm from './components/Task/DeleteConfirm';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            TasksProv
            <Route path="/" element={<Sidebar />} >

              <Route path='home' index element={<Mainbar />} />
              <Route path='major' element={<Mainbar />} />
              <Route path='completed' element={<Mainbar />} />
              <Route path='removed' element={<Mainbar />} />

              <Route path='productivity' element={<Mainbar />} />
              <Route path='education' element={<Mainbar />} />
              <Route path='health' element={<Mainbar />} />
              <Route path='due' element={<Mainbar />} />

              <Route path='edit/:id' element={<EditTask />} />
              <Route path='add' element={<TaskForm />} />
              <Route path='delete/:id' element={<DeleteConfirm />} />

            </Route>

          </Routes>
        </DndProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
