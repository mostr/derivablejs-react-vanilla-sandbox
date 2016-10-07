import React from 'react';
import ReactDOM from 'react-dom';
import {reactive} from 'react-derivable';

import {state, actions} from './state';

let App = reactive((props) => {
  return <EmailsList emails={state.emailsAsList.get()} onEmailClick={actions.markAsRead} onLoadClick={actions.loadEmails}/>
});


let EmailsList = ({emails, onEmailClick, onLoadClick}) => {
  if(!emails.length) {
    return <p>No emails <button onClick={onLoadClick}>Load'em</button> </p>
  }
  return (
    <ul>
      {emails.map(email => <EmailItem key={email.id} email={email} onClick={onEmailClick}/>)}
    </ul>   
  );
};


let EmailItem = ({email, onClick}) => {
  return <li onClick={() => onClick(email.id)}><EmailStatus read={email.read}/> {email.subject}</li>;
};


let EmailStatus = ({read}) => {
  return read ? <span>&#10003;</span> : null;
};


export function runReact() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
