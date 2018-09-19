import React from 'react';
import './Quiz.css';



const Quiz = () =>  {
    return (
      <div className="quiz-container">
        <h2>React Quiz</h2>
        <h3>10 Questions</h3>
        <form className="quiz-form">
          <label htmlFor="question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui sapien eget</label>
          <input type="radio" value="faucibus"/>Faucibus<br/>
          <input type="radio" value="scelerisque"/>scelerisque<br/>
          <input type="radio" value="eleifend"/>eleifend<br/>
          <input type="radio" value="donec"/>donec<br/>
        </form>







      </div>

    )
}

export default Quiz;