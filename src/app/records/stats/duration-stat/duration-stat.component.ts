import {Component, OnInit, ViewChild} from '@angular/core';
import {Record} from '../../record.model';
import {RecordService} from '../../record.service';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-duration-stat',
  templateUrl: './duration-stat.component.html',
  styleUrls: ['./duration-stat.component.css']
})
export class DurationStatComponent implements OnInit {

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
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {data: [0, 0, 0, 0], label: 'Temps total'}
  ];

  constructor(private recordService: RecordService) {
  }

  ngOnInit() {
    this.recordService.fireBaseObservable.subscribe(recs => {
      this.records = recs;
      const temps = [0, 0, 0, 0];

      const obj = this;
      this.records.forEach(function (record) {
        const type = record.type;
        if (type === obj.recordService.selectOptions[0]) {
          temps[0] += record.duration;
        } else if (type === obj.recordService.selectOptions[1]) {
          temps[1] += record.duration;
        } else if (type === obj.recordService.selectOptions[2]) {
          temps[2] += record.duration;
        } else if (type === obj.recordService.selectOptions[3]) {
          temps[3] += record.duration;
        }
      });
      this.barChartData[0].data = temps;
      this.chart.ngOnChanges({});
    });
  }

  // total des temps de record pas type
}
