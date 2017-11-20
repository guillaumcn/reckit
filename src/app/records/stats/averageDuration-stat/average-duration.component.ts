import {Component, OnInit, ViewChild} from '@angular/core';
import {Record} from '../../record.model';
import {RecordService} from '../../record.service';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-average-duration-stat',
  templateUrl: './average-duration.component.html',
  styleUrls: ['./average-duration.component.css']
})
export class AverageDurationComponent implements OnInit {

  records: Record[] = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels = this.recordService.selectOptions.slice();
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [0, 0, 0, 0], label: 'Temps moyen'}
  ];

  constructor(private recordService: RecordService) {
  }

  ngOnInit() {
    this.recordService.fireBaseObservable.subscribe(recs => {
      this.records = recs;
      const temps = [0, 0, 0, 0]; // temps total d'enregistrement par type
      const m = [0, 0, 0, 0]; // moyennes
      const a = [0, 0, 0, 0]; // accumulateurs

      const obj = this;
      this.records.forEach(function (record) {
        const type = record.type;
        if (type === obj.recordService.selectOptions[0]) {
          temps[0] += record.duration;
          a[0]++;
        } else if (type === obj.recordService.selectOptions[1]) {
          temps[1] += record.duration;
          a[1]++;
        } else if (type === obj.recordService.selectOptions[2]) {
          temps[2] += record.duration;
          a[2]++;
        } else if (type === obj.recordService.selectOptions[3]) {
          temps[3] += record.duration;
          a[3]++;
        }
      });

      // pour éviter la division par 0 pour les moyennes
      for (let i = 0; i <= 3; i++) {
        if (a[i] !== 0) {
          m[i] = temps[i] / a[i];
        }
      }

      this.barChartData[0].data = m;
      this.chart.ngOnChanges({});
    });
  }

}
