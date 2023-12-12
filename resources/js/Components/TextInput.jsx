import { forwardRef } from 'react';

export default forwardRef(function TextInput({
    type = 'text',
    className = '',
    placeholder = '',
    ...props
}, ref) {
    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            className={
                'form-control ' +
                className
            }
        />
    );
});
