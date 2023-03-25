import React, { useState } from "react";
import { Company, Job } from "../../../models/Job";
import Dropdown, { DropdownOption } from "../../../common/Dropdown/Dropdown";
import { DateUtility } from "../../../Utility";
import { FiChevronDown } from "react-icons/fi";

import './AboutForm.scss';

interface JobFormProps {
    submit: (job: Job) => void;
    companies: Company[];
    job?: Job;
}

const JobForm = (props: JobFormProps) => {
    const [company, setCompany] = useState(props.job?.company);
    const [startDate, setStartDate] = useState(DateUtility.formatDateStringForDateInput(props.job?.startDate));
    const [endDate, setEndDate] = useState(DateUtility.formatDateStringForDateInput(props.job?.endDate));
    const [title, setTitle] = useState(props.job?.title ?? '');
    const [description, setDescription] = useState(props.job?.description ?? '');

    const [companyDropdown, setCompanyDropdown] = useState(false);
    
    const companyOptions: DropdownOption[] = props.companies.map((company) => {
        return {
          desc: company.name,
          value: company.id,
          selected: () => {
            setCompany(company);

            toggleCompanyDropdown();
          }
        };
      });

    const onSubmit = () => {

        const job: Job = {
            id: props.job?.id ?? -1,
            company: company,
            startDate: startDate,
            endDate: endDate,
            title: title,
            description: description
        }

        props.submit(job);
    }

    const toggleCompanyDropdown = () => {
        setCompanyDropdown(!companyDropdown);
    }

    return (
        <form>
            <h3>{props.job ? 'Update Job' : 'Add Job'}</h3>
            <br/>
            <div className="input-container">
                <label>Title:</label>
                <input type={'text'} value={ title } onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div className="input-container">
                <label>Company:</label>
                <Dropdown 
                        trigger={<span onClick={ toggleCompanyDropdown }>{ company?.name ?? 'Select' } <FiChevronDown /></span>}
                        options={companyOptions} openDropdown={companyDropdown}/>
            </div>
            <div className="input-container">
                <label>Start Date:</label>
                <input type={ 'date' } value={ startDate } onChange={ (event) => setStartDate(event.target.value) }></input>
            </div>
            <div className="input-container">
                <label>End Date:</label>
                <input type={ 'date' } value={ endDate } onChange={ (event) => setEndDate(event.target.value) }></input>
            </div>
            <div className="input-container">
                <label>Description:</label>
                <input type={ 'text' } value={ description } onChange={ (event) => setDescription(event.target.value) }></input>
            </div>
            <hr />
            <div className="submit-container">
                <button type={'button'} onClick={ onSubmit }>{props.job ? 'Update' : 'Add'}</button>
            </div>
        </form>
    )

}

export default JobForm;
