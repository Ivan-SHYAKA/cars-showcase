import { useState } from "react"
import cars from "./data"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const App = () => {
  const [Thecar, setTheCar]=useState(0)
  cars[Thecar]

  const previous = ()=>{
    setTheCar((currentCar)=>{
      const newCar=(currentCar-1+cars.length) % cars.length
      return newCar
    })
  }

  const next = ()=>{
    setTheCar((currentCar)=>{
      const newCar=(currentCar+1) % cars.length
      return newCar
    })
  }

  const random = ()=>{
      let randomNumber = Math.floor(Math.random()*cars.length)
      if(randomNumber===Thecar){
        randomNumber = Thecar+1 
      }
      const newNumber = randomNumber%cars.length
      setTheCar(newNumber)
  }

  

  return (
    <main>
      <article className="article-container">
        <div className="image-container">
          <img src={cars[Thecar].image} className="image"/>
        </div>
        <div className="text-container">
          <h2 className="heading2">{cars[Thecar].brand}</h2>
          <h4 className="heading4">{cars[Thecar].model}</h4>
          <h6 className="heading6">{cars[Thecar].yom}</h6>
          <p className="paragraph">{cars[Thecar].description}</p>
          <span className="price">{cars[Thecar].price}</span>
        </div>
        <div className="buttons">
          <button onClick={previous} className="previous"><FaAngleLeft /></button>
          <button onClick={next} className="next"><FaAngleRight /></button>
          </div>
          <button onClick={random} className="random">Choose Randomly</button>
      </article>
    </main>
  )
}
export default App