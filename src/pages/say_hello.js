import React from 'react';
import Greeting from '../components/greeting';

const SayHello = () => {
  return (
    <div>
      <Greeting name="Skafti" />
      <Greeting name="Guðný Rut" />
      <Greeting name="Mía" />
    </div>
  );
};

export default SayHello;
