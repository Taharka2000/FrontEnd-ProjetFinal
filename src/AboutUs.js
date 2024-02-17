import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAuthContext } from './Hooks/useAuthContext';
import { useAjout } from './Hooks/AjoutAnnonce';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AboutUs = () => {
  const [DateArrive, setDateArrive] = useState('');
  const [DateDepart, setDateDepart] = useState('');
  const [LieuDepart, setLieuDepart] = useState('');
  const [heure, setHeure] = useState('');
  const [LieuArrive, setLieuArrive] = useState('');
  const [errorText, setErrorText] = useState('');

  const { ajouter } = useAjout();
  const { user } = useAuthContext();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setErrorText('');
  };

  const handleError = () => {
    setErrorText("Vous n'avez pas le rôle nécessaire pour ajouter une annonce.");
    openModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.role !== 'tiak-tiak') {
      handleError();
      return;
    }

    try {
      setErrorText('');
      await ajouter(DateDepart, heure, DateArrive, LieuDepart, LieuArrive);
      closeModal();
    } catch (error) {
      console.error('Erreur lors de la requête d\'ajout :', error);
      setErrorText('Une erreur s\'est produite lors de la requête d\'ajout.');
    }
  };

  return (
    <div>
      <button onClick={user.role === 'tiak-tiak' ? openModal : handleError}>
        Ajouter Annonce
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {errorText && (
          <div>
            <button onClick={closeModal}>Fermer</button>
            <p>{errorText}</p>
          </div>
        )}

        {!errorText && (
          <div>
            <h2>Ajout de votre annonce</h2>
            <button onClick={closeModal}>Fermer</button>
            <form onSubmit={handleSubmit}>
              <h2>Ajouter une annonce</h2>
              <div className='flex flex-row'>
                <div>
                  <label htmlFor='LieuDepart'>Lieu de depart</label>
                  <input type='text' name='LieuDepart' placeholder='Depart' onChange={(e) => setLieuDepart(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='LieuArrive'>Lieu d'Arrive</label>
                  <input type='text' id='LieuArrive' name='date' placeholder='Arrive' onChange={(e) => setLieuArrive(e.target.value)} />
                </div>
              </div>
              <div className='flex flex-row' >
              <div>
                <label htmlFor='date'>Date de Depart</label>
                <input type='date' name='DateDepart' placeholder='Email' onChange={(e) => setDateDepart(e.target.value)} />
              </div>
              <div>
                <label htmlFor='heure'>Heure</label>
                <input type='time' id='heure' name='heure' required onChange={(e) => setHeure(e.target.value)} />
              </div>
              <div>
                <label htmlFor='DateArrive'>Date d'arrivee</label>
                <input type='date' name='DateArrive' placeholder='Date arrive' onChange={(e) => setDateArrive(e.target.value)} />
              </div>
              </div>
              
              <button type='submit'>Soumettre</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AboutUs;
