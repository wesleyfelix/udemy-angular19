import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { Itemlista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = '';
  lista: Itemlista[] = [];

  adicionarItem() {
    let itemLista = new Itemlista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
    this.item = '';
    console.table(this.lista);
  }

  riscarItem(itemLista: Itemlista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}
