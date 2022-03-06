const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({ include: Product});
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, { include: Product});
    if (!tagData) {
      res.status(404).json({message: "There is no Tag by tgis id!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.creat(req.body);
    res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err);
  
    }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(re.body, {
      where: {
        id: req.params.id
      }});
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err)
    }
  });
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destory({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ mesasage: "There is no Tag found with this id!"}); 
      return; 
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
