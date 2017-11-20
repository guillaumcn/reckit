import {Component, OnInit, ViewChild} from '@angular/core';
import {Record} from '../../record.model';
import {RecordService} from '../../record.service';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-number-record-stat',
  templateUrl: './number-record-stat.component.html',
  styleUrls: ['./number-record-stat.component.css']
})
export class NumberRecordStatComponent implements OnInit {

  records: Record[] = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = this.recordService.selectOptions.slice();
  public barChartType = 'doughnut';
  public barChartLegend = true;

  public barChartData = [
    {data: [0, 0, 0, 0], label: 'Récapitulatif'}
  ];

  constructor(private recordService: RecordService) {
  }

  ngOnInit() {
    this.recordService.fireBaseObservable.subscribe(recs => {
      this.records = recs;
      const nbRecord = [0, 0, 0, 0];

      const obj = this;
      this.records.forEach(function (record) {
        const type = record.type;
        if (type === obj.recordService.selectOptions[0]) {
          nbRecord[0]++;
        } else if (type === obj.recordService.selectOptions[1]) {
          nbRecord[1]++;
        } else if (type === obj.recordService.selectOptions[2]) {
          nbRecord[2]++;
        } else if (type === obj.recordService.selectOptions[3]) {
          nbRecord[3]++;
        }
      });
      this.barChartData[0].data = nbRecord;
      this.chart.ngOnChanges({});
    });
  }

}
