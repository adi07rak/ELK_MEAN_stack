import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private _http:HttpClient) { }
  cust:any={};
  ngOnInit() {
    console.log("welcome to the kibana");
  }

  addCust(data:any){
    console.log(data);
    this._http.post("http://localhost:3000/workout",data).subscribe((res:any)=>{
      console.log(res.message);
      this.ngOnInit();
      alert(res.message);
    });
  }
  ping(){
    console.log("kibana ping!!");
    
  }

}
