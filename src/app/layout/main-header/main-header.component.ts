import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @ViewChild('saveSwal')
  public readonly saveSwal!: SwalComponent;
  constructor() { }

  ngOnInit(): void {
  
  }

  saveFile(a:any){
    console.log('save');
    
  }
  cancel(a:any){
    console.log('cancel');
    
  }
  creat(){
    this.saveSwal.fire();
  }
}

