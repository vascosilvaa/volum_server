import { SocketService } from './../../shared/socket.service';
import { AppComponent } from './../../app.component';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewContainerRef, Injector, ViewChild, ElementRef } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard, Overlay, overlayConfigFactory } from 'angular2-modal';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component'


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

    constructor(private _fb: FormBuilder, private auth: AuthenticationService, private dialog: DialogRef<ModalContext>, private socketService: SocketService,
    private router: Router, overlay: Overlay, public injector: Injector, public modal: Modal) {
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
        //  window.location.href = 'http://localhost:8080/api/auth/facebook';
        window.location.href = 'http://bevolun.com/api/auth/facebook';
    }

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
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

    openRegister(){
        this.dialog.dismiss();
        return this.modal.open(RegisterComponent);
    }
}
