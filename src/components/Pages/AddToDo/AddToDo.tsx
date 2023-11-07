import { useNavigate } from 'react-router-dom';
import './AddToDo.css';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';

export default function AddToDo() {
  const navigate = useNavigate();

  return (
    <section className="todo-add-new">
      <h4>Add new ToDo</h4>
      <TextField label="Name" />
      <TextField label="Description" />
      <Checkbox label="Its Important?" />
      <button>Add</button>
      <button onClick={() => navigate('/')}> Back to main</button>
    </section>
  );
}
