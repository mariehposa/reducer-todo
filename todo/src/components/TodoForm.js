import React from 'react';
import { Form, Formik, Field } from 'formik';

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
                   <Form>
                       <Field name="todo" type="type" placeholder="Enter todo!" />
                       <button type="submit">Add Todo</button>
                   </Form>
               );
           }} 
        />
    );
} 