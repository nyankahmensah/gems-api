import React, { useState } from 'react';

// components;
import ModalWrapper from './ModalWrapper';
import { Button, TextArea, Selector as CategorySelector } from '../form_elements';

// GraphQL
import { useMutation } from '@apollo/react-hooks';
import { createMessage as createMessageMutation } from '../../graphql/mutation/message';
import { messages as messagesQuery } from '../../graphql/queries/message';
import Loader from 'react-loader-spinner';
import color from '../../theme/color';

const CreateMessageModal = ({ show, title, closeModal }) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [createMessage, { loading }] = useMutation(createMessageMutation, {
    variables: {
      content,
      category: category.value,
    },
    onError: e => {
      alert('Error occurred while making request. Please check connection and try again');
    },
    update: (cache, { data: { createMessage } }) => {
      const { messages } = cache.readQuery({ query: messagesQuery });
      cache.writeQuery({
        query: messagesQuery,
        data: { messages: [createMessage].concat(messages) },
      });
      closeModal();
    },
  });

  return (
    <>
      <ModalWrapper show={show} title={title} closeModal={closeModal}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '30px',
          }}
        >
          <TextArea
            placeholder={'Enter Message'}
            onChange={e => setContent(e.target.value)}
            value={content}
            disabled={loading}
          />

          <CategorySelector
            onChange={value => {
              console.log('This is category', value);
              setCategory(value);
            }}
            value={category}
            disabled={loading}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          {loading ? (
            <Loader type="Oval" color={color.primaryColor} height={20} width={20} />
          ) : (
            <Button onClick={createMessage}>Proceed</Button>
          )}
        </div>
      </ModalWrapper>
    </>
  );
};

export default CreateMessageModal;
