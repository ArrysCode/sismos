import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page implements OnInit{
  data: any[] =[];
  filteredData: any[] = [];
  filterValue = '';

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      const response = await axios.get('https://api.xor.cl/sismo/recent?');
      this.data = Object.values(response.data.events);
      console.log(this.data[2]);
      this.filteredData = this.data; // inicialmente, los datos filtrados serán iguales a los datos sin filtrar
    } catch (error) {
      console.error(error);
    }
  }

  filterData() {
    this.filteredData = this.data.filter((item) =>
      (item.geo_reference && item.geo_reference.toLowerCase().includes(this.filterValue.toLowerCase())) ||
      (typeof item.magnitude.value === 'number' && item.magnitude.value >= parseFloat(this.filterValue)) ||
      (item.utc_date instanceof Date && Date.parse(item.utc_date) >= Date.parse(this.filterValue))
    );
  }
  
}


