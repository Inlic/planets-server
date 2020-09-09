import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {

  async find(query = {}) {
    return await dbContext.Planets.find(query).populate("star")
  }
  async getById(id) {
    let data = await dbContext.Planets.findById(id).populate("star");
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Planets.create(body)
  }
  async edit(body) {
    let update = await dbContext.Planets.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid Id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Planets.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid Id")
    }
  }

}

export const planetsService = new PlanetsService();