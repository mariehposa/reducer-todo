import React from 'react';
import { Formik } from 'formik';
import { LoginStyle, StyledField, StyledButton } from './FormStyles';

const initialFormValues = {
    todo:'',
}

export default function TodoForm ({onSubmit}) {
    return (
        <Formik 
            initialValues={initialFormValues}
           onSubmit={ onSubmit}
           render={props => {
               return(
                   <LoginStyle>
                       <StyledField name="todo" type="type" placeholder="Enter todo!" />
                       <StyledButton type="submit">Add Todo</StyledButton>
                   </LoginStyle>
               );
           }} 
        />
    );
} 