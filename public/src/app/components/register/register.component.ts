import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { AuthenticationService } from './../../shared/Auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext, Modal } from 'angular2-modal/plugins/bootstrap';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { volsService } from './../../shared/services/vols.service';
import { LoginComponent } from '../login/login.component'
import { Overlay, overlayConfigFactory } from 'angular2-modal';


export class ModalContext extends BSModalContext {

}

@Component({
    selector: 'register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
    public emailRegist = 0;
    public wrongAnswer: boolean;
    public form: FormGroup;
    public errorSent: any = "";
    context: ModalContext;
    public categories: any;
    constructor(private _fb: FormBuilder, private router: Router, private auth: AuthenticationService, public modal: Modal, private dialog: DialogRef<ModalContext>, public volsService: volsService) {
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.keyboard = [27];
    }

    ngOnInit() {
        this.form = this._fb.group({
            email: ['', [CustomValidators.email, Validators.required, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password2: ['', [Validators.required, Validators.minLength(6)]],
            name: ['', [Validators.required, Validators.minLength(2)]],
            type: [0, [Validators.required]],
            gender: [0, [Validators.required]],
            category: [0, [Validators.required]],

        });
        this.getCategories();
    }

    getCategories() {
    this.volsService.getCategories()
      .then(res => {
        this.categories = res.categories;
      })
      .catch(err => console.log(err));
  }

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        console.log("value", value);
        console.log("valid", valid)

        this.form.controls.email.markAsTouched();
        this.form.controls.password.markAsTouched();
        this.form.controls.password2.markAsTouched();
        this.form.controls.name.markAsTouched();
        this.form.controls.gender.markAsTouched();
        this.form.controls.type.markAsTouched();
   //     this.form.controls.category.markAsTouched();
   //     value['type'] = 2;
        value['birth_date'] = '17-07-1996';
  //      value['gender'] = 1;
        console.log("FORMS", this.form);

        if (valid) {
            if(value['gender'] != 0 && value['type'] != 0) {
                if(value['password'] == value['password2']) {
                    this.errorSent = "";
            this.auth.register(value)
                .then(res => {
                    console.log("result", res);

                    this.router.navigate([`/profile/${res.id_user}/activity`])
                    location.reload();

                })

                .catch(err => console.log(err));
            } else {
                this.errorSent = "As passwords não coincidem."
            }
            } else {
                this.errorSent = "O tipo de utilizador e genéro são campos obrigatórios."
            }
        }

    }

    openEmailRegist() {
        this.emailRegist = 1;
    }

    openConfirmationEmail() {
        this.emailRegist = 2;
    }

    openLogin(){
        this.dialog.dismiss();
        return this.modal.open(LoginComponent);
    }
}
