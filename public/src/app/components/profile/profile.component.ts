import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  lat: number = 41.100856;
  lng: number =  -8.544893;
  typeProfile = 1;
  invite=0;
  private: string = 'private';
  public: string = 'public';
  vols: string;
  volsInst: any;
  volInst1: any;
  volInst2: any;
  volInst3: any;
  volInst4: any;
  volPriv1: any;
  volPriv2: any;
  volPriv3: any;
  volPriv4: any;
  volsPriv: any;
  volsTodos:any;
  login: boolean;
  i: any;
  usernames: any;
  userId: any;
  idProfile:any;
  constructor(public http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe((params) => {
        this.idProfile = this.route.snapshot.params['id'];
        console.log(this.idProfile);
      });
  


    this.login=true;
    if(this.login) { // Privado
      this.http.get('http://localhost:3000/vols').map(res => res.json()).subscribe(result => {
        this.volsTodos=result;

        for(let i=0; i<this.volsTodos.length;i++){
          this.http.get('http://localhost:3000/users/profile/'+result[i].id_user_creator).map(res => res.json()).subscribe(resultName => {
            this.volsTodos[i]["username"]=resultName.user.username;
            this.volsTodos[i]["photo_url"]=resultName.user.photo_url;
            this.volsTodos[i]["veryfied"]=resultName.user.veryfied;
          });

          }

      });
    }
  }


}
