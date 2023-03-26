import * as api from '../api/index';

//Fetch All Articles
export const getArticles = () => async (dispatch) => {
    try{
        const { data } = await api.fetchArticles();
        dispatch({ type : 'FETCH_ALL', payload: data })
    }
    catch(error){
        console.log(error.message)
    } 
}

//Fetch one Articles
export const getOneArticle = (id) => async (dispatch) => {
    try{
        const { data } = await api.fetchOneArticle(id);
        dispatch({ type : 'FETCH_ONE', payload: data })
    }
    catch(error){
        console.log(error.message)
    } 
}