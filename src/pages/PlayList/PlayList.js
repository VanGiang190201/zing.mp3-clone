import { useLocation } from 'react-router-dom';

function PlayList() {
    const location = useLocation();

    console.log(typeof location.state);
    const { id } = location.state;

    return <h1>PlayList</h1>;
}

export default PlayList;
