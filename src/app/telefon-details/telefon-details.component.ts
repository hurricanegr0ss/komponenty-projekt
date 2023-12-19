import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Telefon } from '../model/telefon';

@Component({
  selector: 'app-telefon-details',
  templateUrl: './telefon-details.component.html',
  styleUrls: ['./telefon-details.component.css']
})
export class TelefonDetailsComponent implements OnInit {
  telefon: Telefon;

  constructor(private route: ActivatedRoute, private crudService: CrudService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadTelefonDetails(id);
      }
    });
  }

  private loadTelefonDetails(id: number): void {
    this.crudService.getTelefonById(id).subscribe(telefon => {
      this.telefon = telefon;
    });
  }
}
