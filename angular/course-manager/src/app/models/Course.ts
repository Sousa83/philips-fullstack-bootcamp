export class Course {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
  description: string;

  constructor(
    id: number,
    name: string,
    code: string,
    price: number,
    rating: number,
    imageUrl: string,
    duration: number,
    releaseDate: string,
    description: string
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.description = description;
  }
}
