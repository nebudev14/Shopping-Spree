import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {

  const redirectSearch = async (event: any) => {
    event.preventDefault();

    console.log(event.target.name.value);
  }


  return (
    <div className="container">
      <form onSubmit={redirectSearch} className="formContainer">
        <label htmlFor="name" className="title">What are you looking for?</label>
        <input id="name" name="name" type="text" autoComplete="name" className="textBox" required />
        <button type="submit" className="btn">Search</button>
      </form>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column; 
        }

        .formContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column; 
        }
        
      `}</style>
    </div>
  )
}

