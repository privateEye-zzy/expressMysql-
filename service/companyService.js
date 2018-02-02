import BaseService from './baseService.js'
import {AutoWritedCompanyModel} from '../common/AutoWrite.js'
@AutoWritedCompanyModel
class CompanyService extends BaseService{
	constructor(){
		super(CompanyService.model)
	}
}
module.exports = new CompanyService()