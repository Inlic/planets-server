import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";

export class MoonsController extends BaseController {
  constructor() {
    super("api/moons");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  async getAll(req, res, next) {
    try {
      let data = await moonsService.find(req.query);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await moonsService.getById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await moonsService.create(req.body);
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      //If we don't ensure the id we're editing is the same and isn't being changed, if we didn't do the above step the user could edit it.
      let data = await moonsService.edit(req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  
  async delete(req, res, next) {
    try {
      await moonsService.delete(req.params.id);
      res.send("Successfully deleted")
    } catch (error) {
      next(error)
    }
  }
}