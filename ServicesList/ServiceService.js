import Service from './Service.js'

class ServiceService {
    async createService(reqBody) {
        if (reqBody.category === 'All' || reqBody.category === null) {
            throw new Error('Категорія не вибрана')
        }
        return await Service.create(reqBody)
    }
    async getAllService(category = null, pageNumber = 1, pageSize = 10) {
        const skip = (pageNumber - 1) * pageSize
        const query = category ? { category: category } : {}
      
        const totalCount = await Service.countDocuments(query)
        const totalPages = Math.ceil(totalCount / pageSize)
      
        const services = await Service.find(query)
          .sort({ date: -1 })
          .skip(skip)
          .limit(pageSize)
      
        return {
          services,
          totalPages,
          currentPage: pageNumber,
          totalCount,
        }
    }
    async getOneService(reqParamsId) {
        return await Service.findById(reqParamsId)
    }
    async updateService(reqBody) {
        if (!reqBody._id) {
            throw new Error('id не вказаний')
        }
        return await Service.findByIdAndUpdate(reqBody._id, reqBody, {new: true})
    }
    async deleteService(reqParamsId) {
        return await Service.findByIdAndDelete(reqParamsId)
    }
}

export default new ServiceService()