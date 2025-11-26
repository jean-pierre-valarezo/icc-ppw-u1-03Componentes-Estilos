import { SimpsonsCharacter } from "./SimpsonsCharacter";

export interface SimpsonsCharacterDetail extends SimpsonsCharacter {
  description: string;

  first_appearance_ep_id: number;
  first_appearance_sh_id: number;

  first_appearance_ep: {
    id: number;
    airdate: string;
    description: string;
    episode_number: number;
    image_path: string;
    name: string;
    season: number;
    synopsis: string;
  };

  first_appearance_sh: {
    id: number;
    airdate: string;
    description: string;
    episode_number: number;
    image_path: string;
    name: string;
    season: number;
    synopsis: string;
  };
}
