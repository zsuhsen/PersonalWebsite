import React from 'react';
import { map, first } from 'rxjs/operators';
import { ComponentBase, ComponentBaseProps, ComponentProviders } from '../../providers/ComponentProvider';
import Grid, { GridHeader, GridOptions, GridRow } from '../../common/Grid/Grid';
import { Company, Job } from '../../models/Job';

import './About.scss';
import JobForm from './forms/JobForm';
import Overlay from '../../common/Overlay/Overlay';
import CompanyForm from './forms/CompanyForm';

interface DatasetProps<T> {
  overlayOpen?: boolean;
  gridOptions?: GridOptions;
  selected?: T | undefined;
  all?: T[];
}

interface AboutProps extends ComponentBaseProps {

}

class About extends ComponentBase<AboutProps> {
  private jobProps: DatasetProps<Job>;
  private companyProps: DatasetProps<Company>;

  constructor(props: AboutProps) {
    super(props);

    this.init();
  }

  init(): void {
    this.initDatasets();
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className='container'>
          <h2>About</h2>
          <hr/>
            {
              !this.isLoaded ? <div>Loading...</div> :
              <div>
                <Grid gridOptions={ this.jobProps.gridOptions as GridOptions } 
                  saveRow={ this.saveJobRow.bind(this) } 
                  removeRow={ this.removeJobRow.bind(this) }></Grid>
                <button onClick={ () => this.toggleJobOverlay() }>Add Job</button>
                <button onClick={ () => this.toggleCompanyOverlay() }>Add Company</button>
              </div>
            }
        </div>

        <Overlay isOpen={ !!this.companyProps.overlayOpen } onClose={ this.toggleCompanyOverlay.bind(this) }>
          <div>
            <CompanyForm submit={ this.saveCompany.bind(this) }></CompanyForm>
          </div>
        </Overlay>

        <Overlay isOpen={ !!this.jobProps.overlayOpen } onClose={ this.toggleJobOverlay.bind(this) }>
          <div>
            <JobForm job={ this.jobProps.selected } companies={ this.companyProps.all as Company[] } submit={ this.saveJob.bind(this) }/>
          </div>
        </Overlay>
      </div>
    );
  }

  private toggleJobOverlay(isAdd: boolean = true): void {
    this.jobProps.overlayOpen = !this.jobProps.overlayOpen;
    
    if (isAdd) {
      this.jobProps.selected = undefined;
    }

    this.forceUpdate();
  };

  private toggleCompanyOverlay(isAdd: boolean = true): void {
    this.companyProps.overlayOpen = !this.companyProps.overlayOpen;

    if (isAdd) {
      this.companyProps.selected = undefined;
    }

    this.forceUpdate();
  };

  private initDatasets(): void {
    this.jobProps = {
      gridOptions: this.jobSvc.getBaseGridOptions()
    };

    this.companyProps = {};

    this.getJobsData();
    this.getCompanyData();
  }

  private saveCompany(company: Company): void {
    console.log('Add/Update company', company);
  }

  private saveJobRow(row: GridRow): void {
    this.jobProps.selected = row.model;

    this.toggleJobOverlay(false);
  }

  private saveJob(job: Job): void {
    console.log('Add/Update job', job)
  }

  private removeJobRow(row: GridRow): void {
    console.log('Delete row :: ', row);
  }

  private getCompanyData(): void {
    const observer = {
      next: (companies: Company[]) => {
        this.companyProps.all = companies;
      },
      error: () => {},
      complete: () => this.forceUpdate()
    };

    this.companySvc.getCompanies().pipe(first(), map(results => results.data)).subscribe(observer);
  }

  private getJobsData(): void {
    
    const observer = {
      next: (jobs: Job[]) => {
        this.jobProps.all = jobs;

        if (this.jobProps.gridOptions) {
          this.jobProps.gridOptions.data.rows = jobs.map(job => this.jobSvc.mapToGridRow(job));
        }
      },
      error: () => {},
      complete: () => this.forceUpdate()
    };

    this.jobSvc.getJobs().pipe(first(), map(results => results.data)).subscribe(observer);
  }
}

export default About;

