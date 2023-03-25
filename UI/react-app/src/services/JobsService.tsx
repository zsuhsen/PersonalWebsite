import React from 'react';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ServiceType } from '../enums/ServiceType';
import { Job } from '../models/Job';
import { Result } from '../models/Result';
import { Service } from './Service';

export class JobService extends Service {
    type: ServiceType = ServiceType.Job;
    url: string = 'https://localhost:7101/Job';

    getJobs(): Observable<Result<Job[]>> {
        return this.get<Job[]>().pipe(first());
    }
}