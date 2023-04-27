import React, { useState } from 'react';
import './game-card.style.css';
import Modal from './modal.components';
import useDeleteGame from '../../hook/useDeleteGame';
import GameUpdateForm from './game-update-form.component';
import Platforms from './platform.component';

const GameCard = ({ game }) => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { deleteGame } = useDeleteGame();
  const [localGame, setLocalGame] = useState(game);
  const [isDeleted, setIsDeleted] = useState(false);
  

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const openUpdateModal = () => {
    setShowUpdateModal(true);
  };

  const handleDelete = async (gameId) => {
    await deleteGame(gameId);
    setIsDeleted(true)
  };

  return (
    !isDeleted && (<div className="game-card">
      <div className="game-card-content">
        <h3>{localGame?.game}</h3>
        <p>Genre: {localGame?.genre}</p>
        <p>Total Playtime: {localGame?.playTime}</p>
      </div>
      <div className="actions">
        <button className="btn" onClick={openModal}>
          View Platforms
        </button>
        <button className="btn" onClick={openUpdateModal}>
          Update
        </button>
        <button className="btn" onClick={() => handleDelete(localGame?.userId)}>
          Delete
        </button>
      </div>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
      >
        <Platforms platforms={localGame?.platforms} />
      </Modal>
      <Modal  
        showModal={showUpdateModal} 
        closeModal={closeUpdateModal}
      >
        <GameUpdateForm game={localGame || game} closeModal={closeModal} setLocalGame={setLocalGame} />
      </Modal>
    </div>)
  );
};

export default GameCard;
