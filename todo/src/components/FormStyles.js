import styled from 'styled-components';
import { Form, Field } from 'formik';

export const LoginStyle = styled(Form)`
    display: flex;
    justify-content: center;
    width: 35%;
    border: .1rem solid whitesmoke ;
    padding: 2rem 0;
    border-radius: 2rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
`
export const StyledField = styled(Field)`
    width: 45%;
    padding: .7rem;
    margin: 1rem ;
`

export const StyledButton = styled.button`
   width: 20%;
   padding: 1.2rem;
   border-radius: 2rem;
   background: green;
   color: white;
   margin: 0 auto;
`
