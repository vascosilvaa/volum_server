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
    selector: 'register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
    public emailRegist=0;
    public wrongAnswer: boolean;
    public form: any;
    context: ModalContext;
    constructor(private _fb: FormBuilder, private auth: AuthenticationService, private dialog: DialogRef<ModalContext>) {
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.keyboard = [27];
    }

    ngOnInit() {
        this.form = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,  Validators.minLength(6)]],
            password2: ['', [Validators.required,  Validators.minLength(6)]],
            name: ['', [Validators.required, Validators.minLength(2)]],
            lastname: ['', [Validators.required, Validators.minLength(2)]],
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

    openEmailRegist() {
        this.emailRegist=1;
    }

    openConfirmationEmail() {
        this.emailRegist=2;
    }
}
