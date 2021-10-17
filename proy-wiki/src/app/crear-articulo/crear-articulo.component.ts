import { Component, OnDestroy, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  formdata:any; 

  constructor(private formBuilder: FormBuilder) { }

  onClickSubmit(data:any) {
    console.log(data);
    if(this.formdata.invalid){
      this.formdata.get('description').markAsTouched();
    }
  }

  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      description: ['', [Validators.required,
        Validators.maxLength(400), Validators.minLength(5)]]
  });
  }
}
