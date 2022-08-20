
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactServiceService } from 'src/app/contact-service.service';
import { Icontact } from '../Contact';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public contactData:Icontact[]=[] ;
  public contact:string |null =null;
  constructor(private contactService:ContactServiceService , private activate:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.getAllContacts();
    
  }

  getAllContacts(){
    this.contactService.getAllContacts().subscribe((data:Icontact[])=>{
      this.contactData=data;
      console.log(this.contactData);
  });
  }
  DeleteContact(contact:string | undefined){
      if(contact){
        this.contactService.deleteContact(contact).subscribe((data:{})=>{
            this.getAllContacts();
        })
      }
  }
 
}


