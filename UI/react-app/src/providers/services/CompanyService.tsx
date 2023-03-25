import React, { createContext } from 'react';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ServiceType } from '../../enums/ServiceType';
import { Company } from '../../models/Job';
import { Result } from '../../models/Result';
import { Service } from './Service';

export class CompanyService extends Service {
    type: ServiceType = ServiceType.Company;
    url: string = 'https://localhost:7101/Company';

    constructor() {
        console.log('CompanyService constructor');
        super();
    }

    getCompanies(): Observable<Result<Company[]>> {
        return this.get<Company[]>().pipe(first());
    }

    saveCompany(company: Company): Observable<Result<Company | number>> {
        if (company.id < 0) {
            return this.update(company).pipe(first());
        }

        return this.create(company).pipe(first());
    }

    removeCompany(companyId: number) {
        return this.delete(companyId).pipe(first());
    }
}

export const CompanyServiceContext = createContext(new CompanyService());
