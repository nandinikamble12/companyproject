import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardData = [
  {
    img: 'https://images.unsplash.com/photo-1719336234156-320dafbac51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 1',
    description: 'Beautiful nature is a sight to behold, it is a magical and breathtaking view that captures the senses. ',
    buttonText: 'Go somewhere',
  },
  {
    img: 'https://images.unsplash.com/photo-1720572662063-05c3cf2ce0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 2',
    description: 'Beautiful nature is a sight to behold, it is a magical and breathtaking view that captures the senses. ',
    buttonText: 'Go somewhere',
  },
  {
    img: 'https://images.unsplash.com/photo-1709406158154-83d674d019a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D',
    title: 'Card 3',
    description: 'Beautiful nature is a sight to behold, it is a magical and breathtaking view that captures the senses. ',
    buttonText: 'Go somewhere',
  },
  {
    img: 'https://images.unsplash.com/photo-1719056307923-a11de279d25f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 4',
    description: 'Beautiful nature is a sight to behold, it is a magical and breathtaking view that captures the senses. ',
    buttonText: 'Go somewhere',
  },
  {
    img: 'https://images.unsplash.com/photo-1720247521734-1c655133c281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 5',
    description: 'Beautiful nature is a sight to behold, it is a magical and breathtaking view that captures the senses. ',
    buttonText: 'Go somewhere',
  },
  {
    img: 'https://images.unsplash.com/photo-1720484338523-a1a407358b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 6',
    description: 'Beautiful nature is a sight to behold, it is a magical and breathtaking view that captures the senses.',
    buttonText: 'Go somewhere',
  },
];

function Cards() {
  return (
    <div className="container mt-3">
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card custom-card"  style={{ height: '400px', width: '300px' }}>
            <img src={card.img} className="card-img-top" alt={card.title} style={{ height: '200px', width: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <a href="#" className="btn btn-primary">{card.buttonText}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
}

export default Cards;
