import React, { useState } from 'react';
import StageDirections from './components/CourseGoals/StageDirections/StageDirections';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import couch from './components/CourseGoals/Images/onCouch2.png'


const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const [dialogueTurn, setDialogueTurn] = useState(true);
  
  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      if(dialogueTurn===true) {
      updatedGoals.push({ text: 'PANLAUGHLIN: '+ enteredText, id: Math.random().toString() });
      } else {updatedGoals.push({ text: 'VROCUM: '+ enteredText, id: Math.random().toString() });}
      return updatedGoals;
    });
    if(dialogueTurn=== true){
      setDialogueTurn(false);
    } else {setDialogueTurn(true)}
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let title;
  if (courseGoals.length >= 2) {
    title = (<div className='title'>
      <h4>Firesale: A telenovela</h4>
      </div>)
  }

  let couchImage;
  if(courseGoals.length === 0){
    couchImage = (
      <div className='couch'>
        <img src={couch} alt='Two men hugging'/>
      </div>
    );
  }

  return (
    <div>
      {title}
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler}/>
      </section>
      <section id="stage-directions">
        <StageDirections  courseGoals={courseGoals}/>
      </section>
      <section id="goals">
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} dialogueTurn={dialogueTurn} courseGoals={courseGoals}/>
      </section>
      {couchImage}
    </div>
  );
};

export default App;
