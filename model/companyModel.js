import Sequelize from 'sequelize'
import BaseModel from './baseModel.js'
class CompanyModel extends BaseModel{
	constructor(){
		super('companys', {
			cname:{type: Sequelize.STRING},
			size:{type: Sequelize.INTEGER},
			address:{type: Sequelize.STRING}
		})
		this.model = super.getModel()
		this.model.sync()
	}
}
module.exports = new CompanyModel()