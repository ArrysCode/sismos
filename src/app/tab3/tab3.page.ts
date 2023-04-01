import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page implements OnInit{
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
    this.filteredData = this.data.filter((item) => {
      if (item.geo_reference && item.geo_reference.toLowerCase().includes(this.filterValue.toLowerCase())) {
        return true;
      }
      if (item.utc_date && moment(item.utc_date).isSame(this.filterValue, 'day')) {
        return true;
      } 
      if (typeof item.magnitude.value === 'number' && item.magnitude.value === parseFloat(this.filterValue)) {
        return true;
      }
      return false;
    });
  }
  
}

