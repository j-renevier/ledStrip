import { useEffect, useRef, useState } from 'preact/hooks';

import useWebSocket from "../hooks/useWebSocket";

import './websocket.css'

const Websocket = ({host, port, root}) => {
  const [isLoading, setIsLoading] = useState(false);
  const responseRef = useRef(null);

  const { state, messages, open, sendMessage, close } = useWebSocket(
    `ws://${host}:${port}/ws`,
    (msg) => {
      console.log('Reçu depuis le serveur :', msg);
    },
    false
  );

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [messages]);


  const handleSubmitSocketMessage = (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    const message = event.target.message.value;
    if(message){
      sendMessage(message);
    }
  
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = (event) => {
    event.preventDefault();

    const message = event.target.message.value;
    if(!message){
      return
    }

    event.target.message.value = '';
  }

  const dateToFrFormat = (date) =>{
    return new Date(date).toLocaleString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <div>
      <h3>Websocket</h3>

      <div className="ws-info">
        <p>{state ==='open' ? '🟢' : state === 'closed' ? '⚫' : '🔴'} {state.toUpperCase()}</p>
        <p>{`ws://${host}:${port}/ws`}</p>
        <button onClick={open}>Ouvrir la connexion</button>
        <button onClick={close} className='outline'>Fermer la connexion</button>
      </div>

      <div>
        <h4>Message</h4>
        <div className="ws-container"> 

          <div className="ws-response" ref={responseRef}>
            <ul>
              {
                messages.map(message => (
                  <li className={`ws-dialog`}>
                    <div>
                      <time datetime={new Date(message.update).toISOString()}>
                        {dateToFrFormat(message.update)}
                      </time>  
                      <span className='level'>
                        {message.level ==='info' ? '🔵': message.level ==='success' ? '🟢': message.level === 'warning' ? '🟡' : message.level === 'error' ? '🔴' : ''}
                      </span>
                    </div>
                    <span className={message.level}>
                      {message.value}
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>

          <form className="ws-message" onSubmit={handleSubmitSocketMessage} onReset={handleReset}>
            <textarea id="message" name="message" rows="5" cols="33" placeholder='health'>
              health
            </textarea>
            <button type="reset" className='outline'>Vider</button>
            <button type="submit" disabled={isLoading || state !=='open'}>Envoyer</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Websocket


