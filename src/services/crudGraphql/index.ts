import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const crudTypeDefinitions = `
    type Planet{
      id: ID
      name: String
      rotation_period: Int
      orbital_period: Int
      diameter: Int
      climate: [String]
      gravity: String
      terrain: [String]
      surface_water: Int
      population: Int
    }
    type Starship {
      id: ID
      name: String
      model: String
      manufacturer: String
      cost_in_credits: Int
      length: Float
      max_atmosphere_speed: Int
      crew: Int
      passengers: Int
      cargo_capacity: Int
      consumables: String
      hyperdrive_rating: Int
      MGLT: Int
      starship_class: String
    }
    type Vehicle {
      id: ID
      name: String
      model: String
      manufacturer: String
      cost_in_credits: Int
      length: Float
      max_atmosphere_speed: Int
      crew: Int
      passengers: Int
      cargo_capacity: Int
      consumables: String
      vehicle_class: String
    }
    type Specie {
      id: ID
      name: String
      classification: String
      designation: String
      average_height: Int
      skin_colors: [String]
      hair_colors: [String]
      eye_colors: [String]
      average_lifespan: Int
      language: String
      homeworld: String
    }
    type Character {
      id: ID
      name: String
      height: Int
      mass: Float
      hair_color: [String]
      skin_color: [String]
      eye_color: [String]
      birth_year: String
      gender: String
      homeworld: String
      species: String
    }
    type Query {
      allPlanets: [Planet]
    }
    type Mutation {
      createPlanet(name: String,rotation_period: Int,orbital_period: Int,diameter: Int,climate: [String],gravity: String,terrain: [String],surface_water: Int,population: Int): Planet
      createStarship(name: String,model: String,manufacturer: String,cost_in_credits: Int,length: Float,max_atmosphere_speed: Int,crew: Int,passengers: Int,cargo_capacity: Int,consumables: String,hyperdrive_rating: Int,MGLT: Int,starship_class: String):Starship
      createVehicle(name: String,model: String,manufacturer: String,cost_in_credits: Int,length: Float,max_atmosphere_speed: Int,crew: Int,passengers: Int,cargo_capacity: Int,consumables: String,vehicle_class: String):Vehicle
      createSpecie(name: String,classification: String,designation: String,average_height: Int,skin_colors: [String],hair_colors: [String],eye_colors: [String],average_lifespan: Int,language: String,homeworld: String):Specie
      createCharacter(name: String,height: Int,mass: Float,hair_color: [String],skin_color: [String],eye_color: [String],birth_year: String,gender: String,homeworld: String,species: String):Character
      deleteAnimal(id: ID): Boolean
    }
  `;

export const crudResolvers = {
  Query: {
    allPlanets: async () => {
      const planet = await prisma.planets.findMany();
      return planet;
    },
  },
  Mutation: {
    createPlanet: async (_: unknown, { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }: never) => {
      const planet = await prisma.planets.create({
        data: {
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population
        }
      });
      return planet;
    },
    createStarship: async (_: unknown, { name, model, manufacturer, cost_in_credits, length, max_atmosphere_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class }: never) => {
      const starship = await prisma.starships.create({
        data: {
          name,
          model,
          manufacturer,
          cost_in_credits,
          length,
          max_atmosphere_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
          hyperdrive_rating,
          MGLT,
          starship_class
        }
      });
      return starship;
    },
    createVehicle: async (_: unknown, { name, model, manufacturer, cost_in_credits, length, max_atmosphere_speed, crew, passengers, cargo_capacity, consumables, vehicle_class }: never) => {
      const vehicle = await prisma.vehicles.create({
        data: {
          name,
          model,
          manufacturer,
          cost_in_credits,
          length,
          max_atmosphere_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
          vehicle_class
        }
      });
      return vehicle;
    },
    createSpecie: async (_: unknown, { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, language, homeworld }: never) => {
      const specie = await prisma.species.create({
        data: {
          name,
          classification,
          designation,
          average_height,
          skin_colors,
          hair_colors,
          eye_colors,
          average_lifespan,
          language,
          homeworld_id: homeworld
        }
      });
      return specie;
    },
    createCharacter: async (_: unknown, { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, species }: never) => {
      const character = await prisma.characters.create({
        data: {
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          homeworld_id: homeworld,
          species_id: species
        }
      });
      return character;
    }
  },
};
