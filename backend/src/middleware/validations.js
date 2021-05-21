const yup = require ('yup');

async function postValidation (req, res, next){

  const postSchema = yup.object ({
    title: yup.string().required(),
    content: yup.string().required(),
    image: yup.string().required(),
    categoryId: yup.number().required()
  });

  postSchema.validate (req.body)
    .then (() => {
      next ();
    })
    .catch (err => {
      next (res.json(err.message));
    });
}

module.exports = {postValidation};