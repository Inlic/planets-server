import GalaxySchema from "../models/Galaxy"
import StarSchema from "../models/Star"
import PlanetSchema from "../models/Planet"
import MoonSchema from "../models/Moon"
import mongoose from "mongoose";

class DbContext {  
  Galaxies = mongoose.model("Galaxies", GalaxySchema)
  Stars = mongoose.model("Stars", StarSchema)
  Planets = mongoose.model("Planets", PlanetSchema)
  Moons = mongoose.model("Moons", MoonSchema)
}

export const dbContext = new DbContext();
