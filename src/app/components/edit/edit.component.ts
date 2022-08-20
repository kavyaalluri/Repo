import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { ContactServiceService } from 'src/app/contact-service.service';
import { Icontact } from '../Contact';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

public contactId:string |null=null;
  public contact:Icontact={} as Icontact;
  constructor(private activate:ActivatedRoute , private contactService: ContactServiceService , private router:Router) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe((param)=>{
          this.contactId=param.get('contactId');
    });
    if(this.contactId){
      this.contactService.getSingleContact(this.contactId).subscribe((data:Icontact)=>{
        this.contact=data;
      })
    }
    
    
  }
    submitData(){
    if(this.contactId){
      this.contactService.updateContact(this.contactId ,this.contact).subscribe((data)=>{
            this.router.navigate(['/']);
      })
  }
}

}
