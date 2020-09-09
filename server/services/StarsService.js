import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {

  async find(query = {}) {
    return await dbContext.Stars.find(query).populate("galaxy")
  }
  async getById(id) {
    let data = await dbContext.Stars.findById(id).populate("galaxy");
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Stars.create(body)
  }
  async edit(body) {
    let update = await dbContext.Stars.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid Id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Stars.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid Id")
    }
  }

}

export const starsService = new StarsService();