import { AppComponent } from './../../app.component';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { User } from './user.interface';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { FormBuilder, FormArray, Validators } from '@angular/forms';


export class ModalContext extends BSModalContext {

}

@Component({
    selector: 'login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

    public wrongAnswer: boolean;
    public form: any;
    constructor(private _fb: FormBuilder, private auth: AuthenticationService, private dialog: DialogRef<ModalContext>) {

    }

    ngOnInit() {
        this.form = this._fb.group({
            login: ['', [Validators.required, Validators.minLength(2)]],
            password: ['']
        });
    }

    onSubmit({ value, valid }: { value: User, valid: boolean }) {
        console.log(value, valid);

        this.auth.login(value)
            .then(res => {
                console.log(res);
                if (res.success) {
                    this.dialog.close();
                    location.reload();
                }
            })
            .catch(err => console.log(err));
    }
}
