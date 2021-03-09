export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description= '', price = 0, imageUrl = 'https://cdn.jdpower.com/JDPA_2020%20Audi%20A3%20Dark%20Gray%20Front%20View.jpg'){
        this.id = id
        this.name= name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl

    }
}
