import React , {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getArticles} from './redux/action/articles';

const App = () => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getArticles());
    },[dispatch]);
      




      return (
        <div>
            <h1>Latest Articles</h1>
        </div>
      );
}

export default App;