import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  orderDate:Date;
  catList:ICategory[];
  prdList:IProduct[];
  selectedCatID:number=0;
orderTotalPrice:number=0;
  constructor(){
    this.catList=[
      {id:1,name:'laptop'},
      {id:2,name:'tablet'},
      {id:3,name:'Mobile'}
    ];
this.prdList=[
  {id:100,name:'lenovo1',price:2000,quantity:1,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
  {id:200,name:'apple-pro',price:3000,quantity:0,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
  {id:300,name:'tablet',price:1000,quantity:10,imgURL:'https://fakeimg.pl/200x100/',categoryID:2},
  {id:400,name:'acer',price:500.99,quantity:2,imgURL:'https://fakeimg.pl/200x100/',categoryID:1},
  {id:500,name:'samsung',price:2000,quantity:20,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
  {id:600,name:'notebook',price:40000,quantity:0,imgURL:'https://fakeimg.pl/200x100/',categoryID:1}
];
this.orderDate=new Date();
  }
  ngOnInit(): void{

  }

  buy(prdPrice:number,count:string){
  //  this.orderTotalPrice=parseInt(count)*prdPrice;
  //  this.orderTotalPrice=Number(count)*prdPrice;
  // >>>> count :any <<<<
  // >>> this.orderTotalPrice=(count as number)*prdPrice;<<<
   this.orderTotalPrice= this.orderTotalPrice + (Number(count) * prdPrice);

  }
  changeCat(){
    this.selectedCatID=1;
  }
  prdTrackByfuc(index:number, prd:IProduct):number
  {
    return prd.id;
  }
}
