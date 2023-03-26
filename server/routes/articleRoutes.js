import express from 'express';
const router = express.Router();
//import Article from '../models/Article';
import { getArticles,createArticle ,updateArticle,deleteArticle, getOneArticle } from '../controllers/articles.js';
//import controllers from '../controllers/articles';

// Fetch all articles
router.get('/', getArticles);

// Create a new article
router.post('/', createArticle);
  
// Update an article by ID
router.put('/:id', updateArticle)

// Delete an article by ID
router.delete('/:id', deleteArticle)

// Delete an article by ID
router.get('/:id', getOneArticle)

export default router;