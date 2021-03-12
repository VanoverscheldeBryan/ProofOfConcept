interface ProductJson {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  }

export class Product {
    
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description= '', price = 0, imageUrl = 'https://cdn.jdpower.com/JDPA_2020%20Audi%20A3%20Dark%20Gray%20Front%20View.jpg'){
        this.id = id;
        this.name= name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;

    }

    static fromJSON(json: ProductJson): Product {
        const prod = new Product(
          json.id,
          json.name,
          json.description,
          json.price,
          json.imageUrl,
        );
        prod.id = json.id;
        return prod;
      }
}
