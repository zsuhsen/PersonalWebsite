import React from 'react';

import './Tooltip.scss';

export interface TooltipStyleOverrides {
    color?: string;
}

interface TooltipProps {
    message: string;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    children: any;
    styleOverrides?: TooltipStyleOverrides
}

interface TooltipState {
    
}

class Tooltip extends React.Component<TooltipProps, TooltipState> {
    private timeout: any;
    private active: boolean;

    showTip(): void {
        this.timeout = setTimeout(() => {
            this.setActive(true);
        }, this.props.delay || 300);
    }

    hideTip(): void {
        clearInterval(this.timeout);
        this.setActive(false);
    }

    private setActive(active: boolean): void {
        this.active = active;

        this.forceUpdate();
    }

    render() {
        return (
            <div className='tooltip-wrapper' onMouseEnter={ this.showTip.bind(this) } onMouseLeave={ this.hideTip.bind(this) } >
                {this.props.children}
                {this.active && (
                    <div className={`tooltip-tip ${this.props.direction || 'bottom'}`} style={{color: this.props.styleOverrides?.color}}>
                        {this.props.message}
                    </div>
                )}
            </div>
        )
    }
}

export default Tooltip;