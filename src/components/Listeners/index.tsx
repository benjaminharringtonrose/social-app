import { FC } from 'react';
import { useAuthListener } from '../../store/auth';

const Listeners: FC = () => {
  useAuthListener();
  
  return null;
};

export default Listeners;