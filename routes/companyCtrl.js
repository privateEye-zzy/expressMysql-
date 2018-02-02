import express from 'express'
import companyService from '../service/companyService.js'
const router = express.Router()
class CompanyCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await companyService.baseFindAll())}catch(err){next(err)}
		})
		router.put('/update', async (req, res, next) => {
			try{res.json(await companyService.baseUpdate(req.body['update'], req.body['where']))}catch(err){next(err)}
		})
		router.delete('/delete', async (req, res, next) => {
			try{res.json(await companyService.baseDelete(req.body))}catch(err){next(err)}
		})

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await companyService.baseCreateBatch(req.body['entitys']))}catch(err){next(err)}
		})
		return router
	}
}
module.exports = CompanyCtroller.initRouter()