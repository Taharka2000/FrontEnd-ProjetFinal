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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');
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
      await ajouter(email, heure, name, date);
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
              <div>
                <label htmlFor='name'>Nom</label>
                <input type='text' name='name' placeholder='Nom' onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor='date'>Date de début</label>
                <input type='date' id='date' name='date' onChange={(e) => setDate(e.target.value)} />
              </div>
              <div>
                <label htmlFor='heure'>Heure</label>
                <input type='time' id='heure' name='heure' required onChange={(e) => setHeure(e.target.value)} />
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
