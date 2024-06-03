import React, { useState } from 'react';
import './KVKK.css';

const Card = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="card">
      <h1 className="card-title">Kişisel verilerinizin kullanımı hakkında</h1>
      <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
      <div className="card-checkbox">
        <input 
          type="checkbox" 
          id="checkbox" 
          
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        <label htmlFor="checkbox">
          <a href="link_url1" target="_blank" rel="noopener noreferrer" className="link tint-primary">Kullanım koşulları</a>
          <span> ve </span>
          <a href="link_url2" target="_blank" rel="noopener noreferrer" className="link tint-primary">Sorumsuzluk metni</a>
          <span> üzerine tıklayarak onaylıyorum.</span>
        </label>
      </div>
      <button 
        className="card-button" 
        disabled={!isChecked}
      >
        Alışveriş Asistanı'na devam et
      </button>
    </div>
  );
}

export default Card;
