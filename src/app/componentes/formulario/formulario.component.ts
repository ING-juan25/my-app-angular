import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  listTarjetas: any[] = [
    { titular: 'Juan Cárcamo', numeroTarjeta: '10024569887', fechaExpiracion: '25/06', cvv: '1235'},
    { titular: 'Odalis Tovar', numeroTarjeta: '10159887', fechaExpiracion: '20/07', cvv: '1545'},
  ];

 

  formulario: FormGroup

  constructor(private fb: FormBuilder, 
  private toastr: ToastrService){ 
    this.formulario=this.fb.group({
      titular:["", Validators.required],
      numeroTarjeta:["", [Validators.required, Validators.maxLength(16),Validators.minLength(16)]],
      fechaExpiracion:["", [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv:["",[Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
  }

  enviarDatos(){
    
    const formulario: any={
      titular:this.formulario.get("titular")?.value,
      numeroTarjeta: this.formulario.get("numeroTarjeta")?.value,
      fechaExpiracion:this.formulario.get("fechaExpiracion")?.value,
      cvv:this.formulario.get("cvv")?.value,
    }
    
    this.listTarjetas.push(formulario)
    this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta registrada.');
    this.formulario.reset();
  }

  eliminarDatos(index:number){
    this.listTarjetas.splice(index,1)
    this.toastr.error('La tarjeta fue eliminada con exito!', 'Tarjeta eliminada.');
  }

 

}
