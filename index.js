// Import stylesheets
import "./style.css"

// Body element
const body = document.getElementById('body')

// Button elements
const btnSend = document.getElementById("btnSend")
const btnClose = document.getElementById("btnClose")
const btnShare = document.getElementById("btnShare")
const btnLogIn = document.getElementById("btnLogIn")
const btnLogOut = document.getElementById("btnLogOut")
const btnScanCode = document.getElementById("btnScanCode")
const btnOpenWindow = document.getElementById("btnOpenWindow")

// Profile elements
const email = document.getElementById("email")
const userId = document.getElementById("userId")
const pictureUrl = document.getElementById("pictureUrl")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")

// QR element
const code = document.getElementById("code")
const friendShip = document.getElementById("friendShip")

async function main() {

  // Initialize LIFF app)
  
await liff.init({ liffId: "1655964944-PAbZ27ev" })
  
  // Try a LIFF function Check open OS
  
//switch (liff.getOS()) {
//  case "android": body.style.backgroundColor = "#d1f5d3"; break
 // case "ios": body.style.backgroundColor = "#eeeeee"; break 
 // case "web": body.style.backgroundColor = "#eeefff"; break
 //}

// call  function get user profile 
 getUserProfile() // move
 

  btnShare.style.display = "block"
  btnSend.style.display = "block"
  btnScanCode.style.display = "block"
  btnOpenWindow.style.display = "block"



  btnShare.onclick = () => {
  shareMsg()
   }

  btnSend.onclick = () => {
  sendMsg()
  }
  
  btnScanCode.onclick = () => {
  scanCode()
  }

  btnOpenWindow.onclick = () => {
    liff.openWindow({
      url: window.location.href,
      external: true
    })
  }
 

}
main()




async function getUserProfile() {
  const profile = await liff.getProfile()
  pictureUrl.src = profile.pictureUrl
  userId.innerHTML = "<b>userId:</b> " + profile.userId
  statusMessage.innerHTML = "<b>statusMessage:</b> " + profile.statusMessage
  displayName.innerHTML = "<b>displayName:</b> " + profile.displayName

  
  // add show  email 
  email.innerHTML = "<b>email:</b> " + liff.getDecodedIDToken().email

}

async function sendMsg() {

 if (liff.getContext().type !== "none" && liff.getContext().type !== "external") {
    await liff.sendMessages([
      {
        "type": "text",
        "text": "test message "
      }
    ])
    alert(" test send message")
  }

}

async function shareMsg() {
  await liff.shareTargetPicker([
    {
      type: "image",
      originalContentUrl: "https://d.line-scdn.net/stf/line-lp/2016_en_02.jpg",
      previewImageUrl: "https://d.line-scdn.net/stf/line-lp/2016_en_02.jpg"
    }
  ])
}

async function scanCode() {
  const result = await liff.scanCode()
  code.innerHTML = "<b>Code: </b>" + result.value
}

