import React from 'react';
import styled from 'styled-components';
import './CourseGoalItem.css';

const DialogueItemStyling = styled.li`
  margin: 1rem 0;
  background: ${props => (props.speaker ? 'rosybrown' : 'white')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: black;
  padding: 1rem 2rem;
  cursor: pointer;
  `;

const CourseGoalItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };




  return (
    // <li className="goal-item" onClick={deleteHandler}>
    //   {props.children}
    // </li>
    <DialogueItemStyling  onClick={deleteHandler}>
      {props.children}
    </DialogueItemStyling>
  );
};

export default CourseGoalItem;
