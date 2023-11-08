import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToDo from '../../components/ToDo/ToDo';
import { SearchInput } from 'components/SearchInput';
import './toDoList.css';
import { useTypeSelector } from 'components/hooks/useTypedSelector';

export default function ToDoList() {
  const { todosList } = useTypeSelector((state) => state.todos);

  const [todos, setTodos] = useState(todosList);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (search !== '') {
      setTodos((prev) => {
        return prev.filter((item) => item.name.toLowerCase().includes(search));
      });
    } else {
      setTodos(todosList);
    }
  }, [search]);

  useEffect(() => setTodos(todosList), [todosList]);

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
