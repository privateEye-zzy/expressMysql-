import express from 'express'
import personService from '../service/personService.js'
const router = express.Router()
class PersonCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await personService.baseFindAll())}catch(err){next(err)}
		})
		router.get('/all/some', async (req, res, next) => {
			try{res.json(await personService.baseFindAll(Object.values(req.query)))}catch(err){next(err)}
		})
		router.get('/find/where', async (req, res, next) => {
			try{res.json(await personService.baseFindByFilter(null, req.query))}catch(err){next(err)}
		})
		router.get('/find/where/order', async (req, res, next) => {
			try{res.json(await personService.baseFindByFilterOrder(null, {sex: '0'}, 'age'))}catch(err){next(err)}
		})
		router.get('/findlike/where', async (req, res, next) => {
			try{res.json(await personService.baseFindLikeByFilter(null, req.query))}catch(err){next(err)}
		})
		router.get('/findlike/where/order', async (req, res, next) => {
			try{res.json(await personService.baseFindLikeByFilter(null, {name: 'z'}, 'age'))}catch(err){next(err)}
		})
		router.put('/update', async (req, res, next) => {
			try{res.json(await personService.baseUpdate(req.body['update'], req.body['where']))}catch(err){next(err)}
		})
		router.delete('/delete', async (req, res, next) => {
			try{res.json(await personService.baseDelete(req.body))}catch(err){next(err)}
		})
		router.post('/create', async (req, res, next) => {
			try{res.json(await personService.baseCreate(req.body))}catch(err){next(err)}
		})
		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await personService.baseCreateBatch(req.body['entitys']))}catch(err){next(err)}
		})
		// 特殊业务
		router.get('/service1', async (req, res, next) => {
			try{res.json(await personService.specialService1())}catch(err){next(err)}
		})
		router.get('/service2', async (req, res, next) => {
			try{res.json(await personService.specialService2())}catch(err){next(err)}
		})
		return router
	}
}
module.exports = PersonCtroller.initRouter()