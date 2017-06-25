export function register() {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }

}

export function showAlertConfirm() {

  Notification.requestPermission(function(result) {

    if (result === 'granted') {

      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('You\'re all set', {
          body: 'We\'ll let you know what it\'s time for break',
        //  icon: 'MGMT-Break.png',
          icon: '512.png',
          vibrate: [200],
        });
      });
    }

  });

}

export function showReminderNotification() {

  Notification.requestPermission(function(result) {

    if (result === 'granted') {

      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Time for a break', {
          body: 'Time for a cuppa buddy.',
          icon: 'MGMT-Break.png',
          vibrate: [200],
        });
      });
    }
  })

}
