import {state, actions} from './state';

function bindClicks() {
  document.querySelector('#load').addEventListener('click', () => {
    actions.loadEmails();
  });

  document.querySelector('#emails').addEventListener('click', (e) => {
    let target = e.target;
    actions.markAsRead(parseInt(target.getAttribute('id'), 10));
  });
}

function renderEmails() {
  let emailsEl = document.querySelector('#emails');
  state.emailsAsList.react((emails) => {
    let items = emails.map(listItem).join('');
    emailsEl.innerHTML = `<ul>${items}</ul>`;
  });
}

function listItem(email) {
  return `<li id="${email.id}">${email.read ? '<span>&#10003;</span>' : ''} ${email.subject}</li>`;
}

export function runVanilla() {
  renderEmails();
  bindClicks();
};