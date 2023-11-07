import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div>Wrong Page</div>
      <button onClick={() => navigate('/')}> Back to main</button>
    </>
  );
}
