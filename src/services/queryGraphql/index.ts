import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const queryTypeDefinitions = `
  type Character  {
    id: String
    name: String
    height: Int
    mass: Int
    hair_color: [String]
    skin_color: [String]
    eye_color: [String]
    birth_year: String
    gender: String
    homeworld: String
    species: String
  }
  type Planet {
    id: String
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
  type Specie {
    id: String
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
  type Starship {
    id: String
    name: String
    model: String
    manufacturer: String
    cost_in_credits: Int
    length: Int
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
    id: String
    name: String
    model: String
    manufacturer: String
    cost_in_credits: Int
    length: Int
    max_atmosphere_speed: Int
    crew: Int
    passengers: Int
    cargo_capacity: Int
    consumables: String
    vehicle_class: String
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
      const planet = await prisma.planet.findMany();
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
      const vehicle = await prisma.vehicle.findMany();
      return vehicle;
    },
    oneCharacter: async (_: any, { id }: any) => {
      const char = await prisma.characters.findUnique({
        where: { id }
      });
      return char;
    },
    onePlanet: async (_: any, { id }: any) => {
      const planet = await prisma.planet.findUnique({
        where: { id }
      });
      return planet;
    },
    oneSpecie: async (_: any, { id }: any) => {
      const specie = await prisma.species.findUnique({
        where: { id }
      });
      return specie;
    },
    oneStarship: async (_: any, { id }: any) => {
      const starship = await prisma.starships.findUnique({
        where: { id }
      });
      return starship;
    },
    oneVehicle: async (_: any, { id }: any) => {
      const vehicle = await prisma.vehicle.findUnique({
        where: { id }
      });
      return vehicle;
    },
  },
};
