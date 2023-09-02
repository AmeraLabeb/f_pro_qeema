import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  prdList:IProduct[];

  constructor() { 
    this.prdList=[
      {id:100,name:'lenovo1',price:2000,quantity:1,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
      {id:200,name:'apple-pro',price:3000,quantity:0,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
      {id:300,name:'tablet',price:1000,quantity:10,imgURL:'https://fakeimg.pl/200x100/',categoryID:2},
      {id:400,name:'acer',price:500.99,quantity:2,imgURL:'https://fakeimg.pl/200x100/',categoryID:1},
      {id:500,name:'samsung',price:2000,quantity:20,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
      {id:600,name:'notebook',price:40000,quantity:0,imgURL:'https://fakeimg.pl/200x100/',categoryID:1}
    ];
  }

   getAllProducts()
   {
     return this.prdList;
   }

   getProductsBycatID(cID:number):IProduct[]
   {
    if(cID==0)
    return this.prdList;
  else

    return this.prdList.filter(prd=>prd.categoryID== cID);
   }

   getProductByID(pID:number):IProduct | null
   {
     let foundProduct = this.prdList.find(prd=>prd.id==pID);
     return foundProduct? foundProduct:null
   }

    addNewProduct(prd:IProduct){
      
      this.prdList.push(prd);
    }


}
