import React from 'react';

export interface JobView {
    company: string;
    title?: string;
    startDate: string;
    endDate?: string;
    description?: string; // max length 200
}

export interface Job {
    id: number;
    company?: Company;
    startDate: string;
    endDate?: string;
    title?: string;
    description?: string; // max length 200
}

export interface Company {
    id: number;
    name: string; // max length 50
    city: string; // max length 50
    state: string; // max length 2
}