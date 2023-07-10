import ServiceService from './ServiceService.js'

class ServiceController {
    async create(req, res) {
        try {
            const createdNewService = await ServiceService.createService(req.body)
            res.json(createdNewService)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const { category, page = 1, pageSize = 10 } = req.query
            const services = await ServiceService.getAllService(category, parseInt(page), parseInt(pageSize))
            return res.json(services)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const service = await ServiceService.getOneService(req.params.id)
            return res.json(service)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            const updatedService = await ServiceService.updateService(req.body)
            return res.json(updatedService)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const service = await ServiceService.deleteService(req.params.id)
            return res.json(service)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new ServiceController()