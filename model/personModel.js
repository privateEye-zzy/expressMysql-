import Sequelize from 'sequelize'
import BaseModel from './baseModel.js'
import company from './companyModel.js'
class PersonModel extends BaseModel{
	constructor(){
		super('persons', {
			name:{type: Sequelize.STRING},
			age:{type: Sequelize.INTEGER},
			sex:{type: Sequelize.STRING},
			hobby:{type: Sequelize.STRING},
			companyId:{type: Sequelize.INTEGER},
		})
		this.model = super.getModel()
		this.model.sync()
		// 表结构关系关联，一对多关系
		this.model.belongsTo(company['model'], {as:'company', foreignKey:'companyId'})
	}
	// 特殊的业务方法1，单表操作：模糊查询姓名包含z，年纪小于18岁，性别为男的person
	specialDAO1(){
		return this.model.findAll({attributes:['name', 'age', 'hobby'], where: {
			name:{$like: 'z%'},
			age:{$lte: 18},
			sex:'0'
		}})
	}
	// 特殊的业务方法2，多表操作：查询公司是阿里巴巴的person
	specialDAO2(){
		return this.model.findAll({
			attributes:['name', 'age'],
			include:[{
				model:company['model'], 
				as: 'company',
				where: {'cname': '阿里巴巴'}
			}]
		})
	}
}
module.exports = new PersonModel()