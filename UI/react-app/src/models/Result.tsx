import React from 'react';

export interface Result<T> {
    data: T;
    success: boolean;
    errors?: string[]; 
}