
export class Planet {
  id?: string;
  name: string;
  rotation_period?: number;
  orbital_period?: number;
  diameter?: number;
  climate?: string[];
  gravity?: string;
  terrain?: string[];
  surface_water?: number;
  population?: number;
  constructor(props: Omit<Planet, 'id'>) {

    Object.assign(this, props);
  }
}
