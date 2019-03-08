import { 
  Component,
   OnInit,
   Input,
    OnChanges,
     SimpleChanges,
     DoCheck,
     AfterContentInit,
     AfterContentChecked,
     AfterViewInit,
     AfterViewChecked,
     ViewChild,
     ElementRef,
     OnDestroy,
     ContentChild
       } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  @Input('srvElement') element : { type : String , name : String , content : String}
  @Input() name :string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { 
    console.log('constructor Called !')
  }

  ngOnInit() {
    console.log('ngOnIt Called!');
    console.log('Text Content:' + this.header.nativeElement.textContent);
    console.log('Text Content-paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChnages Called!');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck Called!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContent Called!');
    console.log('Text Content-paragraph:' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContent Checked!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called !');
    console.log('Text Content:' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('ngAfterView Checked!');
  }
ngOnDestroy()
{
  
}
}
