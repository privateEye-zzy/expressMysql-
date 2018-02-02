//模拟工厂模式，给每个target的原型上注入新属性
module.exports = {
	AutoWritedPersonModel(target, key, descriptor){
		target.model = require('../model/personModel')
	},
	AutoWritedCompanyModel(target, key, descriptor){
		target.model = require('../model/companyModel')
	}
}