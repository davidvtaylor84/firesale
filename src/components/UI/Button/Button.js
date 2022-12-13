import styled from 'styled-components';

const Button =styled.button`
  /* width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: black;
  background: grey;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer; */

  border: none;
  background: black;
  color: #ffffff;
  font-weight: 100;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 6px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease 0s;

@media (min-width: 768px){
  width: auto;
}

&:focus {
  outline: none;
}

&:hover,
&:active {
  /* background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26); */

  color: #404040;
  font-weight: 700;
  letter-spacing: 3px;
  background: none;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  transition: all 0.3s ease 0s;
}
`;

export default Button;
