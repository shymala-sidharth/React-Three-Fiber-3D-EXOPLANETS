import React from 'react'
import Typing from './Typing'

export default function FlatHome() {
  function handleClick() {
    return console.log('clicked')
  }
  return (
    <>
      <div className="home-body">
        <div className="title-center">
          <h1 className="home-title">exo exo</h1>
        </div>
        <div className="centering">
          <p>
            <Typing
              line={
                'An exoplanet is any planet beyond our solar system. Most orbit other stars, but free-floating exoplanets, called rogue planets, orbit the galactic center and are untethered to any star.'
              }
            />
          </p>
        </div>
        <div className="button-center">
          <a href="#">
            <button className="button-style" onClick={handleClick}>
              enter
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
