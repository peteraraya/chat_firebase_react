import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatProvider";
import Agregar from "./Agregar";

const Chat = () => {
  const { mensajes, usuario } = useContext(ChatContext);
  const refZonaChat = useRef(null);

  useEffect(() => {
      console.log(refZonaChat);
      // nuestro scroll top va tener la misma altura que nuestro scroll
      refZonaChat.current.scrollTop =  refZonaChat.current.scrollHeight;
  }, [mensajes])

  return (
    <div
        className="mt-3 px-2"
        style={{
                height: '75vh',
                overflowY: 'scroll'
            }}
        ref={refZonaChat}
    >
      {
        mensajes.map((item, index) =>(
        usuario.uid === item.uid ? (
            <div className="d-flex justify-content-end mb-2" key={index}>
                <span className="badge badge-pill badge-primary p-2">
                {item.texto}
                </span>
            </div>
            ) : (
            <div className="d-flex justify-content-start mb-2" key={index}>
                <span className="badge badge-pill badge-secondary p-2">
                {item.texto}
                </span>
            </div>
            )
        ))
      
      }

      <Agregar />
    </div>
  );
};

export default Chat;
