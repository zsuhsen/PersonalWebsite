import React, { useContext } from 'react';
import { CompanyService, CompanyServiceContext } from './services/CompanyService';
import { JobService, JobServiceContext } from './services/JobsService';

export interface ComponentProviders {
    jobSvc: JobService;
    companySvc: CompanyService;
}

export interface ComponentProviderProps {
    initProviders?: (providers: ComponentProviders) => void;
    children: any
}

export function ComponentProvider(props: ComponentProviderProps) {
    const providers: ComponentProviders = {
        jobSvc: useContext(JobServiceContext),
        companySvc: useContext(CompanyServiceContext)
    };

    if (props.initProviders) {
        props.initProviders(providers);
    }

    return (
        <div>
            { props.children }
        </div>
    )
}

export interface ComponentBaseProps {
    providers?: ComponentProviders;
}

export abstract class ComponentBase<Props extends ComponentBaseProps> extends React.Component<Props> {
    private providers: ComponentProviders;

    abstract init(): void;

    constructor(props: Props) {
        super(props);

        if (props.providers) {
            this.setProviders(props.providers);
        } else {
            console.warn('Providers NOT Initialized.')
        }
    }
  
    get jobSvc(): JobService {
        return this.providers?.jobSvc;
    }

    get companySvc(): CompanyService {
        return this.providers?.companySvc;
    }

    get isLoaded(): boolean {
        return !!this.providers;
    }

    setProviders(providers: ComponentProviders) {
        this.providers = providers;
    }
  }