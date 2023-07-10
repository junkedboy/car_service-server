import CarManufacturer from './Car.js'

class CarManufacturerController {
    async create(req, res) {
        try {
            const car = await CarManufacturer.create(req.body)
            res.json(car)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getAll(req, res) {
        try {
            const cars = await CarManufacturer.find()
            return res.json(cars)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            // const category = await CategoryService.getOneService(req.params.id)
            // return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async update(req, res) {
        try {
            // const updayedCategory = await CategoryService.updateService(req.body)
            // return res.json(updayedCategory)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            // const category = await CategoryService.deleteService(req.params.id)
            // return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new CarManufacturerController()