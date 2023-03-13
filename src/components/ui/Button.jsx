import React from 'react';

function Button({ text, onClick, isUploading }) {
    return (
        <button disabled={isUploading} className='bg-brand text-white rounded-sm hover:brightness-110 py-2 px-4' onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;