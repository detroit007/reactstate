import React, {useState} from 'react';

import MediaCard from './MediaCard';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const [speed, setSpeed] = useState(70);

  const gateHandler = () =>{
    setIsOpen(!isOpen)
  }

  const runCarHandler = (speedo) =>{
    if(speedo === 'up'){
      setSpeed(speed + 1)
    }
     if(speedo === 'down'){
      setSpeed(speed - 1 );
    }
  }



  return (
    <div className='mediaCont'>
      <MediaCard
        title='React state management with Hooks'
        body={<>State management can be handled by <strong>Hooks, </strong>
        <strong>Context Api and</strong>
        <strong> Redux</strong> there can be more methods but I have known these three.</>}
        imageUrl='../logo512.png'
      />

      <p>Gate is {isOpen ? 'Open' : 'closed'}</p>
      <button type='button' onClick={gateHandler}> {!isOpen ? 'Open' : 'closed'} the Gate</button>

      <br/>

      <p>your are {speed > 80 ? 'dangerly driving!' : 'driving fine!'} at {speed} km/h {speed > 80 ? 'slow down!' : null}</p>

      <button type='button' onClick={()=>runCarHandler('up')}> speed up</button>
      <button type='button' onClick={()=>runCarHandler('down')}> speed down</button>


    </div>
  );
}

export default App;
