import React, { useRef, useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '@/components/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.addEventListener('keydown', handleEscape, false);
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      document.removeEventListener('keydown', handleEscape, false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, handleEscape]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto min-h-[20vh] max-h-[80vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-center mb-4">
          {title && <h3 id="modal-title" className="text-lg font-semibold">{title}</h3>}
          <Button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none p-0 bg-transparent shadow-none hover:bg-transparent"
            aria-label="Close modal"
          >
            &times;
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;