import React, { useState } from 'react';
import './App.css';
import {FaCheckCircle} from 'react-icons/fa';
import data from './data';

function App() {

  const [items, setItems] = useState(data);
  const [value, setValue] = useState(0);

  const {title, desc, price, info, lists} = items[value];

  return (
    <main>
      <section className='container'>
        <div className='btn-container'>
          {items.map((item, index) => {
            return(
              <button 
                key={index} 
                onClick={(() => setValue(index))}
                className={`item-btn ${index === value && 'active-btn'}`}
              >
                {item.title}            
              </button>
            )
          })}
        </div>
        <div className='info-container'>
          <h4>{title}</h4>
          <div className='title'>
            <h2>{desc}</h2>
            <h2>${price}</h2>
          </div>
          <p>{info}</p>
          {lists.map((list, index) => {
            return(
              <div key={index} className='list-div'>
                <p>
                  <span><FaCheckCircle className='check-mark'/></span>
                  {list}
                </p>
              </div>
              );
            })}
        </div>

        <button className='cart-btn'>Add to cart</button>

      </section>
    </main>
  );
}

export default App;
