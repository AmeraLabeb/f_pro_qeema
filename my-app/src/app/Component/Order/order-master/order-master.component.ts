import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit , AfterViewInit{
  catList:ICategory[];
  selectedCatID:number=0;
  receivedOrderTotalPrice:number=0;
  // clientNameInputElem: ElementRef=new ElementRef();  >>>> bad soluation  عشان مستني مني حاجه في الكونستراكتور مش عندي
  // clientNameInputElem: ElementRef= ElementRef ={}as ElementRef;  >>> bad less soluation هيعملي اوبجكت فاضي ويحطلي نفس الحاجات اللي عندي 
  // clientNameInputElem?: ElementRef;  //optional navgation func
  @ViewChild('clientNameInp') clientNameInputElem!: ElementRef;  //non-null asseration operator
  @ViewChild(ProductListComponent) prdListCompObj!:ProductListComponent;
  constructor(){
    this.catList=[
      {id:1,name:'laptop'},
      {id:2,name:'tablet'},
      {id:3,name:'Mobile'}
    ];
  }
 
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.clientNameInputElem.nativeElement.value="your name here";
    this.clientNameInputElem.nativeElement.style.border="2px solid red"
    console.log(this.prdListCompObj.prdList)  
  }
  onTotalPriceChanged(totalPrice:number){
this.receivedOrderTotalPrice=totalPrice;
  }
  CompleteOrder(){
    this.prdListCompObj.prdList[0].quantity-=1;

  }
}
