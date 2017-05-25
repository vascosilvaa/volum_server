import { ProfileService } from './../../profile.service';
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
  constructor(private route: ActivatedRoute, private myactionsservice: MyActionsService, private router: Router, private profileService: ProfileService) { }
  public idProfile: any;
  public myVols: any;
  public address: any;
  // public addressName: any;
  public addressData: any;
  public hora_inicio: any;
  public hora_fim: any;
  public minutos_inicio: any;
  public minutos_fim: any;
  public numberConfirmeds: any;
  public numberCandidates: any;
  public candidates: any;
  public confirmeds: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idProfile = this.route.parent.parent.parent.snapshot.params['id'];
    });
    this.getMyActions(this.idProfile);

  }

  countConfirmeds(id) {
    this.myactionsservice.countConfirmeds(id)
      .then(res => {
        this.numberConfirmeds = res.count;
        console.log(this.myVols[id]);

      })
      .catch(err => console.log(err));
  }

  countCandidates(id) {
    this.myactionsservice.countCandidates(id)
      .then(res => {
        this.numberCandidates = res.count;
      })
      .catch(err => console.log(err));
  }
  getCandidates(id) {
    this.myactionsservice.getCandidates(id, 5)
      .then(res => {
        this.candidates = res.users;
      })
      .catch(err => console.log(err));
  }

  getConfirmed(id) {
    this.myactionsservice.getConfirmed(id, 5)
      .then(res => {
        this.confirmeds = res.users;
      })
      .catch(err => console.log(err));
  }

  getMyActions(id) {
    this.profileService.getMyVols(id)
      .then(res => {
        this.myVols = res.vols;
        console.log(res.vols)
        for (let vol of this.myVols) {
          this.getAddress(vol.lat, vol.lng);
          this.myactionsservice.getAddress(vol.lat, vol.lng)
          this.getTime(vol.start_time, vol.end_time);
          this.countCandidates(vol.id_vol);
          this.countConfirmeds(vol.id_vol);
        }

      })
  }

  getTime(start, end) {
    this.hora_inicio = start.slice(0, 2);
    this.minutos_inicio = start.slice(3, 5);
    this.hora_fim = end.slice(0, 2);
    this.minutos_fim = end.slice(3, 5);
  }

  getAddress(lat, long) {
    if (lat && long) {
      this.myactionsservice.getAddress(lat, long)
        .then(res => {
          this.addressData = res.results;
          this.address = this.addressData[0].formatted_address;
          //    this.addressName = this.addressData[0].address_components[0].short_name;
        })
    }
  }

  seeDetails(id_vol) {
    this.router.navigate(['/profile/' + this.idProfile + '/details/' + id_vol]);
  }
}
