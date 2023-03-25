import React, { useState } from "react";
import { Company } from "../../../models/Job";

import './AboutForm.scss';

interface CompanyFormProps {
    submit: (company: Company) => void;
    company?: Company;
}

const CompanyForm = (props: CompanyFormProps) => {
    const [name, setName] = useState(props.company?.name ?? '');
    const [city, setCity] = useState(props.company?.city ?? '');
    const [state, setState] = useState(props.company?.state ?? '');

    const onSubmit = () => {
        const company: Company = {
            id: props.company?.id ?? -1,
            name: name,
            city: city,
            state: state
        }

        props.submit(company);
    }
    
    return (
        <form>
            <h3>{ props.company ? 'Update Company' : 'Add Company' }</h3>
            <br/>
            <div className="input-container">
                <label>Name:</label>
                <input type={ 'text' } value={ name } onChange={ (event) => setName(event.target.value) }></input>
            </div>
            <div className="input-container">
                <label>City:</label>
                <input type={ 'text' } value={ city } onChange={ (event) => setCity(event.target.value) }></input>
            </div>
            <div className="input-container">
                <label>State:</label>
                <input type={ 'text' } value={ state } onChange={ (event) => setState(event.target.value) }></input>
            </div>
            <hr />
            <div className="submit-container">
                <button type={'button'} onClick={ onSubmit.bind(this) }>{ props.company ? 'Update' : 'Add' }</button>
            </div>
        </form>
    )

}

export default CompanyForm;