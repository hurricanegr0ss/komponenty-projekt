import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Telefon } from '../model/telefon';

@Component({
  selector: 'app-telefony',
  templateUrl: './telefony.component.html',
  styleUrls: ['./telefony.component.css']
})
export class TelefonyComponent implements OnInit {

  telefony: Telefon[];
  telefonForm: FormGroup;
  editingTelefon: Telefon | null = null;
  dostepneProducenci: string[] = ['Producenci1', 'Producenci2', 'Producenci3'];
  dostepneSystemy: string[] = ['System1', 'System2', 'System3'];
  dostepneImei: string[] = [];

  constructor(private crudService: CrudService, private formBuilder: FormBuilder) {
    this.telefonForm = this.formBuilder.group({
      producent: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z][a-zA-Z]*$/)]],
      model: ['', [Validators.required,Validators.minLength(2)]],
      rok_produkcji: ['', [Validators.required, Validators.max(new Date().getFullYear())]],
      imei: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
      system: ['', [Validators.required]],
      cale_ekranu: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      ram: ['', [Validators.required, Validators.min(0), Validators.max(999)]],
    });
  }

  ngOnInit(): void {
    this.loadTelefony();
  }

  loadTelefony() {
    this.crudService.getAllTelefony().subscribe(data => {
      this.telefony = data;
    });
  }

  onSubmit() {
    if (this.telefonForm.valid) {
      const newTelefon: Telefon = this.telefonForm.value;

      if (this.editingTelefon) {
        newTelefon.id = this.editingTelefon.id;
        this.crudService.editTelefon(newTelefon).subscribe(() => {
          this.editingTelefon = null;
          this.loadTelefony();
          this.telefonForm.reset();
        });
      } else {
        this.crudService.addTelefon(newTelefon).subscribe(() => {
          this.loadTelefony();
          this.telefonForm.reset();
        });
      }
    }
  }


  onDelete(telefon: Telefon) {
    this.crudService.deleteTelefon(telefon.id).subscribe(() => {
      this.loadTelefony();
    });
  }

  onEdit(telefon: Telefon) {
    this.editingTelefon = telefon;
    this.telefonForm.patchValue({
      producent: telefon.producent,
      model: telefon.model,
      rok_produkcji: telefon.rok_produkcji,
      imei: telefon.imei,
      system: telefon.system,
      cale_ekranu: telefon.cale_ekranu,
      ram: telefon.ram,
    });
  }
}
