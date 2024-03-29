import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './pages/Home';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
