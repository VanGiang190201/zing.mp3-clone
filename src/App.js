import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TawkTo from 'tawkto-react';
import { useEffect } from 'react';

import { publicRoutes } from './routes';
import DefaultLayout from '~/layouts/DefaultLayout';

function App() {
    useEffect(() => {
        var tawk = new TawkTo('636a79bedaff0e1306d66170', '1ghbun4i5');

        tawk.onStatusChange((status) => {
            console.log(status);
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
