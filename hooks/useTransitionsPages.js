// FRAMER MOTION
import { AnimatePresence } from 'framer-motion';
// REACT-ROUTER-DOM
import { useLocation } from 'react-router-dom';

export const useTransitionsPages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <About key={location.pathname} />
      <Transition />
    </AnimatePresence>
  );
};
