import BaseService from './baseService.js'
import {AutoWritedPersonModel} from '../common/AutoWrite.js'
@AutoWritedPersonModel
class PersonService extends BaseService{
	constructor(){
		super(PersonService.model)
	}
	specialService1(){
		return PersonService.model.specialDAO1()
	}
	specialService2(){
		return PersonService.model.specialDAO2()
	}
}
module.exports = new PersonService()