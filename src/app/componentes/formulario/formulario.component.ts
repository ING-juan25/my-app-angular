import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  listTarjetas: any[] = [
    { titular: 'Juan Cárcamo', numeroTarjetas: '10024569887', fechaExpiracion: '25/06', cvv: '1235'},
    { titular: 'Odalis Tovar', numeroTarjetas: '10159887', fechaExpiracion: '20/07', cvv: '1545'},
  ];

 

  formulario: FormGroup

  constructor(private fb: FormBuilder) { 
    this.formulario=this.fb.group({
      cedula:["",Validators.required],
      nombres:["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  enviarDatos(){
    
    const temporal: any={
      cedula:this.formulario.get("cedula")?.value,
      nombres: this.formulario.get("nombres")?.value
    }
    
    this.listTarjetas.push(temporal)   
    
    this.formulario.reset()
  }

  eliminarDatos(item:number){
    this.listTarjetas.splice(item,1)
  }

}
