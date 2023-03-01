import { Component, OnInit,ViewChild} from '@angular/core';
import {Chart,registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component{
  @ViewChild('stacked') canvasRef: any;
  public chartopt:any
  public barChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];
  ngOnInit() {
    setTimeout(() => {
      this.chartopt = new Chart(this.canvasRef.nativeElement, {
        type: 'bar',
        data: {
          labels: this.barChartLabels,
          datasets: this.barChartData,
        },
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            }
          }
        }
      });
    }, 250);
  }
}