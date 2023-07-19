import Category from './Category.js'
import Service from './Service.js'

class CategoryService {
    async createService(reqBody) {
        return await Category.create(reqBody)
    }
    async getAllService() {
        return await Category.find()
    }
    async getOneService(reqParamsId) {
        return await Category.findById(reqParamsId)
    }
    async updateService(reqBody) {
        if (!reqBody._id) {
            throw new Error('id не вказаний')
        }
        return await Category.findByIdAndUpdate(reqBody._id, reqBody, {new: true})
    }
    async deleteService(reqParamsId) {
        // перевіряємо чи в БД є послуги які використовують дану категорію
        const servicesWithCategory = await Service.find({ category: reqParamsId })
        if (servicesWithCategory.length > 0) {
            throw new Error('Видалення недоступне. Існують послуги з цією категорією.')
        }
        const category = await Category.findByIdAndDelete(reqParamsId)
        return category
    }
}

export default new CategoryService()