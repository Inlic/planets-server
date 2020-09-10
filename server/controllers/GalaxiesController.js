import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  async getAll(req, res, next) {
    try {
      let data = await galaxiesService.find(req.query);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await galaxiesService.getById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await galaxiesService.create(req.body);
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      //If we don't ensure the id we're editing is the same and isn't being changed, if we didn't do the above step the user could edit it.
      let data = await galaxiesService.edit(req.body);
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  
  async delete(req, res, next) {
    try {
      await galaxiesService.delete(req.params.id);
      res.send("Successfully deleted")
    } catch (error) {
      next(error)
    }
  }
}