
const reqResponse = require('../../cors/responseHandler');
const { validationResult } = require('express-validator');
const RegionsServices = require('../../services/RegionsServices');

module.exports = {
	list: async (req, res) => {
		try {
			const result =  await RegionsServices.list();
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
			const result =  await RegionsServices.getByRegion(params, query);
			return res.status(200).json(reqResponse.sucessResponse(200, 'Success', result));
		} catch(err) {
			res.status(500).json({ error: String(err) })
		}
	},	
}


