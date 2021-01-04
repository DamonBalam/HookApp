import React, { memo } from 'react';

// o React.memo
export const Small = memo(({ value }) => {
    console.log( 'Me volvi a llamar :(' );
    return (
        <small>{value}</small>
    );
});
