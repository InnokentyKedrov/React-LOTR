import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { InitialStateType } from '../../types/types';
import About from '../About/About';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Modal from '../Main/Modal/Modal';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const ISMODAL = useSelector((state: InitialStateType) => state.ISMODAL);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modal" element={ISMODAL ? <Modal /> : <Navigate to="/" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </>
  );
};

export default App;
