import { useNavigate } from 'react-router-dom';
import './AddToDo.css';

export default function AddToDo() {
  const navigate = useNavigate();

  return (
    <>
      <div>Add new ToDo</div>
      <button onClick={() => navigate('/')}> Back to main</button>
    </>
  );
}
