function filterPlaylist(temp) {
    if (temp > 32.0) {
        playlistId = "4UvlO8zrSfNhncnU3WQBgj";
    } else if (temp >= 22.0) {
        playlistId = "37i9dQZF1DX6aTaZa0K6VA";
    } else if (temp >= 10.0) {
        playlistId = "37i9dQZF1DWXRqgorJj26U";
    } else {
        playlistId = "37i9dQZF1DWWEJlAGA9gs0";
    }
    return playlistId;
}

module.exports = filterPlaylist;