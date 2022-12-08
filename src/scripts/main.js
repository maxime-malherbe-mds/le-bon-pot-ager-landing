
// Get the os if the user is using android or ios, else, show the android button by default
const ua = navigator.userAgent.toLowerCase();
const isAndroid = ua.indexOf('android') > -1
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

if (isIOS) {
  document.getElementById('btn-android').style.display = 'none'
  document.getElementById('btn-ios').style.display = 'initial'
} else {
  document.getElementById('btn-android').style.display = 'initial'
  document.getElementById('btn-ios').style.display = 'none'
}
