import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: any;
  constructor() {

    axios.get('https://api.xor.cl/sismo/recent?')
    .then(response => {
      this.data = response.data;
      console.log(response.data);
    })
      .catch(error => {
        console.log(error);
      });
  }

}
