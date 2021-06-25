import React from 'react';

import DeleteCliente from './DeleteCliente'
import GetCliente from './GetCliente'
import GetClientePorNome from './GetClientePorNome'
import PatchCliente from './PatchCliente'
import PostCliente from './PostCliente'



function Cliente () {

    return (
        <div>
            <GetCliente />
            <GetClientePorNome />
            <PostCliente />
            <PatchCliente />
            <DeleteCliente />
        </div>
    );
}

export default Cliente;