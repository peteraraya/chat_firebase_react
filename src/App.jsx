import React, { useContext } from 'react';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import { ChatContext } from './context/ChatProvider';

const App = () => {

    const {usuario} = useContext(ChatContext);

    return usuario !== null ? (
        <div>
            <Navbar />
            {
                usuario.estado ? (
                    <Chat />
                ): (
                    <div className="lead text-center mt-5">
                            <h3>Debes Iniciar sesión</h3>
                    </div>
                )
            }
        </div>
    ): (
        <div>Cargando ....</div>
    )
}

export default App
