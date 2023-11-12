import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ToDo from '../../components/ToDo/ToDo';
import { SearchInput } from 'components/SearchInput';
import './toDoList.css';
import { useTypeSelector } from 'src/hooks/useTypedSelector';

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

  useEffect(() => {
    axios
      .get('http://37.220.80.108/tasks')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

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
