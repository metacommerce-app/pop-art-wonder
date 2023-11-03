import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import IsVisibleWhen from '../conditionals/IsVisibleWhen';

type Props = { children: React.ReactNode | React.ReactNode[] };

export const ModalTitle: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export const ModalLayoutWrapper: React.FC<Props> = ({ children }) => {
  return <div className='mt-3 text-center sm:mt-0 sm:text-left flex flex-col gap-4 w-full'>{children}</div>;
};

export const ModalFooterWrapper: React.FC<Props> = ({ children }) => {
  return <div className='flex gap-2 justify-end items-center w-full pt-3'>{children}</div>;
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10 flex flex-col' onClose={onClose}>
        <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in-out duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center'>
            <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in-out duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all flex flex-col min-h-[100px]'>
                <IsVisibleWhen condition={!!open}>{children}</IsVisibleWhen>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
