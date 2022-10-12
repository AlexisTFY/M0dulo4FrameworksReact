interface OriginInterface {
    name: string
  }
export  interface CharacterDetailEntity {
    name: string;
    status: string;
    species: string;
    type?: string;
    image: string;
    origin: OriginInterface;
  }