import { Router, ActivatedRoute } from '@angular/router';
import { MyActionsService } from './my-actions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-actions',
  templateUrl: './my-actions.component.html',
  styleUrls: ['./my-actions.component.scss'],
  providers: [MyActionsService]
})
export class MyActionsComponent implements OnInit {
  constructor(private route:ActivatedRoute, private myactionsservice:MyActionsService, private router: Router) { }
  public idProfile:any;
  public myVols: any;
  public address:any;
  public addressName: any;
  public addressData: any;
  public hora_inicio: any;
  public hora_fim: any;
  public minutos_inicio: any;
  public minutos_fim: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
        this.idProfile = this.route.parent.parent.parent.snapshot.params['id'];
    });
    this.getMyActions(this.idProfile);
    
  }
  getMyActions(id) {
    this.myactionsservice.getMyActions(id)
     .then(res => {
        this.myVols = res.vols;
        console.log(res.vols)
        /*
        this.hora_inicio = this.myVols.start_time.slice(0,2);
        this.minutos_inicio = this.myVols.start_time.slice(3,5);
        this.hora_fim = this.myVols.end_time.slice(0,2);
        this.minutos_fim = this.myVols.end_time.slice(3,5);
        */
      for(let vol of this.myVols) {
       this.getAddress(vol.lat, vol.long);
        this.myactionsservice.getAddress(vol.lat, vol.long)
        this.getTime(vol.start_time, vol.end_time);
      }

    })
  }
  
  getTime(start, end) {
    this.hora_inicio = start.slice(0,2);
    this.minutos_inicio = start.slice(3,5);
    this.hora_fim = end.slice(0,2);
    this.minutos_fim = end.slice(3,5);
  }

  getAddress(lat, long) {
    if(lat && long) {
      this.myactionsservice.getAddress(lat, long)
      .then(res => {
        this.addressData = res.results;
        this.address = this.addressData[0].formatted_address;
        this.addressName = this.addressData[0].address_components[0].short_name;
      })
    }
  }

  seeDetails(id_vol) {
    this.router.navigate(['/profile/' + this.idProfile + '/details/' + id_vol]);
  }
}
