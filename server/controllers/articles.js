//import Article from "../models/Article";
import Article from "../models/Article.js";

// Fetch all articles
export const getArticles = async (req, res) => {
    try {
      const articles = await Article.find();
      res.json(articles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }


// Create new articles
export const createArticle = async (req, res) => {
    const { title, content, category, imageUrl } = req.body;
  
    try {
      const newArticle = new Article({
        title,
        content,
        category,
        imageUrl
      });
  
      const article = await newArticle.save();
  
      res.json(article);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

  // Update an article by ID
  export const updateArticle = async (req, res) => {
    try {
      const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).json(article)
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Server Error' })
    }
  }

  // Delete an article by ID
export const deleteArticle = async (req, res) => {
    try {
      const article = await Article.findByIdAndDelete(req.params.id)
      if (!article) throw new Error('Article not found')
      res.status(200).json(article)
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Server Error' })
    }
  }

  // Delete an article by ID
  export const getOneArticle = async (req, res) => {
    try {
      const article = await Article.findById(req.params.id)
      if (!article) throw new Error('Article not found')
      res.status(200).json(article)
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Server Error' })
    }
  }
