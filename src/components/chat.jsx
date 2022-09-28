import React from 'react';
import { Messages } from './Messages';
import { Form } from './Form';

export function Chat(props) {

  const { name } = props;

  return (
    <>
          <Messages name={name} />
          <Form name={name} />
    </>
  );
}