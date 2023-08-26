import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
// private elemRef;
@Input('LightBox') highLightColor:string="yellow";
  constructor( private elmRef:ElementRef) {
    this.elmRef.nativeElement.style.border="2px solid pink";
   }
   @HostListener('mouseover') onMouseOver(){
    this.elmRef.nativeElement.style.border=`2px solid ${this.highLightColor} `;
   }
   @HostListener('mouseout') onMouseOut(){
    this.elmRef.nativeElement.style.border="2px solid black";
   }
}
