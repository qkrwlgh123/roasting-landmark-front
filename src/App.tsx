import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';

import GlobalStyles from './styles/globalStyles';
import MainLayout from './components/layout/mainLayout/mainLayout';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
