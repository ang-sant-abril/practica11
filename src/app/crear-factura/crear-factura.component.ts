import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFactura: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formFactura = new FormGroup({
      cliente: new FormControl('', [Validators.required, Validators.minLength(4)]),
      cif: new FormControl(''),
      fecha: new FormControl((new Date()).toISOString().substring(0,10))
    })
    console.log(this.formFactura);
  }

}
