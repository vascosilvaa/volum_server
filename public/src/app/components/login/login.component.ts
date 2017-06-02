import { SocketService } from './../../shared/socket.service';
import { AppComponent } from './../../app.component';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { User } from './user.interface';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from '@angular/forms';


export class ModalContext extends BSModalContext {

}

@Component({
    selector: 'login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    providers: [SocketService]
})

export class LoginComponent implements OnInit {
    public wrongAnswer: boolean;
    context: ModalContext;
    form: FormGroup;
    public stateEmail = 0;
    public statePass = 0;
    public error: any;

    constructor(private _fb: FormBuilder, private auth: AuthenticationService, private dialog: DialogRef<ModalContext>, private socketService: SocketService) {
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.keyboard = [27];
    }

    ngOnInit() {
        this.form = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    loginFacebook() {
        window.open('http://bevolun.com/api/auth/facebook');
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
                else {
                    this.error = res.message;
                    console.log(this.error);
                }
            })
            .catch(err => {
                console.log(err)
            });

    }
}
