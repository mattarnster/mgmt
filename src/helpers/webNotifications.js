export function register() {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
    showAlertConfirm();
  }

}

export function showAlertConfirm() {

  if(Notification.permission === 'granted'){
    return;
  }

  Notification.requestPermission(function(result) {

    if (result === 'granted') {

      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('You\'re all set', {
          body: 'We\'ll let you know what it\'s time for break',
          icon: '/512.png',
          vibrate: [200],
        });
      });
    }

  });

}

export function showReminderNotification() {

  Notification.requestPermission(function(result) {

    if (result === 'granted') {

      var notes = ['Go make yourself a drink','Good job go stretch your legs','Time for some food','Hey look a window it\'s nicer than your srceen go look.']

      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification(notes[Math.floor(Math.random() * 4)], {
          body: 'Don\'t forget to pause the timer',
          icon: '/MGMT-Break.png',
          vibrate: [200],
        });
      });

    }

  })
}
