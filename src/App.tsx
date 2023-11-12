import { Route, Routes, Navigate } from 'react-router-dom';
import ToDoTest from 'app/ToDoList/ToDoTest';
import ToDoList from 'app/ToDoList/ToDoList';
import AddToDo from 'app/AddToDo/AddToDo';
import NotFound from 'app/NotFound/NotFound';
import ChangeToDo from 'app/ChangeToDo/ChangeToDo';

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/todos">
          {/* <Route index element={<ToDoList />} /> */}
          <Route index element={<ToDoTest />} />
          <Route path="add" element={<AddToDo />} />
          <Route path="change/:id" element={<ChangeToDo />} />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </main>
  );
}
