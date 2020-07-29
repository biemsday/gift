document.addEventListener("DOMContentLoaded", mobile_checker())

function mobile_checker() {
    if (navigator.userAgent.match(/Android/i)) {
        document.location.replace("intent://www.instagram.com/basova.yana/#Intent;package=com.instagram.android;scheme=https;end")
    } else if (navigator.userAgent.match(/iPhone/i)) {
        document.location.replace("instagram://user?username=basova.yana")
    } else if (navigator.userAgent.match(/Mac OS/i)) {
        document.location.replace("https://www.instagram.com/basova.yana/")
    }
    document.removeEventListener("DOMContentLoaded", mobile_checker())
}