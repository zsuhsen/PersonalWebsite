import React from 'react';
import { map } from 'rxjs/operators';
import Grid, { GridData, GridHeader, GridOptions, GridRow } from '../../common/Grid/Grid';
import { Job, JobView } from '../../models/Job';

import { JobService } from '../../services/JobsService';

import './About.css';

class About extends React.Component {
  private jobSvc: JobService = new JobService();

  private gridOptions: GridOptions;

  constructor(props: any) {
    super(props);

    this.init();
  }

  init(): void {
    this.initGridOptions();
    this.getJobsData();
  }

  render(): React.ReactNode {
    return (
      <div className='container'>
        <h2>About</h2>
        <hr/>
        <Grid gridOptions={this.gridOptions}></Grid>
      </div>
    );
  }

  private initGridOptions(): void {
    this.gridOptions = {
      title: 'Employment',
      headers: this.getHeaders(),
      data: this.getBaseData()
    };
  }

  private getJobsData(): void {
    const observer = {
      next: (jobs: Job[]) => {
        const rows: GridRow[] = jobs.map(job => {
          const jobView: JobView = {
            company: job.company?.name ?? 'unknown',
            title: job.title,
            startDate: job.startDate ? this.formatDateString(job.startDate) : '',
            endDate: job.endDate ? this.formatDateString(job.endDate) : '',
            description: job.description ?? ''
          };
  
          return {
            row: jobView,
            detail: job.company
          }
        });
  
        this.gridOptions.data.rows = rows;
      },
      error: () => {},
      complete: () => this.forceUpdate()
    };

    this.jobSvc.getJobs().pipe(map(results => results.data)).subscribe(observer);
  }

  private getBaseData(): GridData {
    return {
      rowKeys: ['company', 'title', 'startDate', 'endDate', 'description'],
      rows: []
    }
  }

  private getHeaders(): GridHeader[] {
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

  private formatDateString(dateString: string): string {
    const date = new Date(dateString);

    return (date.getDay()) + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear());
  }
}

export default About; 

