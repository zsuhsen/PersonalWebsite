import React from 'react';

export class Utility {

    /**
     * Log message - dont know if i want to use this yet.
     * @param message 
     */
    public static Log(message: string) {
        console.log(message)
    }
}

export class DateUtility {

    /**
     * Chrome expects date as yyyy-mm-dd
     * @param dateString 
     * @returns 
     */
    public static formatDateStringForDateInput(dateString: string | undefined) {
        if (!dateString) {
            return '';
        }

        const date = new Date(dateString);

        return date.getFullYear() + '-' + DateUtility.addZero(date.getMonth() + 1) + '-' + DateUtility.addZero(date.getDate());
    }

    /**
     * 
     * @param dateString 
     * @returns 
     */
    public static formatDateStringForDisplay(dateString: string | undefined): string {
        if (!dateString) {
            return '';
        }

        const date = new Date(dateString);
    
        return (date.getDay()) + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear());
    }

    private static addZero(num: number): string {
        if (num / 10 < 1) {
            return '0' + num;
        }

        return '' + num;
    }
}