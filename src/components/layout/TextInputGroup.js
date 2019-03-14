import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error

}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                name={name}  
                
                /*classname va prendre en premier les classes que nous voulons appliquer
                - deuxième paramètre va être un objet qui va avoir le nom de classe que 
                nous voulons is-invalid dans ce cas*/
                className={classnames('form-control form-control-lg', 
                {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                value= {value}
                onChange= {onChange}            
            /> 
            {/*invalid-feedback est lancé si is-invalid est true*/}
            {
                error && <div className="invalid-feedback">
                {
                    error
                }</div>
            }
                           
        </div>      
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}
export default TextInputGroup;