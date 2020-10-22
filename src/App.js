import React from 'react';
import './App.css';
import Body from './components/body';
import ButtonCont from './components/button';
import Cart from './components/cart';
import Header from './components/header';
import Modal from './components/modal'

function App() {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div>
      <Modal showModal={showModal} onClose={()=>setShowModal(false)}/>
      <Header onClick={()=>setShowModal(!showModal)}/>
      <ButtonCont/>
      <Body showBody={!showModal}/>
      <Cart/>
    </div>
  );
}

export default App;
