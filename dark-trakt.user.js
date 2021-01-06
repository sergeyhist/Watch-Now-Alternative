// ==UserScript==
// @name        Dark-Trakt
// @namespace   https://github.com/sergeyhist/Trakt.tv-Hist-UserScripts/blob/main/dark-trakt.user.js
// @match       *://trakt.tv/*
// @grant       GM_addStyle
// @version     1.9
// @author      Hist
// @description Dark Theme for Trakt.tv
// @icon        https://github.com/sergeyhist/Trakt.tv-Hist-UserScripts/blob/main/logos/logo.png?raw=true
// @downloadURL https://github.com/sergeyhist/Trakt.tv-Hist-UserScripts/raw/main/dark-trakt.user.js
// @homepageURL https://github.com/sergeyhist/Trakt.tv-Hist-UserScripts
// ==/UserScript==
'use strict';
var darkMode=`
    ul.lists li,
    .quick-icons .metadata .popover .popover-title,
    .quick-icons .actions .popover .popover-title {
    color: #fff!important;
    }

    .actor-tooltip .tooltip-inner {
    background-color: #333;
    color: #fff;
    }

    .actor-tooltip .tooltip-inner .alt {
    color: #ed1c24;
    font-weight: bold;
    }

    #hu-ck-s-t-er-content-page,
    .subnav-wrapper.list-title-wrapper,
    body.show_progress .list-stats-wrapper {
    background: #151515
    }

    .subnav-wrapper .left h2 .right a,
    .popover.with-list h3,
    header#top-nav #header-search #header-search-type a {
    color: #fff
    }

    .shade {
    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 0%, rgba(15,15,15,1) 100%)!important;
    }

    body.apps #apps-icon-wrapper {
    background: -webkit-radial-gradient(center,circle cover,#fff 0%,#000 100%)
    }

    #watch-now-country-select .form-control {
    color: #fff;
    background-color: #000;
    }

    .custom-list .list-info .info .overview blockquote,
    .comment-wrapper .comment blockquote,
    input, button, select, textarea {
    background-color: #333;
    }

    .subnav-wrapper .container .left.with-title h2,
    body.list .subnav-wrapper .comment-wrapper.list, body.watchlist .subnav-wrapper .comment-wrapper.list, body.recommendations .subnav-wrapper .comment-wrapper.list {
    border-bottom: solid 1px #151515;
    }   

    body.main.home .hero-wrapper.light h1, 
    body.main.home .hero-wrapper.light h2, 
    body.main.index .hero-wrapper.light h1, 
    body.main.index .hero-wrapper.light h2, 
    body.apps .hero-wrapper.light h1, 
    body.apps .hero-wrapper.light h2, 
    body.welcome .hero-wrapper.light h1, 
    body.welcome .hero-wrapper.light h2, 
    body.branding .hero-wrapper.light h1, 
    body.branding .hero-wrapper.light h2 {
        color: black;
    }

    #hu-ck-ster-content-page,
    #hu-ck-ster-desk-top-wrapper,
    #hu-ck-ster-mob-ile-wrapper {
    display: none;
    }

    .alert-no-data {
    background-color: #333;
    color: #fff;
    }

    #auth-form-wrapper,
    .checkin-modal {
    background-color: #151515;
    -webkit-box-shadow: none;
    box-shadow: none;
    }

    #auth-form-wrapper .auth-services-wrapper,
    .checkin-modal .auth-services-wrapper {
    background-color: #151515;
    border-color: #333;
    }

    #auth-form-wrapper .bottom-wrapper,
    .checkin-modal .bottom-wrapper {
    background-color: #151515;
    border-color: #333;
    }

    #auth-form-wrapper .logo-wrapper .base,
    .checkin-modal .logo-wrapper .base {
    background-color: #151515;
    }

    #charts-wrapper h3 {
    color: #bbb;
    }

    body:not(.dark-knight) .genre-bars.light .bar label {
    color: #fff;
    }

    body:not(.dark-knight) .genre-bars.light .bar label .count a {
    color: #bbb;
    }

    .comment-wrapper {
    background-color: #1d1d1d;
    }

    .comment-wrapper.featured {
    background-color: #1d1d1d;
    }

    .comment-wrapper.featured .above-comment {
    background-color: #333;
    }

    .comment-wrapper.list:not(.subnav) {
    background-color: #333;
    padding-bottom: 0;
    }

    .comment-wrapper.list .above-comment .user-name h4 a.username {
    color: #fff;
    }

    .comment-wrapper .pill {
    background-color: #ed1c24;
    color: #fff;
    }

    .comment-wrapper .above-comment {
    background-color: #333;
    }

    .comment-wrapper .above-comment .date {
    color: #fff;
    }

    .comment-wrapper .comment mark {
    background-color: #151515;
    border-radius: 3px;
    color: #ed1c24;
    padding: 2px 4px;
    }

    body.comments #info-wrapper .pill {
    background-color: #ed1c24;
    color: #fff;
    }

    .custom-list .list-info .posters .poster-items-wrapper .poster-items .poster-item {
    -webkit-box-shadow: none;
    box-shadow: none;
    }

    .custom-list .list-info .user-actions .icon.btn-list-subscribe {
    color: #fff;
    }

    .dropdown .dropdown-menu,
    .dropdown:not(.filter-dropdown) .dropdown-toggle,
    .dropdown.open:not(.filter-dropdown) > .dropdown-toggle {
    background-color: #333;
    border-color: #1d1d1d;
    color: #fff;
    }

    .dropdown .dropdown-menu > li > a {
    color: #fff;
    }

    .dropdown .dropdown-menu > li > a:hover {
    background-color: #1d1d1d;
    }

    .filter-dropdown .metadata .trakt-icon-wand {
    color: #fff;
    }

    .filter-dropdown .metadata .caret {
    color: #fff;
    }

    .form-control {
    background-color: #333;
    border-color: #333;
    color: #fff;
    }

    .form-control[disabled],
    .form-control[readonly] {
    background-color: #333;
    border-color: #333;
    color: #fff;
    }

    .form-control:focus {
    border-color: #ed1c24;
    -webkit-box-shadow: none;
    box-shadow: none;
    }

    header#top-nav #header-search #header-search-query {
    background-color: #333;
    color: #fff;
    }

    header a {
    color: #fff;
    }

    h2 .feed-icons .feed-icon {
    color: #bbb;
    }

    .filter-dropdown .icon.trakt-icon-divider {
    color: #fff;
    }

    .btn-list-edit-items {
    color: #fff;
    }

    #btn-list-edit-lists {
    color: #fff;
    }

    .btn-summary:not(.selected):not(:hover):not(.btn-checkin) {
    background-color: #151515;
    }

    #info-wrapper .sidebar .external li a,
    #info-wrapper .affiliate-links .section a {
    background-color: #333;
    border-color: #333;
    color: #fff;
    }

    #info-wrapper .info #actors .posters ul li .name {
    color: #fff;
    }

    #info-wrapper .info #actors .posters ul li .character {
    color: #bbb;
    }

    #info-wrapper .info .action-buttons > .btn:not(.selected):not(:hover) .side-btn {
    background-color: #000;
    color: #fff;
    }

    #info-wrapper .sidebar .poster {
    border: 0 !important;
    -webkit-box-shadow: none;
    box-shadow: none;
    }

    #info-wrapper .sidebar .streaming-links {
    background-color: #333;
    -webkit-box-shadow: none;
    box-shadow: none;
    }

    #info-wrapper .sidebar .btn-watch-now {
    background-color: #333;
    -webkit-box-shadow: none;
    box-shadow: none;
    }

    #info-wrapper .sidebar .external li a:hover {
    background-color: #ed1c24;
    border-color: #ed1c24;
    }

    #info-wrapper .affiliate-links .section a:hover {
    background-color: #ed1c24;
    border-color: #ed1c24;
    }

    #info-wrapper .season-links .links ul li a.selected {
    color: #ed1c24;
    }

    .applications h3.instructions,
    .authorized_applications h3.instructions,
    .settings h3.instructions,
    .widgets h3.instructions {
    background-color: #1d1d1d;
    border-bottom: solid 1px #333;
    }

    hr {
    border-top-color: #333;
    }

    #user-menu ul li.dark-knight a {
    display: none;
    }

    #network-wrapper .posters .poster {
    border: 0;
    }

    #network-wrapper .posters .poster-under {
    background-color: #333;
    }

    #network-wrapper .posters .poster-under .text {
    color: #bbb;
    }

    #network-wrapper .posters .poster-under .user-avatar img {
    background-color: #333;
    border-color: #333;
    }

    #network-wrapper .posters .action {
    border-color: #333;
    }

    #network-wrapper .posters .activity-date {
    background-color: #333;
    color: #fff;
    }

    #network-wrapper a:not(.username) {
    color: #fff;
    }

    #network-wrapper .alert-no-data {
    background-color: #333;
    color: #fff;
    }

    .new-comment-wrapper textarea,
    .new-comment-wrapper.update textarea,
    .new-comment-wrapper.update .emojionearea .emojionearea-editor,
    .new-comment-wrapper.update .under-help .checkboxes .btn-group .btn,
    .new-comment-wrapper .emojionearea .emojionearea-editor,
    .new-comment-wrapper .under-help .checkboxes .btn-group .btn {
    background-color: #333;
    border-color: #333;
    color: #fff;
    }

    .new-comment-wrapper textarea:focus {
    border-color: #ed1c24;
    }

    .new-comment-wrapper.update textarea:focus {
    border-color: #ed1c24;
    }

    .new-comment-wrapper.update .emojionearea .emojionearea-editor:focus {
    border-color: #ed1c24;
    }

    .new-comment-wrapper .emojionearea .emojionearea-editor:focus {
    border-color: #ed1c24;
    }

    #ondeck-wrapper .posters .poster {
    border: 0;
    }

    #ondeck-wrapper .posters .titles-link {
    color: #fff;
    }

    #ondeck-wrapper .grid-item .quick-icons {
    background-color: #333;
    border: 0;
    }

    #ondeck-wrapper .ignore:hover {
    color: #ed1c24;
    }

    ul.pagination li a {
    color: #fff;
    }

    ul.pagination li a:hover {
    color: #ed1c24;
    }

    ul.pagination li:not(.active) a {
    background-color: #151515;
    }

    ul.pagination li .disabled a {
    color: #bbb;
    }

    ul.pagination > .disabled > a {
    background-color: #151515;
    color: #bbb;
    }

    ul.pagination > .disabled > a:hover {
    background-color: #151515;
    color: #bbb;
    }

    ul.pagination .gap a {
    color: #fff;
    }

    .panel {
    background-color: #1d1d1d;
    border-color: #333;
    }

    .panel .panel-heading {
    background-color: #333;
    border-color: #333;
    color: #fff;
    }

    .popover-title,
    .frame-wrapper .sidenav .feeds .popover .popover-title {
    background-color: #333;
    border-color: #333;
    color: #fff;
    }

    .popover .data-wrapper .xdsoft_datetimepicker.xdsoft_inline td,
    .popover .data-wrapper .xdsoft_datetimepicker.xdsoft_inline th {
    background-color: #333;
    border-color: #bbb;
    color: #fff;
    font-weight: normal;
    }

    .popover {
    background-color: #1d1d1d;
    }

    .popover .data-wrapper {
    background-color: #333;
    }

    .popover .data-wrapper input {
    color: #fff;
    }

    .popover .data-wrapper .xdsoft_datetimepicker {
    color: #fff;
    }

    .popover .data-wrapper .xdsoft_datetimepicker.xdsoft_inline {
    background-color: #1d1d1d;
    border-top-color: #333;
    }

    .popover .data-wrapper .xdsoft_datetimepicker.xdsoft_inline .xdsoft_timepicker .xdsoft_time_box {
    border-color: #bbb;
    }

    .popover .data-wrapper .xdsoft_datetimepicker.xdsoft_inline .xdsoft_timepicker .xdsoft_time_box > div > div {
    background-color: #333;
    border-color: #bbb;
    color: #fff;
    font-weight: normal;
    }

    .popover .data-wrapper .xdsoft_datetimepicker.xdsoft_inline .xdsoft_label > .xdsoft_select {
    background-color: #333;
    border-color: #bbb;
    color: #fff;
    }

    .popover .data-wrapper .xdsoft_datetimepicker .xdsoft_prev {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    }

    .popover .data-wrapper .xdsoft_datetimepicker .xdsoft_next {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    }

    .popover .data-wrapper .xdsoft_datetimepicker .xdsoft_today_button {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    }

    .popover .data-wrapper .xdsoft_datetimepicker .xdsoft_label i {
    -webkit-filter: invert(100%);
    filter: invert(100%);
    }

    .popover.remove .popover-title {
    color: #fff !important;
    }

    .popover.bottom > .arrow::after {
    border-bottom-color: #333;
    border-top-color: #333;
    }

    .posters .poster {
    border: 0;
    }

    .posters > div .quick-icons {
    border: 0;
    }

    section > .container > .posters > .grid-item .quick-icons {
    background-color: #333;
    }

    #progress-wrapper .row .main-info .seasons {
    background-color: #1d1d1d;
    }

    #progress-wrapper .row .main-info .seasons > div .season-toggle .fa {
    color: #fff;
    }

    #progress-wrapper .row .main-info .seasons > div .season-toggle .season {
    color: #fff;
    }

    #recently-watched-wrapper .quick-icons {
    background-color: #333;
    }

    #recommendations-wrapper .quick-icons {
    background-color: #333;
    }

    #recommendations-wrapper .grid-item h4 a {
    color: #bbb;
    }

    #recommendations-wrapper .grid-item h4:hover a {
    color: #ed1c24;
    }

    .mCS-rounded-dark.mCSB_scrollTools .mCSB_draggerRail {
    background-color: #333;
    }

    .mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: #ed1c24;
    }

    .mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar:hover {
    background-color: #ed1c24;
    }

    .mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar:active {
    background-color: #ed1c24;
    }

    .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: #ed1c24;
    }

    .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar:hover {
    background-color: #ed1c24;
    }

    .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar:active {
    background-color: #ed1c24;
    }

    #seasons-episodes-sortable .under-info .titles {
    background-color: #333;
    }

    #seasons-episodes-sortable .under-info .episode-stats {
    background-color: #1d1d1d;
    }

    #seasons-episodes-sortable .under-info h3 a {
    color: #fff;
    }

    section,
    #ondeck-wrapper,
    #schedule-wrapper,
    #network-wrapper,
    #recommendations-wrapper,
    .subnav-wrapper,
    .subnav-wrapper .comment-wrapper,
    .subnav-text {
    background-color: #151515;
    }

    .summary-activity .tabs .tab {
    border-color: #333;
    color: #fff;
    }

    .summary-activity .tabs .tab.selected {
    background-color: #333;
    border-bottom-color: #333;
    }

    .users-wrapper {
    background-color: #333;
    border-color: #333;
    }

    body {
    color: #fff;
    }

    .grid-item .titles-link {
    color: #fff;
    }

    #main-search input.footer-search {
    color: #000;
    }
`;
GM_addStyle(darkMode);
