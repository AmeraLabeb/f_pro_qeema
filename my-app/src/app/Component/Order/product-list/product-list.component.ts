import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit ,OnChanges{
  orderDate:Date;
  // prdList:IProduct[];
  prdListOfCat:IProduct[]=[];
  // selectedCatID:number=0;
  @Input() sentCatID:number=0;
  @Output() totalPriceChanged:EventEmitter<number>;
orderTotalPrice:number=0;
  constructor(private staticPrdService:StaticProductsService){
   this.totalPriceChanged=new EventEmitter<number>();
// this.prdList=[
//   {id:100,name:'lenovo1',price:2000,quantity:1,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
//   {id:200,name:'apple-pro',price:3000,quantity:0,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
//   {id:300,name:'tablet',price:1000,quantity:10,imgURL:'https://fakeimg.pl/200x100/',categoryID:2},
//   {id:400,name:'acer',price:500.99,quantity:2,imgURL:'https://fakeimg.pl/200x100/',categoryID:1},
//   {id:500,name:'samsung',price:2000,quantity:20,imgURL:'https://fakeimg.pl/200x100/',categoryID:3},
//   {id:600,name:'notebook',price:40000,quantity:0,imgURL:'https://fakeimg.pl/200x100/',categoryID:1}
// ];
this.orderDate=new Date();
// this.prdListOfCat=this.prdList;

  }

    // معنديش drop down list input بيتغير 
    // بيتغير كل لما الداخلي  بيتغير 
  ngOnChanges(): void {
// this.filterProductsByCatID(); 
this.prdListOfCat=this.staticPrdService.getProductsBycatID(this.sentCatID);
 }
  ngOnInit(): void{

  }

  buy(prdPrice:number,count:string){
  //  this.orderTotalPrice=parseInt(count)*prdPrice;
  //  this.orderTotalPrice=Number(count)*prdPrice;
  // >>>> count :any <<<<
  // >>> this.orderTotalPrice=(count as number)*prdPrice;<<<
   this.orderTotalPrice= this.orderTotalPrice + (Number(count) * prdPrice);
  //  excute event
  this.totalPriceChanged.emit(this.orderTotalPrice);

  }
  // changeCat(){
  //   this.selectedCatID=1;
  // }
  prdTrackByfuc(index:number, prd:IProduct):number
  {
    return prd.id;
  }
  // مش محتاج اشوفها من برا الكلاس
  // private filterProductsByCatID(){
  //   if(this.sentCatID==0)
  //   this.prdListOfCat=this.prdList;
  // else

  //   this.prdListOfCat= this.prdList.filter(prd=>prd.categoryID== this.sentCatID);
  // }

}
