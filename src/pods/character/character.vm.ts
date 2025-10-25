export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export const createEmptyCharacter = (): Character => ({
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '' ,
    gender: '',
    origin: {
        name: '',
        url: ''
    },
    location: {
        name: '',
        url: ''
    },
    image: '',
    episode: [],
    url: '',
});
