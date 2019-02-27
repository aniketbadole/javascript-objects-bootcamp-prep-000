var playlist = {
  coldplay: 'yellow', 
  }

playlist['Tom Walker'] = 'Just You and I'
playlist['JP Cooper'] = 'September'

function updatePlaylist(playlist, artistName, songTitle)  {
  playlist[artistName] = songTitle
}