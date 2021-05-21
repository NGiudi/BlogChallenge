const router = require ('express').Router();
const validation = require ('../controllers/validations');

const { Posts } = require ('../config/database');

// Envía todo el listado.
router.get ('/posts', (req, res) => {
  Posts.findAll ({ attributes: ['id', 'title', 'image', 'category', 'createdAt'], order: [['createdAt', 'DESC']] })
    .then (posts => {
      if (posts === {}){
        res.json ({ status: "success", message: "Empty list" });
      } else {
        res.json (posts);
      }
    })
    .catch (() => {
      res.json ({ status: "error", message: "Database connection error" });
    });
});

// Envía un elemento del listado.
router.get ('/posts/:id', (req, res) => {
  Posts.findOne ({ where: { id: req.params.id } })
    .then (post => {
      if (post === null){
        res.json ({status: "error", message: "Post do not exist"});
      } else {
        res.json (post);
      }
    })
    .catch (() => {
      res.json ({ status: "error", message: "Database connection error" });
    });
});

// Guardar nuevo post.
router.post ('/posts', validation.postValidation, (req, res) => {
  Posts.create (req.body)
    .then (post => {
      res.json (post);
    })
    .catch (() => {
      res.json ({ status: "error", message: "Database connection error" });
    });
});

// Actualizar un post.
router.patch ('/posts/:id', validation.postValidation, (req, res) => {
  Posts.update (req.body, { where: { id: req.params.id } })
    .then (post => {
      if (post[0] === 0) {
        res.json ({ status: "error", message: "Id not found" });
      } else {
        res.json ({ status: "success", message: "Success update" });
      }
    })
    .catch (() => {
      res.json ({ status: "error", message: "Database connection error" });
    });
});

// Eliminar un elemento.
router.delete ('/posts/:id', (req, res) => {
  Posts.destroy ({ where: { id: req.params.id } })
    .then ((response) => {
      if (response === 0){
        res.json ({ status: "error", message: 'Id do not exist' })
      } else{
        res.json ({ status: "success", message: 'Success delete' });
      }
    })
    .catch (() => {
      res.json ({ status: "error", message: "Database connection error" });
    });  
});

module.exports = router;