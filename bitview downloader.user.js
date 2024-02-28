// ==UserScript==
// @name         BitView Video Downloader
// @namespace    http://bitview.net/
// @version      1
// @description  Downloads bitview videos
// @author       sh0rk
// @match        http://*.bitview.net/*
// @match        https://*.bitview.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function isDependenciesLoaded() {
        return typeof viValues !== 'undefined';
    }
    function init() {
        if (isDependenciesLoaded()) {
            var bvdownloadLink = document.createElement('a');
            bvdownloadLink.innerHTML = 'Download Video';
            bvdownloadLink.href = viValues.src;
            var watchChannelStatsElement = document.getElementById('watch-channel-stats');
            if (watchChannelStatsElement && watchChannelStatsElement.parentNode) {
                watchChannelStatsElement.parentNode.insertBefore(bvdownloadLink, watchChannelStatsElement.nextSibling);
            } else {
                document.body.appendChild(bvdownloadLink);
            }
        } else {
            setTimeout(init, 100);
        }
    }
    window.addEventListener('load', init);
})();
