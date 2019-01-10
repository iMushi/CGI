import { Component, OnInit } from '@angular/core';
import { Client, NgxSoapService } from 'ngx-soap';
import { ObtenerVentaFlashVentasJson } from '../../models/response/ObtenerVentaFlashVentasJson';

@Component({
  selector: 'app-flash-ventas',
  templateUrl: './flash-ventas.component.html',
  styleUrls: ['./flash-ventas.component.scss']
})
export class FlashVentasComponent implements OnInit {
  client: Client;

  constructor(private soap: NgxSoapService) {

    this.soap.createClient('http://pruebas-mm.milano-melody.net/WSCGI/WsCGI.WsCGI.svc?singleWsdl').then(
      client => this.client = client
    ).then(
      _ => {
        const body = {
          Tipo: 'TIENDA',
          Nivel: 1,
          Estado: '',
          Director: 0,
          Marca: 0,
          FechaInicial: '01/01/2019',
          FechaFinal: '06/01/2019',
          TCerrada: false,
          Tienda: 0,
          MT: 0,
          vsVenta: 0,
          vsCuota: 0,
          vsUBruta: 0
        };


        this.client.call('ObtenVentaFlashVentasJson', body).subscribe(
          response => {

            const str = 'ObtenVentaFlashVentasJsonResult';

            const {result: {[str]: jsonString}} = response;
            const jsonResponse: Array<ObtenerVentaFlashVentasJson> = JSON.parse(jsonString);


          }
        );
      }
    );

  }

  ngOnInit() {
  }

}
