import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Zlecenie } from '../model/zlecenie';
import { Telefon } from '../model/telefon';
import { TelefonyService } from '../service/telefony.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  zlecenia: Zlecenie[];
  zlecenieForm: FormGroup;
  editingZlecenie: Zlecenie | null = null;
  dostepneNazwyZlecen: string[] = ['Nazwa1', 'Nazwa2', 'Nazwa3'];
  dostepneStany: string[] = ['Oddane', 'Nieoddane'];
  opcjaSortowania = 'Data rosnąco';
  dostepneImei: string[] = [];

  constructor(private crudService: CrudService, private telefonyService: TelefonyService, private formBuilder: FormBuilder) {
    this.zlecenieForm = this.formBuilder.group({
      zlecenie_name: ['', Validators.required],
      zlecenie_imei: ['', Validators.required],
      zlecenie_data_oddania: ['', Validators.required],
      zlecenie_stan_zlecenia: ['', Validators.required],
      zlecenie_czy_oplacone: [false]
    });
  }

  ngOnInit(): void {
    this.loadZlecenia();

    this.telefonyService.getDostepneImei().subscribe(dostepneImei => {
      this.dostepneImei = dostepneImei;
    });

    this.crudService.getAllTelefony().subscribe((data: Telefon[]) => {
      this.dostepneImei = data.map(telefon => telefon.imei);
      this.telefonyService.setDostepneImei(this.dostepneImei);
    });
  }


  loadZlecenia() {
    this.crudService.getAllZlecenia().subscribe(data => {
      this.zlecenia = data;
      this.sortZlecenia();
    });
  }

  onSubmit() {
    if (this.zlecenieForm.valid) {
      const newZlecenie: Zlecenie = this.zlecenieForm.value;

      if (this.editingZlecenie) {
        newZlecenie.id = this.editingZlecenie.id;
        this.crudService.editZlecenie(newZlecenie).subscribe(() => {
          this.editingZlecenie = null;
          this.loadZlecenia();
          this.zlecenieForm.reset();
        });
      } else {
        this.crudService.addZlecenie(newZlecenie).subscribe(() => {
          this.loadZlecenia();
          this.zlecenieForm.reset();
        });
      }
    }
  }

  onDelete(zlecenie: Zlecenie) {
    this.crudService.deleteZlecenie(zlecenie.id).subscribe(() => {
      this.loadZlecenia();
    });
  }

  onEdit(zlecenie: Zlecenie) {
    this.editingZlecenie = zlecenie;
    this.zlecenieForm.patchValue({
      zlecenie_name: zlecenie.zlecenie_name,
      zlecenie_imei: zlecenie.zlecenie_imei,
      zlecenie_data_oddania: zlecenie.zlecenie_data_oddania,
      zlecenie_stan_zlecenia: zlecenie.zlecenie_stan_zlecenia,
      zlecenie_czy_oplacone: zlecenie.zlecenie_czy_oplacone
    });
  }

  kierunekSortowania() {
    this.opcjaSortowania = this.opcjaSortowania === 'Data rosnąco' ? 'Data malejąco' : 'Data rosnąco';
    this.sortZlecenia();
  }

  sortZlecenia() {
    if (this.zlecenia && this.opcjaSortowania === 'Data rosnąco') {
      this.zlecenia.sort((a, b) => new Date(a.zlecenie_data_oddania).getTime() - new Date(b.zlecenie_data_oddania).getTime());
    } else if (this.zlecenia && this.opcjaSortowania === 'Data malejąco') {
      this.zlecenia.sort((a, b) => new Date(b.zlecenie_data_oddania).getTime() - new Date(a.zlecenie_data_oddania).getTime());
    }
  }

  czyDeadline(zlecenie: Zlecenie): boolean {
    const dzis = new Date();
    const deadline = new Date(zlecenie.zlecenie_data_oddania);
    const roznica = Math.floor((deadline.getTime() - dzis.getTime()) / (1000 * 60 * 60 * 24));
    return roznica <= 3 && zlecenie.zlecenie_stan_zlecenia === 'Nieoddane';
  }
}
