import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ChangeToDo() {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <div>ChangeToDo {id}</div>
      <button onClick={() => navigate('/')}> Back to main</button>
    </>
  );
}
