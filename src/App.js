import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

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

  let content = (
    <p style={{ textAlign: 'center' }}>Ah! Sweet silence...</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} dialogueTurn={dialogueTurn} courseGoals={courseGoals}/>
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler}/>
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
