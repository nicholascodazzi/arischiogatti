type AdoptionSwiperCardProps = {
  id?: string,
  image?: string;
  image_description?: string;
  name?: string;
  sex?: string;
  description?: string;
  url?: string;
};

type CatListCardProps = {
  id: number;
  image: string | null;
  name: string | null;
  sex: string | null;
};

export type { AdoptionSwiperCardProps, CatListCardProps };
