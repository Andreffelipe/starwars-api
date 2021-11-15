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
    type Query {
      allPlanets: [Planet]
    }
    type Mutation {
      createPlanet(name: String,rotation_period: Int,orbital_period: Int,diameter: Int,climate: [String],gravity: String,terrain: [String],surface_water: Int,population: Int): Planet
      deleteAnimal(id: ID): Boolean
    }
  `;

export const crudResolvers = {
  Query: {
    allPlanets: async () => {
      const planet = await prisma.planet.findMany();
      return planet;
    },

  },
  Mutation: {
    createPlanet: async (_: any, { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }: any) => {
      const planet = await prisma.planet.create({
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
    }

  },
};



