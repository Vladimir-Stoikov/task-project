import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import ToDoList from 'components/Pages/ToDoList/ToDoList';
import AddToDo from 'components/Pages/AddToDo/AddToDo';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/addtodo">Add ToDo</Link>
          </li>
          <li>
            <Link to="/">All To Dos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/addtodo" element={<AddToDo />} />
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}
