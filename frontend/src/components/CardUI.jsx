import React from 'react';
import img1 from '../assets/1_tR0ttFEBGvg9_iycnegLbw.png'

const Card = props => {
        return(
            <div className="card text-center">
                <div className="overflow">
                    <img src={img1} alt="image 1"/>
                </div>
                <div className="card body text-dark">
                  <h4 className="card-title">Card Title</h4>  
                  <p className="card-text text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos ex beatae ut dolores in voluptas harum fugiat, saepe maiores.
                  </p>
                  <a href="#"className='btn btn-outline-success'>Go Anywehere</a>
                </div>
            </div>
        );
}

export default Card ;


