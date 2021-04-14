import { Directive, ElementRef,HostListener } from '@angular/core';
@Directive({
  selector: '[appClickedRepo]'
})
export class ClickedRepoDirective {

  constructor(private elem: ElementRef) { }
  @HostListener("click") onClicks() {
    this.text("#bdc3c7")
  }
private text(action: string) {
    this.elem.nativeElement.style.color = action;
  }

}