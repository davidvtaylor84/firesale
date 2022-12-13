import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

 & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: black;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'black' : 'black')};
  background: ${props => (props.invalid ? 'white' : 'white')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: white;
  border-color: #8b005d;
}`;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    event.target.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>{isValid ? 'Gift the corporations some meaningful words' : 'Some peace and quiet...'}</label>
        <input type="text" placeholder='Say something... anything...' onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Speak!</Button>
    </form>
  );
};

export default CourseInput;
