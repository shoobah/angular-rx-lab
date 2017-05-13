import { transition } from '@angular/core/src/animation/dsl';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  num = 0;

  getData(set) {
    let ret = [];
    switch (set) {
      case 0: ret = [
        ['data1', 0, 200, 140, 80, 180, 320, 46],
        ['data2', 0, 10, 30, 90, 180, 360, 720],
        ['data3', 0, 50, 180, 500, 180, 50, 0],
      ];
        break;
      case 1: ret = [
        ['data1', 0, 230, 400, 480, 180, 20, 146],
        ['data2', 0, 430, 300, 9, 380, 360, 70],
        ['data3', 0, 250, 18, 520, 10, 500, 220],
      ];
        break;
      case 2: ret = [
        ['data1', 0, 230, 400, 480, 180, 20, 146],
        ['data2', 0, 430, 300, 9, 380, 360, 70],
        ['data3', 0, 250, 18, 520, 10, 500, 220],
      ];
        break;
      case 3: ret = [
        ['data1', 105, 950, 562, 711, 774, 245, 33],
        ['data2', 249, 548, 606, 273, 999, 820, 535],
        ['data3', 251, 792, 237, 207, 87, 988, 598],
      ];
        break;
    }
    return ret;
  }

  displayChart() {
    const chart = c3.generate({
      bindto: '#myChart',
      transition: {
        duration: 300
      },
      data: {
        columns: this.getData(1),
        type: 'spline'
      }
    });

    setInterval(() => {
      this.num = Math.floor(Math.random() * 4);
      chart.load({
        columns: this.getData(this.num)
      });
    }, 2000);

  }

  ngOnInit() {
    this.displayChart();
  }

}
