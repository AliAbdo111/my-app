import{Injectable} from '@angular/core'
import { Ictegory } from './ictegory';
import { Iproduct } from './iproduct';
 @Injectable({
  providedIn:"root"
 })
 export class productlist{
    private arrCatecory:Ictegory[];
    private prouduct: Iproduct[];
    private Cart: Iproduct[];
    constructor()
    {
      this.Cart=[]
        this.arrCatecory=[
            {
              id:1,
              name:'phone'
            },
            {
              id:2,
              name:'laptops'
            }
            ,{
              id:3,
              name:'tabtets'
            }
          ]
          this.prouduct = [
            {
              id: 100,
              name: 'SAMSUNG Galaxy A53 5G Mobile Phone SIM Free Android Smartphone, 128GB, 8GB RAM, Awesome Peach',
              price: 1000,
              Qountety: 1,
              imgUrl: 'https://m.media-amazon.com/images/I/71K8e-tlk4L._AC_UL480_FMwebp_QL65_.jpg',
              dis:
              'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 3,
            },
            {
              id: 190,
              name: 'SAMSUNG Galaxy A53 5G Mobile Phone SIM Free Android Smartphone, 128GB, 8GB RAM, Awesome Peach',
              price: 1053453400,
              Qountety: 4,
              imgUrl: 'https://m.media-amazon.com/images/I/61U6oC65TTL._AC_UL480_FMwebp_QL65_.jpg',
              dis:
              'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 1
            },
            {
              id: 2002,
              name: ' New Apple iPhone 14 Pro Max (256 GB) - Deep Purple',
              price: 44355,
              Qountety: 6,
              imgUrl: 'https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UL480_FMwebp_QL65_.jpg',
              dis:
            'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 3,
            },
            {
              id: 44,
              name: 'Apple iPhone 13 Pro Max with FaceTime - 128GB, 6GB RAM, 4G Let, Sierra Blue, Single Sim',
              price: 3455,
              Qountety: 0,
              imgUrl: 'https://m.media-amazon.com/images/I/614fbeOTjDL._AC_UL480_FMwebp_QL65_.jpg',
              dis:
              'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 1,
            },
            {
              id: 55,
              name: 'Samsung Galaxy A32 Dual SIM - 6.4 Inches, 6GB RAM, 128GB, 4G LTE - Awesome Black',
              price: 3455,
              Qountety: 0,
              imgUrl: 'https://m.media-amazon.com/images/I/61xDf+e-54L._AC_UL480_FMwebp_QL65_.jpg',
              dis:
              'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 1,
            },
            {
              id: 55,
              name: 'Apple Iphone X With Facetime - 256 GB, 4G LTE, Silver, 3 GB Ram, Single Sim',
              price: 3455,
              Qountety: 5,
              imgUrl: '/assets/img/istockphoto-1141778521-612x612.jpg',
              dis:
              'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 1,
            },
            {
              id: 55,
              name: 'Apple Iphone X With Facetime - 256 GB, 4G LTE, Silver, 3 GB Ram, Single Sim',
              price: 3455,
              Qountety: 0,
              imgUrl: 'https://m.media-amazon.com/images/I/71Wkk4n9olL._AC_UL480_FMwebp_QL65_.jpg',
              dis:
              'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 1,
            },
            {
              id: 67,
              name: 'Apple Iphone X With Facetime - 256 GB, 4G LTE, Silver, 3 GB Ram, Single Sim',
              price: 65775,
              Qountety: 9,
              imgUrl: '/assets/img/istockphoto-1141778521-612x612.jpg',
              dis:
              'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 2,
            },
            {
              id: 67,
              name: 'Samsung A13 4GB Ram, 64GB - Black',
              price: 65775,
              Qountety: 9,
              imgUrl: 'https://m.media-amazon.com/images/I/419w9t3I7QL._AC_UL480_FMwebp_QL65_.jpg',
              dis:
            'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB', 
              categoryID: 2,
            },
            {
              id: 67,
              name: 'Samsung A13 4GB Ram, 64GB - Black',
              price: 65775,
              Qountety: 9,
              imgUrl: 'https://m.media-amazon.com/images/I/61OkFcXgcFL._AC_SX522_.jpg',
              dis:
            'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
             categoryID: 2,
            },
            {
              id: 67,
              name: 'SAMSUNG Galaxy A22 Dual SIM 64GB, 4GB RAM, Black',
              price: 65775,
              Qountety: 9,
              imgUrl: 'https://m.media-amazon.com/images/I/61hcDJlk-xL.__AC_SX300_SY300_QL70_ML2_.jpg',
              dis:
            'Brand	SAMSUNG Model name	Galaxy-A13 Wireless carrier	Unlocked for All Carriers OS	Android 10. Cellular technology	4G Memory storage capacity	64 GB',
              categoryID: 2,
            },
          ];
    }
     getcategory():Ictegory[]
     {
   return this.arrCatecory
     }
     getProduct():Iproduct[]
    {
        return this.prouduct;
    }
getCart(){
  return this.Cart
}
    addtocart(Iproduct:Iproduct){
      this.Cart.push(Iproduct)
      console.log(this.Cart)
    }
    Buy(count:any ,id:any){
      this.prouduct.forEach((item: { id: any; Qountety: number; })=>{
        if(id==item.id){
          item.Qountety -=count
        }
      })
    }
 }