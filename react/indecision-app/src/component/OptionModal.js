import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      contantLabel='Selected Option'
      appElement={document.getElementById('app')}
      onRequestClose={props.removeModal}
    >
     <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.removeModal}>Got It</button>
    </Modal>

  </div>
)

export default OptionModal
