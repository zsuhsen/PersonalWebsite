import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import './Grid.scss';

export interface GridTransaction<T> {
    add: T[];
    update: T[];
    delete: number[];
}

export interface GridHeader {
    label: string;
    tooltip?: string;
}

export interface GridRow {
    id: number;
    model: any;
    detail: any;
}

export interface GridData {
    rows: GridRow[];
    rowKeys: string[];
}

export interface GridOptions {
    title: string;
    headers: GridHeader[];
    data: GridData;
}

interface GridProps {
    gridOptions: GridOptions;
    saveRow: (row: GridRow) => void;
    removeRow: (row: GridRow) => void
}

interface GridState {

}

class Grid extends React.Component<GridProps, GridState> {
    isAddUpdateOverlayOpen: boolean = false;

    constructor(props: GridProps) {
        super(props);
        this.validateGridOptions();
    }

    private get gridOptions() {
        return this.props.gridOptions;
    }

    private get rows() {
        return this.gridOptions.data?.rows;
    }

    private get rowKeys() {
        return this.gridOptions.data?.rowKeys;
    }

    private get removeRow() {
        return this.props.removeRow;
    }

    private get saveRow() {
        return this.props.saveRow;
    }

    render() {
        return this.gridOptions && (
            <div className="grid">
                <h3>{ this.gridOptions.title}</h3>
                <table>
                    <thead>
                        <tr className='row-header'>
                        {
                            this.gridOptions.headers.map((header, index) => <th key={index} className='cell'>{header.label}</th>)
                        }
                        <th key={'delete'}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.rows?.length === 0 || this.rowKeys?.length === 0 ? 
                                <tr><td>No Data</td></tr> : 
                                this.rows.map((row, i) => <tr key={i}>{
                                    this.rowKeys?.map((key, j) => <td key={j} className='cell'>{row.model[key]}</td>)
                                }<td key={'delete-' + row.id}>
                                    <span onClick={() => this.saveRow(row)}><FiEdit /></span>
                                    <span onClick={() => this.removeRow(row)}><FiTrash2 /></span>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    private validateGridOptions() {
        if (!this.gridOptions) {
            console.error('GridOptions is not defined.');
            return;
        }

        if (!this.rowKeys) {
            console.error('No RowKeys Defined.');
            return;
        }
    }
}

export default Grid;