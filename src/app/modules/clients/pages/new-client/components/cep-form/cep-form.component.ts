import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CEPAbstract } from '../../CepAbstract';
import { NewClientService } from '../../services/new-client.service';
import { PostalCodeService } from '../../../../../../services/postalCode/postal-code.service';

@Component({
  selector: 'app-cep-form',
  templateUrl: './cep-form.component.html',
  styleUrls: ['./cep-form.component.scss'],
})
export class CepFormComponent implements OnInit {
  addressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newClientService: NewClientService,
    private postalCodeService: PostalCodeService
  ) {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      complement: '',
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cep: ['6042608', Validators.required],
    });
  }

  ngOnInit(): void {
    this.addressForm.valueChanges.subscribe((data) => {
      this.newClientService.addAddress(data);
    });
    this.addressForm.get('cep')?.valueChanges.subscribe((cep) => {
      this.handleFetchAddressInfo(cep);
    });
  }

  handleFetchAddressInfo(cep: string) {
    if (cep.length === 8) {
      // this.postalCodeService.handleFetchPostalCodeObj(cep).then((res: any)=>{
      //   this.handleAutoCompleteForm(new CEPAbstract(res));
      // })

      // this.postalCodeService
      //   .handleFetchPostalCodeObserver(cep)
      //   .subscribe((res) => {
      //     this.handleAutoCompleteForm(new CEPAbstract(res));
      //   });

      this.postalCodeService
        .handleFetchPostalCodeOtherOption(cep)
        .then((res: any) => {
          this.handleAutoCompleteForm(new CEPAbstract(res));
        });
    }
  }

  handleAutoCompleteForm(val: any) {
    this.addressForm.patchValue(val);
  }

  onSubmit() {
    console.log(this.addressForm.value, this.addressForm.valid);
  }
}
