
const Medicamentos = require('../models/medicamentos');

module.exports = {
   async index(req, res) {
      const medicamentos = await Medicamentos.findAll();

      return res.json(medicamentos);
   },

   async store(req, res) {
      const { name, codBarras } = req.body;

      const medicamentos = await User.create({ name, codBarras });

      return res.json(medicamentos);
   },
   async destroy(req, res) {

      await Medicamentos.deleteOne({_id: req.params.id});

    return res.json();
 },
 async update(req, res) {

    const medicamentos=await Medicamentos.findByIdAndUpdate(req.params.id,req.body, {new: true });

  return res.json();
}
};