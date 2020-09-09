import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {

  async find(query = {}) {
    return await dbContext.Moons.find(query).populate("planet")
  }
  async getById(id) {
    let data = await dbContext.Moons.findById(id).populate("planet")
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Moons.create(body)
  }
  async edit(body) {
    let update = await dbContext.Moons.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid Id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Moons.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid Id")
    }
  }

}

export const moonsService = new MoonsService();