import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {


  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          dialogueTurn={props.dialogueTurn}
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
          courseGoals={props.coarseGoals}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
