import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from 'src/app/contact-service.service';
import { ParamMap } from '@angular/router';
import { Icontact } from '../Contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
public contactId:string |null=null;
public contactdata:Icontact={} as Icontact;
  constructor(private contactService : ContactServiceService , private activate :ActivatedRoute) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe((param:ParamMap)=>{
      this.contactId=param.get('contactId');
   });
    if(this.contactId){
      console.log(this.contactId);
    this.contactService.getSingleContact(this.contactId).subscribe((data:Icontact)=>{
      this.contactdata=data;
    })
   }
  }
  public isNotEmpty(){
    return Object.keys(this.contactdata).length>0;
  }

}
