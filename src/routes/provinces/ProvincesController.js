
const reqResponse = require('../../cors/responseHandler');
const { validationResult } = require('express-validator');
const ProvincesServices = require('../../services/ProvincesServices');

module.exports = {
	list: async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(403).send(reqResponse.errorResponse(402));
			return res.status(402).send(reqResponse.errorResponse(401));
		}
		let params = req.params;
		let query = req.query;
		try {
			const result =  await ProvincesServices.list(params, query);
			return res.status(200).json(reqResponse.sucessResponse(200, 'Success', result));
		} catch(err) {
			res.status(500).json({ error: String(err) })
		}
	},
	getByProvince: async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(403).send(reqResponse.errorResponse(402));
			return res.status(402).send(reqResponse.errorResponse(401));
		}
		let params = req.params;
		let query = req.query;
		try {
			const result =  await ProvincesServices.getByProvince(params, query);
			return res.status(200).json(reqResponse.sucessResponse(200, 'Success', result));
		} catch(err) {
			res.status(500).json({ error: String(err) })
		}
	},	
	getByRegion: async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(403).send(reqResponse.errorResponse(402));
			return res.status(402).send(reqResponse.errorResponse(401));
		}
		let params = req.params;
		let query = req.query;
		try {
			const result =  await ProvincesServices.getByRegion(params, query);
			return res.status(200).json(reqResponse.sucessResponse(200, 'Success', result));
		} catch(err) {
			res.status(500).json({ error: String(err) })
		}
	},	
}


