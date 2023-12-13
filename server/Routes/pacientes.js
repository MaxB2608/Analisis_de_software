const express = require("express");
const router = express.Router();
const pacienteSchema = require("../Model/paciente");

router.post("/users", (req, res)=> {
    const paciente =pacienteSchema(req.body);
    paciente
        .save()
        .then((data) => res.json(data))
        .catch((error) => {
        console.error(error); // Puedes imprimir el error en la consola para tener más información.
        if (!res.headersSent) {
            res.status(500).json({ message: 'Error al guardar el usuario.' });
            return;
        }
        });
    res.send("create paciente");
});

router.get("/users", (req, res)=> {
    pacienteSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

router.get("/users/filtrar", (req, res)=> {
    const {nombre, rut} = req.query;
    const filtro = {}
    if (nombre){
        filtro.nombre = nombre;
    }
    if (rut){
        filtro.rut = rut;
    }
    pacienteSchema.find(filtro).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});


router.put("/users/:rut", (req, res)=> {
    const {rut} = req.params;
    const {examen, medico, motivo, fecha, hora} = req.body;
    pacienteSchema.updateOne({rut: rut}, {$set: {examen,medico, motivo, fecha, hora}}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

router.delete("/users/:rut", (req, res)=> {
    const {rut} = req.params;
    pacienteSchema.deleteOne({rut: rut}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});


module.exports = router;