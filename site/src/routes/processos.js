var express = require("express");
var router = express.Router();

var processosController = require("../controllers/processosController");

router.post("/receberDadosProcessos", function (req, res) {
    processosController.receberDadosProcessos(req, res);
});

router.post("/deletarProcesso", function (req, res) {
    processosController.deletarProcesso(req, res);
});

router.post("/proibirProcesso", function (req, res) {
    processosController.proibirProcesso(req, res);
});

router.get('/obter-processos/:horarioInicio&:horarioFim&:mac', function (req, res) {
    processosController.obterProcessos(req, res);
});

module.exports = router;