import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {

  async find(query = {}) {
    return await dbContext.Galaxies.find(query)
  }
  async getById(id) {
    let data = await dbContext.Galaxies.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Galaxies.create(body)
  }
  async edit(body) {
    let update = await dbContext.Galaxies.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid Id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Galaxies.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid Id")
    }
  }

}

export const galaxiesService = new GalaxiesService();