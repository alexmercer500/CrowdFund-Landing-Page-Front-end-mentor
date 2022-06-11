import { useState } from 'react';
import './App.css';
import Header from './Compnents/Header/Header';
import Main from './Compnents/Main/Main';
import Body from './Compnents/Body/Body';
import Confirm from './Compnents/Confirm/Confirm';
import Modal from './Compnents/Modal/Modal';


function App() {
  const [open, setOpen] = useState(false);
  const [modalOpen, modalClose] = useState(false);


  const modalToggle = () => {
    modalClose(!modalOpen)
  }

  const sendOpen = () => {
    setOpen(!open);
  }

  return (
    <div>
      {/* <button onClick={sendOpen}>open it</button>
      <button onClick={modalToggle}>modal open</button> */}
      <Header />
      <Main modalToggle={modalToggle}/>
      <Body sendOpen={sendOpen}/>
      {open && <Confirm sendOpen={sendOpen} />}
      {modalOpen && <Modal modalToggle={modalToggle} sendOpen={sendOpen}/>}
    </div>
  );
}

export default App;
