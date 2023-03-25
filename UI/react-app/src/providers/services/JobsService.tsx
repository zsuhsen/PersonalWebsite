import React, { createContext, useContext } from 'react';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ServiceType } from '../../enums/ServiceType';
import { Job } from '../../models/Job';
import { Result } from '../../models/Result';
import { Service } from './Service';
import { GridHeader, GridOptions, GridRow } from '../../common/Grid/Grid';
import { DateUtility } from '../../Utility';

export class JobService extends Service {
    type: ServiceType = ServiceType.Job;
    url: string = 'https://localhost:7101/Job';

    constructor() {
        console.log('JobService constructor');
        super();
    }

    getJobs(): Observable<Result<Job[]>> {
        return this.get<Job[]>().pipe(first());
    }

    saveJob(job: Job): Observable<Result<Job | number>> {
        if (job.id < 0) {
            return this.update(job).pipe(first());
        }

        return this.create(job).pipe(first());
    }

    removeJob(jobId: number) {
        return this.delete(jobId).pipe(first());
    }

    mapToGridRow(job: Job): GridRow {
        const model = {...job};
  
        model.companyName = job.company?.name;
        model.startDate = DateUtility.formatDateStringForDisplay(model.startDate);
        model.endDate = model.endDate ? DateUtility.formatDateStringForDisplay(model.endDate) : 'Present';

        return {
          id: model.id,
          model: model,
          detail: model.company
        }
    }

    getBaseGridOptions(): GridOptions {
        return {
          title: 'Employment',
          headers: this.getGridHeaders(),
          data: {
            rowKeys: ['companyName', 'title', 'startDate', 'endDate', 'description'],
            rows: []
          }
        };
    }

    private getGridHeaders(): GridHeader[] {
        return [
          {
            label: 'Company'
          },
          {
            label: 'Title'
          },
          {
            label: 'Start Date'
          },
          {
            label: 'End Date'
          },
          {
            label: 'Description'
          }
        ]
      }
}

export const JobServiceContext = createContext(new JobService());