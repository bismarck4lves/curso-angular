import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CEPAbstract } from './CepAbstract';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      complement: '',
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cep: ['6042608', Validators.required],
      responsibleList: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addressForm.valueChanges.subscribe((data) => {
      console.log(data);
    });
    this.addressForm.get('cep')?.valueChanges.subscribe((cep) => {
      this.handleFetchAddressInfo(cep);
    });
  }

  handleFetchAddressInfo(cep: string) {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((res) => {
          this.handleAutoCompleteForm(new CEPAbstract(res));
        });
    }
  }

  handleAutoCompleteForm(val: any) {
    this.addressForm.patchValue(val);
  }

  removeItem(index: number) {
    this.responsibleForm.removeAt(index);
  }
  
  addResponsibleRow() {
    const newItem = this.fb.group({
      name: '',
      email: ['', Validators.email],
    });
    this.responsibleForm.push(newItem);
  }

  onSubmit() {
    console.log(this.addressForm.value, this.addressForm.valid);
  }

  get responsibleForm(): any {
    return this.addressForm.controls['responsibleList'] as FormGroup;
  }
}
