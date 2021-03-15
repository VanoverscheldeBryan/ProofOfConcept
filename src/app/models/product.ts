interface ProductJson {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  }

export class Product {
  private _id: number;


    constructor(private _name, private _description= '',private _price = 0, private _imageUrl = 'https://cdn.jdpower.com/JDPA_2020%20Audi%20A3%20Dark%20Gray%20Front%20View.jpg'){
    }

    static fromJSON(json: ProductJson): Product {
        const prod = new Product(
          json.name,
          json.description,
          json.price,
          json.imageUrl,
        );
        prod._id = json.id;
        return prod;
      }

      get id(): number {
        return this._id;
      }
      get name(): string{
        return this._name
      }
      get description(): string{
        return this._description
      }
          
      get price(): number{
        return this._price
      }

      get imageUrl(): string{
        return this._imageUrl
      }

}
