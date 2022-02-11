const express = require('express');
const router = express.Router();

const stagerController = require('../controllers/stager');






//*Highlights     les router after i tested




router.get('/', stagerController.all);
router.get('/:id', stagerController.get);
router.post('/', stagerController.create);
router.put('/:id', stagerController.update);
router.delete('/:id', stagerController.delete);



//*Highlights     les router when i tested




//todo get all stageret

  //? router.get('/',(req,res)=>{
  //?   Stager.find()
  //?     .then(users=>res.status(200).json(users))
  //?     .catch(err=>res.status(400).json({error:err.message}));
  //  ? });



//todo store new stager




  //?  router.post('/',(req, res, next) => {
  //?    console.log(req.body);
  //?    const stager = new Stager({
  //?    ...req.body
  //?     });
  //?     stager.save()
  //?      .then(() => res.status(201).json({ message: 'Stager created  !'}))
  //?   });


//todo update a satger by id

//? router.put('/:id',(req,res,next)=>{
//?   Stager.updateOne(
//?     { _id: req.params.id},
//?     {...req.body,_id:req.params.id}
//?   )
//?   .then(() => res.status(201).json({message:'Users updated !'}))
//?   .catch(error => res.status(400).json({error}));
//? });

//todo get a stager by id

//? router.get('/:id',(req,res,next)=>{
//?   Stager.findOne({_id: req.params.id})
//?       .then(stager => res.status(200).json(stager))
//?       .catch(error => res.status(400).json({error}));
//? });

//todo delete un stager

//? router.delete('/:id',(req, res, next) => {
//?   Stager.deleteOne({ _id: req.params.id })
//?     .then(() => res.status(200).json({ message: 'Stager deleted !'}))
//?     .catch(error => res.status(400).json({ error }));
//? });


module.exports = router;
