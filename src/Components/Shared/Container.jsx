import React from 'react';

const Container = ({children}) => {
    return (
        <div className=' w-11/12 mx-auto xl:px-10 md:px-10 sm:px-2 px-4'>
            {children}
        </div>
    );
};

export default Container;