import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
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

  constructor(public http: Http) { }

  ngOnInit() {

    this.login= true;

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
    else { //publico
      this.http.get('http://localhost:3000/vols?inst=true').map(res => res.json()).subscribe(result => {
        this.volsInst=result;
        this.volInst1 = this.volsInst[0];
        this.volInst2 = this.volsInst[1];
        this.volInst3 = this.volsInst[2];
        this.volInst4 = this.volsInst[3];

        for(let i=0; i<this.volsInst.length;i++){
          this.http.get('http://localhost:3000/users/profile/'+result[i].id_user_creator).map(res => res.json()).subscribe(resultName => {
            if(i==0){
              this.volInst1.username=resultName.user.username;
              this.volInst1.photo_url=resultName.user.photo_url;
              this.volInst1.veryfied=resultName.user.veryfied;
            }

            if(i==1){
                this.volInst2.username=resultName.user.username;
                this.volInst2.photo_url=resultName.user.photo_url;
                this.volInst2.veryfied=resultName.user.veryfied;
            }
            if (i==2){
                this.volInst3.username=resultName.user.username;
                this.volInst3.photo_url=resultName.user.photo_url;
                this.volInst3.veryfied=resultName.user.veryfied;
            }
            if(i==3){
                this.volInst4.username=resultName.user.username;
                this.volInst4.photo_url=resultName.user.photo_url;
                this.volInst4.veryfied=resultName.user.veryfied;
            }
          });
          }
      });
      this.http.get('http://localhost:3000/vols?private').map(res => res.json()).subscribe(result => {
        this.volsPriv=result;
        this.volPriv1 = this.volsPriv[0];
        this.volPriv2= this.volsPriv[1];
        this.volPriv3 = this.volsPriv[2];
        this.volPriv4 = this.volsPriv[3];

        for(let i=0; i<this.volsPriv.length;i++){
          this.http.get('http://localhost:3000/users/profile/'+result[i].id_user_creator).map(res => res.json()).subscribe(resultName => {
            if(i==0){
              this.volPriv1.username=resultName.user.username;
              this.volPriv1.photo_url=resultName.user.photo_url;
              this.volPriv1.veryfied=resultName.user.veryfied;

            }

            if(i==1){
                this.volPriv2.username=resultName.user.username;
                this.volPriv2.photo_url=resultName.user.photo_url;
                this.volPriv2.veryfied=resultName.user.veryfied;
            }
            if (i==2){
                this.volPriv3.username=resultName.user.username;
                this.volPriv3.photo_url=resultName.user.photo_url;
                this.volPriv3.veryfied=resultName.user.veryfied;
            }
            if(i==3){
                this.volPriv4.username=resultName.user.username;
                this.volPriv4.photo_url=resultName.user.photo_url;
                this.volPriv4.veryfied=resultName.user.veryfied;
            }
          });
        }
      });

    }
  }

}
