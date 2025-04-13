import '../TopNavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface SelectorProps {
    text: string;
    onClick: () => void;
    selected: boolean;
    to: string;
    mobile?: boolean;
}

const Selector: React.FC<SelectorProps> = ({ text, to, selected, onClick }) => {
    return (
        <div className="col-md-1 selector" style={selected ? { opacity: 1 } : undefined}>
            <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }} onClick={onClick}>
                <p style={{ fontSize: 20, fontWeight: 'bold', cursor: 'pointer', paddingTop: 6, color: 'white' }}>
                    {text}
                </p>
            </Link>
        </div>
    );
};

export default Selector;