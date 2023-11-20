import React from 'react';

export default function SimpleWeb(){
    return(
        <div style={{backgroundColor:'lightblue',color:'darkblue',padding:'10px',border:'1px solid blue',borderRadius:'5px'}}>
            <h1 style={{color:'green'}}>Inline styles in JSX Example</h1>
            <p style={{color:'darkblue',fontSize:'16px'}}>This is a paragraph with inline styles applied</p>
        </div>
    )
}