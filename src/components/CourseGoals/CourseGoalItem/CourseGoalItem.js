import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const DialogueItemStyling = styled.li`
  margin: 1rem 0;
  background: #25D366;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 2);
  border-radius: 5px;
  color: black;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: 0.9s linear;
  opacity: 1;
  width: 30rem;
  float: left;
  `;

const CourseGoalItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };




  return (
    // <li className="goal-item" onClick={deleteHandler}>
    //   {props.children}
    // </li>
    <FadeIn><DialogueItemStyling  onClick={deleteHandler}>
      <p>{props.children}</p>
    </DialogueItemStyling></FadeIn>
    
  );
};

export default CourseGoalItem;
