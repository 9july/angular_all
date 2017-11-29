import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="container-fluid">
   <div class="row">  
   <div class="navbar-header">
   <img src="assets/img/logo.png" class="img-responsive">
  </div>
   <div class="cols-sm-7">
<nav>
<ul class="nav navbar-nav pull-right">
<li (click)="myhome()">Home</li>
<li (click)="myabout()">About Us</li>
<li (click)="myproduct()">Product</li>
<li>Contact us</li>
</ul>
</nav>
</div>
</div>

   </div> 
   <div class="container">
   <div *ngIf="Show" [ngClass]="jmb">
   <p>{{mydiv}}</p>
   <p>{{mydiv1}}</p>
   <p>{{mydiv2}}</p>
   
   
   </div>
  </div>
  `,
  styles: [`
    .container-fluid {
   
      background-image: url('assets/img/slide.jpg');
      }
    
    ul li{
      color: white;
      background-color: #1e47568c;
      margin: 20px 5px 0 5px;
      padding: 17px;
               
       }
       ul li:hover{
         background-color: #1880a78c;
       }
       .jumbotron{

       }

    `]
})
export class HeaderComponent implements OnInit {
mydiv= '';
mydiv1="";
mydiv2= '';
jmb={  
  'jumbotron':true
}
Show = false;
 
 myhome()
 {
   this.Show =true;
   this.mydiv='Lorem home is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
 }
myabout()
{
  this.Show =true;
  this.mydiv1='Lorem about us is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
}
myproduct(){
  this.Show =true;
  this.mydiv2="Lorem product is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}

constructor() { }
  ngOnInit() {
  }

}
