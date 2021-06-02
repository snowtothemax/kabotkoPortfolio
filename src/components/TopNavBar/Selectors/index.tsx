import '../TopNavBar.css';

import React from 'react';
import { Link } from 'react-router-dom';

interface SelectorState {

}

interface SelectorProps {
    text: string;
    onClick: () => void;
    selected: boolean;
    to: string;
    mobile?: boolean;
}

export default class Selector extends React.Component<SelectorProps, SelectorState>{
    constructor(props: SelectorProps) {
        super(props);

        this.state = {}
    }

    render() {
        const { text, to, selected, onClick, mobile } = this.props;
        return (
            <div className="col-md-1 selector" style={selected ? { opacity: 1 } : undefined}>
                <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }} onClick={onClick}>
                    <p style={{ fontSize: 20, fontWeight: 'bold', cursor: 'pointer', paddingTop: 6, color: 'white' }}>
                        {text}
                    </p>
                </Link>
            </div>
        );
    }
}