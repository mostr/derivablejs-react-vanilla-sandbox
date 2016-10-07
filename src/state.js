import {atom} from 'derivable';

let emailsById = atom({});

let emailsAsList = emailsById.derive((emails) => {
  console.log('Deriving emails as array');
  return Object.keys(emails).map(k => emails[k]);
});

function loadEmails() {
  wait(1000).then(_ => {
    emailsById.set({
      1: {id: 1, subject: 'DerivableJS newsletter', read: false, content: 'What is this derivable-react thing?'},
      2: {id: 2, subject: 'GitHub Password reset', read: true, content: 'Password reset for GH'},
      3: {id: 3, subject: 'Requirements change', read: false, content: 'Should be done ASAP'}
    });
  });
}

function markAsRead(id) {
  let found = emailsById.get()[id];
  if (!found) return;
  let read = {[id]: {...found, read: true}};
  emailsById.set({...emailsById.get(), ...read});
}

function wait(ms) {
  return new Promise((res, _) => setTimeout(() => res(), ms));
}

export let actions = {loadEmails, markAsRead};
export let state = {emailsById, emailsAsList};

