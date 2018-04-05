<<<<<<< HEAD
var playlist = {key:'value'
=======
var playlist = {key:value
>>>>>>> 4bf0a2941167c82d4fefdf29e4ad02041175ccba
}

 
function updatePlaylist (obj, key, value) {
  obj[key]=value
return obj
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName
  return {}
}