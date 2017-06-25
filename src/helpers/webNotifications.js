export function register() {

  if (!("Notification" in window)) {
    return;
  }

  if (Notification.permission !== "denied") {

    Notification.requestPermission(function(permission){
      console.log(permission)
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });

  }

}
