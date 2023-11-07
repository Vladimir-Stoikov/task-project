import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ToDo from '../../ToDo/ToDo';
import { todoListData } from 'components/data/tmpData';
import './toDoList.css';
import { SearchInput } from 'components/SearchInput';

export default function ToDoList() {
  const [todos, setTodos] = useState(todoListData);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (search !== '') {
      setTodos((prev) => {
        return prev.filter((item) => item.name.toLowerCase().includes(search));
      });
    } else {
      setTodos(todoListData);
    }
  }, [search]);

  return (
    <section className="todos-section">
      <SearchInput value={search} onChange={(value) => setSearch(value)} />
      <ul className="todos-list">
        {todos.map((todo) => (
          <ToDo key={todo.id} todoParam={todo} />
        ))}
      </ul>
      <button onClick={() => navigate('/todos/add')}>Add todo</button>
    </section>
  );
}
