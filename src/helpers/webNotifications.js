export function register() {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');

  }

}

export function showAlertConfirm() {

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

      var notes = [];
          notes[] = 'Go make yourself a drink';
          notes[] = 'Good job go stretch your legs';
          notes[] = 'Time for some food';
          notes[] = 'Hey look a window it nicer than your sreen go look.';



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
