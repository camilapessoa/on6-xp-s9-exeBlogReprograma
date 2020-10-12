let postsModel = require('../models/posts')
const helper = require('../helpers/helpers')


const getPosts = (req, res) =>{
  res.status(200).json(postsModel);
}

const buildPost = (req, res) =>{
  
  const {title, content, tags} = req.body;
  const newPost = {
    id: helper.getNewValue(postsModel),
    date: helper.newDate(),
    title: title,
    content: content,
    tags: tags

  }

  postsModel.push(newPost)

  return res.status(200).json(newPost)

}

const deletedById = (req, res) => {
  const id = req.params
  const postFilter = postsModel.filter(item => {
    return item.id == id}) [0]

  const index = postsModel.indexOf(postFilter)
  postsModel.splice(index,1)
  res.json(postsModel)
}

module.exports ={
  getPosts,
  buildPost,
  deletedById
}



