import CarManufacturer from './CarManufacturer.js'

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
            const manufacturers = await CarManufacturer.find()
            return res.json(manufacturers)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOneById(req, res) {
        try {
            const manufacturer = await CarManufacturer.findById(req.params.id)
            return res.json(manufacturer)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOneByTitle(req, res) {
        try {
            const title = req.params.title;
            const regex = new RegExp(title, "i");
            const manufacturer = await CarManufacturer.findOne({title: { $regex: regex } })
            return res.json(manufacturer)
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

// як я наповнював базу

// файл car_DB.js
// export const carDB = [
//     {
//       "id": 1,
//       "manufacturer": "Abarth",
//       "model": "124 Spider"
//     }
//      ...
// ]

// async create(req, res) {
//     try {
//         for (const item of carDB) {
//             const manufacturerInDB = await CarManufacturer.findOne({ title: item.manufacturer })
//             if (!manufacturerInDB) {
//                 const car = await CarManufacturer.create({ title: item.manufacturer })
//                 console.log("manufacturer created")
//             }
//         }
//         res.status(200).json("Manufacturers created successfully")
//     } catch (e) {
//         res.status(500).json(e.message)
//     }
// }