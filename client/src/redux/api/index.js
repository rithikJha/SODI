import axios from 'axios';

const url = 'http://localhost:5000/api/articles';

export const fetchArticles = () => axios.get(url);
export const fetchOneArticle = async (id) => {
    try {
        console.log('single',`${url}/${id}`)
      const response = await axios.get(`${url}/${id}`);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch article by ID');
    }
  };