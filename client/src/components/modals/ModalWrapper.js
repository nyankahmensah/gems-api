import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

// components
import SVG from '../shared/SVG';

const ClientOnlyPortal = ({ children, selector }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);
  return mounted ? createPortal(children, ref.current) : null;
};

const ModalWrapper = ({ show, title, closeModal, children, modalContainerOverridingStyles }) => {
  const node = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = e => {
    //@ts-ignore
    if (node && node.current && node.current.contains(e.target)) {
      return;
    }
    //@ts-ignore
    closeModal(e);
  };

  return (
    <>
      {show && (
        <ClientOnlyPortal selector="#duemonkey-modal-portal">
          <StyledModal>
            <div className="modal-content" ref={node} style={{ ...modalContainerOverridingStyles }}>
              <div className="modal-header center">
                <h4>{title}</h4>
                <div className="modal-close center" onClick={closeModal}>
                  <SVG name="close" width="20px" />
                </div>
              </div>
              <div className="modal-children">{children}</div>
            </div>
          </StyledModal>
        </ClientOnlyPortal>
      )}
    </>
  );
};

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 400;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(82, 95, 127, 0.25);

  .modal-content {
    background: white;
    padding: 40px 70px;
    width: 530px;
    height: 380px;
    border-radius: 4px;
    background-color: #ffffff;
    -webkit-animation: slide-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .modal-header {
    h4 {
      font-size: 20px;
      font-weight: 500;
      color: #172a3b;
      font-family: 'Cereal';
    }

    .modal-close {
      cursor: pointer;
      margin-left: auto;
      width: 15px;
      height: 15px;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.inactiveBorderColor};
    }
  }
`;

export default ModalWrapper;
