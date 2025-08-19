import * as React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import SignIn from '../components/SignIn';
import { useState } from 'react';
import RegisterPage from '../components/RegisterPage/RegisterPage';

type ModalType = 'login' | 'register';

const SignInDialog = () => {
  const [modalType, setModalType] = useState<ModalType>('login');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-black button-onclick text-black font-semibold">
          Sign in
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`${modalType === 'register' ? '!max-w-[600px]' : '!max-w-[500px]'} p-10`}>
        {modalType === 'login' && (
          <SignIn openRegister={() => setModalType('register')} />
        )}
        {modalType === 'register' && (
          <RegisterPage openLogin={() => setModalType('login')} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
