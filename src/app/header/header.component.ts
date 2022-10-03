import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeIndex : number = 0;
  
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
      if(!this.eRef.nativeElement.contains(event.target)) {
        document.querySelector('.show')?.classList.toggle("show");
      }
  }

  onDropdownClick(event: any) {
    document.getElementById(`${event.target.id}-child`)?.classList.toggle("show");
  }
}
