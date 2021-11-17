import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const queryTypeDefinitions = `
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
    allCharacters: [Character]
    allPlanets: [Planet]
    allSpecies: [Specie]
    allStarships: [Starship]
    allVehicles: [Vehicle]
    oneCharacter(id: ID) : Character
    onePlanet(id: ID) : Planet
    oneSpecie(id: ID) : Specie
    oneStarship(id: ID) : Starship
    oneVehicle(id: ID) : Vehicle
  }
`;

export const queryResolvers = {
  Query: {
    allCharacters: async () => {
      const char = await prisma.characters.findMany();
      return char;
    },
    allPlanets: async () => {
      const planet = await prisma.planets.findMany();
      return planet;
    },
    allSpecies: async () => {
      const specie = await prisma.species.findMany();
      return specie;
    },
    allStarships: async () => {
      const starship = await prisma.starships.findMany();
      return starship;
    },
    allVehicles: async () => {
      const vehicle = await prisma.vehicles.findMany();
      return vehicle;
    },
    oneCharacter: async (_: unknown, { id }: never) => {
      const char = await prisma.characters.findUnique({
        where: { id }
      });
      return char;
    },
    onePlanet: async (_: unknown, { id }: never) => {
      const planet = await prisma.planets.findUnique({
        where: { id }
      });
      return planet;
    },
    oneSpecie: async (_: unknown, { id }: never) => {
      const specie = await prisma.species.findUnique({
        where: { id }
      });
      return specie;
    },
    oneStarship: async (_: unknown, { id }: never) => {
      const starship = await prisma.starships.findUnique({
        where: { id }
      });
      return starship;
    },
    oneVehicle: async (_: unknown, { id }: never) => {
      const vehicle = await prisma.vehicles.findUnique({
        where: { id }
      });
      return vehicle;
    },
  },
};
