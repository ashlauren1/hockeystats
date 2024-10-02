var __sr_srdevel = "deploy"
  , __sr_text_turn_inline_styles = "Turn Inline Styles"
  , __sr_text_turned_On = "On"
  , __sr_text_turned_Off = "Off"
  , __sr_text_click_what_are_these = 'Click "What are these &amp what should I use?" for explanation.'
  , __sr_text_ctrl_a = "Ctrl-A, Ctrl-C to copy to clipboard. "
  , __sr_text_save_and_share_the_table = "Save and share the table you created."
  , __sr_text_title_of_your_report = "Title of your generated report"
  , __sr_text_note_on_your_report = "Notes on your report (shown with report)"
  , __sr_text_please_keep_it_clean = "Please keep it clean. Sorry, but no &gt; or &lt; symbols or html tags are allowed at the moment."
  , __sr_text_save_comments_and_report = "Save Comments and Report!"
  , __sr_text_a_link_will_be_created = "A link will be created for your report."
  , __sr_text_we_are_sorry_failed = "We are sorry, but this request failed."
  , __sr_text_click_to_delete_a_column = 'Click <button class="sharing delete"></button> to delete a column or row, and '
  , __sr_text_click_to_delete_trailing = 'click <button class="sharing right"></button> or <button class="sharing down"></button> to delete trailing columns or rows. Sorting after deleting may not work as expected.'
  , __sr_text_url_for_sharing = "url for sharing"
  , __sr_text_pre_formatted_text = "pre-formatted text"
  , __sr_text_comma_separated = "comma-separated"
  , __sr_text_view_original_table = "View Original Table"
  , __sr_text_show_only_selected_rows = "Show Only Selected Rows"
  , __sr_text_minimize_all = "Minimize all"
  , __sr_text_expand_all = "Expand all"
  , __sr_text_scroll_right_widescreen = 'Scroll Right For More Stats &#183; <span class="click">Switch to Widescreen View</span>'
  , __sr_text_also_view_explanations = "Also view explanations by holding mouse over column headers"
  , __sr_text_hide_non_quals = "Hide Non-Qualifiers for Rate Stats"
  , __sr_text_glossary = "Glossary"
  , __sr_text_show_glossary = "Show a glossary for each term in the table below<br>or hold your mouse over the header"
  , __sr_text_per90 = "Toggle Per90 Stats"
  , __sr_text_per90_tip = "Convert the season stats in the table below to a per-90 value.<br>Changed values will be shaded.<br>Note that underlined stats do not have values for all games and per-90 stats<br>via this tool do not account for this issue and use full-season per-90 values."
  , __sr_text_hide_partial_rows = "Hide Partial Rows"
  , __sr_text_hide = "Hide"
  , __sr_text_show = "Show"
  , __sr_text_modify_and_share = "Modify, Export &amp; Share Table"
  , __sr_text_get_as_csv = "Get table as CSV (for Excel)"
  , __sr_text_get_as_csv_tip = "Convert the table below to comma-separated values<br>suitable for use with Excel"
  , __sr_text_strip_mobile = "Strip Mobile Formatting"
  , __sr_text_copy_link_clipboard = "Get Link to Table"
  , __sr_text_copy_link_tip = "Get a link directly to this table on this page"
  , __sr_text_we_apologize_server_error = "We apologize, but we had a server error, it may help to try again"
  , __sr_tableHeaderText = "This Section"
  , __sr_text_show = "Show"
  , __sr_text_show_hidden_rows = "Show hidden rows"
  , __sr_text_to_numbers = "to"
  , __sr_text_search_placeholder_short = "Enter Person, Tm, etc"
  , __sr_text_search_placeholder_medium = "Enter Person, Team, etc"
  , __sr_text_search_placeholder_long = "Enter Person, Team, Section, etc"
  , __sr_text_thousands_separator = ","
  , __sr_text_happy_birthday = "Happy Birthday!"
  , __sr_text_Age = "Age"
  , __sr_text_local_time = "local time"
  , __sr_text_quote_open = '"'
  , __sr_text_quote_closed = '"'
  , __sr_text_all_matches_for = "All matches for"
  , __sr_text_press_enter_to_search_for = "or press enter"
  , __sr_text_autocomplete_error = "Sorry, but this player did not work. We may be having a system-wide error."
  , __sr_text_mens_comp = "Men"
  , __sr_text_womens_comp = "Women"
  , __sr_text_please_select_an_option_for_each = "Please select an option for each"
  , __sr_text_additional_pages = "Additional Pages"
  , __sr_text_select_some_options = "Select Some Options"
  , __sr_text_select_an_option = "Select An Option"
  , __sr_text_no_results_match = "No Results Match"
  , __sr_text_sorry_no_info = "Sorry, but no information<br>is given for this term."
  , sr_SITE_ABB = "hr"
  , sr_SITE_NAME = "ashlauren1.github.io/hockeystats/"
  , sr_SITE_PREFIX = ""
  , sr_rowsum_span_url = sr_SITE_PREFIX.concat("/tools/span_stats.cgi")
  , sr_SITE_URL = "https://ashlauren1.github.io/hockeystats/"
  , sr_jscss_version = Modernizr.is_dev ? "dev_build:2024-09-13-Fri-14:47:47" : "202409131"
  , sr_svg_sprite_url = "https://cdn.ssref.net/req/202409131/icons/sr_icons-min.svg?hr"
  , sr_dropmenu_url = "https://www.hockey-reference.com/short/inc/main_nav_menu.json"
  , sr_SITE_CDN = "https://www.hockey-reference.com/short"
  , completely_config = [{
    name: "hr__players",
    url: "https://www.hockey-reference.com/short/inc/players_search_list.csv",
    limit: 10,
    header: '<div class="ac-results-header"><a href="/players/">NHL &amp; WHA Players</a></div>',
    suppress: 0,
    defaultResults: 0,
    template: '<div> <span class="search-results-years">{{#a}}<strong>{{/a}}{{y}}{{#a}}</strong>{{/a}}</span> <span class="search-results-item" >{{#a}}<strong>{{/a}}{{n}}{{#a}}</strong>{{/a}}</span></div>'
}, {
    name: "hr__players_adv",
    url: "https://www.hockey-reference.com/short/inc/players_adv_search_list.csv",
    limit: 10,
    header: '<div class="ac-results-header"><a href="/players/">NHL &amp; WHA Players</a></div>',
    suppress: 1,
    defaultResults: 0,
    url_match: "/hockey/",
    template: '<div> <span class="search-results-years">{{#a}}<strong>{{/a}}{{y}}{{#a}}</strong>{{/a}}</span> <span class="search-results-item" >{{#a}}<strong>{{/a}}{{n}}{{#a}}</strong>{{/a}}</span></div>'
}, {
    name: "hr__teams",
    url: "https://www.hockey-reference.com/short/inc/teams_search_list.csv",
    limit: 10,
    header: '<div class="ac-results-header"><a href="/teams/">NHL &amp; WHA Teams</a></div>',
    suppress: 0,
    defaultResults: 0,
    template: '<div> <span class="search-results-years">{{#a}}<strong>{{/a}}{{y}}{{#a}}</strong>{{/a}}</span> <span class="search-results-item" >{{#a}}<strong>{{/a}}{{n}}{{#a}}</strong>{{/a}}</span></div>'
}, {
    name: "hr__coaches",
    url: "https://www.hockey-reference.com/short/inc/coaches_search_list.csv",
    limit: 10,
    header: '<div class="ac-results-header"><a href="/coaches/">NHL &amp; WHA Coaches</a></div>',
    suppress: 0,
    defaultResults: 0,
    template: '<div> <span class="search-results-years">{{#a}}<strong>{{/a}}{{y}}{{#a}}</strong>{{/a}}</span> <span class="search-results-item" >{{#a}}<strong>{{/a}}{{n}}{{#a}}</strong>{{/a}}</span></div>'
}, {
    name: "hr__direct",
    url: "https://www.hockey-reference.com/short/inc/direct_search_list.csv",
    limit: 10,
    header: '<div class="ac-results-header"><a href="#site_menu_link">Site Map</a></div>',
    suppress: 0,
    defaultResults: 0,
    template: '<div> <span class="search-results-years">{{#a}}<strong>{{/a}}{{y}}{{#a}}</strong>{{/a}}</span> <span class="search-results-item" >{{#a}}<strong>{{/a}}{{n}}{{#a}}</strong>{{/a}}</span></div>'
}]
  , player_select_config = [{
    name: "hr__players",
    url: "https://www.hockey-reference.com/short/inc/players_search_list.csv",
    limit: 10,
    header: "",
    template: '<div> <span class="search-results-years">{{#a}}<strong>{{/a}}{{y}}{{#a}}</strong>{{/a}}</span> <span class="search-results-item" >{{#a}}<strong>{{/a}}{{n}}{{#a}}</strong>{{/a}}</span></div>'
}];
function sr_debugging() {
    return !!window.location.search.match("sr_debugger")
}
function vjs_hasClass(e, t) {
    return !(!e || !t) && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className))
}
function vjs_removeClass(e, t) {
    return !(!e || !t || (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " "),
    0))
}
function vjs_addClass(e, t) {
    return !(!e || !t || (e.classList ? e.classList.add(t) : vjs_hasClass(e, t) || (e.className += " " + t),
    0))
}
function vjs_isHovered(e) {
    return e.parentElement.querySelector(":hover") === e
}
function vjs_hrefIsClicked(e, t) {
    var s = (e = e || window.event).srcElement || e.target;
    for (s.tagName || (s = s.parentNode); s && s !== t; ) {
        if ("A" === s.tagName)
            return !0;
        s = s.parentNode
    }
    return !1
}
function vjs_fadeIn(e, t) {
    e.style.opacity = 0,
    vjs_removeClass(e, "hidden"),
    t = t || 400;
    function s() {
        e.style.opacity = +e.style.opacity + (new Date - r) / t,
        r = +new Date,
        +e.style.opacity < 1 && (window.requestAnimationFrame && requestAnimationFrame(s) || setTimeout(s, 16))
    }
    var r = +new Date;
    s()
}

function vjs_getJson(e, t, s, r, o) {
    vjs_Ajax("GET", e, t, s, r, o, !0)
}
function vjs_getAjax(e, t, s, r, o, n) {
    vjs_Ajax("GET", e, t, s, r, o, n)
}
function vjs_postJson(e, t, s, r, o) {
    vjs_Ajax("POST", e, t, s, r, o, !0)
}
function vjs_postAjax(e, t, s, r, o, n) {
    vjs_Ajax("POST", e, t, s, r, o, n)
}
function vjs_Ajax(e, t, s, r, o, n, a) {
    sr_detect_ie && (t = t.replace("https:", "http:"));
    for (var i = !1, l = [function() {
        return new window.XMLHttpRequest
    }
    , function() {
        return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
    }
    , function() {
        return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
    }
    , function() {
        return new window.ActiveXObject("Msxml2.XMLHTTP")
    }
    ], c = 0; c < l.length; c += 1) {
        try {
            i = l[c]()
        } catch (e) {}
        if (!1 !== i)
            break
    }
    var _, d = n ? "" : "callback=SR".concat(Math.floor(1e7 * Math.random() + 1));
    if (s instanceof Object && s)
        for (var u in s)
            d = d.concat(d ? "&" : "", encodeURIComponent(u), "=", encodeURIComponent(s[u]));
    else
        "string" == typeof s && s && (d = d.concat(d ? "&" : "", s));
    "GET" === e && (d && (_ = -1 === t.indexOf("?") ? "?" : "&",
    t = t.concat(_, d)),
    d = "");
    try {
        i.open(e, t, !0)
    } catch (e) {
        return !1
    }
    "POST" === e && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
    i.onload = function() {
        var e;
        200 <= i.status && i.status < 400 ? (i.responseText && (e = i.responseText,
        n || (e = (e = e.replace(/^SR[0-9]+\(/, "")).replace(/\)$/, "")),
        a) && (e = JSON.parse(e)),
        "function" == typeof r && r(e)) : "function" == typeof o && o()
    }
    ,
    i.onerror = function() {
        "function" == typeof o && o()
    }
    ,
    i.send(d)
}
function vjs_scrollLeft() {
    var e = 0;
    return "number" == typeof window.pageYOffset ? e = window.pageXOffset : document.body && (document.body.scrollLeft || document.body.scrollTop) ? e = document.body.scrollLeft : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (e = document.documentElement.scrollLeft),
    e
}
function vjs_scrollTop() {
    var e = 0;
    return "number" == typeof window.pageYOffset ? e = window.pageYOffset : document.body && (document.body.scrollLeft || document.body.scrollTop) ? e = document.body.scrollTop : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (e = document.documentElement.scrollTop),
    e
}
function vjs_offset(e) {
    var t;
    return e ? {
        top: (t = e.getBoundingClientRect()).top + vjs_scrollTop(),
        left: t.left + vjs_scrollLeft(),
        bottom: t.top + vjs_scrollTop() + e.offsetHeight,
        right: t.left + vjs_scrollLeft() + e.offsetWidth
    } : {}
}
function vjs_viewportGetHeight() {
    return window.innerHeight || document.documentElement.offsetHeight
}
function vjs_viewportGetWidth() {
    return window.innerWidth || document.documentElement.offsetWidth
}
function vjs_getHeight(e) {
    return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
}
function vjs_getDocumentHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
}
function vjs_outerWidth(e) {
    var t = e.offsetWidth;
    return window.getComputedStyle && (e = getComputedStyle(e),
    t += parseInt(e.marginLeft) + parseInt(e.marginRight)),
    t
}
function vjs_addEvent(e, t, s, r) {
    e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s)
}
function vjs_isNode(e) {
    return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
}
function vjs_isElement(e) {
    return !!e && ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)
}
function vjs_isset(e) {
    return void 0 !== e
}
function vjs_getAttr(e, t) {
    var s;
    return !(!e || !vjs_isset(e) || (e.getAttribute ? s = e.getAttribute(t) : e.getAttributeNode && (s = e.getAttributeNode(t).value),
    !vjs_isset(s)) || "" === s) && s
}
function vjs_setAttr(e, t, s) {
    var r;
    return !(!e || !vjs_isset(e) || (e.setAttribute ? r = e.setAttribute(t, s) : e.setAttributeNode && ((t = document.createAttribute(t)).value = s,
    r = e.setAttributeNode(t)),
    !vjs_isset(r)) || "" === r) && r
}
function vjs_removeAttr(e, t) {
    var s;
    return !(!e || !vjs_isset(e) || (e.removeAttribute ? s = e.removeAttribute(t) : e.removeAttributeNode && (s = e.removeAttributeNode(att)),
    !vjs_isset(s)) || "" === s) && s
}
function vjs_hasAttr(e, t) {
    var s;
    return !(!e || !vjs_isset(e)) && (e.getAttribute ? s = e.getAttribute(t) : e.getAttributeNode && (s = e.getAttributeNode(t).value),
    "string" == typeof s)
}
function vjs_stopPropagation(e) {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : window.event ? window.event.cancelBubble = !0 : e.returnValue = !1
}
function vjs_padStringWithChars(e, t, s) {
    return s = s || "0",
    (e += "").length >= t ? e : new Array(t - e.length + 1).join(s) + e
}
function vjs_serializeForm(e) {
    "use strict";
    var t, s, r = [];
    function o(e) {
        return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
    }
    function n(e, t) {
        r.push(o(e) + "=" + o(t))
    }
    if (!e || !e.nodeName || "form" !== e.nodeName.toLowerCase())
        throw "You must supply a form element";
    for (t = 0,
    s = e.elements.length; t < s; t++) {
        var a, i = vjs_getFormElement(a = e.elements[t]);
        if (i && i.constructor === Array)
            for (var l = 0, c = i.length; l < c; l++)
                n(a.name, i[l]);
        else
            i && n(a.name, i)
    }
    return r.join("&")	
}
function vjs_escapeHtml(e) {
    var t = document.createElement("div");
    return t.appendChild(document.createTextNode(e)),
    t.innerHTML
}
function vjs_unescapeHtml(e) {
    var t = document.createElement("div")
      , e = (t.innerHTML = e,
    t.childNodes[0]);
    return e ? e.nodeValue : ""
}
function vjs_toggleDisplayBlock(e) {
    var t = e.style.display
      , s = vjs_hasClass(e, "more")
      , r = vjs_hasClass(e, "hidden");
    return "none" === t || s || r ? (e.style.display = "initial",
    s && vjs_removeClass(e, "more"),
    r && vjs_removeClass(e, "hidden"),
    "open") : (e.style.display = "none",
    "closed")
}
function vjs_toggleClass(e, t) {
    return !(!e || !t || (vjs_hasClass(e, t) ? (vjs_removeClass(e, t),
    1) : (vjs_addClass(e, t),
    0)))
}
function vjs_isHidden(e) {
    return e.offsetWidth <= 0 || e.offsetHeight <= 0
}
function vjs_isVisible(e) {
    return !vjs_isHidden(e)
}
function vjs_deserializeForm(o, e, n, a) {
    var t, s, i = e;
    if (!o || void 0 === e)
        return !1;
    if (e.constructor === Array)
        for (var i = {}, r = 0; r < e.length; r++)
            void 0 !== i[e[r].name] ? i[e[r].name].constructor !== Array ? i[e[r].name] = [i[e[r].name], e[r].value] : i[e[r].name].push(e[r].value) : i[e[r].name] = e[r].value;
    for (t in i)
        t && i[t] && "object" != typeof i[t] && i[t].match(/^0+[0-9]+$/) && (s = i[t].replace(/^0+/, ""),
        i[t] = s);
    vjs_forceFormElements(o, i);
    var l = o.querySelectorAll("input,select,textarea");
    if (vjs_forEach.call(l, function(e, t) {
        if (vjs_hasAttr(e, "data-no-serial"))
            return !1;
        var s = e.name;
        if ("hint" === s)
            return !1;
        i[s] && "string" == typeof i[s] && !i[s].match("--") && o.elements.namedItem(i[s]) && o.elements.namedItem(i[s]).value && !n && (i[s] = o.elements.namedItem(i[s]).value),
        "default" === i[s] && (i[s] = o.elements.namedItem(s).defaultValue || o.elements.namedItem(s).defaultSelected || "");
        var r = [];
        return s && void 0 !== i[s] && (r = i[s].constructor === Array ? i[s] : [i[s]]),
        void 0 !== i[s] && vjs_setFormElement(e, r, a, n),
        chosen_events && chosen_events.fire(e, "chosen:updated"),
        !0
    }),
    void 0 !== i.hide)
        for (var c = i.hide.split(","), r = 0, _ = c.length; r < _; r++)
            for (var d = 0 === c[r].indexOf(".") ? document.querySelectorAll(c[r]) : document.querySelectorAll("#".concat(c[r])), u = 0, h = d.length; u < h; u++)
                vjs_addClass(d[u], "hidden");
    if (void 0 !== i.show)
        for (var p = i.show.split(","), r = 0, _ = p.length; r < _; r++) {
            p[r] = vjs_preset_convert_lookup(o, p[r]);
            for (var m = 0 === p[r].indexOf(".") ? document.querySelectorAll(p[r]) : document.querySelectorAll("#".concat(p[r])), u = 0, h = m.length; u < h; u++)
                vjs_removeClass(m[u], "hidden")
        }
    if (void 0 !== i.bounce)
        for (var f = i.bounce.split(","), r = 0, _ = f.length; r < _; r++)
            for (var v = 0 === f[r].indexOf(".") ? document.querySelectorAll(f[r]) : document.querySelectorAll("#".concat(f[r])), u = 0, h = v.length; u < h; u++)
                vjs_addClass(v[u], "animated"),
                vjs_addClass(v[u], "bounce"),
                setTimeout(function() {
                    vjs_removeClass(v[u], "animated"),
                    vjs_removeClass(v[u], "bounce")
                }, 1e3);
    return !0
}	

function vjs_setFormElement(e, t, s, r) {
    var o = t.length;
    if (1 === o && "" === t[0] && r)
        return !1;
    if (!e)
        return !1;
    switch (e.type || e.tagName.toLowerCase()) {
    case "radio":
    case "checkbox":
        e.checked = !1;
        for (var n = 0; n < o; n++)
            e.checked |= "" !== e.value && t[n] === e.value || "" === e.value && "" === t[n];
        e.checked && e !== s && !vjs_getAttr(e, "data-notrigger") ? vjs_triggerEvent(e, "click") : e.checked && e !== s && vjs_getAttr(e, "data-notrigger") && vjs_triggerEvent(e, "change"),
        e.checked && (sr_detect_edge || sr_detect_ie) && (e.setAttribute("checked", !0),
        e.checked = "checked",
        e.defaultChecked = !0);
        break;
    case "select-one":
        for (var a = -1, i = -1, n = 0; n < e.options.length; n++)
            e.options[n].selected && (a = n),
            e.options[n].selected = !1,
            e.options[n].selected = e.options[n].value === t[0] || "" !== t[0] && e.options[n].value === "0".concat(t[0]),
            e.options[n].selected && (i = n);
        -1 === i && -1 !== a ? (e.options[a].selected = !0,
        alert("There is no matching value")) : e === s || vjs_getAttr(e, "data-notrigger") || vjs_triggerEvent(e, "change");
        break;
    case "select-multiple":
        a = -1,
        i = -1;
        for (n = 0; n < e.options.length; n++) {
            e.options[n].selected && (a = n),
            e.options[n].selected = !1;
            for (var l = 0; l < t.length; l++)
                e.options[n].selected |= "" !== e.options[n].value && (e.options[n].value === t[l] || e.options[n].value === "0".concat(t[l])),
                e.options[n].selected && (i = n);
            -1 === i && -1 !== a ? (e.options[a].selected = !0,
            alert("There is no matching value")) : e === s || vjs_getAttr(e, "data-notrigger") || vjs_triggerEvent(e, "change")
        }
        break;
    case "button":
    case "submit":
        e.value = 0 < t.length ? t.join(",") : e.value;
        break;
    default:
        e.value = t.join(",")
    }
}
function vjs_getFormElement(e) {
    if ("" !== e.name && !e.disabled)
        switch (e.nodeName.toLowerCase()) {
        case "input":
            switch (e.type) {
            case "text":
            case "date":
            case "number":
            case "search":
            case "hidden":
            case "password":
            case "button":
            case "submit":
                return e.value;
            case "checkbox":
            case "radio":
                return e.checked ? e.value : "";
            default:
                return ""
            }
            return "";
        case "textarea":
            return e.value;
        case "select":
            switch (e.type) {
            case "select-one":
                return e.value;
            case "select-multiple":
                var t = [];
                for (j = 0,
                jLen = e.options.length; j < jLen; j++)
                    e.options[j].selected && t.push(e.options[j].value);
                return t
            }
            return "";
        case "button":
            switch (e.type) {
            case "reset":
            case "submit":
            case "button":
                return e.value
            }
        default:
            return ""
        }
    return ""
}
function vjs_forceFormElements(e, t) {
    for (var s in t) {
        var r, o;
        s.match(/^force:/) && (s = e.querySelector('input[name="'.concat(s, '"]'))) && (r = vjs_getAttr(s, "data-force"),
        s = vjs_getAttr(s, "data-value"),
        r) && (o = [s],
        s = e.querySelectorAll(r),
        vjs_forEach.call(s, function(e, t) {
            vjs_setFormElement(e, o)
        }))
    }
}
function vjs_preset_convert_lookup(e, t) {
    var s, r = t;
    return 0 < t.indexOf("+") && (s = (t = t.split("+"))[1].split(":"),
    r = t[0].concat(e.elements.namedItem(s[1]).value)),
    r
}
function vjs_cloneObject(e) {
    if (null === e || "object" != typeof e || "isActiveClone"in e)
        return e;
    var t, s;
    for (s in t = e instanceof Date ? new e.constructor : e.constructor(),
    e)
        Object.prototype.hasOwnProperty.call(e, s) && (e.isActiveClone = null,
        t[s] = vjs_cloneObject(e[s]),
        delete e.isActiveClone);
    return t
}
var proto, vjs_deepExtend = function(e) {
    e = e || {};
    for (var t = 1; t < arguments.length; t++) {
        var s = arguments[t];
        if (s)
            for (var r in s)
                s.hasOwnProperty(r) && ("object" == typeof s[r] ? vjs_deepExtend(e[r], s[r]) : e[r] = s[r])
    }
    return e
}, vjs_whiteSpaceEnds = new RegExp("^\\s*|\\s*$","g"), vjs_whiteSpaceMultiple = new RegExp("\\s\\s+","g");
function vjs_trimWhitespace(e) {
    return e = (e = e.replace(vjs_whiteSpaceMultiple, " ")).replace(vjs_whiteSpaceEnds, "")
}
function vjs_elChildOfEl(e, t, s) {
    if (e && t) {
        if (s && e === t)
            return !0;
        for (; e = e.parentNode; )
            if (e === t)
                return !0
    }
    return !1
}
function vjs_elementOverflows(e, t) {
    return ("y" === (t = t || "") || "" === t) && e.offsetHeight < e.scrollHeight || ("x" === t || "" === t) && e.offsetWidth < e.scrollWidth
}
function vjs_triggerEvent(e, t) {
    var s;
    return !(!e || !t || ((s = document.createEvent("HTMLEvents")).initEvent(t, !0, !1),
    e.dispatchEvent(s),
    0))
}
function vjs_mergeObjects(e, t) {
    var s, r = {};
    for (s in e)
        e.hasOwnProperty(s) && (r[s] = e[s]);
    for (s in t)
        t.hasOwnProperty(s) && (r[s] = t[s]);
    return r
}
function vjs_throttle(e, t, s) {
    var r = !1;
    return function() {
        r || (e.apply(s || this, arguments),
        r = !0,
        setTimeout(function() {
            r = !1
        }, t))
    }
}
function vjs_closest(e, t) {
    for (var s, r = e; (s = r && r.matches) && !r.matches(t); )
        r = r.parentNode;
    return s ? r : null
}
function vjs_removeChild(e) {
    if ("string" == typeof e) {
        var t = document.getElementById(e);
        if (t)
            return t.parentNode.removeChild(t),
            !0
    } else if ((vjs_isElement(e) || vjs_isNode(e)) && e.parentNode)
        return e.parentNode.removeChild(e),
        !0;
    return !1
}
function vjs_randomNumber(e) {
    return vjs_randomString(e, "0123456789")
}
function vjs_randomString(e, t) {
    if ((t = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length < 1 || parseInt(e) <= 0)
        return "";
    for (var s = "", r = 0, o = parseInt(e); r < o; r++)
        s += t.charAt(Math.floor(Math.random() * t.length));
    return s
}
function vjs_wrapInElementOfType(e, t, s, r) {
    t = document.createElement(t || "div");
    return e.parentNode.insertBefore(t, e),
    t.appendChild(e),
    t.id = s,
    t.className = r,
    t
}
function vjs_insertAfter(e, t) {
    t.parentNode.insertBefore(e, t.nextSibling)
}
function vjs_nextMatchingSibling(e, t) {
    var s = e.nextElementSibling;
    if (!t)
        return s;
    for (; s; ) {
        if (s.matches(t))
            return s;
        s = s.nextElementSibling
    }
}
function vjs_dateToYMD(e) {
    var t, s;
    return e ? (t = e.getDate(),
    s = e.getMonth() + 1,
    e.getFullYear() + "-" + (s <= 9 ? "0" + s : s) + "-" + (t <= 9 ? "0" + t : t)) : ""
}
function vjs_TipsyDestroy(e) {
    var t = document.querySelector(".tipsy");
    t && vjs_removeChild(t)
}
function vjs_Tipsy(e) {
    this.element = e,
    this.enabled = !0
}
String.prototype.includes || !function() {
    "use strict";
    function e(e) {
        if (null == this)
            throw TypeError();
        var t = String(this);
        if (e && "[object RegExp]" == n.call(e))
            throw TypeError();
        var s = t.length
          , e = String(e)
          , r = e.length
          , o = 1 < arguments.length ? arguments[1] : void 0;
        return (o = o ? Number(o) : 0) != o && (o = 0),
        !(s < r + Math.min(Math.max(o, 0), s)) && -1 != a.call(t, e, o)
    }
    var n = {}.toString
      , t = function() {
        try {
            var e = {}
              , t = Object.defineProperty
              , s = t(e, e, e) && t
        } catch (e) {}
        return s
    }()
      , a = "".indexOf;
    t ? t(String.prototype, "includes", {
        value: e,
        configurable: !0,
        writable: !0
    }) : String.prototype.includes = e
}(),
String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}
),
function(n, t) {
    try {
        n.querySelector(":scope body")
    } catch (e) {
        ["querySelector", "querySelectorAll"].forEach(function(r) {
            var o = t[r];
            t[r] = function(e) {
                var t, s;
                return /(^|,)\s*:scope/.test(e) ? (t = this.id,
                this.id = "ID_" + Date.now(),
                e = e.replace(/((^|,)\s*):scope/g, "$1#" + this.id),
                s = n[r](e),
                this.id = t,
                s) : o.call(this, e)
            }
        })
    }
}(window.document, Element.prototype),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    var t = this.length >>> 0
      , s = Number(arguments[1]) || 0;
    for ((s = s < 0 ? Math.ceil(s) : Math.floor(s)) < 0 && (s += t); s < t; s++)
        if (s in this && this[s] === e)
            return s;
    return -1
}
),
Array.prototype.getSuperset = function() {
    for (var e = [], t = 0, s = this.length; t < s; ++t) {
        for (var r = !0, o = 0; o < s; ++o)
            (t !== o && 0 === this[o].indexOf(this[t]) && this[o] !== this[t] || t < o && this[o] === this[t]) && (r = !1);
        r && e.push(this[t])
    }
    return e
}
,
"undefined" == typeof document || "outerHTML"in document.createElementNS("http://www.w3.org/1999/xhtml", "_") || function(t) {
    "use strict";
    function e() {
        var e;
        return document.xmlVersion ? o.serializeToString(this) : (r.appendChild(this.cloneNode(!1)),
        e = r.innerHTML.replace("><", ">" + this.innerHTML + "<"),
        r.innerHTML = "",
        e)
    }
    function s(e) {
        var t, s = this.parentNode;
        if (null === s)
            throw DOMException.code = DOMException.NOT_FOUND_ERR,
            DOMException;
        for (r.innerHTML = e; t = r.firstChild; )
            s.insertBefore(t, this);
        s.removeChild(this)
    }
    var r = document.createElementNS("http://www.w3.org/1999/xhtml", "_")
      , t = (t.HTMLElement || t.Element).prototype
      , o = new XMLSerializer;
    if (Object.defineProperty) {
        var n = {
            get: e,
            set: s,
            enumerable: !0,
            configurable: !0
        };
        try {
            Object.defineProperty(t, "outerHTML", n)
        } catch (e) {
            -2146823252 === e.number && (n.enumerable = !1,
            Object.defineProperty(t, "outerHTML", n))
        }
    } else
        Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__ && (t.__defineGetter__("outerHTML", e),
        t.__defineSetter__("outerHTML", s))
}(self),
Element && !Element.prototype.matches && ((proto = Element.prototype).matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector),
Array.prototype.includes || (Array.prototype.includes = function(e) {
    "use strict";
    var t = Object(this)
      , s = parseInt(t.length, 10) || 0;
    if (0 !== s) {
        var r, o = parseInt(arguments[1], 10) || 0;
        for (0 <= o ? r = o : (r = s + o) < 0 && (r = 0); r < s; ) {
            if (e === t[r])
                return !0;
            r++
        }
    }
    return !1
}
),
vjs_addEvent(window, "beforeunload", vjs_TipsyDestroy, !1);
var tipsy_delay = 140;
function tipsy_setTip(e) {
    function t(e) {
        return e.tipsy || (e.tipsy = new vjs_Tipsy(e),
        e.tipsy.title = e.tipsy.getTitle()),
        e.tipsy
    }
    return t(e),
    vjs_addEvent(e, "mouseenter", function() {
        var e = t(this);
        e.hoverState = "in",
        setTimeout(function() {
            "in" == e.hoverState && e.show()
        }, tipsy_delay)
    }, !1),
    vjs_addEvent(e, "mouseleave", function() {
        var e = t(this);
        e.hoverState = "out",
        setTimeout(function() {
            "out" == e.hoverState && e.hide()
        }, tipsy_delay)
    }, !1),
    e
}
vjs_Tipsy.prototype = {
    show: function() {
        var e, t, s, r, o = this.title;
        o && this.enabled && (e = this.tip(),
        sr_record_analytics_event("Tool", "view:tooltip", this.title),
        e.querySelector(".tipsy-inner").innerHTML = o,
        e.className = "tipsy",
        (e = e.parentNode ? e.parentNode.removeChild(e) : e).style.top = "0px",
        e.style.left = "0px",
        e.style.visibility = "hidden",
        e.style.display = "block",
        document.body.appendChild(e),
        (o = vjs_offset(this.element)).width = this.element.offsetWidth,
        o.height = this.element.offsetHeight,
        t = e.offsetWidth,
        r = e.offsetHeight,
        s = tipsy_getGravity(this.element),
        r = {
            top: o.top - r,
            left: o.left + o.width / 2 - t / 2
        },
        "w" == s.charAt(1) ? r.left = o.left + o.width / 2 - 15 : r.left = o.left + o.width / 2 - t + 15,
        e.style.top = r.top + "px",
        e.style.left = r.left + "px",
        vjs_addClass(e, "tipsy-".concat(s)),
        e.style.visibility = "visible",
        this.$tip = e)
    },
    hide: function() {
        this.$tip && this.$tip.parentNode && this.$tip.parentNode.removeChild(this.$tip)
    },
    getTitle: function() {
        var e = this.element
          , t = vjs_getAttr(e, "data-tip");
        return (t = ("" + (t = t || vjs_getAttr(e, "tip"))).replace(/(^\s*|\s*$)/, "")) || __sr_text_sorry_no_info
    },
    tip: function() {
        var e, t, s;
        return this.$tip || (vjs_addClass(e = document.createElement("div"), "tipsy"),
        vjs_addClass(t = document.createElement("div"), "tipsy-arrow"),
        vjs_addClass(s = document.createElement("div"), "tipsy-inner"),
        e.appendChild(t),
        e.appendChild(s),
        this.$tip = e),
        this.$tip
    },
    enable: function() {
        this.enabled = !0
    },
    disable: function() {
        this.enabled = !1
    },
    toggleEnabled: function() {
        this.enabled = !this.enabled
    }
};
var tipsy_getGravity = function(e) {
    return vjs_offset(e).left > vjs_scrollLeft() + window.innerWidth / 2 ? "se" : "sw"
}
  , Modal = function() {
    "use strict";
    var t, s = 0, r = 0, o = 0, n = 0, a = {}, l = {}, c = document.createElement("div"), i = document.createElement("div"), _ = document.createElement("div"), d = document.createElement("div"), u = document.createElement("div"), h = document.createElement("div"), p = "auto", m = "auto", f = !1, v = !1, g = !1, b = !1, y = !1, w = !1, j = !1;
    return a.is_open = !1,
    a.open = function(e) {
        l.width = e.width || p,
        l.hug = e.hug || e.params.hug || "",
        l.height = e.height || m,
        l.hideClose = e.hideClose || f,
        l.draggable = e.draggable || v,
        l.closeCallback = e.closeCallback || e.params.closeCallback || y,
        l.openCallback = e.openCallback || e.params.openCallback || g,
        l.loadCallback = e.loadCallback || e.params.loadCallback || b,
        l.showOverlay = e.showOverlay || w,
        l.pin = e.pin || j,
        t = function() {
            a.center(e)
        }
        ,
        e.content && !e.ajaxContent ? _.innerHTML = e.content : e.ajaxContent && !e.content ? (l.showOverlay && (h.style.visibility = "visible"),
        c.style.visibility = "visible",
        a.is_open = !0,
        _.innerHTML = "",
        vjs_addClass(d, "loading"),
        vjs_Ajax("get", e.ajaxContent, {}, function(e) {
            vjs_removeClass(d, "loading"),
            l.showOverlay && (h.style.visibility = "visible"),
            c.style.visibility = "visible",
            a.is_open = !0,
            _.innerHTML = e,
            Modal.center({}),
            l.loadCallback && l.loadCallback()
        }, null, null, !1)) : _.innerHTML = "",
        c.style.width = l.width,
        c.style.height = l.height,
        c.style.maxWidth = "94%",
        l.pin && (c.style.position = "fixed"),
        a.center(e),
        l.showOverlay && (h.style.visibility = "visible"),
        c.style.visibility = "visible",
        a.is_open = !0,
        document.onkeydown = function(e) {
            27 === e.keyCode && a.close()
        }
        ,
        u.onclick = function() {
            return sr_display_showPopup_last_clicked = null,
            !l.hideClose && (a.close(),
            !0)
        }
        ,
        h.onclick = function() {
            return a.close(),
            !0
        }
        ,
        window.addEventListener ? window.addEventListener("resize", t, !1) : window.attachEvent && window.attachEvent("onresize", t),
        l.draggable ? (i.style.cursor = "move",
        i.onmousedown = function(e) {
            return a.drag(e),
            !1
        }
        ) : i.onmousedown = function() {
            return !1
        }
        ,
        l.openCallback && l.openCallback()
    }
    ,
    a.omm = function(e) {
        s = (void 0 !== window.event ? window.event : e).clientX,
        r = (void 0 !== window.event ? window.event : e).clientY,
        c.style.left = 0 < s - o ? s - o + "px" : 0,
        c.style.top = 0 < r - n ? r - n + "px" : 0
    }
    ,
    a.omu = function(e) {
        document.removeEventListener("mousemove", a.omm),
        document.removeEventListener("mouseup", a.omu)
    }
    ,
    a.drag = function(e) {
        var t;
        "fixed" === c.style.position && (t = parseInt(c.style.top),
        c.style.position = "absolute",
        c.style.top = t + vjs_scrollTop() + "px"),
        c.moved = !0,
        s = (void 0 !== window.event ? window.event : e).clientX,
        r = (void 0 !== window.event ? window.event : e).clientY,
        o = s - c.offsetLeft,
        n = r - c.offsetTop,
        document.addEventListener("mousemove", a.omm),
        document.addEventListener("mouseup", a.omu)
    }
    ,
    a.loading = function(e) {
        e && a.freezeSize(),
        vjs_addClass(document.getElementById("modal-content"), "loading")
    }
    ,
    a.freezeSize = function() {
        var e, t, s = document.getElementById("modal-container");
        s && (e = vjs_getHeight(s) - 32,
        t = vjs_outerWidth(s) - 32,
        vjs_setAttr(s, "style", vjs_getAttr(s, "style").concat("; ", "height:", e, "px!important; ", "width:", t, "px!important; padding:", 16, "px;")))
    }
    ,
    a.close = function() {
        return a.is_open && (sr_display_modalOpen = !1,
        c.moved = !1,
        _.innerHTML = "",
        h.style.visibility = "hidden",
        c.style.visibility = "hidden",
        a.is_open = !1,
        l.closeCallback && l.closeCallback(),
        window.removeEventListener ? window.removeEventListener("resize", t, !1) : window.detachEvent && window.detachEvent("onresize", t)),
        !1
    }
    ,
    a.center = function(e) {
        if (c.moved)
            return !1;
        var t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          , s = Math.max(c.clientWidth, c.offsetWidth)
          , r = Math.max(c.clientHeight, c.offsetHeight)
          , o = 0
          , n = 0
          , a = 0
          , i = 0;
        "number" == typeof window.innerWidth ? (o = window.innerWidth,
        n = window.innerHeight) : document.documentElement && document.documentElement.clientWidth && (o = document.documentElement.clientWidth,
        n = document.documentElement.clientHeight),
        "number" == typeof window.pageYOffset ? (i = window.pageYOffset,
        a = window.pageXOffset) : document.body && document.body.scrollLeft ? (i = document.body.scrollTop,
        a = document.body.scrollLeft) : document.documentElement && document.documentElement.scrollLeft && (i = document.documentElement.scrollTop,
        a = document.documentElement.scrollLeft),
        c.style.top = l.pin ? n / 2 - r / 2 + "px" : i + n / 2 - r / 2 + "px",
        Modernizr.constrained ? c.style.left = "0px" : c.style.left = l.pin ? o / 2 - s / 2 + "px" : a + o / 2 - s / 2 + "px",
        l.hug && ("right" === l.hug ? (c.style.left = "",
        c.style.right = "0") : "left" === l.hug ? (c.style.left = "0",
        c.style.right = "") : "top" === l.hug ? (c.style.top = 750 < Modernizr.viewport_height ? "100px" : "0px",
        c.style.bottom = "",
        c.style.left = "10px",
        c.style.position = "fixed") : "bottom" === l.hug && (c.style.bottom = "0",
        c.style.right = "0",
        c.style.top = "",
        c.style.left = "",
        c.style.position = "fixed")),
        h.style.height = t + "px",
        h.style.width = "100%"
    }
	,
    h.setAttribute("id", "modal-overlay"),
    c.setAttribute("id", "modal-container"),
    i.setAttribute("id", "modal-header"),
    _.setAttribute("id", "modal-content"),
    u.setAttribute("id", "modal-close"),
    u.setAttribute("class", "closer"),
    u.setAttribute("aria-label", "Close in-page popup window"),
    d.setAttribute("id", "modal-loading"),
    i.appendChild(u),
    c.appendChild(i),
    c.appendChild(_),
    c.appendChild(d),
    h.style.visibility = "hidden",
    c.style.visibility = "hidden",
    a.is_open = !1,
    window.addEventListener ? window.addEventListener("load", function() {
        document.body.appendChild(h),
        document.body.appendChild(c)
    }, !1) : window.attachEvent && window.attachEvent("onload", function() {
        document.body.appendChild(h),
        document.body.appendChild(c)
    }),
    a
}()

  , chosen_events = {};
function sr_chosen_enable_select(e) {
    var t;
    Modernizr.touch || (t = document.querySelectorAll("form"),
    vjs_forEach.call(t = e ? [e] : t, function(s, e) {
        var t;
        vjs_isHidden(s) && !vjs_hasClass(s, "force_chosen") || vjs_hasClass(s, "no_chosen") || (t = s.querySelectorAll("select"),
        vjs_forEach.call(t, function(e, t) {
            e.has_chosen || vjs_hasClass(e, "no_chosen") || vjs_isHidden(e) && !vjs_hasClass(e, "force_chosen") || (e.has_chosen = !0,
            (20 <= e.length || vjs_hasClass(s, "force_chosen") || vjs_hasClass(e, "force_chosen")) && (vjs_addClass(e, "chosen-select"),
            new Chosen(e)))
        }))
    }))
}
!function() {
    var n, a, e, r, o, i, l, c, _, d, u = 0;
    function s(e, t) {
        this.form_field = e,
        this.options = null != t ? t : {},
        s.browser_is_supported() && (this.is_multiple = this.form_field.multiple,
        this.set_default_text(),
        this.set_default_values(),
        this.setup(),
        this.set_up_html(),
        this.register_observers())
    }
    function t() {
        this.options_index = 0,
        this.parsed = []
    }
    s.prototype.set_default_values = function() {
        var t, s;
        return this.click_test_action = (t = this,
        function(e) {
            return t.test_active_click(e)
        }
        ),
        this.activate_action = (s = this,
        function(e) {
            return s.activate_field(e)
        }
        ),
        this.active_field = !1,
        this.mouse_on_container = !1,
        this.results_showing = !1,
        this.result_highlighted = null,
        this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect,
        this.disable_search_threshold = this.options.disable_search_threshold || 0,
        this.disable_search = this.options.disable_search || !1,
        this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search,
        this.search_contains = this.options.search_contains || !0,
        this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete,
        this.max_selected_options = this.options.max_selected_options || 1 / 0,
        this.inherit_select_classes = this.options.inherit_select_classes || !1,
        this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options,
        this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options
    }
    ,
    s.prototype.set_default_text = function() {
        return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || s.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || s.default_single_text,
        this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || s.default_no_result_text
    }
    ,
    s.prototype.mouse_enter = function() {
        return this.mouse_on_container = !0
    }
    ,
    s.prototype.mouse_leave = function() {
        return this.mouse_on_container = !1
    }
    ,
    s.prototype.input_focus = function(e) {
        if (this.is_multiple) {
            if (!this.active_field)
                return setTimeout((t = this,
                function() {
                    return t.container_mousedown()
                }
                ), 50)
        } else if (!this.active_field)
            return this.activate_field();
        var t;
        return !1
    }
    ,
    s.prototype.input_blur = function(e) {
        var t;
        return !this.mouse_on_container && (this.active_field = !1,
        setTimeout((t = this,
        function() {
            return t.blur_test()
        }
        ), 100))
    }
    ,
    s.prototype.results_option_build = function(e) {
        for (var t, s = "", r = this.results_data, o = 0, n = r.length; o < n; o++)
            t = r[o],
            s += this.result_add_option(t),
            null != e && e.first && (t.selected && this.is_multiple ? this.choice_build(t) : t.selected && !this.is_multiple && this.single_set_selected_text(t.text)),
            t.html_decoded = t.html.unidecode(),
            t.text_decoded = t.text.unidecode();
        return s
    }
    ,
    s.prototype.result_add_option = function(e) {
        var t, s;
        return e.search_match && this.include_option_in_results(e) ? (t = [],
        e.disabled || e.selected && this.is_multiple || t.push("active-result"),
        !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"),
        e.selected && t.push("result-selected"),
        "" !== e.classes && t.push(e.classes),
        (s = document.createElement("li")).className = t.join(" "),
        s.style.cssText = e.style,
        s.setAttribute("data-option-array-index", e.array_index),
        s.innerHTML = e.search_text_raw,
        this.outerHTML(s)) : ""
    }
    ,
    s.prototype.results_update_field = function() {
        return this.set_default_text(),
        this.is_multiple || this.results_reset_cleanup(),
        this.result_clear_highlight(),
        this.results_build(),
        !!this.results_showing && this.winnow_results()
    }
    ,
    s.prototype.reset_single_select_options = function() {
        for (var e, t = this.results_data, s = [], r = 0, o = t.length; r < o; r++)
            (e = t[r]).selected ? s.push(e.selected = !1) : s.push(void 0);
        return s
    }
    ,
    s.prototype.results_toggle = function() {
        return this.results_showing ? this.results_hide() : this.results_show()
    }
    ,
    s.prototype.results_search = function(e) {
        return this.results_showing ? this.winnow_results() : this.results_show()
    }
    ,
    s.prototype.winnow_results = function() {
        var e, t, s, r, o, n, a, i, l, c, _, d;
        for (this.no_results_clear(),
        i = 0,
        e = (l = this.get_search_text()).unidecode().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
        a = this.search_contains ? "" : "^",
        n = new RegExp(a + e,"i"),
        d = new RegExp(e,"i"),
        t = 0,
        s = (o = this.results_data).length; t < s; t++)
            (r = o[t]).search_match = !1,
            this.include_option_in_results(r) && (r.search_text_raw = r.html,
            r.search_text = r.html_decoded,
            r.search_match = this.search_string_match(r.search_text, n),
            r.search_match && (i += 1),
            r.search_match) && l.length && (c = r.search_text.search(d),
            r.search_text.length === r.search_text_raw.length ? (_ = r.search_text_raw.substr(0, c + l.length) + "</em>" + r.search_text_raw.substr(c + l.length),
            r.search_text = _.substr(0, c) + "<em>" + _.substr(c)) : r.search_text = r.search_text_raw);
        return this.result_clear_highlight(),
        i < 1 && l.length ? (this.update_results_content(""),
        this.no_results(l)) : (this.update_results_content(this.results_option_build()),
        this.winnow_results_set_highlight())
    }
    ,
    s.prototype.search_string_match = function(e, t) {
        var s, r, o, n;
        if (t.test(e))
            return !0;
        if (this.enable_split_word_search && (0 <= e.indexOf(" ") || 0 === e.indexOf("[")) && (n = e.replace(/\[|\]/g, "").split(" ")).length)
            for (s = 0,
            r = n.length; s < r; s++)
                if (o = n[s],
                t.test(o))
                    return !0;
        return !1
    }
    ,
    s.prototype.choices_count = function() {
        var e, t, s;
        if (null == this.selected_option_count)
            for (e = this.selected_option_count = 0,
            t = (s = this.form_field.options).length; e < t; e++)
                s[e].selected && (this.selected_option_count += 1);
        return this.selected_option_count
    }
    ,
    s.prototype.choices_click = function(e) {
        return e.preventDefault(),
        !this.results_showing && !this.is_disabled && this.results_show()
    }
    ,
    s.prototype.keyup_checker = function(e) {
        var t = null != (t = e.which) ? t : e.keyCode;
        switch (this.search_field_scale(),
        t) {
        case 8:
            if (this.is_multiple && this.backstroke_length < 1 && 0 < this.choices_count())
                return this.keydown_backstroke();
            if (this.pending_backstroke)
                break;
            return this.result_clear_highlight(),
            this.results_search();
        case 13:
            if (e.preventDefault(),
            this.results_showing)
                return this.result_select(e);
            break;
        case 27:
            return this.results_showing && this.results_hide(),
            !0;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
            break;
        default:
            return this.results_search()
        }
    }
    ,
    s.prototype.include_option_in_results = function(e) {
        return !(this.is_multiple && !this.display_selected_options && e.selected || !this.display_disabled_options && e.disabled || e.empty)
    }
    ,
    s.prototype.search_results_touchstart = function(e) {
        return this.touch_started = !0,
        this.search_results_mouseover(e)
    }
    ,
    s.prototype.search_results_touchmove = function(e) {
        return this.touch_started = !1,
        this.search_results_mouseout(e)
    }
    ,
    s.prototype.search_results_touchend = function(e) {
        return !!this.touch_started && this.search_results_mouseup(e)
    }
    ,
    s.prototype.outerHTML = function(e) {
        var t;
        return e.outerHTML || ((t = document.createElement("div")).appendChild(e),
        t.innerHTML)
    }
    ,
    s.browser_is_supported = function() {
        return "Microsoft Internet Explorer" === window.navigator.appName ? 8 <= document.documentMode : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent))
    }
    ,
    s.default_multiple_text = __sr_text_select_some_options,
    s.default_single_text = __sr_text_select_an_option,
    s.default_no_result_text = __sr_text_no_results_match,
    n = s,
    e = document.createElement("div"),
    a = {
        find_parent: function(e, t) {
            e = a.find_traversal(e, "parentNode", function(e) {
                return e === document || t(e)
            });
            return e === document ? null : e
        },
        find_next_sibling: function(e, t) {
            return a.find_traversal(e, "nextSibling", t)
        },
        find_prev_sibling: function(e, t) {
            return a.find_traversal(e, "previousSibling", t)
        },
        find_traversal: function(e, t, s) {
            for (var r = e[t]; null !== r && !s(r); )
                r = r[t];
            return r
        }
    },
    "classList"in e ? (a.has_class = function(e, t) {
        return e.classList.contains(t)
    }
    ,
    a.add_class = function(e, t) {
        return e.classList.add(t)
    }
    ,
    a.remove_class = function(e, t) {
        return e.classList.remove(t)
    }
    ) : (a.has_class = function(e, t) {
        return -1 < (" " + e.className.toUpperCase() + " ").indexOf(" " + t.toUpperCase() + " ")
    }
    ,
    a.add_class = function(e, t) {
        if (!a.has_class(e, t))
            return e.className += " " + t
    }
    ,
    a.remove_class = function(e, t) {
        return e.className = d.trim((" " + e.className + " ").replace(" " + t, ""))
    }
    ),
    "getComputedStyle"in window ? a.get_style = function(e, t) {
        return window.getComputedStyle(e, null).getPropertyValue(t)
    }
    : "currentStyle"in e ? a.get_style = function(e, t) {
        return e.currentStyle[d.camel_case(t)]
    }
    : a.get_style = function(e, t) {
        return ""
    }
    ,
    null != document.addEventListener ? (chosen_events.add = function(e, t, s) {
        return i(t) && (s = c(e, t, s),
        t = r(t)),
        e.addEventListener(t, s, !1)
    }
    ,
    chosen_events.remove = function(e, t, s) {
        return i(t) && (s = l(e, t, s),
        t = r(t)),
        e.removeEventListener(t, s, !1)
    }
    ) : null != document.attachEvent && (chosen_events.add = function(t, e, s) {
        var r = t["eventhandler" + e + s] = function() {
            var e = window.event;
            return e.target = e.srcElement,
            e.currentTarget = t,
            e.preventDefault = function() {
                return e.returnValue = !1
            }
            ,
            e.stopPropagation = function() {
                return e.cancelBubble = !0
            }
            ,
            s.call(t, e)
        }
        ;
        return t.attachEvent("on" + e, r)
    }
    ,
    chosen_events.remove = function(e, t, s) {
        var r = e["eventhandler" + t + s];
        return e.detachEvent("on" + t, r),
        e["eventhandler" + t + s] = null
    }
    ),
    null != document.createEvent ? chosen_events.fire = function(e, t, s) {
        var r;
        return null == s && (s = {}),
        (r = document.createEvent("HTMLEvents")).initEvent(t, !0, !0),
        r.eventName = t,
        r.memo = s,
        e.dispatchEvent(r)
    }
    : null != document.createEventObject && (chosen_events.fire = function(e, t, s) {
        var r;
        if (null == s && (s = {}),
        !(-1 < t.indexOf(":")))
            return (r = document.createEventObject()).eventType = t,
            r.eventName = t,
            r.memo = s,
            e.fireEvent("on" + t, r)
    }
    ),
    i = function(e) {
        return null != o[e]
    }
    ,
    r = function(e) {
        return o[e].mapped_to
    }
    ,
    c = function(e, t, s) {
        var r = t + "_" + s;
        return null == e._chosen_wrapped && (e._chosen_wrapped = {}),
        null == e._chosen_wrapped[r] && (e._chosen_wrapped[r] = o[t].handler(e, s)),
        e._chosen_wrapped[r]
    }
    ,
    l = function(e, t, s) {
        var r = t + "_" + s
          , t = c(e, t, s);
        return e._chosen_wrapped[r] = null,
        t
    }
    ,
    (o = {
        mouseenter: {
            mapped_to: "mouseover",
            handler: function(t, s) {
                return function(e) {
                    return !(t === e.relatedTarget || null != e.relatedTarget && a.find_parent(e.relatedTarget, function(e) {
                        return e === t
                    })) && s.call(this, e)
                }
            }
        }
    }).mouseleave = {
        mapped_to: "mouseout",
        handler: o.mouseenter.handler
    },
    t.prototype.add_node = function(e) {
        return this.add_option(e)
    }
    ,
    t.prototype.add_option = function(e) {
        return "OPTION" === e.nodeName.toUpperCase() && ("" !== e.text ? this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: e.value,
            text: e.text,
            html: e.innerHTML,
            selected: e.selected,
            disabled: e.disabled,
            classes: e.className,
            style: e.style.cssText
        }) : this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            html: "",
            text: "",
            empty: !0
        }),
        this.options_index += 1)
    }
    ,
    t.prototype.escapeExpression = function(e) {
        var t;
        return null == e || !1 === e ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        e.replace(/&(?!\w+;)|[\<\>\"\'\`]/g, function(e) {
            return t[e] || "&amp;"
        })) : e
    }
    ,
    (_ = t).select_to_array = function(e) {
        for (var t, s = new _, r = e.childNodes, o = 0, n = r.length; o < n; o++)
            t = r[o],
            s.add_node(t);
        return s.parsed
    }
    ,
    d = {
        camel_case: function(e) {
            return e.replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            })
        }
    },
    null != String.prototype.trim ? d.trim = function(e) {
        return e.trim()
    }
    : d.trim = function(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    ;
    var h = {}.hasOwnProperty;
    this.Chosen = function() {
        var e, t = o, s = n;
        for (e in s)
            h.call(s, e) && (t[e] = s[e]);
        function r() {
            this.constructor = t
        }
        function o() {
            return o.__super__.constructor.apply(this, arguments)
        }
        return r.prototype = s.prototype,
        t.prototype = new r,
        t.__super__ = s.prototype,
        o.prototype.setup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex,
            this.is_rtl = a.has_class(this.form_field, "chosen-rtl")
        }
        ,
        o.prototype.set_up_html = function() {
            var e, t, s = ["chosen-container"];
            for (t in s.push("chosen-container-" + (this.is_multiple ? "multi" : "single")),
            this.inherit_select_classes && this.form_field.className && s.push(this.form_field.className),
            this.is_rtl && s.push("chosen-rtl"),
            e = {
                class: s.join(" "),
                title: this.form_field.title
            },
            this.form_field.id.length && (e.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
            this.container = document.createElement("div"),
            e)
                this.container.setAttribute(t, e[t]);
            return this.is_multiple ? this.container.innerHTML = '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : this.container.innerHTML = '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>',
            this.form_field.style.display = "none",
            u++,
            this.container.id = "chosen_tmp_hold".concat(u),
            this.form_field.insertAdjacentHTML("beforebegin", this.container.outerHTML),
            this.container = document.getElementById("chosen_tmp_hold".concat(u)),
            this.dropdown = this.container.querySelector("div.chosen-drop"),
            this.search_field = this.container.getElementsByTagName("input")[0],
            this.search_results = this.container.querySelector("ul.chosen-results"),
            this.search_field_scale(),
            this.search_no_results = this.container.querySelector("li.no-results"),
            this.is_multiple ? (this.search_choices = this.container.querySelector("ul.chosen-choices"),
            this.search_container = this.container.querySelector("li.search-field")) : (this.search_container = this.container.querySelector("div.chosen-search"),
            this.selected_item = this.container.querySelector(".chosen-single")),
            this.results_build(),
            this.set_tab_index(),
            this.set_label_behavior(),
            chosen_events.fire(this.form_field, "chosen:ready", {
                chosen: this
            })
        }
        ,
        o.prototype.register_observers = function() {
            var t, s, r, o, n, a, i, l, c, _, d, u, h, p, m, f, v, g, b, y;
            return chosen_events.add(this.container, "mousedown", (t = this,
            function(e) {
                t.container_mousedown(e)
            }
            )),
            chosen_events.add(this.container, "mouseup", (s = this,
            function(e) {
                s.container_mouseup(e)
            }
            )),
            chosen_events.add(this.container, "mouseenter", (r = this,
            function(e) {
                r.mouse_enter(e)
            }
            )),
            chosen_events.add(this.container, "mouseleave", (o = this,
            function(e) {
                o.mouse_leave(e)
            }
            )),
            chosen_events.add(this.search_results, "mouseup", (n = this,
            function(e) {
                n.search_results_mouseup(e)
            }
            )),
            chosen_events.add(this.search_results, "mouseover", (a = this,
            function(e) {
                a.search_results_mouseover(e)
            }
            )),
            chosen_events.add(this.search_results, "mouseout", (i = this,
            function(e) {
                i.search_results_mouseout(e)
            }
            )),
            chosen_events.add(this.search_results, "mousewheel DOMMouseScroll", (l = this,
            function(e) {
                l.search_results_mousewheel(e)
            }
            )),
            chosen_events.add(this.search_results, "touchstart", (c = this,
            function(e) {
                c.search_results_touchstart(e)
            }
            )),
            chosen_events.add(this.search_results, "touchmove", (_ = this,
            function(e) {
                _.search_results_touchmove(e)
            }
            )),
            chosen_events.add(this.search_results, "touchend", (d = this,
            function(e) {
                d.search_results_touchend(e)
            }
            )),
            chosen_events.add(this.form_field, "chosen:updated", (u = this,
            function(e) {
                u.results_update_field(e)
            }
            )),
            chosen_events.add(this.form_field, "chosen:activate", (h = this,
            function(e) {
                h.activate_field(e)
            }
            )),
            chosen_events.add(this.form_field, "chosen:open", (p = this,
            function(e) {
                p.container_mousedown(e)
            }
            )),
            chosen_events.add(this.form_field, "chosen:close", (m = this,
            function(e) {
                m.input_blur(e)
            }
            )),
            chosen_events.add(this.search_field, "blur", (f = this,
            function(e) {
                f.input_blur(e)
            }
            )),
            chosen_events.add(this.search_field, "keyup", (v = this,
            function(e) {
                v.keyup_checker(e)
            }
            )),
            chosen_events.add(this.search_field, "keydown", (g = this,
            function(e) {
                g.keydown_checker(e)
            }
            )),
            chosen_events.add(this.search_field, "focus", (b = this,
            function(e) {
                b.input_focus(e)
            }
            )),
            this.is_multiple ? chosen_events.add(this.search_choices, "click", (y = this,
            function(e) {
                y.choices_click(e)
            }
            )) : chosen_events.add(this.container, "click", function(e) {
                e.preventDefault()
            })
        }
        ,
        o.prototype.destroy = function() {
            return chosen_events.remove(document, "click", this.click_test_action),
            this.search_field.tabIndex && (this.form_field.tabIndex = this.search_field.tabIndex),
            this.container.remove(),
            this.form_field.style.display = ""
        }
        ,
        o.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field.disabled,
            this.is_disabled ? (a.add_class(this.container, "chosen-disabled"),
            this.search_field.disabled = !0,
            this.is_multiple || chosen_events.remove(this.selected_item, "focus", this.activate_action),
            this.close_field()) : (a.remove_class(this.container, "chosen-disabled"),
            this.search_field.disabled = !1,
            !this.is_multiple && chosen_events.add(this.selected_item, "focus", this.activate_action))
        }
        ,
        o.prototype.container_mousedown = function(e) {
            return !this.is_disabled && (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(),
            null == e || !a.has_class(e.target, "search-choice-close")) && (this.active_field ? this.is_multiple || !e || e.target !== this.selected_item && null == a.find_parent(e.target, function(e) {
                return a.has_class(e, "chosen-single")
            }) || (e.preventDefault(),
            this.results_toggle()) : (this.is_multiple && (this.search_field.value = ""),
            chosen_events.add(document, "click", this.click_test_action),
            this.results_show()),
            this.activate_field())
        }
        ,
        o.prototype.container_mouseup = function(e) {
            return "ABBR" === e.target.nodeName && !this.is_disabled && this.results_reset(e)
        }
        ,
        o.prototype.search_results_mousewheel = function(e) {
            var t;
            return null != (t = e.originalEvent ? -e.originalEvent.wheelDelta || e.originalEvent.detail : t) && (e.preventDefault(),
            "DOMMouseScroll" === e.type && (t *= 40),
            this.search_results.scrollTop(t + this.search_results.scrollTop()))
        }
        ,
        o.prototype.blur_test = function(e) {
            return !(this.active_field || !a.has_class(this.container, "chosen-container-active")) && this.close_field()
        }
        ,
        o.prototype.close_field = function() {
            return chosen_events.remove(document, "click", this.click_test_action),
            this.active_field = !1,
            this.results_hide(),
            a.remove_class(this.container, "chosen-container-active"),
            this.clear_backstroke(),
            this.show_search_field_default(),
            this.search_field_scale()
        }
        ,
        o.prototype.activate_field = function() {
            return a.add_class(this.container, "chosen-container-active"),
            this.active_field = !0,
            this.search_field.value = this.search_field.value,
            this.search_field.focus()
        }
        ,
        o.prototype.test_active_click = function(e) {
            e = a.find_parent(e.target, function(e) {
                return a.has_class(e, "chosen-container")
            });
            return this.container === e ? this.active_field = !0 : this.close_field()
        }
        ,
        o.prototype.results_build = function() {
            var e, t, s, r;
            if (this.parsing = !0,
            this.selected_option_count = null,
            this.results_data = _.select_to_array(this.form_field),
            this.is_multiple)
                for (t = 0,
                s = (r = this.search_choices.querySelectorAll("li.search-choice")).length; t < s; t++)
                    (e = r[t]).parentNode.removeChild(e);
            else
                this.is_multiple || (this.single_set_selected_text(),
                this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field.readOnly = !0,
                a.add_class(this.container, "chosen-container-single-nosearch")) : (this.search_field.readOnly = !1,
                a.remove_class(this.container, "chosen-container-single-nosearch")));
            return this.update_results_content(this.results_option_build({
                first: !0
            })),
            this.search_field_disabled(),
            this.show_search_field_default(),
            this.search_field_scale(),
            this.parsing = !1
        }
        ,
        o.prototype.result_do_highlight = function(e) {
            var t, s, r;
            if (null != e) {
                if (this.result_clear_highlight(),
                this.result_highlight = e,
                a.add_class(this.result_highlight, "highlighted"),
                (e = parseInt(a.get_style(this.search_results, "max-height"), 10)) + (r = this.search_results.scrollTop) <= (t = (s = this.result_highlight.offsetTop) + this.result_highlight.clientHeight))
                    return this.search_results.scrollTop = 0 < t - e ? t - e : 0;
                if (s < r)
                    return this.search_results.scrollTop = s
            }
            return !1
        }
        ,
        o.prototype.result_clear_highlight = function() {
            return this.result_highlight && a.remove_class(this.result_highlight, "highlighted"),
            this.result_highlight = null
        }
        ,
        o.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (chosen_events.fire(this.form_field, "chosen:maxselected", {
                chosen: this
            }),
            !1) : (a.add_class(this.container, "chosen-with-drop"),
            chosen_events.fire(this.form_field, "chosen:showing_dropdown", {
                chosen: this
            }),
            this.results_showing = !0,
            this.search_field.focus(),
            this.search_field.value = this.search_field.value,
            this.winnow_results())
        }
        ,
        o.prototype.update_results_content = function(e) {
            return this.search_results.innerHTML = e
        }
        ,
        o.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(),
            a.remove_class(this.container, "chosen-with-drop"),
            chosen_events.fire(this.form_field, "chosen:hiding_dropdown", {
                chosen: this
            })),
            this.results_showing = !1
        }
        ,
        o.prototype.set_tab_index = function(e) {
            var t;
            return !!this.form_field.tabindex && (t = this.form_field.tabindex,
            this.form_field.tabindex = -1,
            this.search_field.tabindex = t)
        }
        ,
        o.prototype.set_label_behavior = function() {
            var t;
            return this.form_field_label = a.find_parent(this.form_field, function(e) {
                return "LABEL" === e.nodeName.toUpperCase()
            }),
            null == this.form_field_label && this.form_field.id.length && (this.form_field_label = document.querySelector("label[for='" + this.form_field.id + "']")),
            null != this.form_field_label && chosen_events.add(this.form_field_label, "click", (t = this,
            function(e) {
                return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
            }
            ))
        }
        ,
        o.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.value = this.default_text,
            a.add_class(this.search_field, "default")) : (this.search_field.value = "",
            a.remove_class(this.search_field, "default"))
        }
        ,
        o.prototype.search_results_mouseup = function(e) {
            var t = a.has_class(e.target, "active-result") ? e.target : a.find_parent(e.target, function(e) {
                return a.has_class(e, "active-result")
            });
            return null != t && (this.result_highlight = t,
            this.result_select(e),
            this.search_field.focus())
        }
        ,
        o.prototype.search_results_mouseover = function(e) {
            e = a.has_class(e.target, "active-result") ? e.target : a.find_parent(e.target, function(e) {
                return a.has_class(e, "active-result")
            });
            return !!e && this.result_do_highlight(e)
        }
        ,
        o.prototype.search_results_mouseout = function(e) {
            return !!a.has_class(e.target, "active-result") && this.result_clear_highlight()
        }
        ,
        o.prototype.choice_build = function(e) {
            var t, s, r = document.createElement("li");
            return r.className = "search-choice",
            r.innerHTML = "<span>" + e.html + "</span>",
            e.disabled ? a.add_class(r, "search-choice-disabled") : ((t = document.createElement("a")).href = "#",
            t.className = "search-choice-close",
            t.setAttribute("data-option-array-index", e.array_index),
            chosen_events.add(t, "click", (s = this,
            function(e) {
                return s.choice_destroy_link_click(e)
            }
            )),
            r.appendChild(t)),
            this.search_container.parentNode.insertBefore(r, this.search_container)
        }
        ,
        o.prototype.choice_destroy_link_click = function(e) {
            return e.preventDefault(),
            e.stopPropagation(),
            !this.is_disabled && this.choice_destroy(e.target)
        }
        ,
        o.prototype.choice_destroy = function(e) {
            return !!this.result_deselect(e.getAttribute("data-option-array-index")) && (this.show_search_field_default(),
            this.is_multiple && 0 < this.choices_count() && this.search_field.value.length < 1 && this.results_hide(),
            null != (e = a.find_parent(e, function(e) {
                return "LI" === e.nodeName.toUpperCase()
            })) && e.parentNode.removeChild(e),
            this.search_field_scale())
        }
        ,
        o.prototype.results_reset = function() {
            return this.reset_single_select_options(),
            this.form_field.options[0].selected = !0,
            this.single_set_selected_text(),
            this.show_search_field_default(),
            this.results_reset_cleanup(),
            chosen_events.fire(this.form_field, "change"),
            !!this.active_field && this.results_hide()
        }
        ,
        o.prototype.results_reset_cleanup = function() {
            var e;
            return this.current_selectedIndex = this.form_field.selectedIndex,
            !!(e = this.selected_item.getElementsByTagName("abbr")[0]) && e.parentNode.removeChild(e)
        }
        ,
        o.prototype.result_select = function(e) {
            var t;
            return !!this.result_highlight && (t = this.result_highlight,
            this.result_clear_highlight(),
            this.is_multiple && this.max_selected_options <= this.choices_count() ? (chosen_events.fire(this.form_field, "chosen:maxselected", {
                chosen: this
            }),
            !1) : (this.is_multiple ? a.remove_class(t, "active-result") : this.reset_single_select_options(),
            (t = this.results_data[t.getAttribute("data-option-array-index")]).selected = !0,
            this.form_field.options[t.options_index].selected = !0,
            this.selected_option_count = null,
            this.is_multiple ? this.choice_build(t) : this.single_set_selected_text(t.text),
            (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(),
            this.search_field.value = "",
            !this.is_multiple && this.form_field.selectedIndex === this.current_selectedIndex || chosen_events.fire(this.form_field, "change", {
                selected: this.form_field.options[t.options_index].value
            }),
            this.current_selectedIndex = this.form_field.selectedIndex,
            this.search_field_scale()))
        }
        ,
        o.prototype.single_set_selected_text = function(e) {
            return (e = null == e ? this.default_text : e) === this.default_text ? a.add_class(this.selected_item, "chosen-default") : (this.single_deselect_control_build(),
            a.remove_class(this.selected_item, "chosen-default")),
            this.selected_item.getElementsByTagName("span")[0].textContent = e
        }
        ,
        o.prototype.result_deselect = function(e) {
            e = this.results_data[e];
            return !this.form_field.options[e.options_index].disabled && (e.selected = !1,
            this.form_field.options[e.options_index].selected = !1,
            this.selected_option_count = null,
            this.result_clear_highlight(),
            this.results_showing && this.winnow_results(),
            chosen_events.fire(this.form_field, "change", {
                deselected: this.form_field.options[e.options_index].value
            }),
            this.search_field_scale(),
            !0)
        }
        ,
        o.prototype.single_deselect_control_build = function() {
            var e, t;
            return !!this.allow_single_deselect && (0 === this.selected_item.getElementsByTagName("abbr").length && (t = this.selected_item.getElementsByTagName("span")[0],
            (e = document.createElement("abbr")).className = "search-choice-close",
            t.parentNode.insertBefore(e, t.nextSibling)),
            a.add_class(this.selected_item, "chosen-single-with-deselect"))
        }
        ,
        o.prototype.get_search_text = function() {
            var e;
            return this.search_field.value === this.default_text ? "" : ((e = document.createElement("div")).textContent = d.trim(this.search_field.value),
            e.innerHTML)
        }
        ,
        o.prototype.winnow_results_set_highlight = function() {
            var e = this.is_multiple ? [] : this.search_results.querySelectorAll(".result-selected.active-result")
              , e = e.length ? e[0] : this.search_results.querySelector(".active-result");
            return null != e && this.result_do_highlight(e)
        }
        ,
        o.prototype.no_results = function(e) {
            var t, s = document.createElement("li");
            return s.className = "no-results",
            s.innerHTML = this.results_none_found + " ",
            (t = document.createElement("span")).textContent = e,
            s.appendChild(t),
            this.search_results.appendChild(s)
        }
        ,
        o.prototype.no_results_clear = function() {
            var e = this.search_results.querySelector(".no-results");
            return null != e && e.parentNode.removeChild(e)
        }
        ,
        o.prototype.keydown_arrow = function() {
            var e;
            return this.results_showing && this.result_highlight ? !!(e = a.find_next_sibling(this.result_highlight, function(e) {
                return "LI" === e.nodeName.toUpperCase() && a.has_class(e, "active-result")
            })) && this.result_do_highlight(e) : this.results_show()
        }
        ,
        o.prototype.keyup_arrow = function() {
            var e;
            return this.results_showing || this.is_multiple ? !!this.result_highlight && (null != (e = a.find_prev_sibling(this.result_highlight, function(e) {
                return "LI" === e.nodeName.toUpperCase() && a.has_class(e, "active-result")
            })) ? this.result_do_highlight(e) : (0 < this.choices_count() && this.results_hide(),
            this.result_clear_highlight())) : this.results_show()
        }
        ,
        o.prototype.keydown_backstroke = function() {
            var e, t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.getElementsByTagName("a")[0]),
            this.clear_backstroke()) : !(!(t = this.search_container.parentNode.querySelectorAll("li.search-choice")).length || (e = t[t.length - 1],
            a.has_class(e, "search-choice-disabled"))) && (this.pending_backstroke = e,
            this.single_backstroke_delete ? this.keydown_backstroke() : a.add_class(this.pending_backstroke, "search-choice-focus"))
        }
        ,
        o.prototype.clear_backstroke = function() {
            return this.pending_backstroke && a.remove_class(this.pending_backstroke, "search-choice-focus"),
            this.pending_backstroke = null
        }
        ,
        o.prototype.keydown_checker = function(e) {
            var t = null != (t = e.which) ? t : e.keyCode;
            switch (this.search_field_scale(),
            8 !== t && this.pending_backstroke && this.clear_backstroke(),
            t) {
            case 8:
                this.backstroke_length = this.search_field.value.length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(e),
                this.mouse_on_container = !1;
                break;
            case 13:
                e.preventDefault();
                break;
            case 38:
                e.preventDefault(),
                this.keyup_arrow();
                break;
            case 40:
                e.preventDefault(),
                this.keydown_arrow()
            }
        }
        ,
        o.prototype.search_field_scale = function() {
            var e, t, s, r, o, n, a;
            if (this.is_multiple) {
                for (a = 0,
                n = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"],
                (e = document.createElement("div")).style.position = "absolute",
                e.style.left = "-1000px",
                e.style.top = "-1000px",
                s = 0,
                r = n.length; s < r; s++)
                    e.style[d.camel_case(o = n[s])] = this.search_field.style[o];
                return e.appendChild(document.createTextNode(this.search_field.value)),
                document.body.appendChild(e),
                a = e.offsetWidth + 25,
                e.parentNode.removeChild(e),
                t = this.container.outerWidth,
                this.search_field.style.width = (a = t - 10 < a ? t - 10 : a) + "px"
            }
            return !1
        }
        ,
        o
    }()
}

.call(this);
var Hogan = {}
  , unidecode_datasheet = (!function(e) {
    e.Template = function(e, t, s, r) {
        this.r = e || this.r,
        this.c = s,
        this.options = r,
        this.text = t || "",
        this.buf = ""
    }
    ,
    e.Template.prototype = {
        r: function() {
            return ""
        },
        v: function(e) {
            return e = i(e),
            a.test(e) ? e.replace(t, "&amp;").replace(s, "&lt;").replace(r, "&gt;").replace(o, "&#39;").replace(n, "&quot;") : e
        },
        t: i,
        render: function(e, t, s) {
            return this.ri([e], t || {}, s)
        },
        ri: function(e, t, s) {
            return this.r(e, t, s)
        },
        rp: function(e, t, s, r) {
            e = s[e];
            return e ? (e = this.c && "string" == typeof e ? this.c.compile(e, this.options) : e).ri(t, s, r) : ""
        },
        rs: function(e, t, s) {
            var r = e[e.length - 1];
            if (l(r))
                for (var o = 0; o < r.length; o++)
                    e.push(r[o]),
                    s(e, t, this),
                    e.pop();
            else
                s(e, t, this)
        },
        s: function(e, t, s, r, o, n, a) {
            return (!l(e) || 0 !== e.length) && (s = "" === (e = "function" == typeof e ? this.ls(e, t, s, r, o, n, a) : e) || !!e,
            !r && s && t && t.push("object" == typeof e ? e : t[t.length - 1]),
            s)
        },
        d: function(e, t, s, r) {
            var o = e.split(".")
              , n = this.f(o[0], t, s, r)
              , a = null;
            if ("." === e && l(t[t.length - 2]))
                return t[t.length - 1];
            for (var i = 1; i < o.length; i++)
                n = n && "object" == typeof n && o[i]in n ? (a = n)[o[i]] : "";
            return !(r && !n) && (r || "function" != typeof n || (t.push(a),
            n = this.lv(n, t, s),
            t.pop()),
            n)
        },
        f: function(e, t, s, r) {
            for (var o, n = !1, a = !1, i = t.length - 1; 0 <= i; i--)
                if ((o = t[i]) && "object" == typeof o && e in o) {
                    n = o[e],
                    a = !0;
                    break
                }
            return a ? r || "function" != typeof n ? n : this.lv(n, t, s) : !r && ""
        },
        ho: function(e, t, s, r, o) {
            var n = this.c
              , a = this.options;
            return a.delimiters = o,
            r = null == (r = e.call(t, r)) ? String(r) : r.toString(),
            this.b(n.compile(r, a).render(t, s)),
            !1
        },
        b: function(e) {
            this.buf += e
        },
        fl: function() {
            var e = this.buf;
            return this.buf = "",
            e
        },
        ls: function(e, t, s, r, o, n, a) {
            t = t[t.length - 1];
            if (!r && this.c && 0 < e.length)
                return this.ho(e, t, s, this.text.substring(o, n), a);
            if ("function" == typeof (e = e.call(t))) {
                if (r)
                    return !0;
                if (this.c)
                    return this.ho(e, t, s, this.text.substring(o, n), a)
            }
            return e
        },
        lv: function(e, t, s) {
            t = t[t.length - 1],
            e = e.call(t);
            return "function" == typeof e && (e = i(e.call(t)),
            this.c) && ~e.indexOf("{{") ? this.c.compile(e, this.options).render(t, s) : i(e)
        }
    };
    var t = /&/g
      , s = /</g
      , r = />/g
      , o = /\'/g
      , n = /\"/g
      , a = /[&<>\"\']/;
    function i(e) {
        return String(null == e ? "" : e)
    }
    var l = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}("undefined" != typeof exports ? exports : Hogan),
!function(r) {
    var b = /\S/
      , t = /\"/g
      , s = /\n/g
      , o = /\r/g
      , n = /\\/g
      , y = {
        "#": 1,
        "^": 2,
        "/": 3,
        "!": 4,
        ">": 5,
        "<": 6,
        "=": 7,
        _v: 8,
        "{": 9,
        "&": 10
    };
    function w(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }
    function j(e, t, s) {
        if (t.charAt(s) == e.charAt(0)) {
            for (var r = 1, o = e.length; r < o; r++)
                if (t.charAt(s + r) != e.charAt(r))
                    return;
            return 1
        }
    }
    function i(e, t, s, r) {
        for (var o = [], n = null, a = null; 0 < e.length; ) {
            if ("#" == (a = e.shift()).tag || "^" == a.tag || function(e, t) {
                for (var s = 0, r = t.length; s < r; s++)
                    if (t[s].o == e.n)
                        return e.tag = "#"
            }(a, r))
                s.push(a),
                a.nodes = i(e, a.tag, s, r);
            else if ("/" == a.tag) {
                if (0 === s.length)
                    throw new Error("Closing tag without opener: /" + a.n);
                if (n = s.pop(),
                a.n == n.n || function(e, t, s) {
                    for (var r = 0, o = s.length; r < o; r++)
                        if (s[r].c == e && s[r].o == t)
                            return 1
                }(a.n, n.n, r))
                    return n.end = a.i,
                    o;
                throw new Error("Nesting error: " + n.n + " vs. " + a.n)
            }
            o.push(a)
        }
        if (0 < s.length)
            throw new Error("missing closing tag: " + s.pop().n);
        return o
    }
    function d(e) {
        return e.replace(n, "\\\\").replace(t, '\\"').replace(s, "\\n").replace(o, "\\r")
    }
    function u(e) {
        return ~e.indexOf(".") ? "d" : "f"
    }
    function h(e) {
        for (var t, s, r, o, n, a, i = "", l = 0, c = e.length; l < c; l++) {
            var _ = e[l].tag;
            "#" == _ ? i += (t = e[l].nodes,
            s = e[l].n,
            r = u(e[l].n),
            o = e[l].i,
            n = e[l].end,
            a = e[l].otag + " " + e[l].ctag,
            "if(_.s(_." + r + '("' + d(s) + '",c,p,1),c,p,0,' + o + "," + n + ',"' + a + '")){_.rs(c,p,function(c,p,_){' + h(t) + "});c.pop();}") : "^" == _ ? i += (r = e[l].nodes,
            s = e[l].n,
            "if(!_.s(_." + u(e[l].n) + '("' + d(s) + '",c,p,1),c,p,1,0,0,"")){' + h(r) + "};") : "<" == _ || ">" == _ ? i += '_.b(_.rp("' + d((o = e[l]).n) + '",c,p,"' + (o.indent || "") + '"));' : "{" == _ || "&" == _ ? i += (n = e[l].n,
            "_.b(_.t(_." + u(e[l].n) + '("' + d(n) + '",c,p,0)));') : "\n" == _ ? i += p('"\\n"' + (e.length - 1 == l ? "" : " + i")) : "_v" == _ ? i += (a = e[l].n,
            "_.b(_.v(_." + u(e[l].n) + '("' + d(a) + '",c,p,0)));') : void 0 === _ && (i += p('"' + d(e[l]) + '"'))
        }
        return i
    }
    function p(e) {
        return "_.b(" + e + ");"
    }
    r.scan = function(e, t) {
        var s, r, o, n, a, i = e.length, l = 0, c = null, _ = "", d = [], u = !1, h = 0, p = 0, m = "{{", f = "}}";
        function v() {
            0 < _.length && (d.push(new String(_)),
            _ = "")
        }
        function g(e, t) {
            if (v(),
            e && function() {
                for (var e = !0, t = p; t < d.length; t++)
                    if (!(e = d[t].tag && y[d[t].tag] < y._v || !d[t].tag && null === d[t].match(b)))
                        return;
                return e
            }())
                for (var s, r = p; r < d.length; r++)
                    d[r].tag || ((s = d[r + 1]) && ">" == s.tag && (s.indent = d[r].toString()),
                    d.splice(r, 1));
            else
                t || d.push({
                    tag: "\n"
                });
            u = !1,
            p = d.length
        }
        for (t && (t = t.split(" "),
        m = t[0],
        f = t[1]),
        h = 0; h < i; h++)
            0 == l ? j(m, e, h) ? (--h,
            v(),
            l = 1) : "\n" == e.charAt(h) ? g(u) : _ += e.charAt(h) : 1 == l ? (h += m.length - 1,
            l = "=" == (c = (s = y[e.charAt(h + 1)]) ? e.charAt(h + 1) : "_v") ? (o = h,
            a = n = void 0,
            n = "=" + f,
            a = (r = e).indexOf(n, o),
            r = w(r.substring(r.indexOf("=", o) + 1, a)).split(" "),
            m = r[0],
            f = r[1],
            h = a + n.length - 1,
            0) : (s && h++,
            2),
            u = h) : j(f, e, h) ? (d.push({
                tag: c,
                n: w(_),
                otag: m,
                ctag: f,
                i: "/" == c ? u - f.length : h + m.length
            }),
            _ = "",
            h += f.length - 1,
            l = 0,
            "{" == c && ("}}" == f ? h++ : "}" === (o = d[d.length - 1]).n.substr(o.n.length - 1) && (o.n = o.n.substring(0, o.n.length - 1)))) : _ += e.charAt(h);
        return g(u, !0),
        d
    }
    ,
    r.generate = function(e, t, s) {
        e = 'var _=this;_.b(i=i||"");' + h(e) + "return _.fl();";
        return s.asString ? "function(c,p,i){" + e + ";}" : new r.Template(new Function("c","p","i",e),t,r,s)
    }
    ,
    r.parse = function(e, t, s) {
        return i(e, 0, [], (s = s || {}).sectionTags || [])
    }
    ,
    r.cache = {},
    r.compile = function(e, t) {
        var s = e + "||" + !!(t = t || {}).asString
          , r = this.cache[s];
        return r || (r = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t),
        this.cache[s] = r)
    }
}("undefined" != typeof exports ? exports : Hogan),
String.prototype.unidecode = function() {
    for (var e, t, s = "", r = 0, o = this.length; r < o; r++)
        (t = this.charCodeAt(r)) < 128 ? s = s.concat(this[r]) : 3583 < t || (e = t % 256,
        (t = unidecode_datasheet[t >> 8]) && t.length > e && (s = s.concat(t[e])));
    return s
}
,
{
    0: ["\0", "", "", "", "", "", "", "", "\b", "\t", "\n", "\v", "\f", "\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "]", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "!", "C/", "PS", "$?", "Y=", "|", "SS", '"', "(c)", "a", "<<", "!", "", "(r)", "-", "deg", "+-", "2", "3", "'", "u", "P", "*", ",", "1", "o", ">>", "1/4", "1/2", "3/4", "?", "A", "A", "A", "A", "A", "A", "AE", "C", "E", "E", "E", "E", "I", "I", "I", "I", "D", "N", "O", "O", "O", "O", "O", "x", "O", "U", "U", "U", "U", "Y", "Th", "ss", "a", "a", "a", "a", "a", "a", "ae", "c", "e", "e", "e", "e", "i", "i", "i", "i", "d", "n", "o", "o", "o", "o", "o", "/", "o", "u", "u", "u", "u", "y", "th", "y"],
    1: ["A", "a", "A", "a", "A", "a", "C", "c", "C", "c", "C", "c", "C", "c", "D", "d", "D", "d", "E", "e", "E", "e", "E", "e", "E", "e", "E", "e", "G", "g", "G", "g", "G", "g", "G", "g", "H", "h", "H", "h", "I", "i", "I", "i", "I", "i", "I", "i", "I", "i", "IJ", "ij", "J", "j", "K", "k", "k", "L", "l", "L", "l", "L", "l", "L", "l", "L", "l", "N", "n", "N", "n", "N", "n", "'n", "ng", "NG", "O", "o", "O", "o", "O", "o", "OE", "oe", "R", "r", "R", "r", "R", "r", "S", "s", "S", "s", "S", "s", "S", "s", "T", "t", "T", "t", "T", "t", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "W", "w", "Y", "y", "Y", "Z", "z", "Z", "z", "Z", "z", "s", "b", "B", "B", "b", "6", "6", "O", "C", "c", "D", "D", "D", "d", "d", "3", "@", "E", "F", "f", "G", "G", "hv", "I", "I", "K", "k", "l", "l", "W", "N", "n", "O", "O", "o", "OI", "oi", "P", "p", "YR", "2", "2", "SH", "sh", "t", "T", "t", "T", "U", "u", "Y", "V", "Y", "y", "Z", "z", "ZH", "ZH", "zh", "zh", "2", "5", "5", "ts", "w", "|", "||", "|=", "!", "DZ", "Dz", "dz", "LJ", "Lj", "lj", "NJ", "Nj", "nj", "A", "a", "I", "i", "O", "o", "U", "u", "U", "u", "U", "u", "U", "u", "U", "u", "@", "A", "a", "A", "a", "AE", "ae", "G", "g", "G", "g", "K", "k", "O", "o", "O", "o", "ZH", "zh", "j", "DZ", "Dz", "dz", "G", "g", "HV", "W", "N", "n", "A", "a", "AE", "ae", "O", "o"],
    2: ["A", "a", "A", "a", "E", "e", "E", "e", "I", "i", "I", "i", "O", "o", "O", "o", "R", "r", "R", "r", "U", "u", "U", "u", "S", "s", "T", "t", "Y", "y", "H", "h", "N", "d", "OU", "ou", "Z", "z", "A", "a", "E", "e", "O", "o", "O", "o", "O", "o", "O", "o", "Y", "y", "l", "n", "t", "j", "db", "qp", "A", "C", "c", "L", "T", "s", "z", "", "", "B", "U", "^", "E", "e", "J", "j", "q", "q", "R", "r", "Y", "y", "a", "a", "a", "b", "o", "c", "d", "d", "e", "@", "@", "e", "e", "e", "e", "j", "g", "g", "g", "g", "u", "Y", "h", "h", "i", "i", "I", "l", "l", "l", "lZ", "W", "W", "m", "n", "n", "n", "o", "OE", "O", "F", "r", "r", "r", "r", "r", "r", "r", "R", "R", "s", "S", "j", "S", "S", "t", "t", "u", "U", "v", "^", "w", "y", "Y", "z", "z", "Z", "Z", "?", "?", "?", "C", "@", "B", "E", "G", "H", "j", "k", "L", "q", "?", "?", "dz", "dZ", "dz", "ts", "tS", "tC", "fN", "ls", "lz", "WW", "]]", "h", "h", "k", "h", "j", "r", "r", "r", "r", "w", "y", "'", '"', "`", "'", "`", "`", "'", "?", "?", "<", ">", "^", "V", "^", "V", "'", "-", "/", "\\", ",", "_", "\\", "/", ":", ".", "`", "'", "^", "V", "+", "-", "V", ".", "@", ",", "~", '"', "R", "X", "G", "l", "s", "x", "?", "", "", "", "", "", "", "", "V", "=", '"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    3: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a", "e", "i", "o", "u", "c", "d", "h", "m", "r", "t", "v", "x", "", "", "", "", "'", ",", "", "", "", "", "", "", "", "", "?", "", "", "", "", "", "", "", "A", ";", "E", "E", "I", "", "O", "", "U", "O", "I", "A", "B", "G", "D", "E", "Z", "E", "Th", "I", "K", "L", "M", "N", "Ks", "O", "P", "R", "", "S", "T", "U", "Ph", "Kh", "Ps", "O", "I", "U", "a", "e", "e", "i", "u", "a", "b", "g", "d", "e", "z", "e", "th", "i", "k", "l", "m", "n", "x", "o", "p", "r", "s", "s", "t", "u", "ph", "kh", "ps", "o", "i", "u", "o", "u", "o", "", "b", "th", "U", "U", "U", "ph", "p", "&", "", "", "St", "st", "W", "w", "Q", "q", "Sp", "sp", "Sh", "sh", "F", "f", "Kh", "kh", "H", "h", "G", "g", "CH", "ch", "Ti", "ti", "k", "r", "c", "j", "", "", "", "", "", "", "", "", "", "", ""],
    4: ["Ie", "Io", "Dj", "Gj", "Ie", "Dz", "I", "Yi", "J", "Lj", "Nj", "Tsh", "Kj", "I", "U", "Dzh", "A", "B", "V", "G", "D", "E", "Zh", "Z", "I", "I", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "Kh", "Ts", "Ch", "Sh", "Shch", "'", "Y", "'", "E", "Iu", "Ia", "a", "b", "v", "g", "d", "e", "zh", "z", "i", "i", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "kh", "ts", "ch", "sh", "shch", "'", "y", "'", "e", "iu", "ia", "ie", "io", "dj", "gj", "ie", "dz", "i", "yi", "j", "lj", "nj", "tsh", "kj", "i", "u", "dzh", "O", "o", "E", "e", "Ie", "ie", "E", "e", "Ie", "ie", "O", "o", "Io", "io", "Ks", "ks", "Ps", "ps", "F", "f", "Y", "y", "Y", "y", "u", "u", "O", "o", "O", "o", "Ot", "ot", "Q", "q", "*1000*", "", "", "", "", "", "*100.000*", "*1.000.000*", "", "", '"', '"', "R'", "r'", "G'", "g'", "G'", "g'", "G'", "g'", "Zh'", "zh'", "Z'", "z'", "K'", "k'", "K'", "k'", "K'", "k'", "K'", "k'", "N'", "n'", "Ng", "ng", "P'", "p'", "Kh", "kh", "S'", "s'", "T'", "t'", "U", "u", "U'", "u'", "Kh'", "kh'", "Tts", "tts", "Ch'", "ch'", "Ch'", "ch'", "H", "h", "Ch", "ch", "Ch'", "ch'", "`", "Zh", "zh", "K'", "k'", "", "", "N'", "n'", "", "", "Ch", "ch", "", "", "", "a", "a", "A", "a", "Ae", "ae", "Ie", "ie", "@", "@", "@", "@", "Zh", "zh", "Z", "z", "Dz", "dz", "I", "i", "I", "i", "O", "o", "O", "o", "O", "o", "E", "e", "U", "u", "U", "u", "U", "u", "Ch", "ch", "", "", "Y", "y", "", "", "", "", ""],
    5: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "B", "G", "D", "E", "Z", "E", "E", "T`", "Zh", "I", "L", "Kh", "Ts", "K", "H", "Dz", "Gh", "Ch", "M", "Y", "N", "Sh", "O", "Ch`", "P", "J", "Rh", "S", "V", "T", "R", "Ts`", "W", "P`", "K`", "O", "F", "", "", "<", "'", "/", "!", ",", "?", ".", "", "a", "b", "g", "d", "e", "z", "e", "e", "t`", "zh", "i", "l", "kh", "ts", "k", "h", "dz", "gh", "ch", "m", "y", "n", "sh", "o", "ch`", "p", "j", "rh", "s", "v", "t", "r", "ts`", "w", "p`", "k`", "o", "f", "ew", "", ".", "-", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "@", "e", "a", "o", "i", "e", "e", "a", "a", "o", "", "u", "'", "", "", "", "", "", "", ":", "", "", "", "", "", "", "", "", "", "", "", "", "", "b", "g", "d", "h", "v", "z", "kh", "t", "y", "k", "k", "l", "m", "m", "n", "n", "s", "`", "p", "p", "ts", "ts", "q", "r", "sh", "t", "", "", "", "", "", "V", "oy", "i", "'", '"', "", "", "", "", "", "", "", "", "", ""],
    6: ["", "", "", "", "", "", "", "", "", "", "", "", ",", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ";", "", "", "", "?", "", "", "a", "'", "w'", "", "y'", "", "b", "@", "t", "th", "j", "H", "kh", "d", "dh", "r", "z", "s", "sh", "S", "D", "T", "Z", "`", "G", "", "", "", "", "", "", "f", "q", "k", "l", "m", "n", "h", "w", "~", "y", "an", "un", "in", "a", "u", "i", "W", "", "", "'", "'", "", "", "", "", "", "", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "%", ".", ",", "*", "", "", "", "'", "'", "'", "", "'", "'w", "'u", "'y", "tt", "tth", "b", "t", "T", "p", "th", "bh", "'h", "H", "ny", "dy", "H", "ch", "cch", "dd", "D", "D", "Dt", "dh", "ddh", "d", "D", "D", "rr", "R", "R", "R", "R", "R", "R", "j", "R", "S", "S", "S", "S", "S", "T", "GH", "F", "F", "F", "v", "f", "ph", "Q", "Q", "kh", "k", "K", "K", "ng", "K", "g", "G", "N", "G", "G", "G", "L", "L", "L", "L", "N", "N", "N", "N", "N", "h", "Ch", "hy", "h", "H", "@", "W", "oe", "oe", "u", "yu", "yu", "W", "v", "y", "Y", "Y", "W", "", "", "y", "y'", ".", "ae", "", "", "", "", "", "", "", "@", "#", "", "", "", "", "", "", "", "", "", "", "^", "", "", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Sh", "D", "Gh", "&", "+m"],
    7: ["//", "/", ",", "!", "!", "-", ",", ",", ";", "?", "~", "{", "}", "*", "", "", "'", "", "b", "g", "g", "d", "d", "h", "w", "z", "H", "t", "t", "y", "yh", "k", "l", "m", "n", "s", "s", "`", "p", "p", "S", "q", "r", "sh", "t", "", "", "", "a", "a", "a", "A", "A", "A", "e", "e", "e", "E", "i", "i", "u", "u", "u", "o", "", "`", "'", "", "", "X", "Q", "@", "@", "|", "+", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "h", "sh", "n", "r", "b", "L", "k", "'", "v", "m", "f", "dh", "th", "l", "g", "ny", "s", "d", "z", "t", "y", "p", "j", "ch", "tt", "hh", "kh", "th", "z", "sh", "s", "d", "t", "z", "`", "gh", "q", "w", "a", "aa", "i", "ee", "u", "oo", "e", "ey", "o", "oa", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    9: ["", "N", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "R", "L", "eN", "e", "e", "ai", "oN", "o", "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "nnn", "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "l", "lll", "v", "sh", "ss", "s", "h", "", "", "'", "'", "aa", "i", "ii", "u", "uu", "R", "RR", "eN", "e", "e", "ai", "oN", "o", "o", "au", "", "", "", "AUM", "'", "'", "`", "'", "", "", "", "q", "khh", "ghh", "z", "dddh", "rh", "f", "yy", "RR", "LL", "L", "LL", " / ", " // ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "N", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "R", "RR", "", "", "e", "ai", "", "", "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "", "p", "ph", "b", "bh", "m", "y", "r", "", "l", "", "", "", "sh", "ss", "s", "h", "", "", "'", "", "aa", "i", "ii", "u", "uu", "R", "RR", "", "", "e", "ai", "", "", "o", "au", "", "", "", "", "", "", "", "", "", "", "+", "", "", "", "", "rr", "rh", "", "yy", "RR", "LL", "L", "LL", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "r'", "r`", "Rs", "Rs", "1/", "2/", "3/", "4/", " 1 - 1/", "/16", "", "", "", "", ""],
    10: ["", "", "N", "", "", "a", "aa", "i", "ii", "u", "uu", "", "", "", "", "ee", "ai", "", "", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "", "p", "ph", "b", "bb", "m", "y", "r", "", "l", "ll", "", "v", "sh", "", "s", "h", "", "", "'", "", "aa", "i", "ii", "u", "uu", "", "", "", "", "ee", "ai", "", "", "oo", "au", "", "", "", "", "", "", "", "", "", "", "", "", "khh", "ghh", "z", "rr", "", "f", "", "", "", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "N", "H", "", "", "G.E.O.", "", "", "", "", "", "", "", "", "", "", "", "", "N", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "R", "", "eN", "", "e", "ai", "oN", "", "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "", "p", "ph", "b", "bh", "m", "ya", "r", "", "l", "ll", "", "v", "sh", "ss", "s", "h", "", "", "'", "'", "aa", "i", "ii", "u", "uu", "R", "RR", "eN", "", "e", "ai", "oN", "", "o", "au", "", "", "", "AUM", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "RR", "", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    11: ["", "N", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "R", "L", "", "", "e", "ai", "", "", "o", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "", "p", "ph", "b", "bh", "m", "y", "r", "", "l", "ll", "", "", "sh", "ss", "s", "h", "", "", "'", "'", "aa", "i", "ii", "u", "uu", "R", "", "", "", "e", "ai", "", "", "o", "au", "", "", "", "", "", "", "", "", "", "+", "+", "", "", "", "", "rr", "rh", "", "yy", "RR", "LL", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "", "", "", "e", "ee", "ai", "", "o", "oo", "au", "k", "", "", "", "ng", "c", "", "j", "", "ny", "tt", "", "", "", "nn", "t", "", "", "", "n", "nnn", "p", "", "", "", "m", "y", "r", "rr", "l", "ll", "lll", "v", "", "ss", "s", "h", "", "", "", "", "aa", "i", "ii", "u", "uu", "", "", "", "e", "ee", "ai", "", "o", "oo", "au", "", "", "", "", "", "", "", "", "", "", "+", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+10+", "+100+", "+1000+", "", "", "", "", "", "", "", "", "", "", "", ""],
    12: ["", "N", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "R", "L", "", "e", "ee", "ai", "", "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "", "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", "", "v", "sh", "ss", "s", "h", "", "", "", "", "aa", "i", "ii", "u", "uu", "R", "RR", "", "e", "ee", "ai", "", "o", "oo", "au", "", "", "", "", "", "", "", "", "+", "+", "", "", "", "", "", "", "", "", "", "RR", "LL", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "R", "L", "", "e", "ee", "ai", "", "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "", "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", "", "v", "sh", "ss", "s", "h", "", "", "", "", "aa", "i", "ii", "u", "uu", "R", "RR", "", "e", "ee", "ai", "", "o", "oo", "au", "", "", "", "", "", "", "", "", "+", "+", "", "", "", "", "", "", "", "lll", "", "RR", "LL", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    13: ["", "", "N", "H", "", "a", "aa", "i", "ii", "u", "uu", "R", "L", "", "e", "ee", "ai", "", "o", "oo", "au", "k", "kh", "g", "gh", "ng", "c", "ch", "j", "jh", "ny", "tt", "tth", "dd", "ddh", "nn", "t", "th", "d", "dh", "n", "", "p", "ph", "b", "bh", "m", "y", "r", "rr", "l", "ll", "lll", "v", "sh", "ss", "s", "h", "", "", "", "", "aa", "i", "ii", "u", "uu", "R", "", "", "e", "ee", "ai", "", "o", "oo", "au", "", "", "", "", "", "", "", "", "", "", "+", "", "", "", "", "", "", "", "", "RR", "LL", "", "", "", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "N", "H", "", "a", "aa", "ae", "aae", "i", "ii", "u", "uu", "R", "RR", "L", "LL", "e", "ee", "ai", "o", "oo", "au", "", "", "", "k", "kh", "g", "gh", "ng", "nng", "c", "ch", "j", "jh", "ny", "jny", "nyj", "tt", "tth", "dd", "ddh", "nn", "nndd", "t", "th", "d", "dh", "n", "", "nd", "p", "ph", "b", "bh", "m", "mb", "y", "r", "", "l", "", "", "v", "sh", "ss", "s", "h", "ll", "f", "", "", "", "", "", "", "", "", "aa", "ae", "aae", "i", "ii", "u", "", "uu", "", "R", "e", "ee", "ai", "o", "oo", "au", "L", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "RR", "LL", " . ", "", "", "", "", "", "", "", "", "", ""]
});
function sr_record_analytics_event(e, t, s, r) {
    try {
        r && 0;
        var o = {
            event_value: s,
            event_label: t || "none"
        };
        r && (o.send_to = r),
        gtag("event", e || "none", o)
    } catch (e) {}
}
function sr_record_directory() {
    return document.location.pathname.split("/")[1]
}
function sr_record_page() {
    return document.location.pathname.split("/").reverse()[0]
}
function sr_record_nearest_parent_id(e) {
    e = vjs_closest(e, "[id]");
    return e ? e.id : "none"
}
function sr_record_page_link_clicks(e) {
    if ("stathead" !== sr_SITE_ABB && "/" !== document.location.pathname && "/cfb/" !== document.location.pathname && "/cbb/" !== document.location.pathname && "/es/" !== document.location.pathname && "/fr/" !== document.location.pathname && "/de/" !== document.location.pathname && "/pt/" !== document.location.pathname && "/ru/" !== document.location.pathname && "/pl/" !== document.location.pathname && "/en/" !== document.location.pathname)
        return !1;
    e = e || document;
    for (var t, s = 0, r = (t = "stathead" === sr_SITE_ABB ? e.querySelectorAll("a,input,select,button") : e.getElementsByTagName("a")).length; s < r; s++)
        t[s].has_click_track || (t[s].has_click_track = !0,
        vjs_addEvent(t[s], "click", function() {
            var e = this.href || this.tagName
              , t = (e = (e = e.replace(/.*fbref.com./, "sr:")).replace(/.*-reference.com./, "sr:"),
            sr_record_nearest_parent_id(this));
            sr_record_analytics_event("click_from_to", document.location.pathname, e + "||" + t)
        }))
}
function sr_perf_setStartTime() {
    sr_perf_startTime = new Date
}
function sr_perf_alertLog() {
    alert(sr_perf_log)
}
function sr_perf_appendLog(e) {
    if (document.getElementById("suppress_warnings"))
        return !1;
    var t = (t = document.getElementById("wrap")) || document.querySelector("body>div")
      , s = document.getElementById("perflog");
    s || (s = document.createElement("div"),
    t.appendChild(s)),
    s.id = "perflog",
    s.className = "pagelog",
    s.innerHTML = e ? "<pre>" + sr_perf_log + "</pre>" : s.innerHTML + "<pre>" + sr_perf_log + "</pre>"
}
function sr_perf_consoleLog() {}
function sr_perf_logPerformance(e) {
    var t = new Date
      , s = t.getTime() - sr_perf_startTime.getTime()
      , r = t.getTime() - sr_perf_lastTime.getTime();
    return e && (sr_perf_log = sr_perf_log + "\n" + e + "\tload\t" + s + "ms\t\trun\t" + r + "ms"),
    sr_perf_lastTime = t,
    r
}
function sr_modernizr_append() {
    if (document.getElementById("suppress_warnings"))
        return !1;
    var e, t = document.createElement("div"), s = (t.id = "modernizr",
    t.className = "pagelog",
    "<p>Modernizr classes: " + document.documentElement.className + "</p>");
    for (e in Modernizr)
        s = s + "<br> " + e + " : " + Modernizr[e];
    s = s + "<br> Modernizr.viewport_width : " + Modernizr.viewport_width,
    t.innerHTML = s;
    var r = document.getElementById("wrap");
    (r = r || document.querySelector("body>div")) && r.appendChild(t)
}
log_performance = !0,
sr_is_production && (log_performance = !1),
sr_is_production || sr_utilities_js_loader.push(sr_modernizr_append);
const sr_auth_cookie = "stathead_user";
function sr_auth_login() {
    if (document.querySelector(".logged_in.user")) {
        var e = vjs_readCookie(sr_auth_cookie);
        if (e) {
            let t = e.split(/::/);
            t[1] && 4 < t.length && "new" === t[4] && (document.body.classList.add("user_logged_in"),
            document.querySelectorAll(".logged_in").forEach(e => {
                e = e.querySelector(".username");
                e && (e.innerHTML = " " + t[0])
            }
            ))
        }
    }
}
function sr_auth_logout_page_elements() {
    vjs_createCookie(sr_auth_cookie, ""),
    vjs_createCookie("stathead_type", ""),
    vjs_createCookie("stathead_site", ""),
    document.body.classList.remove("user_logged_in"),
    document.querySelectorAll(".logged_in").forEach(e => {
        e = e.querySelector(".username");
        e && (e.innerHTML = "")
    }
    )
}
function sr_cc_show_commented_content(s, e) {
    for (var t, r = "", o = 0, n = s.childNodes.length; o < n; o++)
        s.childNodes[o].nodeType && 8 === s.childNodes[o].nodeType && (r += s.childNodes[o].textContent);
    0 < r.length && s.insertAdjacentHTML("beforeend", r),
    vjs_removeClass(s, "commented"),
    e && (vjs_addClass(e, "hidden"),
    s.insertAdjacentHTML("afterbegin", '<div class="closer" aria-label="close opened section" role="button"></div>'),
    (t = s.querySelector(".closer")) && (t.onclick = function() {
        t.parentNode.removeChild(t);
        vjs_removeClass(s.querySelector("button.comment_control"), "hidden");
        var e = s.querySelector(".table_wrapper > .table_container, .data_grid, .section_content")
          , e = (e && (vjs_removeChild(e),
        vjs_removeChild(s.querySelector(".footer")),
        vjs_addClass(s, "commented"),
        vjs_removeClass(s, "long_note")),
        s.querySelectorAll(".section_heading,.switcher,.switcher_content,.footer"))
          , e = (vjs_forEach.call(e, function(e, t) {
            vjs_removeChild(e)
        }),
        vjs_addClass(s, "commented"),
        vjs_removeClass(s, "long_note"),
        s.querySelector(".comment_control.long"));
        vjs_removeChild(e)
    }
    ),
    e = s.querySelectorAll(".stats_table,.data_grid"),
    vjs_forEach.call(e, function(e, t) {
        vjs_hasClass(e, "stats_table") ? (vjs_hasClass(s, "long") && sr_cc_setup_long_div(s),
        sr_st_construct_stats_table_features(e.id, !1)) : vjs_hasClass(e, "data_grid") && sr_st_construct_data_grid_features(e.id, !1)
    }));
    var a, i, l, e = s.querySelectorAll("form.sr_goto");
    vjs_forEach.call(e, function(e, t) {
        sr_form_setup_goto_page(e)
    }),
    sr_menus_setOpeners(s),
    sr_chosen_enable_select(s),
    s.querySelector(".switcher") && ((e = s.querySelector(".switcher")).is_setup = !1,
    sr_menus_setSwitchers(e)),
    sr_setup_presets(s),
    "undefined" != typeof google && (a = s.querySelector("#chart")) && (i = vjs_getAttr(a, "data-chart-type") || "LineChart",
    l = function() {}
    ,
    google.load("visualization", "1.1", {
        packages: ["corechart"],
        callback: function() {
            sr_chart_data = new google.visualization.DataTable,
            sr_drawChart(),
            google.visualization.events.addListener(a, "select", l);
            var e = new google.visualization.ChartWrapper({
                chartType: i,
                dataTable: sr_chart_data,
                options: sr_chart_options,
                containerId: "chart"
            });
            e.draw(),
            sr_chart = sr_chart && e.getChart()
        }
    }))
}
function sr_cc_setup_commented_divs() {
    var e = document.querySelectorAll(".commented");
    vjs_forEach.call(e, function(e, t) {
        sr_cc_setup_commented_div(e, t)
    })
}
function sr_cc_setup_commented_div(e, t) {
    if (!e)
        return !1;
    var s, r = !1;
    vjs_hasClass(e, "hide_always") && (r = !0),
    vjs_removeClass(e, "setup_commented"),
    Modernizr && (Modernizr.phone || r) && !sr_detect_operaMini ? e.querySelector(".comment_control") || (s = document.createElement("BUTTON"),
    (r = e.querySelector(".section_heading h2,.table_heading h2")) && (__sr_tableHeaderText = r.innerHTML),
    (r = e.querySelector(".section_heading .section_anchor, .table_wrapper.tabbed .section_anchor")) && (__sr_tableHeaderText = vjs_getAttr(r, "data-label")),
    r = __sr_text_show + " " + __sr_tableHeaderText,
    s.innerHTML = r,
    vjs_addClass(s, "comment_control"),
    vjs_setAttr(s, "type", "button"),
    s.onclick = function() {
        sr_cc_show_commented_content(e, s),
        sr_record_analytics_event("comment_control", sr_record_directory(), e.id)
    }
    ,
    r = (r = e.id + "_control").replace(/^all_/, ""),
    s.id = r,
    e.appendChild(s)) : e.id && sr_cc_show_commented_content(e, null)
}
function sr_cc_show_long_content(e, t) {
    t && t.parentNode.removeChild(t),
    e.classList.remove("long");
    t = e.querySelector("table.long:not(.fixed_cols)");
    t && (t.classList.remove("long"),
    sr_st_add_table_headers(t.id)) && t.classList.contains("sliding_cols") && sr_st_mobilize_stats_table(t.id),
    sr_chosen_enable_select(e)
}
function sr_cc_setup_long_divs() {
    var e = document.querySelectorAll(".long");
    vjs_forEach.call(e, function(e, t) {
        sr_cc_setup_long_div(e)
    })
}
function sr_cc_setup_long_div(s, r) {
    if (!s && r)
        s = document.getElementById(r);
    else if (!s)
        return !1;
    let e = !1;
    var r = s.classList.contains("tabbed")
      , o = (s.classList.contains("hide_always") && (e = !0),
    s.classList.contains("hide_long_always") && (e = !0),
    s.querySelector(".placeholder"));
    let n = 0
      , t = !0;
    if (o.dataset["line-count"] ? (n = o.dataset["line-count"]) <= 35 && (t = !1) : (o = s.querySelectorAll("table tbody tr"),
    a = s.querySelectorAll("table tbody tr.thead"),
    o.length <= 35 && (t = !1),
    n = o.length - a.length),
    t && Modernizr && (Modernizr.phone || Modernizr.tablet || e) && !sr_detect_operaMini) {
        o = s.querySelector("table");
        o.classList.add("long");
        let t = document.createElement("BUTTON")
          , e = (t.innerHTML = __sr_text_show_hidden_rows + " 21 " + __sr_text_to_numbers + " <span>" + (n || "....") + "</span>",
        t.classList.add("comment_control"),
        t.classList.add("long"),
        t.addEventListener("click", function(e) {
            sr_cc_show_long_content(s, t),
            sr_record_analytics_event("hide_long_click", sr_record_directory(), s.id)
        }),
        s.id + "_control");
        e = e.replace(/^all_|^div_stats_/, ""),
        t.id = e;
        var a = o.getBoundingClientRect();
        t.style.maxWidth = a.width ? a.width.toString() + "px" : "500px",
        s.appendChild(t),
        r || (o = s.querySelector(".footer")) && (o.parentNode.removeChild(o),
        s.appendChild(o)),
        250 <= n && s.classList.add("long_note")
    } else
        s.id && !s.classList.contains("commented") && (sr_cc_show_long_content(s, null),
        250 <= n) && s.classList.add("long_note");
    s.classList.remove("setup_long")
}
function sr_utilities_set_server_cookie() {
    Modernizr.is_live ? vjs_createCookie("is_live", !0) : Modernizr.is_build ? vjs_createCookie("is_build", !0) : Modernizr.is_dev && vjs_createCookie("is_dev", !0)
}
function sr_utilities_js_load() {
    if ("undefined" != typeof sr_utilities_js_loader)
        for (; 0 < sr_utilities_js_loader.length; )
            sr_utilities_js_loader.pop()()
}
function sr_utilities_number_with_commas(e, t) {
    return (t ? "$" : "").concat(e.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, __sr_text_thousands_separator)
}
function sr_display_local_icon(e) {
    var t = "";
    "veteran" === e ? t = '<a href="http://www.sports-reference.com/blog/professional-athletes-veterans/"><img id="local_icon" src="https://cdn.ssref.net/req/201610281/images/klecko/vet.svg" border="0" data-pin-nopin="true"></a>' : "valentine" === e && (t = '<img id="local_icon" src="https://cdn.ssref.net/req/201610281/images/klecko/valentine.svg" border="0" data-pin-nopin="true">'),
    document.querySelector("body").insertAdjacentHTML("beforeend", t)
}
function sr_setup_local_icon() {
    var e = new Date
      , t = e.getMonth() + 1
      , s = e.getDate();
    e.getHours();
    11 === t && 11 === s && vjs_hasClass(document.body, "veteran") ? sr_display_local_icon("veteran") : 2 === t && 14 === s && (e = document.querySelector("#meta h1 span")) && ((t = (t = e.innerHTML).unidecode()).match(/ hart$/i) || t.match(/ love$/i) || t.match(/ amor$/i) || t.match(/ amador/i) || t.match(/ enamorad/i) || t.match(/ lovejoy$/i) || t.match(/valentin/i) || t.match(/ cupid/i) || t.match(/cupid /i) || t.match(/ heart /i)) && sr_display_local_icon("valentine")
}
function sr_utilities_add_in_mem_band() {
    var e = document.querySelector("body");
    vjs_addClass(e, "in_memoriam"),
    e.insertAdjacentHTML("beforeend", sr_in_memoriam_band)
}
function sr_utilites_check_on_in_mem_band(e) {
    var e = sr_utilities_compute_age(vjs_getAttr(e, "data-death"))
      , t = e.replace("d", "");
    (t = t.replace("-", ".")) && e.match("-") && sr_utilities_is_honored_person() && (parseFloat(t) <= .031 || parseFloat(t) == parseInt(t)) && sr_utilities_add_in_mem_band()
}
sr_utilities_js_loader.push(sr_setup_local_icon);
var sr_in_memoriam_band = '<img id="in_mem_band" src="https://cdn.ssref.net/req/201602150/images/in_mem.gif">';
function sr_utilities_person_age() {
    var e = document.getElementById("necro-birth")
      , t = document.getElementById("necro-death")
      , s = "0000-00-00";
    if (vjs_hasClass(document.body, "in_memoriam") && sr_utilities_add_in_mem_band(),
    t && sr_utilites_check_on_in_mem_band(t),
    e) {
        var r = vjs_getAttr(e, "data-birth")
          , s = "0000-00-00";
        if (t && (s = vjs_getAttr(t, "data-death")),
        t && "0000-00-00" != r && "0000-00-00" != s) {
            s = sr_utilities_compute_age(r, s);
            if (s)
                return void t.insertAdjacentHTML("beforeend", " <nobr>(Aged&nbsp;" + s + ")</nobr>")
        }
        t || "0000-00-00" == r || (t = (t = (s = sr_utilities_compute_age(r)).replace("d", "")).replace("-", ".")) && parseFloat(t) <= 105 && (r = "",
        sr_utilities_is_honored_person() && parseInt(t) === parseFloat(t) && (r = ", <strong>" + __sr_text_happy_birthday + "</strong>"),
        e.insertAdjacentHTML("afterend", " <span><nobr>(" + __sr_text_Age + ":&nbsp;" + s + r + ")</nobr></span>"))
    }
}
function sr_utilities_is_honored_person() {
    var e = !0
      , t = window.location.href;
    return t = (t = (t = (t = (t = (t = t.replace("pfref", "pro-football-reference.com")).replace("hkref", "hockey-reference.com")).replace("bbref", "baseball-reference.com")).replace("cfbref", "sports-reference.com")).replace("cbbref", "sports-reference.com")).replace("bkref", "basketball-reference.com"),
    document.querySelector(".personanongrata") && (e = !1),
    e = /pro-football-reference/.test(t) && /HernAa00/.test(t) || /pro-football-reference/.test(t) && /CarrRa00/.test(t) || /pro-football-reference/.test(t) && /PhilLa00/.test(t) || /pro-football-reference/.test(t) && /RoziBo20/.test(t) || /pro-football-reference/.test(t) && /SimpO.00/.test(t) || /pro-football-reference/.test(t) && /SharDa00/.test(t) || /pro-football-reference/.test(t) && /SmitAn20/.test(t) || /pro-football-reference/.test(t) && /BelcJo00/.test(t) || /pro-football-reference/.test(t) && /NapoEr20/.test(t) || /pro-football-reference/.test(t) && /NapoEr20/.test(t) || /pro-football-reference/.test(t) && /BrowBr00/.test(t) || /pro-football-reference/.test(t) && /AlleKe21/.test(t) || /pro-football-reference/.test(t) && /HendTh00/.test(t) || /pro-football-reference/.test(t) && /HenlDa20/.test(t) || /pro-football-reference/.test(t) && /KaneTo00/.test(t) || /pro-football-reference/.test(t) && /RashSa20/.test(t) || /pro-football-reference/.test(t) && /SpilCJ99/.test(t) || /pro-football-reference/.test(t) && /WebsNa20/.test(t) || /baseball-reference/.test(t) && /machaju01/.test(t) || /baseball-reference/.test(t) && /urbinug01/.test(t) || /baseball-reference/.test(t) && /mooredo01/.test(t) || /baseball-reference/.test(t) && /bradlmi01/.test(t) || /baseball-reference/.test(t) && /chouibo01/.test(t) || /baseball-reference/.test(t) && /hallme01/.test(t) || /baseball-reference/.test(t) && /curtich01/.test(t) || /baseball-reference/.test(t) && /luekejo01/.test(t) || /baseball-reference/.test(t) && /torreru01/.test(t) || /basketball-reference/.test(t) && /crittja01/.test(t) || /basketball-reference/.test(t) && /payneto01/.test(t) || /basketball-reference/.test(t) && /johnsed02/.test(t) || /basketball-reference/.test(t) && /patteru01/.test(t) || /basketball-reference/.test(t) && /willisl01/.test(t) || /hockey-reference/.test(t) && /kanepa01/.test(t) || /hockey-reference/.test(t) && /dantomi01/.test(t) || /hockey-reference/.test(t) && /voynovi01/.test(t) ? !1 : e
}
function sr_utilities_compute_localtime(e) {
    var t = document;
    e && !(t = document.getElementById(e)) || (e = t.querySelectorAll('[data-venue-epoch]:not([data-venue-epoch=""])'),
    vjs_forEach.call(e, function(e, t) {
        var s, r, o, n, a, i, l;
        if (!e.is_set)
            return e.is_set = !0,
            !(!(s = vjs_nextMatchingSibling(e, ".localtime")) || !vjs_hasClass(s, "localtime") || (r = vjs_getAttr(e, "data-venue-date"),
            o = vjs_getAttr(e, "data-venue-time"),
            a = vjs_getAttr(e, "data-venue-epoch"),
            e = vjs_getAttr(e, "data-venue-time-only"),
            (n = new Date(0)).setUTCSeconds(a),
            a = vjs_dateToYMD(n),
            l = "",
            (i = n.toString().slice(16, 21)) !== o && (l = i,
            l = e ? "(" + l + ")" : (l = a !== r ? l + ", " + n.toString().slice(0, 10) : l) + " (" + __sr_text_local_time + ")",
            s.innerHTML = l),
            0))
    }))
}
function sr_utilities_compute_age(e, t) {
    if (!e && t)
        return "";
    if ((e = e.replace(/-/g, "")).length < 4)
        return "";
    if (4 === e.length)
        e = (e + "0000").substring(0, 8);
    else if (8 !== e.length)
        return "";
    var s = e.match(/(\d{4})(\d{2})(\d{2})/)
      , r = new Date(s[1],s[2] - 1,s[3]);
    if (t) {
        if ((t = t.replace(/-/g, "")).length < 4)
            return "";
        if (4 === t.length)
            t = (t + "0000").substring(0, 8);
        else if (8 !== t.length)
            return "";
        var o = t.match(/(\d{4})(\d{2})(\d{2})/)
          , n = new Date(o[1],o[2] - 1,o[3])
    }
    n || (o = new Date,
    n = new Date(o.getFullYear(),o.getMonth(),o.getDate()));
    var a = parseInt(n.getFullYear())
      , o = !0;
    if ((t && "00" === t.slice(-2) || "00" === e.slice(-2)) && (o = !1),
    l < 0 || 40150 <= l)
        return 0;
    for (var i = 0, l = Math.round((n.getTime() - r.getTime()) / 1e3 / 60 / 60 / 24), c = parseInt(s[1]) + 1; c <= parseInt(a); c++) {
        var _, d = new Date(c,s[2] - 1,s[3]);
        d.getTime() <= n.getTime() ? (_ = new Date(c - 1,s[2] - 1,s[3]),
        l -= Math.round((d.getTime() - _.getTime()) / 1e3 / 60 / 60 / 24),
        i++) : c = a + 1
    }
    return i = i.toString(),
    o ? i = i + "-" + vjs_padStringWithChars(l, 3, "0") + "d" : (i += "yrs.",
    (t && t.substr(4, 2) === e.substr(4, 2) || t && ("00" === t.substr(4, 2) || "00" === e.substr(4, 2))) && (i += " approx")),
    i
}
function sr_utilities_change_tag(e, t) {
    var s, r = document.createElement(t);
    for (s of e.attributes)
        r.setAttributeNS(null, s.name, s.value);
    for (; e.firstChild; )
        r.appendChild(e.firstChild);
    return e.replaceWith(r),
    r
}
var sr_csEngine, sr_autocomplete_default_config = {
    name: "players",
    header: "",
    template: ['<div><p class="search-results-years">', "GER ", '<span class="f-i f-de"></span>', "</p>", '<p class="search-results-item">', "{{#a}}<strong>{{/a}}", "{{v}}", "{{#a}}</strong>{{/a}}", "</p>", '<div class="subhead">', '<span class="yrs">2007-2012,</span>', " Manchester City, Roma</div>", "</div>"].join(""),
    limit: 10
};
function sr_setup_autocomplete_configs(e, s) {
    var r = []
      , o = ((e = Array.isArray(e) ? e : [e]).forEach(function(e, t) {
        e = vjs_mergeObjects(sr_autocomplete_default_config, e);
        r.push(e)
    }),
    {})
      , n = []
      , a = RegExp("^" + (s || ""));
    return r.forEach(function(e) {
        if (s && !a.test(e.name))
            return !1;
        if (e.url_match) {
            var t = new RegExp(e.url_match);
            if (!t.test(document.URL))
                return !1
        }
        n.push(e.name),
        e.csvStorageKey = sr_SITE_ABB + "__" + e.name + "__csv",
        e.adjacencyListKey = sr_SITE_ABB + "__" + e.name + "__adjacencyList",
        e._compiledTemplate = Hogan.compile(e.template),
        e.lookupTableKey = sr_SITE_ABB + "__" + e.name + "__lookupTable",
        o[e.name] = e
    }),
    o.configNames = n,
    (sr_csEngine = vjs_cloneObject(CompleteSearchEngine)).cse_init(o),
    o
}
function sr_setup_autocomplete_instances(e, t) {
    "use strict";
    if (!Modernizr.sessionstorage || !Modernizr.cors || sr_detect_ie && sr_detect_ie < 9)
        return !1;
    if (window.sessionStorage.sr_autocomplete_failed)
        return !1;
    let s = null;
    "stathead" === sr_SITE_ABB && (o = document.querySelector("#content").className,
    s = (o || "none") + "__",
    o = window.sessionStorage.getItem("sr_autocomplete_site_use") || !1,
    "none__" !== s && o && o !== s && Object.keys(window.sessionStorage).forEach(function(e, t) {
        e.startsWith("stathead") && window.sessionStorage.removeItem(e)
    }),
    "none__" !== s) && window.sessionStorage.setItem("sr_autocomplete_site_use", s);
    var r = sr_setup_autocomplete_configs(t, s)
      , o = document.querySelectorAll(e)
      , n = [];
    return vjs_forEach.call(o, function(e, t) {
        e = sr_setup_autocomplete_instance(e, r, vjs_hasClass(e, "ac-select"));
        n.push(e)
    }),
    n
}
function sr_setup_autocomplete_instance(e, t, s) {
    "use strict";
    var n = {};
    if (n.isSelect = s,
    n.inputbox = e,
    n.wrapper = vjs_closest(n.inputbox, ".ac-wrapper"),
    n.dropdown = n.wrapper.querySelector(".ac-dropdown"),
    n.dataInputToggle = n.wrapper.querySelector("input[data-input-toggle]"),
    n.dataInputReset = n.wrapper.querySelector("input[data-input-reset]"),
    "object" != typeof sr_csEngine)
        return !1;
    n.dropdown.engine = sr_csEngine,
    n.container = vjs_closest(n.inputbox, ".ac-outline"),
    n.form = vjs_closest(n.inputbox, "form"),
    n.inputhint = n.wrapper.querySelector(".ac-hint"),
    n.fieldset = vjs_closest(n.inputbox, ".autoplayer_fieldset"),
    n.fieldset || (n.fieldset = vjs_closest(n.inputbox, ".fieldset")),
    n.fieldset || (n.fieldset = vjs_closest(n.inputbox, "form")),
    n.submitbutton = n.fieldset.querySelector('input[type="submit"]'),
    n.resultId = n.fieldset.querySelector("input[data-search-id]"),
    n.resultIndex = n.fieldset.querySelector("input[data-search-idx]"),
    n.resultIndex || (n.resultIndex = n.fieldset.querySelector('input[name="idx"]'),
    !n.resultIndex && n.resultId && (n.resultId.insertAdjacentHTML("afterend", '<input type="hidden" name="idx" value="" data-search-idx>'),
    n.resultIndex = n.fieldset.querySelector("input[data-search-idx]")));
    var r = [];
    if (t.configNames.forEach(function(e) {
        t[e].suppress || r.push(e)
    }),
    n.configNames = r,
    n.isSelect) {
        if (n.selectWrapper = n.fieldset.querySelector(".select_wrapper"),
        n.fieldset.querySelector(".ac-select-output")) {
            n.selectName = n.fieldset.querySelector(".ac-select-output");
            let e = n.selectName.querySelector("button");
            e && (e.onclick = function() {
                sr_reset_playerSelect(e, n)
            }
            )
        }
        s = vjs_getAttr(n.selectWrapper, "data-use-index") || "players";
        n.configNames = [s]
    }
    n.inputbox.value && (n.inputhint.value = n.inputbox.value),
    n.defaultPlaceholder = n.inputbox.placeholder;
    var o, a = CompleteCreateDropDownController(n, t), i = {
        wrapper: n.wrapper,
        input: n.inputbox,
        hint: n.inputhint,
        dropDown: n.dropdown,
        engine: n.dropdown.engine,
        onChange: function() {
            i.repaint()
        },
        onSelected: function(e) {
            var t = new Event("autocomplete:selected");
            n.container.dispatchEvent(t),
            e && e.i ? (n.resultId.value = e.i,
            n.resultIndex.value = e.x) : (n.resultId.value = "",
            n.resultIndex.value = ""),
            n.isSelect ? (a.hide(),
            sr_autocomplete_select_item(e, n)) : (n.inputhint.value = "",
            e && e.n && (n.inputbox.value = e.n),
            sr_cleanup_dropdown_after_select(n, a, this),
            n.submitbutton && n.submitbutton.focus(),
            n.fieldset.submit())
        },
        onFocusOut: function(e) {
            sr_detect_ie && sr_detect_ie < 8 || vjs_isHovered(n.wrapper) || (a.hide(),
            n.inputhint.value = "",
            n.inputbox.placeholder = n.defaultPlaceholder)
        },
        onFocusIn: function(e) {
            n.inputbox.placeholder = ""
        },
        repaint: function(e) {
            var t = n.inputbox.value
              , s = []
              , r = !1
              , o = (e ? (r = !0,
            n.defaultResults = s = e,
            n.inputbox.placeholder = "",
            n.isDefault = !0) : !t && n.defaultResults ? (s = n.defaultResults,
            n.isDefault = r = !0) : (s = n.dropdown.engine.cse_queryExecute(t, n.configNames),
            n.isDefault = !1),
            0);
            s && s.forEach(function(e) {
                o += e.data.length
            }),
            n.inputhint.value = r ? n.defaultPlaceholder : 0 === o ? "" : _sr_ac_build_hint(t, s[0].data[0].d.n),
            a.refresh(s, t, n.isSelect)
        }
    }, l = !1, c = n.inputbox, _ = function(e) {
        l || i.onChange(),
        l = !1
    };
    function d() {
        var e = c.value;
        o !== e && _(o = e)
    }
    return o = c.value,
    vjs_addEvent(c, "input", d, !1),
    vjs_addEvent(c, "change", d, !1),
    vjs_addEvent(n.inputbox, "focusout", i.onFocusOut, !1),
    vjs_addEvent(n.inputbox, "focusin", i.onFocusIn, !1),
    vjs_addEvent(n.inputbox, "keydown", function(e) {
        var t, s = (e = e || window.event).keyCode;
        if (33 !== s && 34 !== s) {
            if (27 != s)
                return 39 == s || 9 == s ? a.getSelectedData(!1) || 0 !== n.inputhint.value.length && n.inputhint.value !== n.defaultPlaceholder ? (e.preventDefault(),
                e.stopPropagation(),
                n.inputbox.value = n.inputhint.value,
                void i.onSelected(a.getSelectedData(!0))) : void 0 : void (13 == s ? l && (e.preventDefault(),
                n.inputbox.value = e.target.value.trim(),
                i.onSelected(a.getSelectedData())) : 40 == s ? (t = a.move(1),
                n.inputhint.value = _sr_ac_build_hint(n.inputbox.value, t),
                l = !0) : 38 == s ? (e.preventDefault(),
                e.stopPropagation(),
                t = a.move(-1),
                l = !0,
                -1 !== t ? n.inputhint.value = _sr_ac_build_hint(n.inputbox.value, t) : (s = document.querySelectorAll(".ac-is-under-cursor"),
                vjs_forEach.call(s, function(e, t) {
                    vjs_removeClass(e, "ac-is-under-cursor")
                }),
                n.inputbox.value || (n.inputhint.value = ""),
                l = !1)) : (n.inputhint.value = "",
                l = !1,
                a.reset()));
            a.hide(),
            n.inputbox.value = "",
            n.inputhint.value = "",
            n.inputbox.focus()
        }
    }, !1),
    i
}
function _sr_ac_build_hint(e, t) {
    var s = "";
    return t && t.toLowerCase().substring(0, e.length) === e.toLowerCase() && (s = e,
    s += t.substring(e.length)),
    s
}
function sr_cleanup_dropdown_after_select(e, t, s) {
    vjs_addClass(e.inputbox, "prefilled");
    e = document.querySelectorAll(".ac-is-under-cursor");
    vjs_forEach.call(e, function(e, t) {
        vjs_removeClass(e, "ac-is-under-cursor")
    }),
    vjs_addClass(s, "ac-is-under-cursor"),
    window.setTimeout(t.hide, 250)
}
var CompleteCreateDropDownController = function(p, m) {
    var s, f = [], t = -1, r = -1, o = vjs_viewportGetHeight(), n = 0, v = (500 < o && (Modernizr.phone || Modernizr.tablet) ? n = 315 : (Modernizr.phone || Modernizr.tablet) && (n = 80),
    Modernizr.touchevents && ((s = document.createElement("div")).className = "closer",
    vjs_setAttr(s, "aria-label", "Close the search options"),
    vjs_setAttr(s, "role", "button"),
    s.onclick = function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        v.hide(),
        p.inputhint.value = "",
        p.inputbox.value = ""
    }
    ),
    {
        hide: function() {
            p.dropdown.style.visibility = "hidden"
        },
        refresh: function(e, d, u) {
            var h, t;
            p.dropdown.style.visibility = "hidden",
            p.dropdown.innerHTML = "",
            Object.keys(p.dropdown.engine.adjacencyLists).length && ((t = p.dropdown.parentNode.getBoundingClientRect()).top,
            t = o - t.bottom - 6 - n,
            p.dropdown.style.maxHeight = (t = t < 215 ? 215 : t) + "px",
            Modernizr.touchevents && p.dropdown.appendChild(s),
            f = [],
            h = 0,
            vjs_forEach.call(e, function(e) {
                var t = m[e.name]
                  , s = document.createElement("div")
                  , r = (s.className = "ac-dataset-" + e.name,
                u || (s.innerHTML = t.header),
                document.createElement("div"));
                r.className = "ac-suggestions";
                var o = (o = d.split(/ +/)).getSuperset()
                  , n = [];
                vjs_forEach.call(o, function(e, t) {
                    e = (e = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")).unidecode();
                    n.push(RegExp(e, "i"))
                });
                for (var a = 0, i = e.data.length; a < i; a++) {
                    var l, c = e.data[a], _ = document.createElement("div");
                    _.className = "ac-suggestion",
                    _.__index = h++,
                    _.__value = c.v,
                    _.__data = c.d,
                    _.innerHTML = t._compiledTemplate.render(c.d),
                    d && (c = _.querySelector(".search-results-item"),
                    l = (l = (l = c.innerHTML).replace("<strong>", "__")).replace("</strong>", "_/_"),
                    vjs_forEach.call(o, function(e, t) {
                        t = l.unidecode().search(n[t]);
                        -1 < t && (l = (e = l.substr(0, t + e.length) + "</>" + l.substr(t + e.length)).substr(0, t) + "<>" + e.substr(t))
                    }),
                    l = (l = (l = (l = (l = l.replace(/<>/g, "<em>")).replace(/<\/>/g, "</em>")).replace(/__/g, "<strong>")).replace(/_\/_/g, "</strong>")).replace(/>amp;/g, ">"),
                    c.innerHTML = l),
                    _.onclick = function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        p.inputbox.value = this.__data.n,
                        p.inputhint.value = this.__data.n,
                        sr_cleanup_dropdown_after_select(p, v, this),
                        p.isSelect ? (p.resultId.value = this.__data.i,
                        p.resultIndex.value = this.__data.x,
                        v.hide(),
                        sr_autocomplete_select_item(this.__data, p)) : (e = p.form.action + "?search=" + this.__data.n + "&pid=" + this.__data.i + "&idx=" + this.__data.x,
                        window.location.assign(e))
                    }
                    ,
                    f.push(_),
                    r.appendChild(_)
                }
                s.appendChild(r),
                p.dropdown.appendChild(s)
            }),
            p.isSelect || (t = v.addOtherResults(h),
            p.dropdown.appendChild(t)),
            0 !== f.length) && (p.dropdown.style.top = "100%",
            p.dropdown.style.bottom = "",
            p.dropdown.style.visibility = "visible")
        },
        highlight: function(e) {
            -1 !== r && f[r] && vjs_removeClass(f[r], "ac-is-under-cursor"),
            vjs_addClass(f[t = e], "ac-is-under-cursor"),
            r = e
        },
        move: function(e) {
            return "hidden" === p.dropdown.style.visibility ? "" : t + e <= -1 ? t = -1 : (t + e !== f.length && (t += e,
            v.highlight(t)),
            f[t] ? f[t].__value : null)
        },
        getSelectedData: function(e) {
            return -1 < (t = e && t < 0 ? 0 : t) && f[t] ? f[t].__data : null
        },
        addOtherResults: function(e) {
            var t = document.createElement("div")
              , s = (t.className = "ac-dataset-other",
            t.innerHTML = '<div class="ac-results-header"></div>',
            document.createElement("div"))
              , r = (s.className = "ac-suggestions",
            document.createElement("div"))
              , o = (r.className = "ac-suggestion ac-suggestion-other-search",
            vjs_escapeHtml(p.inputbox.value));
            return r.__value = o,
            r.__index = e++,
            r.__data = {},
            r.innerHTML = __sr_text_all_matches_for + " " + __sr_text_quote_open + o + __sr_text_quote_closed + " (" + __sr_text_press_enter_to_search_for + ")",
            r.__data.n = o,
            r.onclick = function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                p.resultId.value = "",
                p.resultIndex.value = "",
                p.inputhint.value = this.__data.n,
                p.inputbox.value = this.__data.n,
                sr_cleanup_dropdown_after_select(p, v, this),
                window.location.assign(sr_SITE_PREFIX + "/search/search.fcgi?search=" + p.inputbox.value)
            }
            ,
            f.push(r),
            s.appendChild(r),
            t.appendChild(s),
            t
        },
        reset: function() {
            return t = r = -1,
            null
        }
    });
    return v
}
  , CompleteSearchEngine = {
    lookupTables: {},
    adjacencyLists: {},
    objIndexes: {},
    arrIndexKeys: [],
    cse_init: function(e) {
        var t = this
          , e = (t.objIndexes = e,
        t.arrIndexKeys = e.configNames,
        window.sessionStorage.sr_autocomplete_insert_time || 0)
          , e = (Date.now() - e) / 6e4
          , s = !1;
        (480 < e || is_new_jscss_version) && (s = !0,
        window.sessionStorage.sr_autocomplete_insert_time = Date.now()),
        t.arrIndexKeys.forEach(function(e) {
            t.cse_initAutocompleteDataStructure(e, s)
        })
    },
    cse_initAutocompleteDataStructure: function(t, e) {
        var s, r, o, n = this;
        n.lookupTables[t] || (s = n.objIndexes[t],
        window.sessionStorage.removeItem(s.lookupTableKey),
        r = window.sessionStorage[s.adjacencyListKey],
        "undefined" !== (o = window.sessionStorage[s.csvStorageKey]) && "undefined" !== r && (o && r && !e ? (n.lookupTables[t] = n.cse_generateLookupTable(t, o, n),
        n.adjacencyLists[t] = JSON.parse(r)) : (e = s.url,
        vjs_Ajax("GET", e = sr_debugging() ? e.replace("/short/", "/nocdn/") : e, {}, function(e) {
            n.cse_generateAutocompleteDataStructures(s, e),
            window.sessionStorage[s.csvStorageKey] = e,
            window.sessionStorage[s.adjacencyListKey] = JSON.stringify(n.adjacencyLists[t])
        }, function() {
            window.sessionStorage.sr_autocomplete_failed = !0
        }, !0, !1))))
    },
    cse_generateAutocompleteDataStructures: function(e, t) {
        var s;
        return !!t && ((s = this).lookupTables[e.name] = s.cse_generateLookupTable(e.name, t, s),
        s.adjacencyLists[e.name] = s.cse_generateAdjacencyList(t, s),
        !0)
    },
    cse_generateLookupTable: function(e, t, s) {
        for (var r = t.match(/[^\r\n]+/g), o = {}, n = 0, a = r.length; n < a; n++) {
            var i, l, c = r[n].split(",");
            (l = {}).v = c[1],
            l.t = s.cse_tokenize(c[1]),
            l.d = new Object,
            l.d.i = c[0],
            l.d.n = c[1],
            l.d.y = c[2],
            l.d.a = parseInt(c[3]),
            l.d.c = c[4],
            c[5] && (i = c[5].toLowerCase(),
            l.d.f = i),
            c[6] && (l.d.b = c[6].replace(/!/g, ", ")),
            c[7] && (l.d.g = "M" === c[7] ? __sr_text_mens_comp : "F" === c[7] ? __sr_text_womens_comp : ""),
            c[8] ? (i = parseInt(c[8]),
            isNaN(i) && (i = 0),
            l.d.p = (1e7 - i).toString().padStart(9, "0")) : l.d.p = l.d.n,
            l.d.x = e,
            o[n] = l
        }
        return o
    },
    cse_generateAdjacencyList: function(e, t) {
        for (var s = e.match(/[^\r\n]+/g), r = {}, o = 0, n = s.length; o < n; o++) {
            var a = s[o].split(",")
              , a = t.cse_tokenize(a[1]);
            a && a.forEach(function(e) {
                var t, s;
                e && 0 < e.length && (t = r,
                s = o,
                e = (e = e).substring(0, 1),
                t.hasOwnProperty(e) || (t[e] = []),
                t[e].push(s))
            })
        }
        return r
    },
    cse_queryExecute: function(e, t) {
        var o = this
          , n = o.cse_tokenize(e)
          , a = [];
        return 0 < n.length && (e = o.arrIndexKeys,
        (e = t ? t : e).forEach(function(e) {
            var t = o.objIndexes[e]
              , s = o.lookupTables[e]
              , r = o.adjacencyLists[e]
              , s = o.cse_getMatches(n, s, r, t.limit);
            s && 0 < s.length && a.push({
                name: e,
                data: s
            })
        })),
        a
    },
    cse_tokenize: function(e) {
        return e && (e = (e = e.unidecode()).replace(/[\-.'\(\)]/g, "")).trim().toLowerCase().split(" ")
    },
    cse_getMatches: function(r, o, e, t) {
        if (!e)
            return [];
        var s, n = {}, a = [], i = this, e = e[r[0].substring(0, 1)];
        for (s in e && e.forEach(function(e) {
            var t = o[e]
              , s = t.t;
            i.cse_allTokensMatch(r, s) && (n[e] = t)
        }),
        n)
            n.hasOwnProperty(s) && a.push(n[s]);
        return a.sort(function(e, t) {
            return e.d.p.localeCompare(t.d.p)
        }),
        a.slice(0, t)
    },
    cse_allTokensMatch: function(e, t) {
        var n = !0
          , a = [!1, !1, !1, !1, !1, !1, !1];
        return e.forEach(function(s, e) {
            var r = !1
              , o = s.length;
            t.forEach(function(e, t) {
                if (r || a[t])
                    return !0;
                s === e.substring(0, o) && (r = !0,
                a[t] = !0)
            }),
            r || (n = !1)
        }),
        n
    }
};
function sr_autocomplete_select_item(e, t) {
    var o, n, s, a, r;
    t.resultId.dispatchEvent(new Event("change")),
    e && e.i && (vjs_addClass(t.selectWrapper, "hidden"),
    t.selectName.querySelector("span.ac-prefill-name").innerHTML = e.n,
    t.inputbox.value = e.n,
    t.selectName.querySelector("button"),
    (r = t.wrapper.querySelector("[data-endpoint]")) && (o = vjs_getAttr(r, "data-endpoint"),
    o += e.i,
    (n = vjs_getAttr(r, "data-config")) && (n = n.replace(/'/g, '"'),
    n = JSON.parse(n)),
    (e = vjs_getAttr(r, "data-additional-params")) && (s = vjs_closest(r, "form"),
    e.split(",").forEach(function(r, e) {
        var t = s.querySelectorAll("[name=" + r + "]");
        vjs_forEach.call(t, function(e, t) {
            var s = vjs_getFormElement(e);
            e && "" !== s && (o = o + "&" + r + "=" + s)
        })
    })),
    t.selectName.querySelector(".endpoint") ? (a = t.selectName.querySelector(".endpoint")).classList.add("hidden") : ((a = document.createElement("DIV")).classList.add("endpoint"),
    a.classList.add("hidden"),
    t.selectName.appendChild(a)),
    vjs_Ajax("GET", o, {}, function(t) {
        try {
            for (var e in t = JSON.parse(t)) {
                var s = document.querySelector('[name="' + e + '"]');
                t[e].forEach(function(e) {
                    var t = document.createElement("option");
                    t.setAttribute("value", e.val),
                    e.disabled && (t.disabled = !0),
                    t.innerText = e.label,
                    s.appendChild(t)
                })
            }
            var r;
            n && n.show && (!(r = document.querySelector('[name="' + n.show.param + '"]:checked')) || r.value != n.show.val) || a.classList.remove("hidden")
        } catch (e) {
            a.innerHTML = t,
            a.classList.remove("hidden")
        }
    }, function() {
        alert(__sr_text_autocomplete_error)
    }, !0, !1)),
    t.selectName.classList.remove("hidden"),
    r = vjs_getAttr(t.dataInputToggle, "data-input-toggle")) && (e = JSON.parse(r),
    document.querySelector("." + e.name).classList.add("open"))
}
function sr_reset_playerSelect(e, t) {
    if (!t) {
        for (t = e; t.parentNode && !t.parentNode.querySelector(".select_wrapper,.player_select_wrapper"); )
            t = t.parentNode;
        t = t.parentNode.querySelector(".player_select")
    }
    vjs_removeClass(t.selectWrapper, "hidden");
    e = t.selectName.querySelectorAll("select");
    vjs_forEach.call(e, function(e, t) {
        e = e.querySelectorAll("option");
        vjs_forEach.call(e, function(e, t) {
            (1 <= t || e.value) && e.remove()
        })
    }),
    t.selectName.querySelector("span.ac-prefill-name").innerHTML = "",
    t.selectName.classList.add("hidden"),
    t.resultId.value = "",
    t.resultIndex.value = "",
    t.inputbox.value = "",
    t.inputhint.value = "",
    t.resultId.dispatchEvent(new Event("change"))
}
function sr_display_tooltipShow(e) {
    var t;
    return Modernizr && Modernizr.touch && !Modernizr.laptop && !Modernizr.desktop || (t = document.querySelectorAll("html"),
    t = (e ? document.getElementById(e) : document).querySelectorAll(".tooltip,.poptip"),
    vjs_forEach.call(t, function(e, t) {
        (vjs_getAttr(e, "data-tip") || vjs_getAttr(e, "tip")) && tipsy_setTip(e)
    })),
    !0
}
function sr_display_modalShow(e) {
    e = (e || document).querySelectorAll(".modal");
    vjs_forEach.call(e, function(t, e) {
        var s;
        vjs_hasAttr(t, "data-text") && (s = vjs_getAttr(t, "data-text"),
        t.onclick = function(e) {
            sr_display_showPopup(e, e.target, s),
            sr_record_analytics_event("modal_click", sr_record_directory(), t.innerText.substr(0, 50))
        }
        )
    })
}
var sr_display_modalOpen = !1
  , sr_display_showPopup_last_clicked = null;
function sr_display_showPopup(e, t, s, r) {
    r = r || {};
    var o = document.getElementById("modal-container");
    return t && sr_display_showPopup_last_clicked === t && "hidden" !== o.style.visibility ? (sr_display_modalOpen = !1,
    vjs_triggerEvent(document.getElementById("modal-close"), "click"),
    !1) : (t && (sr_display_showPopup_last_clicked = t),
    s.match(/^\//) || s.match(/^http/) ? (sr_display_modalOpen = !0,
    Modal.open({
        ajaxContent: s,
        draggable: !0,
        event: e,
        params: r,
        loadCallback: function() {
            sr_st_mobilize_modal_table()
        }
    })) : s.match(/^yt:/) ? (sr_display_modalOpen = !0,
    o = s.replace("yt:", ""),
    Modal.open({
        content: s = '<div class="margin"><iframe width="640" height="480" src="https://www.youtube.com/embed/' + o + '" frameborder="0" allowfullscreen></iframe></div>',
        draggable: !0,
        showOverlay: !0,
        params: r,
        event: e
    })) : (sr_display_modalOpen = !0,
    Modal.open({
        content: s,
        draggable: !0,
        params: r,
        event: e
    })),
    (e || window.event) && vjs_stopPropagation(e),
    !0)
}
function sr_display_vertical_align_divs(e, t, s) {
    var r, o = document.getElementById(e), n = document.getElementById(t), a = o.offsetTop, i = n.offsetTop;
    i < a ? (r = parseInt(a - i),
    n.style.marginTop = r + "px") : (r = parseInt(i - a),
    o.style.marginTop = r + "px"),
    s || sr_display_vertical_align_divs(e, t, !0)
}
function sr_display_horizontal_align_divs(e, t, s) {
    var r, o = document.getElementById(e), n = document.getElementById(t), a = o.offsetLeft, i = n.offsetLeft;
    i < a ? (r = parseInt(a - i),
    n.style.marginLeft = r + "px") : (r = parseInt(i - a),
    o.style.marginLeft = r + "px"),
    s || sr_display_horizontal_align_divs(e, t, !0)
}
function sr_display_selectorSetClass(e, t, s) {
    var r = document.querySelectorAll(t);
    if (r)
        for (i = 0; i < r.length; i++)
            vjs_removeClass(r[i], e);
    if (r = document.querySelectorAll(s))
        for (i = 0; i < r.length; i++)
            vjs_addClass(r[i], e);
    sr_record_analytics_event("display_selector", sr_record_directory(), sr_record_page())
}
function sr_display_showHideElement(e, t, s) {
    var r = !1
      , o = !1;
    "clickhide" === s ? (e.hider ? e.hider.match(t) || (e.hider = e.hider + t) : e.hider = t,
    o = !(r = !0)) : "clickshow" === s && (e.hider && e.hider.match(t) && (e.hider = e.hider.replace(t, "")),
    r = !1,
    o = !e.hider || 0 === e.hider.length),
    s || !vjs_hasClass(e, "hidden") && "none" !== e.style.display ? s || (o = !(r = !0)) : r = !(o = !0),
    o ? (vjs_removeClass(e, "hidden"),
    e.style.display = "") : r && (vjs_addClass(e, "hidden"),
    e.style.display = "")
}
function sr_display_toggleClass(e, s, t, r) {
    var o = document.getElementById(e);
    o && o.outerHTML.length && (o = o.querySelectorAll("." + s),
    vjs_forEach.call(o, function(e, t) {
        sr_display_showHideElement(e, s, r)
    }),
    (o = document.getElementById(e + "_toggle_" + s)) && o.innerHTML.match("Show") ? (o.innerHTML = o.innerHTML.replace("Show", "Hide"),
    o.style.backgroundColor = "#FFF655") : o && (o.innerHTML = o.innerHTML.replace("Hide", "Show"),
    o.style.backgroundColor = "#FFF655"))
}
function sr_display_browserPopupWindow(e, t, s) {
    window.name = "mainWindow",
    window.open(e, "surf", "width=" + t + ",height=" + s + ",scrollbars=yes,resizable=yes,noopener,noreferrer")
}
function sr_display_flyInSVGsprite() {
    vjs_Ajax("GET", sr_svg_sprite_url, {}, function(e) {
        var t = document.createElement("div")
          , e = (t.className = "hidden",
        t.innerHTML = e,
        document.body.insertBefore(t, document.body.childNodes[0]),
        document.getElementById("social"));
        e && vjs_removeClass(e, "noload")
    }, function() {
        return !0
    }, !0, !1)
}
function sr_display_fill_search_placeholder() {
    var s = Modernizr.viewport_width < 359 ? __sr_text_search_placeholder_short : Modernizr.viewport_width < 450 ? __sr_text_search_placeholder_medium : __sr_text_search_placeholder_long
      , e = (sr_detect_operaMini && (s = ""),
    document.querySelectorAll('#header .search input[name="hint"]'))
      , e = (vjs_forEach.call(e, function(e, t) {
        vjs_setAttr(e, "placeholder", "")
    }),
    document.querySelectorAll('#header .search input[name="search"]'));
    vjs_forEach.call(e, function(e, t) {
        vjs_setAttr(e, "placeholder", s)
    })
}
function sr_display_add_random_page_link() {
    var e = document.createElement("div");
    e.id = "random_page",
    e.innerHTML = '<a href="/admin/get_random_dev.cgi">Go to a random page</a><style> #random_page {     display: block;     font-size: 11px;     bottom: 0;     position: fixed;     right: 0;     border: #ff0;     background: #ff0;     padding: 10px;     color: black;     font-weight: bold;     width: 200px; }</style>',
    document.body.appendChild(e)
}
function sr_display_setup_endpoint_onclick(e) {
    return !!e && !!(e = document.getElementById(e)) && (e = e.querySelectorAll(".endpoint"),
    vjs_forEach.call(e, function(t, e) {
        var s = vjs_getAttr(t, "data-endpoint");
        t.onclick = function(e) {
            sr_display_showPopup(e, t, s)
        }
        ,
        vjs_addClass(t, "tooltip")
    }),
    !0)
}
function sr_display_run_endpoint(e, t) {}
function sr_img_logo_load_check() {
    var e = document.querySelector(".media-item.logo > img");
    if (!e)
        return !1;
    var r = new Image;
    r.onload = function() {
        var e = r.height
          , t = r.width
          , s = document.querySelector(".media-item.logo");
        e * t <= 1 || vjs_removeClass(s, "loader")
    }
    ,
    r.src = e.src
}
Modernizr.cookies && document.cookie.match("dev_warning") && sr_utilities_js_loader.push(sr_display_add_random_page_link),
sr_utilities_js_loader.push(sr_img_logo_load_check);
var sr_form_params_old, sr_has_ad_rails = !0;
function sr_ads_rails_position() {
    var e, t, s;
    return Modernizr.viewport_width < 1810 || sr_detect_ie || sr_detect_edge || Modernizr.adfree || document.getElementById("sr_suppress_ads") || (vjs_offset(e = document.getElementById("content")),
    (e = vjs_viewportGetWidth() - vjs_outerWidth(e)) < 330) ? (sr_ads_kill_rails(),
    !1) : (e = parseInt((e - 320) / 4),
    t = document.getElementById("div-gpt-ad-160x600-1"),
    s = document.getElementById("div-gpt-ad-160x600-2"),
    !(!t || !s) && (t = t.parentNode,
    s = s.parentNode,
    t.style.left = e + "px",
    s.style.right = e + "px",
    void vjs_addEvent(window, "resize", sr_ads_kill_rails)))
}
function sr_ads_kill_rails() {
    var e, t;
    sr_has_ad_rails && (e = document.getElementById("div-gpt-ad-160x600-1"),
    t = document.getElementById("div-gpt-ad-160x600-2"),
    e && t && (vjs_removeChild(e.parentNode),
    vjs_removeChild(t.parentNode)),
    sr_has_ad_rails = !1)
}
function sr_form_presetFromQueryString() {
    var e = document.getElementById("deserialize_string");
    return e ? sr_form_checkDeserialize(sr_form_queryString_to_JSON(e = (e = vjs_getAttr(e, "data")).match(/^\?/) ? e : "?" + e), !1, !0, null) : 7 < window.location.search.length && sr_form_checkDeserialize(sr_form_queryString_to_JSON(window.location.search), !1, !0, null),
    !0
}
function sr_form_queryString_to_JSON(e) {
    function t(e) {
        return decodeURIComponent(e.replace(r, " "))
    }
    for (var s = {}, r = /\+/g, o = /([^&=]+)=?([^&]*)/g, n = "?" == e.charAt(0) ? e.substring(1) : e; l = o.exec(n); ) {
        var a, i = t(l[1]), l = t(l[2]);
        i in s ? ("string" == typeof s[i] && (a = s[i],
        s[i] = [],
        s[i].push(a)),
        s[i].push(l)) : s[i] = l
    }
    return s || {}
}
function sr_form_checkDeserialize(s, e, r, o) {
    let t = [];
    e ? t[0] = e : t = document.querySelectorAll("form.deserialize,form.pi_forms,form.srbasic"),
    vjs_forEach.call(t, function(e, t) {
        (o || !e.classList.contains("no-deserialize") && !e.classList.contains("sr_goto")) && (s = "object" == typeof (s = s || vjs_getAttr(e, "data-default")) ? s : JSON.parse(s)) && vjs_deserializeForm(e, s, r, o)
    })
}
function sr_setup_presets(e) {
    e = (e || document).querySelectorAll(".sr_preset");
    e.forEach(t => {
        if (t.is_set)
            return !1;
        t.is_set = !0,
        "BUTTON" === t.tagName && t.setAttribute("type", "button"),
        t.addEventListener("click", function() {
            t.innerHTML.match("[A-z]") && sr_record_analytics_event("preset", sr_record_directory(), sr_record_page() + ":" + t.innerHTML),
            ["hide", "show", "toggle"].forEach(function(e) {
                t.dataset[e] && sr_form_runShowHidePreset(e, t.dataset[e])
            }),
            t.dataset.preset && sr_form_runPreset(t)
        })
    }
    )
}
function sr_form_runShowHidePreset(t, e) {
    e.split(",").forEach(e => {
        document.querySelectorAll(e).forEach(e => {
            e.classList.contains("toggleable") ? ("toggle" === t ? e.classList.toggle("open") : "show" === t ? e.classList.add("open") : "hide" == t && e.classList.remove("open"),
            e.classList.contains("open") && sr_chosen_enable_select(e)) : "toggle" === t ? e.classList.toggle("hidden") : "show" === t ? e.classList.remove("hidden") : "hide" == t && e.classList.add("hidden")
        }
        )
    }
    )
}
function sr_form_runPreset(e) {
    sr_preset_block_update = !0;
    let t = vjs_getAttr(e, "data-preset");
    if (0 < (t = t.replace(/'/g, '"')).lastIndexOf("=") ? t = sr_form_queryString_to_JSON(t) : 0 < t.lastIndexOf(":") && (t = JSON.parse(t)),
    !t)
        return !1;
    var s, r, o = e.closest("form");
    for ([s,r] of Object.entries(t)) {
        var n = document.querySelector(".fieldset." + s + ' input[value="' + r + '"]');
        n && "radio" === n.type && (n.dispatchEvent(new Event("click")),
        n.dispatchEvent(new Event("change")))
    }
    return sr_form_checkDeserialize(t, o, !1, e),
    sr_form_changeDesc(o, "runpreset"),
    !(sr_preset_block_update = !1)
}
sr_utilities_js_loader.push(sr_ads_rails_position);
var sr_preset_block_update = !1;
function sr_form_populateDesc(e, t, s) {
    if (!e)
        return !1;
    let r = []
      , o = []
      , n = e.data_old_desc;
    if (!t || !n)
        return !1;
    t.forEach(function(e, t) {
        var s = (e = (e = (e = e.trim()).replace(/</g, "&lt;")).replace(/&lt;br/g, "<br")).match(/link: .*/);
        s && s[0] && (e = e.replace(/link:.*/, ""),
        s = s[0].replace("link: ", "")) && (e = '<a target="_blank" href="' + s + '">' + e + "</a>"),
        n.indexOf(e) < 0 ? r.push('<span class="fade_in">' + e + "</span>") : r.push(e),
        o.push(e)
    }),
    s.innerHTML = r.join(", "),
    s.style.color = "initial",
    e.data_old_desc = o,
    sr_preset_block_update = !1;
    t = vjs_serializeForm(e) + "&describe_only=1";
    return sr_form_params_old != t && sr_form_changeDesc_caller(e, "tweaker"),
    !0
}
function sr_form_changeDesc_caller(e, t) {
    sr_preset_block_update || (sr_preset_block_update = !0,
    setTimeout(function() {
        sr_form_changeDesc(e, t)
    }, 333))
}
function sr_form_changeDesc(t, e) {
    let s = document.getElementById("form_description");
    var r, o;
    s && (s.style.color = "#999",
    r = t.action,
    o = vjs_serializeForm(t) + "&describe_only=1",
    sr_form_params_old = o,
    fetch(r + "?" + o, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    }).then(e => e.json()).then(e => sr_form_populateDesc(t, e, s)).catch( () => {}
    ))
}
function sr_form_setupFormScrub() {
    document.querySelectorAll("form:not([itemprop])").forEach(e => !e.classList.contains("sr_do_not_scrub") && !e.getAttribute("onsubmit") && (e.addEventListener("submit", sr_form_scrubEmptyParams),
    !0))
}
function sr_form_scrubEmptyParams(e) {
    let s = e.target;
    s.querySelectorAll(".fieldset:not(.endpoint .fieldset").forEach(e => {
        let o = get_defaults(s, e)
          , n = isHidden(e);
        var t = e.querySelectorAll(".formfield");
        t.forEach(e => {
            var t, s, r = isHidden(e) || n;
            !r && e.classList.contains("radio") ? (s = e.querySelector("input").name,
            t = e.querySelector('input[name="' + s + '"]:checked').value,
            (void 0 !== o[s] && t === o[s] || void 0 === o[s] && "" === t) && e.querySelectorAll("input").forEach(e => e.disabled = !0)) : !r && e.classList.contains("check") ? (s = e.querySelectorAll("input")).length === e.querySelectorAll("input:checked").length && s.forEach(e => e.disabled = !0) : !r && e.classList.contains("boolean") || check_inputs_for_scrubbing(e, o, r)
        }
        ),
        t.length || check_inputs_for_scrubbing(e, o, n)
    }
    )
}
function check_inputs_for_scrubbing(e, t, s) {
    e.querySelectorAll("input, select, textarea").forEach(e => {
        (s && ("hidden" !== e.type || e.closest(".pi_forms.sh3") && e.closest(".fieldset.hidden")) || e.name.match(/player_id([0-9]?)_select/) || e.name.match(/player_id([0-9]?)_hint/) || e.name.match(/ac_team_id([0-9]?)_hint/) || e.name.match(/ac_team_id([0-9]?)_hint/) || "idx" == e.name || "" === e.value || t[e.name] && t[e.name] == e.value) && (e.disabled = !0)
    }
    )
}
function isHidden(e) {
    let t = !1;
    var s = window.getComputedStyle(e);
    return t = "none" !== s.display && "hidden" !== s.visibility && 0 !== e.clientHeight ? t : !0
}
function sr_form_setupForms() {
    new FormEvents;
    sr_setup_presets(),
    log_performance && sr_perf_logPerformance("sr_setup_presets"),
    sr_form_presetFromQueryString(),
    log_performance && sr_perf_logPerformance("deserialize"),
    sr_form_initial_setup = !1,
    sr_form_setupFormScrub(),
    sr_chosen_enable_select(),
    log_performance && sr_perf_logPerformance("enableChosenSeLect")
}
function sr_form_setup_goto_page(e) {
    let t;
    t = e ? [e] : document.querySelectorAll("form.sr_goto:not(.ajax)"),
    vjs_forEach.call(t, function(n, e) {
        var t;
        n.is_setup || (n.is_setup = !0,
        sr_form_setup_goto_json(n),
        vjs_hasClass(n, "concat") ? n.querySelector('input[type="submit"]').onclick = function(e) {
            e.preventDefault();
            var t = 1
              , s = ""
              , r = !1
              , o = n.querySelector('select[name="' + t + '"]');
            for (o = (o = o || n.querySelector('input[name="' + t + '"]:checked')) || n.querySelector('input[name="' + t + '"]'); o; )
                o && null != o.selectedIndex && o.options[o.selectedIndex].disabled && (r = !0),
                s += o.value,
                o = (o = (o = n.querySelector('select[name="' + ++t + '"]')) || n.querySelector('input[name="' + t + '"]:checked')) || n.querySelector('input[name="' + t + '"]');
            r ? sr_form_append_warning(n) : (sr_record_analytics_event("goto", sr_record_directory(), sr_record_nearest_parent_id(n)),
            location = s)
        }
        : (t = n.querySelector("select")) && (t.onchange = function(e) {
            e.preventDefault();
            var e = this.selectedIndex;
            "0" !== this.options[e].value && (sr_record_analytics_event("goto", sr_record_directory(), sr_record_nearest_parent_id(n)),
            (e = this.options[e].value) ? location = e : sr_form_append_warning(n))
        }
        ,
        vjs_removeChild(n.querySelector('input[type="submit"]'))),
        vjs_removeClass(n, "js-select"))
    })
}
function sr_form_append_warning(e) {
    let t;
    document.getElementById("sr_alert_div") ? (t = document.getElementById("sr_alert_div")).innerHTML = "" : (t = document.createElement("div")).id = "sr_alert_div",
    t.innerHTML = __sr_text_please_select_an_option_for_each,
    t.classList.add("fieldset"),
    t.classList.add("fade_in"),
    t.style.color = "#900",
    t.style.fontWeight = "bold",
    e.appendChild(t)
}
function sr_form_setup_goto_json(e) {
    e = e.querySelectorAll("select.sr_load_json");
    vjs_forEach.call(e, function(e, t) {
        var s = document.querySelector(vjs_getAttr(e, "data-fill"))
          , o = vjs_getAttr(e, "data-json-key");
        s && o && (e.onchange = function(e) {
            e && e.preventDefault();
            var r, e = this.selectedIndex, e = this.options[e].value, e = sr_goto_json[o][e];
            e && (r = "",
            vjs_forEach.call(e, function(e, t) {
                var s = "";
                for (name in e)
                    0 === t && "" === name && (s = "disabled selected "),
                    r = r + "<option " + s + 'value="' + name + '">' + e[name] + "</option>\n"
            }),
            s.innerHTML = r,
            chosen_events) && chosen_events.fire(s, "chosen:updated")
        }
        ,
        e.onchange())
    })
}
function sr_form_cpi_init() {
    var e = document.querySelector(".sr_cpi_control");
    if (!e)
        return !1;
    e.style.display = "inline";
    let t = e.querySelector("select");
    return t.addEventListener("change", function(e) {
        sr_form_cpi_convert(t.value),
        vjs_stopPropagation(e)
    }),
    !0
}
function sr_form_cpi_convert(o) {
    let n = 0;
    var e = document.querySelector(".sr_cpi_control");
    return !!e && !!(e = e.closest(".table_wrapper")) && (e.querySelectorAll("[data-amount]").forEach(t => {
        if ("total" == t.dataset.amount)
            t.innerHTML = sr_utilities_number_with_commas(n, !0);
        else {
            var s = t.dataset.year
              , r = t.dataset.amount;
            let e = Math.round(r);
            "actual" != o && (e = Math.round(sr_year_cpi[o] / sr_year_cpi[s] * r)),
            t.dataset.future || (n += e),
            t.innerHTML = sr_utilities_number_with_commas(e, !0)
        }
    }
    ),
    void sr_record_analytics_event("cpi_calculator", sr_record_directory(), sr_record_page()))
}
const sr_year_cpi = {
    1871: 36,
    1872: 36,
    1873: 36,
    1874: 34,
    1875: 33,
    1876: 32,
    1877: 32,
    1878: 29,
    1879: 28,
    1880: 29,
    1881: 29,
    1882: 29,
    1883: 28,
    1884: 27,
    1885: 27,
    1886: 27,
    1887: 27,
    1888: 27,
    1889: 27,
    1890: 27,
    1891: 27,
    1892: 27,
    1893: 27,
    1894: 26,
    1895: 25,
    1896: 25,
    1897: 25,
    1898: 25,
    1899: 25,
    1900: 25,
    1901: 25,
    1902: 26,
    1903: 27,
    1904: 27,
    1905: 27,
    1906: 27,
    1907: 28,
    1908: 27,
    1909: 27,
    1910: 28,
    1911: 28,
    1912: 29,
    1913: 29.7,
    1914: 30.1,
    1915: 30.4,
    1916: 32.7,
    1917: 38.5,
    1918: 45.2,
    1919: 52.1,
    1920: 60.2,
    1921: 53.6,
    1922: 50.3,
    1923: 51.2,
    1924: 51.5,
    1925: 52.7,
    1926: 53.2,
    1927: 52.2,
    1928: 51.6,
    1929: 51.6,
    1930: 50.2,
    1931: 45.7,
    1932: 41,
    1933: 38.9,
    1934: 40.2,
    1935: 41.2,
    1936: 41.7,
    1937: 43.2,
    1938: 42.3,
    1939: 41.8,
    1940: 42.1,
    1941: 44.2,
    1942: 49.1,
    1943: 52,
    1944: 52.9,
    1945: 54.1,
    1946: 58.6,
    1947: 67.1,
    1948: 72.2,
    1949: 71.5,
    1950: 72.3,
    1951: 78,
    1952: 79.8,
    1953: 80.4,
    1954: 80.7,
    1955: 80.5,
    1956: 81.7,
    1957: 84.4,
    1958: 86.7,
    1959: 87.6,
    1960: 88.9,
    1961: 89.8,
    1962: 90.9,
    1963: 92,
    1964: 93.2,
    1965: 94.7,
    1966: 97.5,
    1967: 100.2,
    1968: 104.5,
    1969: 110.2,
    1970: 116.7,
    1971: 121.7,
    1972: 125.7,
    1973: 133.4,
    1974: 148.2,
    1975: 161.7,
    1976: 171,
    1977: 182.1,
    1978: 196,
    1979: 218.1,
    1980: 247.6,
    1981: 273.2,
    1982: 290,
    1983: 299.3,
    1984: 312.2,
    1985: 323.2,
    1986: 329.4,
    1987: 341.4,
    1988: 355.4,
    1989: 372.5,
    1990: 392.6,
    1991: 409.3,
    1992: 421.7,
    1993: 434.1,
    1994: 445.4,
    1995: 457.9,
    1996: 471.3,
    1997: 482.4,
    1998: 489.8,
    1999: 500.6,
    2e3: 517.5,
    2001: 532.1,
    2002: 540.5,
    2003: 552.8,
    2004: 567.6,
    2005: 586.9,
    2006: 605.8,
    2007: 623.1,
    2008: 647,
    2009: 644.7,
    2010: 655.3,
    2011: 676,
    2012: 689.9,
    2013: 700,
    2014: 711.4,
    2015: 712.3,
    2016: 721.2,
    2017: 736.6,
    2018: 752.9,
    2019: 762.3,
    2020: 779.4,
    2021: 779.4,
    2022: 779.4,
    2023: 779.4,
    2024: 779.4,
    2025: 779.4,
    2026: 779.4,
    2027: 779.4
};
function sr_menus_setupMenus() {
    "button" === Modernizr.site_menu ? sr_menus_setupMainNav_button() : Modernizr.sessionstorage && sr_menus_setupMainNav_navbar(),
    sr_menus_setup_inpageNavMenu(),
    log_performance && sr_perf_logPerformance("setupInpageNavMenu:full");
    var e = document.querySelectorAll(".hasmore,.hoversmooth>li");
    vjs_forEach.call(e, function(e, t) {
        sr_menus_setupDropMenu(e)
    }),
    log_performance && sr_perf_logPerformance("setupDropMenus:full"),
    document.getElementById("inner_nav") && (e = document.querySelectorAll("#inner_nav>ul>li a"),
    vjs_forEach.call(e, function(e, t) {
        var s = vjs_closest(e, "li");
        (s = vjs_closest(e, "li.hasmore") || s) && e.addEventListener("click", function(e) {
            sr_record_analytics_event("inner-nav-click" + (Modernizr.phone ? ":phone" : ":not-phone"), s.className, sr_record_directory())
        })
    }))
}
function sr_menus_add_games_counter() {
    var e, t = document.querySelectorAll("#header_scores .game_summary"), s = document.createElement("span");
    s.className = "counter",
    document.getElementById("override_counter") && (e = document.getElementById("override_counter").getAttribute("data-counter-value")),
    s.innerHTML = e || t.length,
    document.querySelector("#header_scores > a").appendChild(s)
}
function sr_menus_setupMainNav_button() {
    if (sr_detect_operaMini)
        return !1;
    var t = document.getElementById("nav_trigger");
    if (!t || t.triggered)
        return !1;
    t.triggered = !0;
    var s = document.getElementById("nav")
      , e = t.querySelector("a");
    return e && (vjs_setAttr(e, "href", "javascript:void(0)"),
    t.addEventListener("click", function(e) {
        (vjs_toggleClass(s, "open") ? vjs_addClass : vjs_removeClass)(t, "open"),
        e.preventDefault(),
        sr_record_analytics_event("MainNavButtonClick", sr_record_directory(), sr_record_page())
    })),
    sr_record_page_link_clicks(s),
    !0
}
function sr_menus_setupMainNav_navbar() {
    if (!document.getElementById("main_nav") || !Modernizr.sessionstorage)
        return !1;
    var t = sr_SITE_ABB + "_main_nav_menu" + ("en" !== Modernizr.lang ? "-" + Modernizr.lang : "")
      , e = ("boolean" == typeof sr_is_production && sr_is_production || sessionStorage.removeItem(t),
    sessionStorage.getItem(t));
    if (e)
        sr_menus_setupMainNav_dropdowns(JSON.parse(e));
    else {
        if (window.sessionStorage.sr_main_nav_failed)
            return !1;
        e = "/inc/main_nav_menu" + ("en" !== Modernizr.lang ? "_" + Modernizr.lang : "") + ".json";
        vjs_Ajax("GET", e = "string" == typeof sr_dropmenu_url ? sr_dropmenu_url : e, {}, function(e) {
            sessionStorage.setItem(t, JSON.stringify(e)),
            sr_menus_setupMainNav_dropdowns(e)
        }, function() {
            window.sessionStorage.sr_main_nav_failed = !0
        }, !0, !0)
    }
    return !0
}
function sr_menus_setupMainNav_dropdowns(e) {
    for (d in e) {
        var t, s = document.getElementById(e[d].target);
        s && ((t = document.createElement("div")).innerHTML = e[d].html,
        s.appendChild(t),
        vjs_addClass(s, "hasmore"),
        sr_menus_setupDropMenu(s),
        sr_record_page_link_clicks(s))
    }
    document.querySelector("#header_scores > a") && sr_menus_add_games_counter()
}
function sr_menus_setupDropMenu(e) {
    return !!e && !e.menuSetup && void (Modernizr && !Modernizr.touch ? (sr_menus_hover(e),
    e.menuSetup = !0) : vjs_hasClass(e, "hasmore") && (sr_menus_clickable(e),
    e.menuSetup = !0))
}
function sr_menus_clickable(s) {
    if ("none" !== s.style.display) {
        var e = s.closest("ul");
        if (e && "main_nav" == e.id)
            s.classList.remove("hasmore");
        else {
            let t = s.querySelector("a,span");
            vjs_setAttr(t, "href", "javascript:void(0)"),
            sr_dropmenu_add_helpers(s),
            t.addEventListener("click", function(e) {
                sr_elsDrophovered.includes(s) ? sr_menus_remove_drophover_from_all() : sr_menus_add_drophover_to_el(s),
                sr_record_analytics_event("Clicked on Menu", sr_record_directory(), sr_record_nearest_parent_id(t))
            });
            e = s.querySelector(":scope > div"),
            e = (e && (e.insertAdjacentHTML("afterbegin", '<div role="button" aria-label="close this menu" class="closer"></div>'),
            e.querySelector(":scope > .closer").addEventListener("click", function() {
                sr_menus_remove_drophover_from_all()
            })),
            s.querySelectorAll(":scope > div > ul > li > a"));
            vjs_forEach.call(e, function(s, e) {
                var t = vjs_getAttr(s, "href");
                /^#/.test(t) && s.addEventListener("click", function(e) {
                    var t;
                    return sr_menus_remove_drophover_from_all(),
                    vjs_hasAttr(s, "data-click") && (t = vjs_getAttr(s, "data-click"),
                    vjs_triggerEvent(document.getElementById(t), "click")),
                    !0
                })
            })
        }
    }
}
var sr_hovering_el, sr_hovering_check_el, sr_nav_timer_delay = 175, foo = 0, bar = 0;
function sr_menus_hover_check() {
    document.onmousemove = function(e) {
        e = e || window.event,
        sr_hovering_el = e.target || e.srcElement
    }
}
function sr_menus_hover_check_throttle() {
    vjs_addEvent(document, "mousemove", vjs_throttle(sr_menus_mousemove, 50))
}
function sr_menus_mousemove(e) {
    e = e || window.event,
    sr_hovering_el = "mouseout" === e.type ? e.relatedTarget || e.toElement : e.target || e.srcElement
}
var i = 1;
function sr_menus_hover(e) {
    sr_dropmenu_add_helpers(e),
    sr_hovering_el || (sr_menus_hover_check_throttle(),
    sr_hovering_el = document),
    e.onmouseover = function(e) {
        var t = this;
        sr_menus_mousemove(e),
        setTimeout(function() {
            vjs_elChildOfEl(sr_hovering_el, t, !0) && sr_menus_add_drophover_to_el(t)
        }, sr_nav_timer_delay)
    }
    ,
    e.onmouseout = function(e) {
        var t = this;
        sr_menus_mousemove(e),
        setTimeout(function() {
            vjs_elChildOfEl(sr_hovering_el, t, !0) || sr_menus_remove_drophover_from_el(t)
        }, sr_nav_timer_delay / 1.1)
    }
}
var freezer_div_loc_top, freezer_div_frozen, freezer_div_hidden_top, freezer_div_hidden, sr_elsDrophovered = [];
function sr_menus_add_drophover_to_el(e) {
    vjs_hasClass(e, "drophover") || (sr_menus_remove_drophover_from_all(e),
    vjs_addClass(e, "drophover"),
    vjs_forEach.call(e.elsFaded, function(e, t) {
        vjs_hasClass(e, "faded") || vjs_addClass(e, "faded")
    }),
    sr_elsDrophovered.includes(e)) || sr_elsDrophovered.push(e)
}
function sr_menus_remove_drophover_from_el(e) {
    vjs_hasClass(e, "drophover") && (vjs_forEach.call(e.elsFaded, function(e, t) {
        vjs_removeClass(e, "faded")
    }),
    setTimeout(function() {
        vjs_removeClass(e, "drophover")
    }, 80))
}
function sr_menus_remove_drophover_from_all(s) {
    1 === sr_elsDrophovered.length && sr_elsDrophovered[0] === s || (vjs_forEach.call(sr_elsDrophovered, function(e, t) {
        s !== e && (vjs_removeClass(e, "drophover"),
        vjs_forEach.call(e.elsFaded, function(e, t) {
            vjs_removeClass(e, "faded")
        }))
    }),
    sr_elsDrophovered = s ? [s] : [])
}
function sr_dropmenu_add_helpers(s) {
    s.elsFaded = [],
    vjs_getAttr(s, "data-fade-selector") && vjs_forEach.call(document.querySelectorAll(vjs_getAttr(s, "data-fade-selector")), function(e, t) {
        s.elsFaded.push(e)
    })
}
function sr_menus_setup_bottomPageNavMenu() {
    if (Modernizr.phone) {
        var e = document.querySelector("#inner_nav li.condensed");
        if (e) {
            e = e.cloneNode(!0);
            if (e) {
                var t, s = e.querySelector(":scope > div");
                if (s)
                    return vjs_removeChild(e.querySelector(".closer")),
                    e = e.querySelector(":scope > a"),
                    t = __sr_text_additional_pages,
                    e && (t = e.innerHTML,
                    e.parentNode.removeChild(e)),
                    (e = document.createElement("div")).id = "all_inner_nav_bottom",
                    e.className = "section_wrapper commented",
                    t = '<div class="section_heading"><span class="section_anchor" id="inner_nav_bottom_link" data-label="' + t + '"></span><h2>' + t + '</h2><div class="section_heading_text"><ul><li></li></ul></div></div>\x3c!--  <div class="section_content" id="inner_nav_bottom">' + s.innerHTML + "</div>--\x3e",
                    e.insertAdjacentHTML("afterbegin", t),
                    document.getElementById("content").appendChild(e),
                    !0
            }
        }
    }
}
function sr_menus_setup_inpageNavMenu() {
    var e = document.getElementById("inner_nav")
      , t = document.getElementById("inpage_nav");
    if (!e || vjs_hasClass(e, "suppress_inpage_nav"))
        return !1;
    if (t && vjs_hasClass(t, "html_built")) {
        if (!(e = document.getElementById("inner_nav")) || vjs_hasClass(e, "suppress_inpage_nav"))
            return !1;
        var s = document.querySelectorAll("#inpage_nav>ul>li>a");
        vjs_forEach.call(s, function(e, t) {
            e.addEventListener("click", function(e) {
                sr_record_analytics_event("inpage-nav-click" + (Modernizr.phone ? ":phone" : ":not-phone"), section_label, sr_record_directory())
            })
        }),
        (s = e.querySelector("li.condensed > div")) && Modernizr.touch && (a = t.innerHTML,
        s.insertAdjacentHTML("beforeend", a))
    } else {
        var r = document.querySelectorAll('.section_anchor:not([data-no-inpage="1"])');
        if (r.length <= 3 && !vjs_hasClass(e, "force_inpage_nav"))
            return !1;
        var o = document.title
          , n = document.body
          , a = (o = (o = vjs_hasAttr(n, "data-label") ? vjs_getAttr(n, "data-label") : o).replace(/ *\|.*/gi, ""),
        '<p class="listhead inpage">On this page: </p>\n<ul class="in_list inpage">')
          , i = ((t = document.createElement("div")).id = "inpage_nav",
        t.innerHTML = a,
        t.querySelector("ul.in_list.inpage"));
        vjs_forEach.call(r, function(e, t) {
            var s, r, o;
            vjs_getAttr(e, "data-no-inpage") || (r = vjs_getAttr(e, "id"),
            s = vjs_getAttr(e, "data-label"),
            e = (e = vjs_getAttr(e, "data-label-desc")) ? " (" + e + ")" : "",
            o = "#" + r,
            r && r.match(/_link$/) && !r.match(/site_menu_link/) && (o = "#" + (r = (r = r.replace(/_link$/, "")).replace(/^/, "all_"))),
            r && s && (a = a + '<li><a href="' + o + '">' + s + "</a>" + e + "</li>",
            (r = document.createElement("a")).appendChild(document.createTextNode(s)),
            r.href = o,
            r.addEventListener("click", function(e) {
                sr_record_analytics_event("inpage-nav-click" + (Modernizr.phone ? ":phone" : ":not-phone"), s, sr_record_directory())
            }),
            (o = document.createElement("li")).appendChild(r),
            o.appendChild(document.createTextNode(e)),
            i.appendChild(o)))
        }),
        e.appendChild(t),
        (s = e.querySelector("li.condensed > div")) && Modernizr.touch && s.insertAdjacentHTML("beforeend", a)
    }
    return !0
}
var freezer_div, scrollBarPosition_prev = 0, _sr_through_freezer_div = 1;
function sr_get_freezer_div() {
    var e, t;
    return _sr_through_freezer_div++,
    document.freezer || (!(e = (e = document.getElementById("inner_nav")) || document.getElementById("desc_container")) || Modernizr && (Modernizr.phone || Modernizr.touch) && "inner_nav" === e.id ? null : (e && (t = vjs_offset(document.freezer = e),
    freezer_div_loc_top = parseFloat(t.top),
    freezer_div_frozen = !1,
    freezer_div_hidden_top = sr_setFreezerDivHiddenTop(),
    freezer_div_hidden = !1),
    e))
}
function sr_setFreezerDivHiddenTop() {
    var e = document.getElementById("footer");
    return loc = vjs_offset(e),
    parseFloat(loc.top) - 100
}
function sr_menus_enable_freeze() {
    return !!freezer_div && ("inner_nav" === freezer_div.id && freezer_div.querySelector("ul").insertAdjacentHTML("beforeend", '<li class="back_to_top"><a href="#header">Back to top</a></li>'),
    vjs_addEvent(window, "scroll", vjs_throttle(sr_menus_freeze_check, 50)),
    !0)
}
function sr_menus_freeze_check(e) {
    var t = parseFloat(vjs_scrollTop());
    freezer_div_loc_top && freezer_div_hidden_top && (freezer_div_loc_top < t && !freezer_div_frozen ? (vjs_addClass(freezer_div, "frozen"),
    freezer_div_frozen = !0) : t <= freezer_div_loc_top && freezer_div_frozen && (vjs_removeClass(freezer_div, "frozen"),
    freezer_div_frozen = !1),
    freezer_div_hidden_top < t && !freezer_div_hidden ? (vjs_addClass(freezer_div, "hidden"),
    freezer_div_hidden = !0) : t <= freezer_div_hidden_top && freezer_div_hidden && (vjs_removeClass(freezer_div, "hidden"),
    freezer_div_hidden = !1),
    t !== scrollBarPosition_prev && setTimeout(sr_menus_freeze_check, 50),
    scrollBarPosition_prev = t)
}
function sr_menus_setSwitchers(e) {
    e = e ? [e] : document.querySelectorAll(".switcher");
    vjs_forEach.call(e, function(e, t) {
        var r, o, s;
        e.is_setup || (e.is_setup = !0,
        r = e.querySelectorAll(":scope > *"),
        s = vjs_getAttr(e, "data-controls") + " > *",
        o = document.querySelectorAll(s),
        s = vjs_getAttr(e, "data-controls"),
        vjs_addClass(document.querySelector(s), "switcher_content"),
        vjs_forEach.call(r, function(t, s) {
            var e = t.querySelector(":scope > a");
            e && vjs_setAttr(e, "href", "javascript:void(0)"),
            t.addEventListener("click", function(e) {
                vjs_forEach.call(r, function(e, t) {
                    vjs_removeClass(e, "current")
                }),
                vjs_forEach.call(o, function(e, t) {
                    vjs_removeClass(e, "current"),
                    sr_record_analytics_event("Switcher", sr_record_directory(), e.id)
                }),
                vjs_addClass(t, "current"),
                vjs_addClass(o[s], "current"),
                sr_chosen_enable_select(o[s]),
                vjs_hasClass(o[s], "table_container") && sr_check_sticky_table_setup(o[s].querySelector(".stats_table"))
            })
        }))
    })
}
function sr_menus_setOpeners(e) {
    e = (e = e || document).querySelectorAll(".opener,.toggler");
    vjs_forEach.call(e, function(t, e) {
        t.hasAttribute("data-has-listener") || (t.setAttribute("data-has-listener", "true"),
        t.toggle_button = "noclick",
        t.addEventListener("click", function(e) {
            t.toggle_button = "noclick" !== t.toggle_button && "clickhide" === t.toggle_button ? "clickshow" : "clickhide",
            sr_menus_runOpener(e, t),
            freezer_div_hidden_top && "show_hide_search_form" === t.id && (freezer_div_hidden_top = sr_setFreezerDivHiddenTop())
        }),
        sr_menus_resetOpenerVibrate(t))
    })
}
function sr_menus_resetOpenerVibrate(e, t) {
    return t || (vjs_hasAttr(e, "data-id") ? t = document.getElementById(vjs_getAttr(e, "data-id")) : vjs_hasAttr(e, "data-selector") && (t = document.querySelectorAll(vjs_getAttr(e, "data-selector")))),
    !!t && (e.onmouseover = function(e) {
        vjs_forEach.call(t, function(e, t) {
            vjs_addClass(e, "vibrate")
        })
    }
    ,
    e.onmouseout = function(e) {
        vjs_forEach.call(t, function(e, t) {
            vjs_removeClass(e, "vibrate")
        })
    }
    ,
    !0)
}
function sr_menus_runOpener(e, s) {
    var r, t, o, n, a, i, l, c, _, d, u = vjs_getAttr(s, "data-id"), h = vjs_getAttr(s, "data-selector");
    u ? t = document.querySelectorAll("#" + u) : h && (t = document.querySelectorAll(h)),
    t && (u = vjs_getAttr(s, "data-type"),
    o = vjs_getAttr(s, "data-textopen"),
    n = vjs_getAttr(s, "data-textclosed"),
    l = vjs_getAttr(s, "data-class"),
    a = vjs_getAttr(s, "data-starts"),
    i = vjs_getAttr(s, "data-highlightselectors"),
    l = l || "open",
    c = (c = (d = vjs_getAttr(s, "data-control-id")) ? document.getElementById(d) : c) || s,
    (d = vjs_getAttr(s, "data-delete-id")) && (_ = document.getElementById(d)),
    d = (d = c.querySelector("span")) || c,
    vjs_forEach.call(t, function(e, t) {
        "hidden" === l ? (sr_display_showHideElement(e, h.split(".").pop().trim(), s.toggle_button),
        r = "clickhide" === s.toggle_button) : (r = l ? vjs_toggleClass(e, l) : "open" === (r = vjs_toggleDisplayBlock(e)),
        sr_chosen_enable_select(e))
    }),
    vjs_toggleClass(c, "open"),
    "hide_after" === u ? c.parentNode.removeChild(c) : (!r && "open" !== a || "open" === a && r) && d && n ? d.innerHTML = n : (r && "open" !== a || "open" === a && !r) && d && o && (d.innerHTML = o),
    vjs_removeChild(_),
    e.preventDefault(),
    sr_record_analytics_event("Opener", sr_record_directory(), s.id),
    "meta_more_button" !== s.id || vjs_readCookie("meta_more_button") || vjs_createCookie("meta_more_button", 1, 28),
    i) && !Modernizr.touchevents && sr_menus_resetOpenerVibrate(s, t)
}
function sr_menus_checkInfoCookie(e) {
    if ("undefined" != typeof sr_menus_checkInfoCookie_run_inline && sr_menus_checkInfoCookie_run_inline)
        return !1;
    var t = document.getElementById("info")
      , s = document.getElementById("meta_more_button");
    if (s && t) {
        for (var r = s, o = 0; r = r.previousSibling; )
            1 === r.nodeType && vjs_isHidden(r) && o++;
        var n = vjs_readCookie("meta_more_button");
        "mobile" === e && (n = !1),
        t && s && (n || o <= 2) ? (s.parentNode.removeChild(s),
        vjs_addClass(t, "open")) : vjs_addClass(s, "show")
    }
}
function sr_menus_loadGrid() {
    var e = document.querySelectorAll(".grid_table");
    vjs_forEach.call(e, function(n, e) {
        var a = n.id
          , i = a.replace("table", "select");
        vjs_addEvent(document.getElementById(i), "change", function() {
            for (var e = document.querySelectorAll("table#" + a + " .highlight"), t = 0; t < e.length; ++t)
                vjs_removeClass(e[t], "highlight");
            var s = document.querySelectorAll("table#" + a + " tr.rowSum");
            for (t = 0; t < s.length; ++t)
                vjs_removeClass(s[t], "rowSum");
            var r = document.getElementById(i)
              , o = n.querySelectorAll("td." + r.value);
            if (o.length)
                for (t = 0; t < o.length; ++t)
                    vjs_addClass(o[t], "highlight"),
                    vjs_addClass(o[t].parentNode.firstChild, "highlight")
        })
    })
}
sr_utilities_js_loader.push(sr_menus_loadGrid);
var _sr_SHARE_SITE_URL = sr_SITE_URL;
function _remove_share_tips(e) {
    var t = document.querySelectorAll("button.delete_this_tip, tr.delete_this_tip");
    e && (t = e.querySelectorAll("button.delete_this_tip, tr.delete_this_tip")),
    vjs_forEach.call(t, function(e, t) {
        e.parentNode.removeChild(e)
    })
}
function _view_table_html(e, t, s) {
    sr_record_analytics_event("table-tool-share", "view-html-table-" + s, 1);
    var r = "<br><span>" + __sr_text_turn_inline_styles + "  "
      , r = "off" !== s && "sr" !== s ? r + "<strong>" + __sr_text_turned_On + "</strong>  / " : r + '<span class="tooltip" onclick="_view_table_html(event, \'' + t + "', 'basic')\">" + __sr_text_turned_On + "</span> / "
      , r = (r = "off" === s ? r + "<strong>" + __sr_text_turned_Off + "</strong>  / " : r + '<span class="tooltip" onclick="_view_table_html(event, \'' + t + "', 'off')\">" + __sr_text_turned_Off + "</span> / ",
    "sr" === s ? r += "<strong>SportsRef</strong>  / " : r = r + '<span class="tooltip" onclick="_view_table_html(event, \'' + t + "', 'sr')\">SportsRef</span> / ",
    "stathead" === s ? r += "<strong>SR Newsletter</strong>  / " : r = r + '<span class="tooltip" onclick="_view_table_html(event, \'' + t + "', 'stathead')\">SR Newsletter</span> / ",
    "<p>" + __sr_text_ctrl_a + (r = r + __sr_text_click_what_are_these + "</span>") + '<p><form id="fa_table_out"><textarea id="ta_table_out" class="pre" rows=10 cols=100 wrap="off"></textarea></form>');
    document.getElementById(t);
    sr_display_showPopup(e, e.target, r) && (e = _get_table_html(t, s),
    (r = document.getElementById("ta_table_out")).value = "stathead" === s ? e : '<div class="sr_share_wrap" style="overflow:auto">\n' + e + "\n",
    vjs_removeClass(r, "inactive"),
    r.focus())
}
function _get_table_html(e, t) {
    _remove_share_tips(document.getElementById(e));
    var s, e = document.getElementById("wrap_" + e), r = e.cloneNode(!0);
    e.parentNode.appendChild(r);
    if (r.id = "clone_wrapper",
    r.removeChild(r.firstChild),
    "basic" === t || "off" === t || "stathead" === t) {
        (s = r.firstChild).className = "sr_share",
        s.id = "",
        vjs_removeAttr(s, "data-cols-to-freeze"),
        "basic" === t ? vjs_setAttr(s, "style", "border-collapse: collapse; font-size:.83em; border: 1px sold #aaa; overflow:auto;") : "stathead" === t && (s.className = "",
        vjs_setAttr(s, "cellpadding", "3"),
        vjs_setAttr(s, "cellspacing", "0"),
        vjs_setAttr(s, "border", "0"),
        vjs_setAttr(s, "style", "width:100%;max-width:300px;"),
        vjs_removeAttr(s, "class"),
        vjs_setAttr(s, "class", "stats_table"),
        vjs_removeAttr(s, "id"),
        s.removeChild(s.querySelector("colgroup")),
        vjs_removeAttr(s, "id"));
        for (var o = 0, n = s.rows.length; o < n; o++) {
            for (var a = s.rows[o], i = (a.onmouseover = function() {}
            ,
            a.onmouseout = function() {}
            ,
            a.onclick = function() {}
            ,
            vjs_removeAttr(a, "onmouseover"),
            vjs_removeAttr(a, "onmouseout"),
            vjs_removeAttr(a, "onclick"),
            vjs_removeAttr(a, "data-row"),
            s.tHead.rows.length), l = 0, c = 0, _ = a.cells.length; c < _; c++) {
                var d, u = a.cells[c];
                o < i && 0 < u.innerHTML.replace(/^\s+?$/, "").length && (l = 1),
                vjs_removeAttr(u, "data-tip", ""),
                vjs_removeAttr(u, "aria-label", ""),
                vjs_removeAttr(u, "data-stat"),
                vjs_removeAttr(u, "data-append-csv"),
                vjs_removeAttr(u, "data-over-header"),
                "stathead" === t && (vjs_removeAttr(u, "csk"),
                d = u.textContent || u.innerText,
                u.innerHTML = d,
                vjs_hasClass(u, "right") ? vjs_setAttr(u, "align", "right") : vjs_hasClass(u, "center") ? vjs_setAttr(u, "align", "center") : vjs_setAttr(u, "align", "left")),
                "basic" === t && o < i && vjs_hasClass(u, "sort_col") ? vjs_setAttr(u, "style", "background-color: #ffa; border: 1px solid #aaa; padding: 2px;") : "basic" === t && o < i ? vjs_setAttr(u, "style", "background-color: #ddd; border: 1px solid #aaa; padding: 2px;") : "basic" === t && vjs_hasClass(a, "normal_text_total") ? vjs_setAttr(u, "style", "border: 1px solid #ccc; padding: 2px 3px 2px 2px; white-space: nowrap; background-color: #ddd; font-weight: normal; font-size: 0.9em;") : "basic" === t && vjs_hasClass(a, "stat_total") ? vjs_setAttr(u, "style", "border: 1px solid #ccc; padding: 2px 3px 2px 2px; white-space: nowrap; background-color: #ddd; font-weight: bold; font-size: 0.9em;") : "basic" === t ? vjs_setAttr(u, "style", "border: 1px solid #ccc; padding: 2px 3px 2px 2px; white-space: nowrap; ") : (vjs_setAttr(u, "style", ""),
                vjs_removeAttr(u, "style")),
                u.onmouseover = function() {}
                ,
                u.onmouseout = function() {}
                ,
                u.onclick = function() {}
                ,
                u.className = "",
                vjs_removeAttr(u, "onmouseover"),
                vjs_removeAttr(u, "onmouseout"),
                vjs_removeAttr(u, "onclick"),
                vjs_removeAttr(u, "class")
            }
            a.className = "",
            a.id = "",
            vjs_removeAttr(a, "id"),
            vjs_removeAttr(a, "class");
            try {
                (vjs_hasClass(a, "hidden") || "none" === a.style.display || o < i && !l) && (s.deleteRow(o),
                o--,
                n--)
            } catch (e) {}
        }
        var h = r.getElementsByTagName("span");
        vjs_forEach.call(h, function(e, t) {
            e.id = ""
        })
    }
    r.style.display = "none";
    var p = r.innerHTML;
    for ("stathead" === t && (h = s.querySelectorAll("caption"),
    vjs_forEach.call(h, function(e, t) {
        vjs_removeChild(e)
    }),
    p = s.outerHTML),
    e.parentNode.removeChild(e.parentNode.lastChild),
    p = (p = p.replace(/^[\s\t]*\n$/, "")).replace(/\r/g, ""); /\s\n/.test(p); )
        p = p.replace(/\s\n/g, "\n");
    for (; /\n\n/.test(p); )
        p = p.replace(/\n\n/g, "\n");
    return p = p.replace(/>\s+</gm, "> <")
}
function _get_url_for_sharing(e, t) {
    sr_record_analytics_event("table-tool-share", "get-url-for-sharing", 1);
    document.getElementById(t);
    var s = document.title + ": " + _get_section_heading_text(t)
      , s = '<form id=share name=share method=post action="' + (Modernizr.is_stathead ? "//" + _sr_SHARE_SITE_URL + "/tools/stathead_saveQuery.cgi" : "//" + _sr_SHARE_SITE_URL + "/tools/saveQuery.cgi") + '"><h2>' + __sr_text_save_and_share_the_table + '</h2><label  class="formlabel"  for="titler">' + __sr_text_title_of_your_report + ':</label><input type=text name=titler id=titler size=60 maxlength=255 value="' + s + '"><br><br><label class="formlabel" for="notes">' + __sr_text_note_on_your_report + ':</label><textarea class="pre" name=notes id=notes cols=60 rows=5></textarea><input type="hidden" name="lang" value="' + Modernizr.lang + '"><br>' + __sr_text_please_keep_it_clean + "<p><input type=button onclick=\"_get_sharing_link('" + t + '\');" value="' + __sr_text_save_comments_and_report + '"><br>' + __sr_text_a_link_will_be_created + "</form>";
    sr_display_showPopup(e, e.target, s)
}
function _get_section_heading_text(e) {
    for (var t = document.getElementById(e), s = t.querySelector(".section_heading h2,.table_heading h2"); !s && t.parentNode; )
        s = (t = t.parentNode).querySelector(".section_heading h2,.table_heading h2");
    return s ? s.innerHTML : ""
}
function _get_sharing_link(e) {
    var t = Modernizr.is_stathead ? "//" + _sr_SHARE_SITE_URL + "/tools/stathead_saveQuery.cgi" : "//" + _sr_SHARE_SITE_URL + "/tools/saveQuery.cgi"
      , s = vjs_serializeForm(document.getElementById("share"))
      , e = (s += "&toolused=table_share",
    _get_table_html(e, "sr"));
    e ? s = s + "&dataOut=" + encodeURIComponent(e) : s += "&dataOut=",
    vjs_Ajax("POST", t, s, function(e) {
        var t = document.getElementById("modal-content");
        t && (t.innerHTML = e)
    }, _default_error_message, !1, !1)
}
function _default_error_message() {
    var e = "<h2>" + __sr_text_we_are_sorry_failed + "</h2>";
    if ("hidden" !== document.getElementById("modal-container").style.visibility)
        return document.getElementById("modal-content").innerHTML = e,
        !1;
    sr_display_showPopup(null, null, e)
}
function _get_credit_output(e) {
    var e = document.getElementById("credit_" + e);
    return e ? ((e = e.innerHTML) && e.replace(/&amp;/gi, "&"),
    e) : ""
}
function sr_share_close_sharing(e) {
    vjs_removeChild("commands_" + e);
    var t = document.getElementById(e);
    vjs_removeClass(t, "modifying"),
    _remove_share_tips(t);
    for (var s = t.tHead.rows.length + 1, r = t.rows.length; s < r; s++)
        t.rows[s].onclick = t.rows[s].backclick;
    Modal && Modal.close({})
}
function sr_share_open_sharing(e) {
    var t = document.getElementById(e);
    if (!t)
        return !1;
    if (vjs_hasClass(t, "isolate"))
        return alert("The Modify and Share tool can not work when rows are isolated."),
        !1;
    if (vjs_addClass(t, "modifying"),
    !_create_parent_div(t))
        return !1;
    var s = document.querySelector(".drophover span,.drophover a");
    s && s.click();
    for (var r = t.rows.length - 1; 0 <= r; r--) {
        var o = t.rows[r];
        !vjs_hasClass(o, "hidden") && "none" !== o.style.display || t.deleteRow(r)
    }
    vjs_removeChild(e + "_toggle_partial_table"),
    vjs_removeChild(e + "_toggle_minors_table"),
    document.getElementById("commands_" + e) || ((s = document.createElement("div")).id = "commands_" + e,
    s.className = "share_commands",
    s.innerHTML = _get_commands_div(e),
    t.parentNode.insertBefore(s, t)),
    0 === t.querySelectorAll("button.delete_this_tip, tr.delete_this_tip").length && (_add_base_to_urls(t),
    _add_delete_tips_to_table(t)),
    _append_sr_credit(e)
}
function _add_delete_tips_to_table(e) {
    var t = e.tBodies[0]
      , s = t.insertRow(0)
      , r = (r = t.rows[1].cells) || t.rows[0].cells;
    s.className = "delete_this_tip";
    for (var o = 0, n = r.length; o < n; o++) {
        var a = r[o].colSpan ? (r[o].colSpan,
        r[o].colSpan) : 1
          , i = s.insertCell(o);
        i.colSpan = a,
        vjs_setAttr(_ = document.createElement("button"), "type", "button"),
        _.className = "sharing delete",
        _.onclick = function() {
            sr_record_analytics_event("table-tool-share", "delete-table-columns", 1),
            _delete_table_column(e, this.parentNode.cellIndex)
        }
        ,
        i.appendChild(_),
        o < r.length - 1 && (vjs_setAttr(_ = document.createElement("button"), "type", "button"),
        _.className = "sharing right",
        _.onclick = function() {
            sr_record_analytics_event("table-tool-share", "delete-table-rest-columns", 1),
            _delete_table_rest_columns(e, this.parentNode.cellIndex)
        }
        ,
        i.appendChild(_))
    }
    for (var t = e.tHead.rows.length, l = e.tFoot ? e.tFoot.rows.length : 0, c = e.rows.length, o = t + 1; o < c; o++) {
        var _, d = e.rows[o], u = d.cells[0];
        d.backclick = d.onclick,
        d.onclick = function() {}
        ,
        o < c - 1 && (vjs_setAttr(_ = document.createElement("button"), "type", "button"),
        _.className = "sharing down delete_this_tip",
        _.onclick = function() {
            sr_record_analytics_event("table-tool-share", "delete-table-column", 1),
            _delete_table_column(e, this.parentNode.cellIndex)
        }
        ,
        e.tFoot && c - l - 1 <= o ? _.onclick = function() {
            sr_record_analytics_event("table-tool-share", "delete-table-rows", 1),
            _delete_table_rest_rows(e, this.parentNode.parentNode.rowIndex, 1)
        }
        : _.onclick = function() {
            sr_record_analytics_event("table-tool-share", "delete-table-rest-rows", 1),
            _delete_table_rest_rows(e, this.parentNode.parentNode.rowIndex, 0)
        }
        ,
        u.insertBefore(_, u.firstChild)),
        vjs_setAttr(_ = document.createElement("button"), "type", "button"),
        _.className = "sharing delete delete_this_tip",
        _.onclick = function() {
            sr_record_analytics_event("table-tool-share", "delete-table-row", 1),
            _delete_table_row(e, this.parentNode.parentNode.rowIndex)
        }
        ,
        u.insertBefore(_, u.firstChild)
    }
}
function _get_commands_div(e) {
    return '<div class="closer" aria-label="close the sharing tool section" role="button" onclick="sr_share_close_sharing(\'' + e + "');\"></div> <div>" + __sr_text_click_to_delete_a_column + __sr_text_click_to_delete_trailing + "</div><div><em><strong>" + __sr_text_share_please_cite + "</em></strong><br /></div><div>" + __sr_text_share_or_get_code + '</div><div><button type="button" class="tooltip" onclick="_view_table_html(event, \'' + e + '\',\'basic\');">html &lt;table&gt;</button> / <button type="button" class="tooltip" onclick="_get_url_for_sharing(event,\'' + e + "');\">" + __sr_text_url_for_sharing + '</button> / <button type="button" class="tooltip" onclick="_view_reddit_output(event, \'' + e + '\');">|REDDIT|</button> / bbcode <button type="button" class="tooltip" onclick="_view_bbcode_output(event, \'' + e + '\');">[table]</button> or <button type="button" class="tooltip" onclick="_view_pre_output(event, \'' + e + '\', \'code_wrap\');">[code]</button> / <button type="button" class="tooltip" onclick="_view_pre_output(event, \'' + e + "', 'html');\"><tt>" + __sr_text_pre_formatted_text + '</tt></button> / <button type="button" class="tooltip" onclick="_view_csv_output(event, \'' + e + "');\">" + __sr_text_comma_separated + '</button> / <button type="button" class="tooltip" onclick="_view_wiki_output(event, \'' + e + '\',\'wiki_link\');">[[wiki]]</button> </div><div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" class="tooltip" onclick="sr_display_showPopup(event, this, \'//' + _sr_SHARE_SITE_URL + "/inc/shareit" + (Modernizr.lang && "en" !== Modernizr.lang ? "-" + Modernizr.lang : ".html_f');\">") + __sr_text_what_are_these + '</button> / <button type="button" class="tooltip" onClick="window.location.reload()">' + __sr_text_mess_up_click_to_reload + "</button></div> "
}
function _append_sr_credit(e) {
    var t, s, r, o;
    document.getElementById("credit_" + e) || (t = document.getElementById(e),
    s = "Generated " + ((s = new Date).getMonth() + 1) + "/" + s.getDate() + "/" + s.getFullYear(),
    (r = document.createElement("div")).id = "credit_" + e,
    r.style.fontSize = "0.83em",
    o = "?sr",
    window.location.search.length && (o = window.location.search),
    "ajax_result_table" === e || Modernizr.is_stathead ? r.innerHTML = __sr_text_provided_by + ' <a href="' + window.location.protocol + sr_SHARING_PAGE + '?utm_source=direct&utm_medium=Share&utm_campaign=ShareTool">' + sr_SITE_NAME + '</a>: <a href="' + window.location.protocol + "//" + window.location.host + window.location.pathname + '?utm_source=direct&utm_medium=Share&utm_campaign=ShareTool">' + __sr_text_view_stathead_tool + "</a><br>" + s + "." : r.innerHTML = __sr_text_provided_by + ' <a href="' + window.location.protocol + sr_SHARING_PAGE + '?utm_source=direct&utm_medium=Share&utm_campaign=ShareTool">' + sr_SITE_NAME + '</a>: <a href="' + window.location.protocol + "//" + window.location.host + window.location.pathname + o + "&utm_source=direct&utm_medium=Share&utm_campaign=ShareTool#" + e + '">' + __sr_text_view_original_table + "</a><br>" + s + ".",
    r.className = "sr_share",
    t.appendChild(r),
    t.parentNode.insertBefore(r, t.nextSibling))
}
function _delete_table_row(e, t) {
    e.rows.length > t && e.deleteRow(t)
}
function _delete_table_rest_rows(e, t, s) {
    if (s)
        for (var r = e.tFoot.rows.length + e.tHead.rows.length + e.tBodies[0].rows.length - 1; t + 1 <= r; r--)
            _delete_table_row(e, r);
    else
        for (r = e.tBodies[0].rows.length + e.tHead.rows.length - 1; t + 1 <= r; r--)
            _delete_table_row(e, r)
}
function _delete_table_column(e, t, s) {
    var r = e.querySelectorAll("th[colspan],td[colspan]");
    vjs_forEach.call(r, function(e, t) {
        if (1 < vjs_getAttr(e, "colspan"))
            for (var s = vjs_getAttr(e, "colspan"), r = (vjs_setAttr(e, "colspan", 1),
            e.innerHTML = e.textContent.substring(0, 4) || e.innerText.substring(0, 4),
            e.cloneNode(!0)), t = 0; t < s - 1; t++)
                e.insertAdjacentHTML("afterend", r.outerHTML)
    });
    for (var o = 0, n = e.rows.length; o < n; o++)
        for (var a, i = (a = e.rows[o]).cells, l = 0, c = 0, _ = 0, d = i.length; _ < d && !c; _++) {
            var u = i[_].colSpan;
            if (t < l + u && l < t && 1 < u ? (i[_].colSpan--,
            c = 1,
            _++) : t < l + u && (a.deleteCell(_),
            c = 1),
            l += u,
            s && c)
                for (; _ < i.length; )
                    a.deleteCell(_)
        }
}
function _delete_table_rest_columns(e, t) {
    _delete_table_column(e, t + 1, 1)
}
function _create_parent_div(e) {
    var t, s, r;
    return e ? (t = e.id,
    document.getElementById("wrap_" + t) || (s = e.parentNode,
    (r = document.createElement("div")).id = "wrap_" + t,
    s.insertBefore(r, e),
    r.appendChild(e)),
    !0) : (alert(__sr_text_data_not_shareable_format),
    !1)
}
function _set_textarea(e) {
    var t = document.getElementById("ta_table_out");
    vjs_removeClass(t, "inactive"),
    t.value = e,
    t.focus()
}
function _add_base_to_urls(e) {
    for (var t = /^(https?|ftp):\/\//, s = e.getElementsByTagName("a"), r = 0, o = s.length; r < o; ++r) {
        var n, a, i = s[r], l = vjs_getAttr(i, "href"), c = _sr_SHARE_SITE_URL.replace(/\/.*/, "");
        l && (n = /\?/,
        a = /#/,
        (l = t.test(l) ? l : window.location.protocol + "//" + c + l.replace("//", "/")).match(n) ? l = l.replace(n, "?utm_source=direct&utm_medium=Share&utm_campaign=ShareTool&") : l.match(a) ? l = l.replace(a, "?utm_source=direct&utm_medium=Share&utm_campaign=ShareTool#") : l += "?utm_source=direct&utm_medium=Share&utm_campaign=ShareTool",
        vjs_setAttr(i, "href", l))
    }
}
function _view_csv_output(e, t) {
    _remove_share_tips(document.getElementById(t)),
    sr_record_analytics_event("table-tool-share", "view-csv-output", 1);
    var s = "--- " + __sr_text_share_cite_plaintext + "\n\n\n "
      , r = (s = (s += get_csv_output(t, !1, !0, !1)).replace(/<!-- ALREADYCSV -->/gi, "").concat("\n\n\n"),
    document.getElementById("credit_" + t))
      , r = (s += r.innerHTML,
    "<p>" + __sr_text_ctrl_a + '<p><form id="fa_table_out"><textarea class="pre" id="ta_table_out" rows=10 cols=100 wrap=off>' + s + "</textarea></form>");
    document.getElementById(t);
    sr_display_showPopup(e, e.target, r) && (vjs_removeClass(s = document.getElementById("ta_table_out"), "inactive"),
    s.focus())
}
function _view_pre_output(e, t, s) {
    sr_record_analytics_event("table-tool-share", "view-pre-output", 1),
    _remove_share_tips(document.getElementById(t));
    var r = __sr_text_show_credit_links_in + " "
      , r = "<p>" + __sr_text_ctrl_a + (r += "html" === s ? "<strong>html</strong> / " : "bbcode" === s ? '<button class="tooltip" onclick="_view_pre_output(event,\'' + t + "','html')\">html</button> / <strong>bbcode</strong> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','sb')\">SBNation</button> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','code_wrap')\">[code] wrap</button>  " : "sb" === s ? '<button class="tooltip" onclick="_view_pre_output(event,\'' + t + "','html')\">html</button> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','bbcode')\">bbcode</button> / <strong>SBNation</strong> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','code_wrap')\">[code] wrap</button>  " : "code_wrap" === s ? '<button class="tooltip" onclick="_view_pre_output(event,\'' + t + "','html')\">html</button> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','bbcode')\">bbcode</button> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','sb')\">SBNation</button> / <strong>[code] wrap</strong>  " : '<button class="tooltip" onclick="_view_pre_output(event,\'' + t + "','html')\">html</button> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','bbcode')\">bbcode</button> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','sb')\">SBNation</button> / <button class=\"tooltip\" onclick=\"_view_pre_output(event,'" + t + "','code_wrap')\">[code] wrap</button>  ") + '<p><form id="fa_table_out"><textarea class="pre" id="ta_table_out" rows=10 cols=100 wrap=off></textarea></form>';
    document.getElementById(t);
    sr_display_showPopup(e, e.target, r) && (vjs_removeClass(e = document.getElementById("ta_table_out"), "inactive"),
    vjs_addClass(e, "pre"),
    e.focus(),
    r = (r = get_csv_output(t, !0, !0, !0)) && r.replace(/<!-- ALREADYCSV -->/gi, "") + "\n\n\n",
    e = _get_credit_output(t),
    vjs_Ajax("POST", "//" + _sr_SHARE_SITE_URL + "/tools/csv2pre.cgi", "ajax=0&csv=" + encodeURIComponent(r) + "&credit=" + encodeURIComponent(e) + "&credit_type=" + s, _set_textarea, _default_error_message, !1, !1))
}
function _view_bbcode_output(e, t) {
    sr_record_analytics_event("table-tool-share", "view-bbcode-output", 1),
    _remove_share_tips(document.getElementById(t));
    var s = "<p>" + __sr_text_ctrl_a + '<p><form id="fa_table_out"><textarea class="pre" id="ta_table_out" rows=10 cols=100 wrap=off></textarea></form>';
    document.getElementById(t);
    sr_display_showPopup(e, e.target, s) && (vjs_removeClass(e = document.getElementById("ta_table_out"), "inactive"),
    e.focus(),
    s = (s = get_csv_output(t, !0, !0, !0)).replace(/<!-- ALREADYCSV -->/gi, "") + "\n\n\n",
    e = _get_credit_output(t),
    vjs_Ajax("POST", "//" + _sr_SHARE_SITE_URL + "/tools/csv2pre.cgi", "ajax=0&bbcode=1&csv=" + encodeURIComponent(s) + "&credit=" + encodeURIComponent(e) + "&credit_type=bbcode", _set_textarea, _default_error_message, !1, !1))
}
function _view_wiki_output(e, t, s) {
    _remove_share_tips(document.getElementById(t)),
    sr_record_analytics_event("table-tool-share", "view-wiki-output", 1);
    var r = __sr_text_show_credit_links_as + " "
      , r = "<p>" + __sr_text_ctrl_a + (r += "wiki_link" === s ? '<strong>link</strong> / <button class="tooltip" onclick="_view_wiki_output(event,\'' + t + "','wiki_ref')\">&lt;ref&gt;</button> " : "wiki_ref" === s ? '<button class="tooltip" onclick="_view_wiki_output(event,\'' + t + "','wiki_link')\">link</button> / <strong>&lt;ref&gt;</strong>" : '<button class="tooltip" onclick="_view_wiki_output(event,\'' + t + "','wiki_link')\">link</button> / <button class=\"tooltip\" onclick=\"_view_wiki_output(event,'" + t + "','wiki_ref')\">&lt;ref&gt;</button> ") + '<p><form id="fa_table_out"><textarea class="pre" id="ta_table_out" rows=10 cols=100 wrap=off></textarea></form>';
    document.getElementById(t);
    sr_display_showPopup(e, e.target, r) && (document.getElementById("ta_table_out").focus(),
    e = (e = get_csv_output(t, !0, !0, !0)).replace(/<!-- ALREADYCSV -->/gi, "") + "\n\n\n",
    r = _get_credit_output(t),
    vjs_Ajax("POST", "//" + _sr_SHARE_SITE_URL + "/tools/csv2pre.cgi", "ajax=0&wiki=1&csv=" + encodeURIComponent(e) + "&credit=" + encodeURIComponent(r) + "&credit_title=" + encodeURIComponent(document.title) + "&credit_type=" + s, _set_textarea, _default_error_message, !1, !1))
}
function _view_reddit_output(e, t) {
    _remove_share_tips(document.getElementById(t)),
    sr_record_analytics_event("table-tool-share", "view-reddit-output", 1);
    var s = "<p>" + __sr_text_ctrl_a + '<p><form id="fa_table_out"><textarea class="pre" id="ta_table_out" rows=10 cols=100 wrap=off></textarea></form>';
    document.getElementById(t);
    sr_display_showPopup(e, e.target, s) && (document.getElementById("ta_table_out").focus(),
    e = (e = get_csv_output(t, !0, !0, !0, !0)).replace(/<!-- ALREADYCSV -->/gi, "") + "\n\n\n",
    s = _get_credit_output(t),
    vjs_Ajax("POST", "//" + _sr_SHARE_SITE_URL + "/tools/csv2pre.cgi", "ajax=0&reddit=1&csv=" + encodeURIComponent(e) + "&credit=" + encodeURIComponent(s) + "&credit_type=reddit&credit_title=" + encodeURIComponent(document.title), _set_textarea, _default_error_message, !1, !1))
}
function makeTinyURL(e, t, s) {
    sr_share_makeTinyURL(e = e || window.event, t, s)
}
function sr_share_makeTinyURL(e, t, s) {
    var r = "//" + _sr_SHARE_SITE_URL + "/tools/make_tiny_url.cgi"
      , s = (Modernizr.is_stathead && "fbref.com" !== sr_SITE_URL && (r = "//" + _sr_SHARE_SITE_URL + "/tools/stathead_tiny_url.cgi"),
    "string" == typeof sr_TINY_URL && (r = sr_TINY_URL),
    "url=" + encodeURIComponent(s) + "&lang=" + Modernizr.lang);
    sr_display_showPopup(e, t, r + "?" + s, [10, 10])
}
function _sr_copy_page_info_to_clipboard() {
    var e = document.getElementById("meta_more_button")
      , e = (e && e.click(),
    document.getElementById("info"))
      , t = e.querySelector("#bling-alt-text")
      , s = e.getElementsByTagName("script")[0]
      , r = e.querySelector(".adblock.ad300")
      , t = (t && e.removeChild(t),
    r && e.removeChild(r),
    s && s.remove(),
    e.querySelector("#meta h1 span"));
    t && (r = document.createElement("a"),
    s = document.createTextNode(t.innerText),
    r.appendChild(s),
    r.href = window.location.href,
    t.innerHTML = r.outerHTML);
    sr_utilities_change_tag(e.querySelector("#meta h1"), "h2");
    for (var o = e.querySelectorAll("a[href^='/']"), n = o.length, a = 0; a < n; a++)
        o[a].href = o[a].href;
    var i = e.querySelectorAll("[data-tip]")
      , l = i.length;
    for (a = 0; a < l; a++)
        i[a].removeAttribute("data-tip");
    navigator.clipboard.writeText(e.outerHTML).then( () => alert("copied player header text to clipboard."))
}
sr_utilities_js_loader.push(function() {
    Modernizr.is_stathead && "fbref.com" !== sr_SITE_URL && (_sr_SHARE_SITE_URL = "stathead.com")
});
var sr_page_id, sr_append_csv_string = "&&";
function sr_st_construct_data_grid_features(e, t) {
    var r, o, s, n;
    return !!e && !(!(r = document.getElementById(e)) || vjs_hasAttr(r, "data-no-overall-control") || vjs_hasClass(r, "footer") || (e = r.parentNode.querySelector(".section_heading_text > ul"),
    o = vjs_getAttr(r, "data-entry-type") || "[[SET entry_type in template]]",
    s = document.createElement("LI"),
    vjs_addClass(n = document.createElement("BUTTON"), "tooltip"),
    n.innerHTML = __sr_text_expand_all + " " + o,
    n.is_open = 0,
    n.onclick = function() {
        var s = 0 < n.is_open ? "closing" : "opening"
          , e = (n.is_open = "opening" == s ? 1 : 0,
        r.querySelectorAll(".data_grid_box"));
        vjs_forEach.call(e, function(e, t) {
            "opening" == s ? vjs_addClass(e, "show_all") : "closing" == s && vjs_removeClass(e, "show_all")
        }),
        n.innerHTML = "opening" == s ? __sr_text_minimize_all + " " + o : __sr_text_expand_all + " " + o,
        sr_record_analytics_event("grid_control_click", sr_record_directory(), n.id)
    }
    ,
    s && s.appendChild(n),
    e && e.appendChild(s),
    0))
}
function sr_st_construct_stats_table_features(e, a) {
    e = "string" == typeof e ? document.querySelectorAll("#" + e) : e.querySelectorAll("table.stats_table,table.show_controls");
    vjs_forEach.call(e, function(e, t) {
        var s, r, o, n = e.id;
        return !(!e || (o = vjs_closest(e, ".table_wrapper,.section_wrapper"),
        s = document.querySelector("#div_" + n),
        r = document.querySelector("#" + n + "_sh"),
        o = o || e.parentNode,
        !r) || vjs_isHidden(o) || vjs_hasClass(s, "is_setup")) && (vjs_addClass(s, "is_setup"),
        sr_st_statline_appendTableControls(n),
        log_performance && sr_perf_logPerformance("tableControls:" + n),
        sr_menus_setupDropMenu(r.querySelector(".hasmore")),
        log_performance && sr_perf_logPerformance("setupDropMenus:" + n),
        sr_st_add_table_headers(n),
        sr_sorttable.init(n),
        log_performance && sr_perf_logPerformance("sr_sorttable:" + n),
        Modernizr && !document.querySelector("#content.front") && (sr_check_sticky_table_setup(e),
        log_performance) && sr_perf_logPerformance("mobilize_tables:" + n),
        vjs_hasClass(e, "row_summable") ? sr_st_statline_rowSum(n) : vjs_hasClass(e, "no_highlight") || sr_st_statline_rowHighlight(n),
        sr_setup_presets(o) && sr_perf_logPerformance("form presets   "),
        log_performance && sr_perf_logPerformance("rowsum    "),
        !Modernizr || Modernizr.touch || a || (sr_display_tooltipShow(n),
        log_performance && sr_perf_logPerformance("tooltipShow")),
        sr_display_setup_endpoint_onclick(n),
        void sr_utilities_compute_localtime(n))
    })
}
function sr_check_sticky_table_setup(s) {
    if (s && !s.classList.contains("sticky_table")) {
        let e, t;
        vjs_closest(s, ".data_grid.section_wrapper") ? (e = vjs_closest(s, ".data_grid.section_wrapper > div"),
        t = !0) : e = document.getElementById("stathead_results") || document.getElementById("content");
        var r = e.clientWidth
          , o = s.clientWidth
          , n = s.querySelectorAll("thead > tr > th").length;
        n && (r - 25 < o || Modernizr.narrow && s.classList.contains("force_mobilize")) && sr_st_mobilize_stats_table(s, t)
    }
}
function sr_st_statline_rowHighlight(r) {
    var e;
    if (!r)
        return !1;
    e = document.querySelectorAll("#" + r),
    vjs_forEach.call(e, function(s, e) {
        var t = s.querySelectorAll("tbody > tr");
        vjs_forEach.call(t, function(t, e) {
            t.highlighted = 0,
            t.onclick = function(e) {
                vjs_hasClass(s, "isolate") || vjs_hrefIsClicked(e, t) || (t.highlighted ? (vjs_removeClass(t, "rowSum"),
                t.fixed_row && vjs_removeClass(t.fixed_row, "rowSum")) : (vjs_addClass(t, "rowSum"),
                t.fixed_row && vjs_addClass(t.fixed_row, "rowSum")),
                t.highlighted = (t.highlighted + 1) % 2,
                sr_record_analytics_event("row_highlight", sr_record_directory(), r),
                sr_st_statline_showRowSelectControl(s, t))
            }
        })
    })
}
function sr_st_statline_showRowSelectControl(e, t, s) {
    var r;
    return vjs_hasClass(e, "modifying") ? (alert("The Row Isolate tool can not work when using the Modify and Share tool."),
    !1) : !(!e || vjs_hasClass(e, "select_off") || window.location.href.includes("/ozzie/") || window.location.hostname.includes("ozzie") || window.location.href.includes("/ozzie/") || window.location.hostname.includes("ozzie") || window.location.href.includes("/my/") || window.location.hostname.includes("my") || window.location.href.includes("/auth/") || window.location.hostname.includes("auth") || sr_display_modalOpen || !(r = document.getElementById("content")) || vjs_hasClass(r, "front")) && (r = "<button onclick=\"sr_st_statline_rowSelect('" + e.id + "')\")>" + (s || __sr_text_show_only_selected_rows) + "</button>",
    void (e.querySelectorAll(".rowSum").length ? sr_display_showPopup(null, null, r, {
        hug: "top",
        closeCallback: function() {
            sr_st_statline_rowSelect(e.id, 1)
        }
    }) : Modal.close({})))
}
function sr_st_statline_rowSelect(e, t) {
    var s, r = document.getElementById(e);
    sr_record_analytics_event("row_isolate", sr_record_directory(), e),
    vjs_hasClass(r, "isolate") || t ? (vjs_removeClass(r, "isolate"),
    e = r.querySelectorAll("tbody tr.hidden-iso:not(.rowSum),tfoot tr"),
    (s = []).push.apply(s, e),
    e.length,
    vjs_forEach.call(s, function(e, t) {
        vjs_removeClass(e, "hidden-iso")
    }),
    t || sr_st_statline_showRowSelectControl(r, null)) : (vjs_addClass(r, "isolate"),
    e = r.querySelectorAll("tbody tr:not(.rowSum),tfoot tr"),
    (s = []).push.apply(s, e),
    setTimeout(function() {
        vjs_forEach.call(s, function(e, t) {
            vjs_addClass(e, "hidden-iso")
        }),
        r.scrollIntoView({
            behavior: "smooth",
            block: "center"
        }),
        sr_st_statline_showRowSelectControl(r, null, "Show All Rows")
    }, 950))
}
function sr_st_statline_rowSum(e) {
    e = e ? document.querySelectorAll("#" + e + ".row_summable") : document.querySelectorAll("table.row_summable");
    vjs_forEach.call(e, function(s, e) {
        void 0 === s.spans_active && (s.spans_active = "0-0");
        var t = s.querySelectorAll("tbody > tr");
        vjs_forEach.call(t, function(t, e) {
            t.onclick = function(e) {
                vjs_hrefIsClicked(e, t) || _sr_rowSum_sumSpan(e, s, this)
            }
        })
    })
}
function sr_statsTables_rowSum_init() {
    var e = document.querySelector("[data-player-id]");
    (sr_page_id = vjs_getAttr(e, "data-player-id")) || (e = document.querySelector('meta[property="og:url"]'),
    sr_page_id = vjs_getAttr(e, "content")),
    _highlight_span_from_url(sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = (sr_page_id = sr_page_id || window.location.pathname).replace(/.*\/players\/.\//, "")).replace(/.*\/players\//, "")).replace(/.*\/managers\//, "")).replace(/.*\/teams\//, "")).replace(/.*\/schools\//, "")).replace(/\/[^0-9].*$/, "")).replace(/\/gamelog\/?\/?$/, "")).replace(".shtml", "")).replace(".html", "")).replace(".htm", ""))
}
function _sr_rowSum_sumSpan(e, t, s) {
    var r, o, n, a, i, l, c, _, d, u;
    s.id && (r = t.id,
    o = t.getAttribute("data-soc-sum-scope-type"),
    n = t.getAttribute("data-soc-sum-phase-type"),
    a = t.getAttribute("data-soc-sum-table-type"),
    i = t.getAttribute("data-soc-sum-entity-id"),
    l = s.id.split("."),
    l = parseInt(l[1]),
    (c = t.spans_active.split("-"))[0] = parseInt(c[0]),
    c[1] = parseInt(c[1]),
    _ = c[0],
    d = c[1],
    l === c[u = 0] ? (u++,
    c[1] && l !== c[1] ? c[0] = c[1] : c[0] = 0) : (0 === c[0] || l < c[0] || 0 === c[0] && 0 === c[1]) && (c[0] = l),
    l === c[1] ? (u++,
    c[0] && l !== c[0] ? c[1] = c[0] : c[1] = 0) : 0 === u && (0 === c[1] || l > c[0]) && (c[1] = l),
    2 === u ? _color_span(r, 0, 0, _, d) : _color_span(r, c[0], c[1], _, d),
    t.spans_active = c[0].toString() + "-" + c[1],
    0 < c[0]) && 0 < c[1] && c[0] < c[1] && _get_span_stats(e, sr_page_id, r, c[0].toString().concat("-", c[1]), 1, 0, s, o, n, a, i)
}
function _get_span_stats(e, t, s, r, o, n, a, i, l, c, _) {
    if (0 < r.indexOf("-"))
        u = r.split("-");
    else {
        if (!(0 < r.indexOf(",")))
            return;
        u = r.split(",")
    }
    var d = u[0]
      , u = u.pop()
      , a = a || document.getElementById(s + "." + u);
    (a = (a = a || document.getElementById(s + "." + d)) || document.getElementById(s)) && (elemCLICKED = a,
    u = "",
    n && (u = "&rand=" + Math.floor(1e4 * Math.random())),
    d = "html=1&page_id=" + escape(t) + "&table_id=" + escape(s) + "&range=" + escape(r) + "&plink=" + o + u + "&phase_type=" + l + "&table_type=" + c + "&entity_id=" + _,
    n = sr_rowsum_span_url,
    sr_display_showPopup(e, a, (n = "player_season" === i ? sr_SITE_PREFIX.concat("/tools/soc_player_season_summing.cgi") : n) + "?" + d))
}
function clear_span_selection(e) {
    var t = document.getElementById(e);
    Modal.close({});
    var s = t.spans_active.split("-");
    t.spans_active = "0-0",
    _color_span(e, 0, 0, parseInt(s[0]), parseInt(s[1]))
}
function _color_span(e, t, s, r, o) {
    var n, a;
    if (t = parseInt(t),
    s = parseInt(s),
    r = parseInt(r),
    o = parseInt(o),
    s < t && (n = t,
    t = s,
    s = n),
    0 === t && 0 === s)
        for (a = r; a <= o; a++)
            _color_uncolor_row(e, a, "off");
    else {
        if (0 < r)
            for (a = r; a < t; a++)
                _color_uncolor_row(e, a, "off");
        if (0 < o)
            for (a = s + 1; a <= o; a++)
                _color_uncolor_row(e, a, "off");
        if (!(s < t))
            for (a = t; a <= s; a++)
                _color_uncolor_row(e, a, "on")
    }
}
function _uncolor_row(e, t) {
    _color_uncolor_row(e, t, "off")
}
function _color_row(e, t) {
    _color_uncolor_row(e, t, "on")
}
function _color_uncolor_row(e, t, s) {
    var r = parseInt(t + 1)
      , o = '[id="' + e + "." + t + '"]'
      , n = '[id="' + e + "." + t + "-" + r + '"]'
      , a = '[id="' + e + "." + t + '.clone"]'
      , e = '[id="' + e + "." + t + "-" + r + '.clone"]'
      , t = document.querySelectorAll(o + "," + n + "," + a + "," + e);
    vjs_forEach.call(t, function(e, t) {
        e && ("off" === s ? vjs_removeClass : vjs_addClass)(e, "rowSum")
    })
}
function _highlight_span_from_url(e) {
    var t = location.hash.slice(1);
    if (!t.match("::")) {
        var s = t.split(":")[0]
          , r = t.split(":")[1]
          , o = document.getElementById(r);
        if (!o) {
            if (!(o = document.querySelector("table.stats_table.row_summable") || document.querySelector("table.stats_table")) || !/[A-z0-9]/.test(o.id))
                return !1;
            r = o.id
        }
        if (!s || !o)
            return !1;
        if (0 === t.length || !r)
            return !1;
        var n, a, i, l, t = o.getAttribute("data-soc-sum-scope-type"), c = o.getAttribute("data-soc-sum-phase-type"), _ = o.getAttribute("data-soc-sum-table-type"), d = o.getAttribute("data-soc-sum-entity-id"), u = s.split("-"), h = s.split(","), s = h.length > u.length ? document.getElementById(r + "." + h[0]) : document.getElementById(r + "." + u[0]);
        if (s && "sum" !== u[2] ? s || (n = document.getElementById(r + "." + h[-1])) && (s = n) : (n = document.getElementById(r + "." + u[1])) && (s = n),
        s && (n = vjs_offset(s),
        window.scroll(0, n.top - 220)),
        u.length <= 1 && h.length <= 1)
            _color_uncolor_row(r, u[0], "on"),
            o.spans_active = h[0].toString() + "-" + h[0];
        else if (1 < u.length)
            u.sort(function(e, t) {
                return "sum" === e ? 999999999999 : "sum" === t ? -99999999999 : e - t
            }),
            _color_span(r, parseInt(u[0]), parseInt(u[1]), 0, 0),
            void 0 === o.spans_active && (o.spans_active = u[0].toString() + "-" + u[1]),
            "sum" === u[2] && _get_span_stats(null, sr_page_id, r, o.spans_active, 0, 1, null, t, c, _, d);
        else if (1 < h.length) {
            for (h.sort(function(e, t) {
                return "sum" === e ? 999999999999 : "sum" === t ? -99999999999 : e - t
            }),
            a = 0; a < h.length; a++)
                _color_uncolor_row(r, h[a], "on"),
                l = i,
                i = h[a];
            s = 0;
            "sum" === i && (h.pop(),
            s = 1,
            i = l),
            s && _get_span_stats(null, e, r, h.join(","), 0, 0, null, t, c, _, d)
        }
        void 0 !== o.spans_active && (o.spans_active = h[0].toString() + "-" + i)
    }
    return !0
}
function sr_st_clicked_on_fixed() {
    var e = this.table;
    e.headrowCells[this.col];
    sr_sorttable.sortOnColumn(e.headrowCells[this.col], e)
}
function sr_st_mobilize_modal_table() {
    var e = document.querySelector("#modal-content table.stats_table");
    e && sr_st_construct_stats_table_features(e.id)
}
function sr_st_add_sidescroll_note(e) {
    e = vjs_getAttr(e, "id"),
    e = document.querySelector(".section_heading#" + e + "_sh");
    if (!e || vjs_hasClass(document.body, "widescreen"))
        return !1;
    var s = e.querySelector(".section_heading_text")
      , e = (vjs_addClass(s, "sidescroll_note"),
    s.querySelector("ul"))
      , r = document.createElement("LI")
      , t = (r.innerHTML = __sr_text_scroll_right_widescreen,
    r.className = "scroll_note",
    r.querySelector(".click"));
    t.className = "tooltip",
    t.onclick = function(e) {
        sr_st_reduceFormatting(),
        sr_record_analytics_event("strip mobile formatting", sr_record_directory(), "table-note"),
        vjs_removeChild(r),
        vjs_removeClass(s, "sidescroll_note");
        var t = document.querySelectorAll(".rails.adblock")
          , t = (vjs_forEach.call(t, function(e, t) {
            vjs_removeChild(e)
        }),
        document.getElementById("ad-wrapper-left"))
          , t = (t && vjs_removeChild(t),
        (t = document.getElementById("ad-wrapper-right")) && vjs_removeChild(t),
        (t = document.getElementById("fs-sidewall-left-container")) && vjs_removeChild(t),
        (t = document.getElementById("fs-sidewall-right-container")) && vjs_removeChild(t),
        document.querySelectorAll(".topscroll_div"));
        vjs_forEach.call(t, function(e, t) {
            vjs_removeChild(e)
        })
    }
    ,
    e.appendChild(r)
}
function sr_st_mobilize_stats_table(s, e) {
    if (!s)
        return !1;
    var t = s.id;
    if (vjs_hasClass(s, "no_freeze"))
        return !1;
    var r = s.getAttribute("data-cols-to-freeze");
    if (!r)
        return !1;
    var o = r.split(",");
    o[0];
    if (1 === o.length) {
        for (var n = [], a = 1; a <= o[0]; a++)
            n.push(a);
        r = n.join(",")
    } else if (2 !== o.length || o[0]) {
        if (2 === o.length && o[1] <= o[0]) {
            for (n = [],
            a = o[1]; a <= o[0]; a++)
                n.push(a);
            r = n.join(",")
        }
    } else
        r = o[1];
    var i = ""
      , l = r.split(",");
    if (l.sort(function(e, t) {
        return e - t
    }),
    !l[0])
        return !1;
    r = s.querySelector("tbody tr:not(.hidden) > :nth-child(" + l[l.length - 1] + ")");
    if (!r)
        return !1;
    for (var c = r.parentNode.children, _ = (vjs_addClass(s, "sticky_table"),
    vjs_forEach.call(l, function(e, t) {
        vjs_addClass(s, "eq" + e)
    }),
    vjs_addClass(s, "re" + l[l.length - 1]),
    vjs_addClass(s, "le" + l[0]),
    []), d = 0; d < l.length; ++d) {
        for (var u = l[d] - 1, h = 0, p = 0; p < d; ++p)
            h += c[l[p] - 1].offsetWidth;
        i = i + "#" + t + " td:nth-child(" + (1 + u) + "):not(.not_sticky), #" + t + " th:nth-child(" + (1 + u) + "):not(.not_sticky) { left: " + h + "px; position: sticky; z-index: 1; }\n",
        _[u] = c[u].offsetWidth
    }
    sr_st_mobilize_stats_table_sticky_explain(s, e);
    s.querySelector("thead th[colspan],tfoot th[colspan]") && sr_st_set_sticky_colspans(s, l, _);
    r = "sticky_style_" + s.id,
    e = document.getElementById(r),
    e && e.remove(),
    e = document.createElement("style");
    return e.id = r,
    e.innerHTML = i,
    s.parentNode.insertBefore(e, s.nextSibling),
    !0
}
function sr_st_set_sticky_colspans(e, t, l) {
    e = e.querySelectorAll("thead tr,tfoot tr");
    vjs_forEach.call(e, function(n, e) {
        if (!sr_st_check_sticky_colspans(n, t))
            return !0;
        var a = []
          , i = (vjs_forEach.call(n.cells, function(e, t) {
            a[t] = []
        }),
        0);
        vjs_forEach.call(t, function(e, t) {
            for (var s = n.cells, r = -1, o = 0; r < s.length && o < e; )
                o += s[++r].colSpan;
            a[i = r].push(e)
        }),
        vjs_forEach.call(n.cells, function(e, t) {
            if (0 === a[t].length)
                vjs_addClass(e, "not_sticky");
            else {
                for (var s = 0, r = 0; r <= t; )
                    vjs_forEach.call(a[r], function(e, t) {
                        s += l[e - 1]
                    }),
                    r++;
                var o = s - e.offsetWidth;
                e.style.left = o < 0 ? "-" + -o + "px" : o + "px",
                e.style.position = "sticky",
                e.style.textAlign = "right",
                e.style.zIndex = 20 - t,
                t === i && (e.style.borderRight = "1px solid #949698")
            }
        })
    })
}
function sr_st_check_sticky_colspans(e, t) {
    for (var s = 0; s < t[t.length - 1]; ) {
        if (1 < e.cells[s].colSpan)
            return !0;
        s++
    }
    return !1
}
function sr_st_mobilize_stats_table_sticky_explain(e, t) {
    (Modernizr.desktop || Modernizr.laptop) && (vjs_hasClass(document.body, "sr_expanded") || e.added_sidescroll || t || (e.added_sidescroll = !0,
    sr_st_add_sidescroll_note(e)),
    vjs_hasClass(document.body, "sr_expanded") || e.added_topscroll || (e.added_topscroll = !0,
    sr_st_add_topscroll(e)))
}
function sr_st_add_topscroll(e) {
    var t = e.parentNode;
    if (e.querySelectorAll("tr").length < 8)
        return !1;
    var s = e.clientWidth
      , r = document.createElement("DIV")
      , o = document.createElement("DIV");
    vjs_addClass(r, "topscroll_div"),
    vjs_addClass(o, "topscroll_inner_div"),
    o.style.width = s.toString() + "px",
    vjs_addClass(r, "assoc_" + e.id),
    r.appendChild(o),
    t.parentNode.insertBefore(r, t),
    t.onscroll = function() {
        r.scrollLeft = t.scrollLeft
    }
    ,
    r.onscroll = function() {
        t.scrollLeft = r.scrollLeft
    }
}
function sr_st_reduceFormatting() {
    vjs_addClass(document.body, "sr_expanded");
    var e = document.querySelectorAll('span[class*="sorttable_elSort"]')
      , e = (vjs_forEach.call(e, function(e, t) {
        vjs_removeChild(e)
    }),
    document.querySelectorAll("tr.thead"));
    vjs_forEach.call(e, function(e, t) {
        vjs_removeChild(e)
    });
    document.getElementById("wrap").style.width = "100%";
    e = document.querySelectorAll(".table_container");
    vjs_forEach.call(e, function(e, t) {
        vjs_removeClass(e, "table_container")
    })
}
function sr_st_statline_glossaryBuild(e) {
    var n = (n = '<div id="sr_glossary">') + '<div class="glossary_entry no_over">' + __sr_text_also_view_explanations + "</div>\n"
      , e = document.querySelectorAll("table#" + e + " > thead > tr > th, table#" + e + " > tbody > tr > th")
      , a = "";
    return vjs_forEach.call(e, function(e, t) {
        var s, r = vjs_getAttr(e, "data-over-header"), o = (r && a !== r && (n += s = '<div class="header_entry">' + r + "</div>\n"),
        a = r,
        "");
        vjs_hasAttr(e, "data-tip") ? o = vjs_getAttr(e, "data-tip") : vjs_hasAttr(e, "tip") && (o = vjs_getAttr(e, "tip")),
        o && (s = '<div class="glossary_entry' + (r ? "" : " no_over") + '"><span class="glossary_title bold_text">' + e.innerHTML + '</span> -- <span class="glossary_desc">' + o + "</span></div>\n",
        n += s)
    }),
    n + "</div>"
}
var sr_table_number = 0
  , sr_last_sorted_column = -1
  , sr_sorttable_init_runs = 0
  , sr_sorttable = {
    init: function(e) {
        document.createElement && document.getElementsByTagName && (sr_sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/,
        e = e ? document.querySelectorAll("#" + e) : document.querySelectorAll("table.sortable,table.sr_share"),
        vjs_forEach.call(e, function(e, t) {
            if (!vjs_hasClass(e, "sortable"))
                return !1;
            vjs_hasClass(e, "now_sortable") || (sr_sorttable.makeSortable(e),
            vjs_addClass(e, "now_sortable"))
        }))
    },
    makeSortable: function(e) {
        if (e && e.tBodies && e.tBodies.length && e.tBodies[0] && e.tBodies[0].rows) {
            var t = e.querySelectorAll("tr.hidden");
            if (t.length || vjs_hasClass(e, "skip_rehide") ? e.skip_rehide = !0 : e.skip_rehide = !1,
            sr_table_number++,
            e.table_number = sr_table_number,
            0 === e.getElementsByTagName("thead").length && (t = document.createElement("thead"),
            e.rows[0] && t.appendChild(e.rows[0]),
            e.insertBefore(t, e.firstChild)),
            e.thead_rows = e.tHead.rows.length,
            e.lastHeadRow = e.thead_rows - 1,
            e.cntFootRows = e.tFoot ? e.tFoot.rows.length : 0,
            !(e.lastHeadRow < 0)) {
                for (var s = 0, r = e.rows.length; s < r; s++)
                    s >= e.thead_rows && vjs_setAttr(e.rows[s], "data-row", s - e.thead_rows);
                e.headrowCells = e.tHead.rows[e.lastHeadRow].cells,
                e.colgroupCols = e.getElementsByTagName("col"),
                e.sorttable_tbody = e.tBodies[0];
                for (s = 0,
                r = e.headrowCells.length; s < r; s++)
                    vjs_hasClass(e.headrowCells[s], "sorttable_nosort") || (e.headrowCells[s].sorttable_sortfunction = sr_sorttable.guessType(e, s),
                    e.headrowCells[s].sorttable_columnindex = s,
                    vjs_addEvent(e.headrowCells[s], "click", function() {
                        sr_sorttable.sortOnColumn(this, e)
                    }))
            }
        }
    },
    sortOnColumn: function(e, t, s) {
        if ("string" != typeof t || (t = document.getElementById(t))) {
            if (!e) {
                if (-1 === sr_last_sorted_column)
                    return void sr_sorttable.recolorTable(t);
                if (!(e = t.headrowCells[sr_last_sorted_column]))
                    return
            }
            var r = "";
            vjs_hasClass(e, "sorttable_sorted") && !s || vjs_hasClass(e, "sorttable_sorted_reverse") && s ? r = "reverse" : vjs_hasClass(e, "sorttable_sorted_reverse") && !s ? r = "revert" : (s && vjs_hasClass(e, "sorttable_sorted") || !s) && (r = "initial"),
            sr_sorttable.rehideTable(t, e, r),
            "reverse" === r && s ? (log_performance && sr_perf_logPerformance("sort:columnreverse start"),
            sr_sorttable.sortOnColumnInitial(e, t),
            sr_sorttable.sortOnColumnReverse(e, t),
            vjs_removeClass(e, "sorttable_sorted"),
            vjs_addClass(e, "sorttable_sorted_reverse")) : "reverse" === r ? (log_performance && sr_perf_logPerformance("sort:columnreverse start"),
            sr_sorttable.sortOnColumnReverse(e, t),
            vjs_removeClass(e, "sorttable_sorted"),
            vjs_addClass(e, "sorttable_sorted_reverse")) : "revert" === r ? (log_performance && sr_perf_logPerformance("sort:columnrevert  start"),
            sr_sorttable.sortOnColumnRevert(e, t),
            vjs_removeClass(e, "sorttable_sorted_reverse")) : "initial" === r && (log_performance && sr_perf_logPerformance("sort:columninitial start"),
            sr_sorttable.sortOnColumnInitial(e, t),
            s = e.parentNode,
            vjs_forEach.call(s.childNodes, function(e, t) {
                1 === e.nodeType && (vjs_removeClass(e, "sorttable_sorted_reverse"),
                vjs_removeClass(e, "sorttable_sorted"))
            }),
            vjs_addClass(e, "sorttable_sorted", t)),
            sr_sorttable.recolorTable(t),
            sr_sorttable.regroupRows(t, e, r),
            sr_check_sticky_table_setup(t),
            sr_sorttable.move_tooltips_to_first_row(t),
            sr_sorttable.setDirectLinkValue(t.id, e.sorttable_columnindex),
            log_performance && sr_perf_logPerformance("sort:                    end"),
            log_performance && sr_perf_appendLog(!0)
        }
    },
    addSortDirArrow: function(e, t, s) {
        sort_dir_selector = ".sorttable_elSortDir" + t.table_number;
        var r = t.querySelector(sort_dir_selector);
        r && vjs_removeChild(r),
        "revert" !== s && ((r = document.createElement("span")).className = "sorttable_elSortDir" + t.table_number,
        e.appendChild(r),
        "initial" === s ? r.innerHTML = vjs_hasClass(e, "sort_default_asc") ? "<br>&#9650;" : "<br>&#9660;" : "reverse" === s && (r.innerHTML = vjs_hasClass(e, "sort_default_asc") ? "<br>&#9660;" : "<br>&#9650;"))
    },
    sortOnColumnInitial: function(e, t) {
        vjs_addClass(t, "is_sorted"),
        sr_sorttable.addSortDirArrow(e, t, "initial");
        for (var s = [], r = e.sorttable_columnindex, o = t.sorttable_tbody.rows, n = 0, a = o.length; n < a; n++)
            s[n] = [sr_sorttable.getInnerText(o[n].cells[r]), o[n]];
        s = sr_sorttable.quicksort_stable(s, e.sorttable_sortfunction),
        vjs_hasClass(e, "sort_default_asc") || s.reverse();
        for (var i = t.sorttable_tbody, l = [], c = 0, n = 0, a = s.length; n < a; n++)
            "" === s[n][0] || vjs_hasClass(s[n][1], "thead") || vjs_hasClass(s[n][1], "hidden") || vjs_hasClass(s[n][1], "tfoot") ? (vjs_hasClass(s[n][1], "hidden") || (s[n][1].blank = !0),
            l[c] = s[n][1],
            c++) : (i.appendChild(s[n][1]),
            s[n][1].blank = !1);
        for (n = 0,
        a = l.length; n < a; n++)
            i.appendChild(l[n]);
        delete s,
        e.style.backgroundColor = "",
        e.style.color = "";
        t.getElementsByTagName("col");
        for (var _ = 0, a = t.headrowCells.length; _ < a; _++)
            vjs_removeClass(t.headrowCells[_], "sort_col"),
            vjs_removeClass(t.colgroupCols[_], "sort_col");
        vjs_addClass(t.headrowCells[r], "sort_col"),
        vjs_addClass(t.colgroupCols[r], "sort_col"),
        sr_last_sorted_column = r,
        sr_record_analytics_event("sort_table", sr_record_directory(), t.id)
    },
    sortOnColumnReverse: function(e, t) {
        sr_sorttable.reverseTable(t.sorttable_tbody),
        sr_sorttable.addSortDirArrow(e, t, "reverse")
    },
    sortOnColumnRevert: function(e, t) {
        vjs_removeClass(t, "is_sorted"),
        sr_sorttable.defaultOrder(t.sorttable_tbody),
        sr_sorttable.addSortDirArrow(e, t, "revert"),
        col = e.sorttable_columnindex,
        vjs_removeClass(t.headrowCells[col], "sort_col"),
        vjs_removeClass(t.colgroupCols[col], "sort_col"),
        sr_last_sorted_column = -1
    },
    guessType: function(e, t) {
        sortfn = sr_sorttable.sort_alpha;
        for (var s = 0, r = e.sorttable_tbody.rows.length; s < r; s++) {
            var o = sr_sorttable.getInnerText(e.sorttable_tbody.rows[s].cells[t]);
            if ("" != o) {
                if (o.match(/^-?[\d.]+$/))
                    return sr_sorttable.sort_numeric_trust;
                if (o.match(/^-?[?$?]?[\d,.:]+%?$/))
                    return sr_sorttable.sort_numeric;
                o = o.match(sr_sorttable.DATE_RE);
                if (o) {
                    if (first = parseInt(o[1]),
                    second = parseInt(o[2]),
                    12 < first)
                        return sr_sorttable.sort_ddmm;
                    if (12 < second)
                        return sr_sorttable.sort_mmdd;
                    sortfn = sr_sorttable.sort_ddmm
                }
            }
        }
        return sortfn
    },
    getInnerText: function(e, t, s) {
        if (!e)
            return "";
        var r = "function" == typeof e.getElementsByTagName && e.getElementsByTagName("input").length
          , o = "";
        if (!s && vjs_hasAttr(e, "data-append-csv") && (o = sr_append_csv_string + vjs_getAttr(e, "data-append-csv")),
        !t && void 0 !== vjs_getAttr(e, "data-csk") && !1 !== vjs_getAttr(e, "data-csk") && null !== vjs_getAttr(e, "data-csk"))
            return vjs_getAttr(e, "data-csk") + o;
        if (!t && void 0 !== vjs_getAttr(e, "csk") && !1 !== vjs_getAttr(e, "csk") && null !== vjs_getAttr(e, "csk"))
            return vjs_getAttr(e, "csk") + o;
        if (!r && void 0 !== e.textContent)
            return e.textContent.replace(/^\s+|\s+$/g, "") + o;
        if (!r && void 0 !== e.innerText)
            return e.innerText.replace(/^\s+|\s+$/g, "") + o;
        if (!r && void 0 !== e.text)
            return e.text.replace(/^\s+|\s+$/g, "") + o;
        switch (e.nodeType) {
        case 3:
            if ("input" === e.nodeName.toLowerCase())
                return e.value.replace(/^\s+|\s+$/g, "") + o;
        case 4:
            return e.nodeValue.replace(/^\s+|\s+$/g, "") + o;
        case 1:
        case 11:
            for (var n = "", a = 0, i = e.childNodes.length; a < i; a++)
                n = n + sr_sorttable.getInnerText(e.childNodes[a]) + o;
            return n.replace(/^\s+|\s+$/g, "") + o;
        default:
            return ""
        }
    },
    reverseTable: function(e) {
        for (var t = [], s = [], r = 0, o = 0, n = 0, a = e.rows.length; n < a; n++)
            !0 === e.rows[n].blank || vjs_hasClass(e.rows[n], "hidden") ? (s[o] = e.rows[n],
            o++) : (t[r] = e.rows[n],
            r++);
        for (n = t.length - 1; 0 <= n; n--)
            t[n] && e.appendChild(t[n]);
        delete t;
        for (n = s.length - 1; 0 <= n; n--)
            s[n] && e.appendChild(s[n]);
        delete s
    },
    defaultOrder: function(e) {
        vjs_hasClass(e.parentNode, "long"),
        newrows = [];
        for (var t = 0, s = e.rows.length; t < s; t++) {
            var r = e.rows[t];
            newrows[vjs_getAttr(r, "data-row")] = r
        }
        for (t = 0,
        s = newrows.length; t < s; t++)
            newrows[t] && e.appendChild(newrows[t]);
        delete newrows
    },
    sort_numeric: function(e, t) {
        e = parseFloat(e[0].replace(/[^0-9.-]/g, "")),
        isNaN(e) && (e = 0),
        t = parseFloat(t[0].replace(/[^0-9.-]/g, ""));
        return e - (t = isNaN(t) ? 0 : t)
    },
    sort_numeric_trust: function(e, t) {
        return e[0] - t[0]
    },
    sort_alpha: function(e, t) {
        e = e[0].toLowerCase(),
        t = t[0].toLowerCase();
        return e.localeCompare(t)
    },
    sort_ddmm: function(e, t) {
        var e = e[0].match(sr_sorttable.DATE_RE)
          , s = e[3]
          , r = e[2]
          , o = e[1]
          , n = s + (r = 1 === r.length ? "0" + r : r) + (o = 1 === o.length ? "0" + o : o)
          , s = (e = t[0].match(sr_sorttable.DATE_RE))[3]
          , r = e[2]
          , o = e[1]
          , t = s + (r = 1 === r.length ? "0" + r : r) + (o = 1 === o.length ? "0" + o : o);
        return n === t ? 0 : n < t ? -1 : 1
    },
    sort_mmdd: function(e, t) {
        var e = e[0].match(sr_sorttable.DATE_RE)
          , s = e[3]
          , r = e[2]
          , o = e[1]
          , n = s + (o = 1 === o.length ? "0" + o : o) + (r = 1 === r.length ? "0" + r : r)
          , s = (e = t[0].match(sr_sorttable.DATE_RE))[3]
          , r = e[2]
          , t = s + (o = 1 === (o = e[1]).length ? "0" + o : o) + (r = 1 === r.length ? "0" + r : r);
        return n === t ? 0 : n < t ? -1 : 1
    },
    quicksort_stable: function(e, t) {
        if (e.length <= 1)
            return e;
        for (var s = Array(), r = Array(), o = Math.floor(e.length / 2), n = e.splice(o, 1)[0], a = 0, i = e.length; a < i; a++)
            (t(e[a], n) < 0 || 0 === t(e[a], n) && o <= a ? s : r).push(e[a]);
        return sr_sorttable.quicksort_stable(s, t).concat([n], sr_sorttable.quicksort_stable(r, t))
    },
    rehideTable: function(e, t, s) {
        if (e && t && !e.skip_rehide) {
            var r = t.sorttable_columnindex
              , o = !1
              , n = !1
              , a = !1
              , i = !1
              , l = ("clickshow" === e.partial_button ? o = !1 : "revert" == s || vjs_hasClass(t, "show_partial_when_sorting") || (o = !0),
            "clickhide" === e.partial_button && (n = !0),
            "clickhide" === e.toggle_button && (a = !0),
            document.getElementById("fs_" + e.id))
              , t = ("revert" != s && vjs_hasClass(t, "hide_non_quals") && l && l.hide_non_quals && l.hide_non_quals.checked && (i = !0),
            document.getElementById(e.id + "_toggle_partial_table"));
            "revert" == s || !t || "noclick" !== e.partial_button && "clickhide" !== e.partial_button && "sorthide" !== e.partial_button ? !n && "revert" === s && t && "sorthide" === e.partial_button && (e.partial_button = "noclick",
            t.innerHTML = t.innerHTML.replace("Show", "Hide"),
            t.style.backgroundColor = "#fff") : ("noclick" === e.partial_button && (e.partial_button = "sorthide"),
            t.innerHTML = t.innerHTML.replace("Hide", "Show"),
            t.style.backgroundColor = "#ffa");
            for (var c = 0, _ = e.rows.length; c < _; c++) {
                var d = e.rows[c];
                d && (vjs_removeClass(d, "hidden"),
                n && vjs_hasClass(d, "partial_table") && vjs_addClass(d, "hidden"),
                a && vjs_hasClass(d, "toggle") && vjs_addClass(d, "hidden"),
                "revert" !== s) && (vjs_hasClass(d, "thead") && vjs_addClass(d, "hidden"),
                o && vjs_hasClass(d, "partial_table") && vjs_addClass(d, "hidden"),
                i) && d.cells[r] && (vjs_hasClass(d, "non_qual") || vjs_hasClass(d.cells[r], "non_qual")) && vjs_addClass(d, "hidden")
            }
        }
    },
    regroupRows: function(e, t, s) {
        if (e && t && vjs_hasClass(e, "mark_group_start"))
            for (var r = !1, o = (t.sorttable_sortfunction !== sr_sorttable.sort_numeric_trust && t.sorttable_sortfunction !== sr_sorttable.sort_numeric || (r = !0),
            t.sorttable_columnindex), n = "b", a = e.tBodies[0], i = 0, l = a.rows.length; i < l; i++) {
                var c, _ = a.rows[i];
                _ && (vjs_removeClass(_, "group_start"),
                c = sr_sorttable.getInnerText(_.cells[o]),
                "revert" === s ? vjs_hasClass(_, "default_group_start") && vjs_addClass(_, "group_start") : r ? n = c : n && n !== c && vjs_addClass(_, "group_start"),
                n = c)
            }
    },
    recolorTable: function(e) {
        if (vjs_hasClass(e.headrowCells[0], "ranker")) {
            for (var t = 0, s = 0, r = e.sorttable_tbody.rows.length; s < r; s++) {
                var o = e.sorttable_tbody.rows[s];
                vjs_hasClass(o, "hidden") || vjs_hasClass(o, "thead") || vjs_hasClass(o, "spacer") || vjs_hasClass(o, "norank") || (t++,
                o.cells[0].innerHTML = t)
            }
            var n = document.querySelector("#" + e.id + "_control span");
            n && (n.innerHTML = t)
        }
    },
    move_row_safe: function(e, t, s) {
        t !== s && (t = (e = e.sorttable_tbody).rows[t],
        e = e.rows[s],
        (s = t.parentNode).removeChild(t),
        s.insertBefore(t, e))
    },
    move_tooltips_to_first_row: function(e) {
        var t = e.querySelector("tr.delete_this_tip");
        t && (t = t.rowIndex - e.tHead.rows.length,
        sr_sorttable.move_row_safe(e, t, 0))
    },
    useDocHashValue: function() {
        var e = window.location.hash;
        if ("" === e)
            return !0;
        "#" === e.charAt(0) && (e = e.substring(1));
        for (var s, t = new Array, r = (new Array,
        0), o = (t = e.split(/;;/)).length; r < o; r++) {
            if ((s = t[r].split("::")).length < 2)
                return !0;
            if (/^[0-9]+$/.test(s[1]) || "none" === s[1]) {
                var n = s[0];
                sr_sorttable.clickTableControl(n),
                document.getElementById(n) && sr_sorttable.delay_sortOnLoad(n, s[1], 0 === r)
            } else if (/[a-z]/.test(s[1])) {
                var n = s[0]
                  , a = (sr_sorttable.clickTableControl(n),
                document.getElementById(n))
                  , a = a.tHead.rows[a.tHead.rows.length - 1]
                  , i = -1
                  , l = 0;
                if (vjs_forEach.call(a.cells, function(e, t) {
                    vjs_getAttr(e, "data-stat") === s[1] ? i = l : l += 1
                }),
                -1 === i)
                    return !1;
                document.getElementById(n) && sr_sorttable.delay_sortOnLoad(n, i, 0 === r)
            }
        }
        return !1
    },
    delay_sortOnLoad: function(e, t, s) {
        setTimeout(function() {
            sr_sorttable.sortOnLoad(e, t, s)
        }, 150)
    },
    clickTableControl: function(e) {
        var t;
        document.getElementById(e) || e.match(/_ks_/) ? !document.getElementById(e) && e.match(/_ks_/) && (t = (t = e.replace(/^stats_/, "kitchen_sink_")).replace(/_ks_.*/, "_control"),
        t = document.getElementById(t)) && vjs_triggerEvent(t, "click") : (t = document.querySelector("#all_" + e + " .comment_control")) && vjs_triggerEvent(t, "click"),
        document.getElementById("button_" + e) && (t = document.getElementById("button_" + e)) && vjs_triggerEvent(t, "click")
    },
    sortOnLoad: function(e, t, s) {
        var r, e = document.getElementById(e);
        e && ("none" !== t && (document.all ? (r = e.headrowCells[t]).fireEvent("onclick") : (r = e.headrowCells[t],
        (t = document.createEvent("MouseEvents")).initEvent("click", !0, !0),
        r.dispatchEvent(t))),
        s) && (vjs_setAttr(e, "tabindex", "-1"),
        e.focus(),
        window.scrollY += 1,
        window.location.hash)
    },
    setDocHashValue: function(e, t) {
        for (var s = window.location.hash, r = ("#" === s.charAt(0) && (s = s.substring(1)),
        new Array), o = new Array, n = new Array, a = 0, i = 0, l = (r = s.split(/;;/)).length; i < l; i++)
            (o = r[i].split(/::/))[0] === e && (o[a = 1] = t),
            2 === o.length && n.push(o.join("::"));
        a || n.push(e + "::" + t),
        window.location.hash = n.join(";;")
    },
    setDirectLinkValue: function(e, t) {
        var s = document.getElementById("a_" + e);
        s && (vjs_setAttr(s, "href", "#" + e),
        vjs_setAttr(s, "href", t ? "#" + e + "::" + t : "#" + e + "::none"))
    }
};
function sr_st_statline_appendTableControls(e) {
    var t, s, r, o = document.createElement("BUTTON"), n = document.createElement("LI"), a = (o.innerHTML = "",
    vjs_addClass(o, "tooltip"),
    vjs_setAttr(o, "tip", ""),
    vjs_setAttr(o, "type", "button"),
    o.onclick = function(e) {}
    ,
    document.querySelector("#" + e)), i = document.querySelector("#" + e + "_sh"), l = e, e = [], c = [];
    if (i && !vjs_hasClass(i, "has_controls") && (vjs_hasClass(a, "sortable") || vjs_hasClass(a, "add_controls")) && !vjs_hasClass(a, "suppress_all") && (t = i.querySelector(".section_heading_text, .table_heading_text"))) {
        vjs_hasAttr(a, "data-non-qual") && (_ = vjs_getAttr(a, "data-qual-label") || __sr_text_hide_non_quals,
        d = vjs_getAttr(a, "data-qual-text"),
        a.querySelectorAll(".non_qual").length) && (h = document.createElement("FORM"),
        p = n.cloneNode(),
        h.className = "non_qual_switch",
        h.name = "form_sortable",
        h.id = "fs_" + a.id,
        h.innerHTML = '<input type=checkbox name=hide_non_quals value=1 checked id="fs_check_' + a.id + '" onchange="sr_sorttable.sortOnColumn(null,\'' + a.id + '\', true);" onclick="sr_record_analytics_event(\'hide_non_quals\', sr_record_directory(), sr_record_page())"><label for="fs_check_' + a.id + '">' + (d ? '<button data-text="' + d + '" class="modal" type="button">' + _ + "</button>" : _) + "</label>",
        sr_display_modalShow(h),
        p.appendChild(h),
        c.push(p)),
        vjs_hasClass(a, "suppress_glossary") || 0 < a.querySelectorAll('th[data-tip]:not([data-tip=""]),th[tip]:not([tip=""])').length && (h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = __sr_text_glossary,
        vjs_setAttr(h, "tip", __sr_text_show_glossary),
        h.onclick = function(e) {
            var e = sr_display_showPopup(e, this, sr_st_statline_glossaryBuild(l))
              , t = document.getElementById("sr_glossary");
            e && vjs_elementOverflows(t, "y") && vjs_addClass(t, "has_overflow"),
            sr_record_analytics_event("glossary", sr_record_directory(), a.id)
        }
        ,
        p.appendChild(h),
        c.push(p));
        let t = "";
        if ("fb" === sr_SITE_ABB ? t = "minutes_90s" : "pfr" !== sr_SITE_ABB && "cfb" !== sr_SITE_ABB && "cbb" !== sr_SITE_ABB || !vjs_hasClass(a, "per_match_toggle") || (t = "g"),
        (t = "g" !== t || sr_st_check_for_perMatch(a, t) ? t : "games") && sr_st_check_for_perMatch(a, t) && (h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = "fb" === sr_SITE_ABB ? __sr_text_per90 : "Toggle Per-Game Stats",
        vjs_setAttr(h, "tip", "fb" === sr_SITE_ABB ? __sr_text_per90_tip : "Convert the counting stats in the table below to a per-match value.<br>Changed values will be shaded."),
        h.id = a.id + "_per_match_toggle",
        h.onclick = function(e) {
            sr_st_compute_perMatch(a, t),
            sr_record_analytics_event("create per match", sr_record_directory(), l)
        }
        ,
        p.appendChild(h),
        c.push(p)),
        a.classList.contains("per_toggler")) {
            let t = a.dataset.autostatDivisor
              , s = a.dataset.autostatList;
            s = s.replace(/'/g, '"');
            try {
                s = JSON.parse(s)
            } catch (e) {
                s = []
            }
            h = o.cloneNode(),
            p = n.cloneNode(),
            h.innerHTML = "fb" === sr_SITE_ABB ? __sr_text_per90 : "Toggle Per-Game Stats",
            vjs_setAttr(h, "tip", "fb" === sr_SITE_ABB ? __sr_text_per90_tip : "Convert the counting stats in the table below to a per-match value.<br>Changed values will be shaded."),
            h.id = a.id + "_per_match_toggle",
            h.onclick = function(e) {
                sr_st_compute_autostat(a, t, s),
                sr_record_analytics_event("create per match", sr_record_directory(), l)
            }
            ,
            p.appendChild(h),
            c.push(p)
        }
        var _, d = a.querySelectorAll("tr.partial_table:not(.spacer)").length - a.querySelectorAll("tr.partial_table.blank_table").length;
        if (!vjs_hasClass(a, "suppress_partial") && 0 < d && (h = o.cloneNode(),
        p = n.cloneNode(),
        h.id = l + "_toggle_partial_table",
        h.innerHTML = __sr_text_hide_partial_rows,
        a.partial_button = "noclick",
        h.onclick = function(e) {
            a.partial_button = "noclick" !== a.partial_button && ("clickhide" === a.partial_button || "sorthide" === a.partial_button) ? "clickshow" : "clickhide",
            sr_display_toggleClass(l, "partial_table", "", a.partial_button),
            sr_sorttable.sortOnColumn(null, a, !0),
            sr_record_analytics_event("hide_partial", sr_record_directory(), l)
        }
        ,
        p.appendChild(h),
        c.push(p)),
        vjs_hasAttr(a, "data-toggle-class")) {
            var u = vjs_getAttr(a, "data-toggle-class");
            vjs_getAttr(a, "data-toggle-text");
            if (a.querySelectorAll("tr." + u).length) {
                for (var h = o.cloneNode(), p = n.cloneNode(), m = 0, f = a.rows.length; m < f; m++) {
                    var v = a.rows[m];
                    vjs_hasClass(v, u) && vjs_addClass(v, "toggle")
                }
                h.id = l + "_toggle_general",
                h.innerHTML = __sr_text_hide + " ",
                a.toggle_button = "noclick",
                h.onclick = function(e) {
                    a.toggle_button = "noclick" !== a.toggle_button && "clickhide" === a.toggle_button ? "clickshow" : "clickhide",
                    sr_display_toggleClass(l, "toggle"),
                    sr_sorttable.sortOnColumn(null, a, !0);
                    var t = this;
                    t.innerHTML.match(__sr_text_hide) ? t.innerHTML = t.innerHTML.replace(__sr_text_hide, __sr_text_show) : t.innerHTML.match(__sr_text_show) && (t.innerHTML = t.innerHTML.replace(__sr_text_show, __sr_text_hide)),
                    t.style.backgroundColor = "#ffa",
                    sr_record_analytics_event("show_hide_toggle", sr_record_directory(), l)
                }
                ,
                p.appendChild(h),
                c.push(p)
            }
        }
        Modernizr && Modernizr.phone || (vjs_hasClass(a, "suppress_share") || (h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = __sr_text_modify_and_share,
        vjs_setAttr(h, "tip", __sr_text_modify_and_share_tip),
        h.id = "share_on_" + l,
        h.onclick = function(e) {
            sr_share_open_sharing(l),
            sr_record_analytics_event("share opened", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-share", "open", 1)
        }
        ,
        p.appendChild(h),
        e.push(p)),
        vjs_hasClass(a, "suppress_csv") || (h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = __sr_text_get_as_excel,
        vjs_setAttr(h, "tip", __sr_text_get_as_excel_tip),
        h.onclick = function(e) {
            sr_tableToExcel(l),
            sr_record_analytics_event("excel", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-excel", "open", 1)
        }
        ,
        p.appendChild(h),
        (_ = document.createElement("a")).id = "dlink",
        _.style.display = "none",
        p.appendChild(_),
        e.push(p),
        h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = __sr_text_get_as_csv,
        vjs_setAttr(h, "tip", __sr_text_get_as_csv_tip),
        h.onclick = function(e) {
            table2csv(l),
            sr_record_analytics_event("CSV", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-csv", "open", 1)
        }
        ,
        p.appendChild(h),
        e.push(p)),
        vjs_hasClass(a, "suppress_link") || ((newA = o.cloneNode()).id = "a_" + l,
        vjs_setAttr(newA, "name", l),
        vjs_setAttr(newA, "href", "#" + l, "::none"),
        p = n.cloneNode(),
        vjs_setAttr(newA, "tip", __sr_text_copy_link_tip),
        newA.innerHTML = __sr_text_copy_link_clipboard,
        newA.onclick = function(e) {
            var t = vjs_getAttr(this, "href")
              , s = t;
            sr_display_showPopup(e, this, '<p>The link for this page is:</p><p><input type="text" id="linkcopy" value="' + (s = t.match(/^http/) ? s : window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + t).replace('"', "&quot;") + '" size="30"></p><p><a href="javascript:void(0)" onclick="var t=document.getElementById(\'linkcopy\');t.select();t.setSelectionRange(0,9999);document.execCommand(\'copy\');">Copy to clipboard</a></p>'),
            sr_record_analytics_event("hard link", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-table-link", "open", 1)
        }
        ,
        p.appendChild(newA),
        e.push(p)),
        vjs_hasClass(a, "suppress_share") || vjs_hasClass(a, "suppress_about_sharing") || (h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = __sr_text_about_sharing_tools,
        h.onclick = function(e) {
            sr_display_showPopup(e, this, "/inc/page_tools" + (Modernizr.lang && "en" !== Modernizr.lang ? "-" + Modernizr.lang : "") + ".html"),
            sr_record_analytics_event("page tool view", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-about-tools", "open", 1)
        }
        ,
        p.appendChild(h),
        e.push(p)),
        vjs_hasClass(a, "suppress_share") || vjs_hasClass(a, "suppress_youtube") || (h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = '<a href="https://www.youtube.com/watch?v=MWapXbaWs_U&feature=youtu.be" target="_blank">' + __sr_text_video_sr_sharing + "</a>",
        h.onclick = function(e) {
            sr_record_analytics_event("yt video view view", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-watch-youtube-sharing", "open", 1)
        }
        ,
        p.appendChild(h),
        e.push(p),
        h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = '<a href="https://www.youtube.com/watch?v=JkDLV0roT14&feature=youtu.be" target="_blank">' + __sr_text_video_sr_stats_table + "</a>",
        h.onclick = function(e) {
            sr_record_analytics_event("yt video view view", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-watch-youtube-statstable", "open", 1)
        }
        ,
        p.appendChild(h),
        e.push(p)),
        vjs_hasClass(a, "suppress_share") || (h = o.cloneNode(),
        p = n.cloneNode(),
        h.innerHTML = '<a href="https://www.sports-reference.com/data_use.html" target="_blank">' + __sr_text_data_usage_terms + "</a>",
        h.onclick = function(e) {
            sr_record_analytics_event("data usage terms view", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-usage-terms-view", "open", 1)
        }
        ,
        p.appendChild(h),
        e.push(p)),
        a.querySelectorAll("tr.register_table").length - a.querySelectorAll("tr.register_table.blank_table").length && (h = o.cloneNode(),
        p = n.cloneNode(),
        h.id = l + "_toggle_register_table",
        h.innerHTML = "Show Non-MLB Stats",
        h.onclick = function(e) {
            sr_display_toggleClass(l, "register_table"),
            sr_record_analytics_event("show-register", sr_record_directory(), l),
            sr_record_analytics_event("table-tool-br-minors", "open", 1)
        }
        ,
        p.appendChild(h),
        c.push(p)))
    }
    "fb" === sr_SITE_ABB && Modernizr.is_live && (e = []),
    c.length + e.length && (s = t.querySelector("ul"),
    e.length && (vjs_addClass(d = document.createElement("LI"), "hasmore"),
    d.innerHTML = "<span>" + (Modernizr.is_stathead ? __sr_text_share_and_more_stathead : __sr_text_share_and_more) + "</span>",
    _ = document.createElement("div"),
    r = document.createElement("UL"),
    s.appendChild(d),
    d.appendChild(_),
    _.appendChild(r),
    vjs_forEach.call(e, function(e, t) {
        r.appendChild(e)
    })),
    c.length && vjs_forEach.call(c, function(e, t) {
        s.appendChild(e)
    }),
    vjs_addClass(i, "has_controls"))
}
function sr_st_compute_autostat(e, t, o) {
    var s = document.getElementById(e.id + "_per_match_toggle");
    if (!s)
        return !1;
    var s = s.parentNode
      , r = document.querySelector(".section_heading.assoc_" + e.id + ".has_controls h2")
      , n = document.querySelector("span.modified.per_match." + e.id);
    e.in_per_state ? (e.querySelectorAll("[data-original-value]").forEach(e => {
        e.innerHTML = unescape(e.dataset.originalValue),
        vjs_removeClass(e, "modified")
    }
    ),
    s.classList.remove("modified"),
    e.in_per_state = !1,
    r && n && r.removeChild(n)) : (s.classList.add("modified"),
    e.in_per_state = !0,
    r && (n = ' <span class="modified per_match ' + e.id + '">' + ("fb" === sr_SITE_ABB ? " (per 90)" : " (per Game)") + "</span>",
    r.innerHTML += n),
    e.querySelectorAll("tbody tr,tfoot tr").forEach(r => {
        if (!r.classList.contains("thead")) {
            var e = r.querySelector('[data-stat="' + t + '"]');
            if (e) {
                let s = parseFloat(e.textContent);
                o.forEach(e => {
                    var t, e = r.querySelector('[data-stat="' + e + '"]');
                    e && (t = parseFloat(e.textContent) / s,
                    isNaN(t) || (e.dataset.originalValue = escape(e.innerHTML || " "),
                    e.textContent = t.toFixed(t < 10 ? 2 : 1),
                    e.classList.add("modified")))
                }
                )
            }
        }
    }
    ))
}
function get_csv_output(e, t, s, r, o) {
    var n = document.getElementById(e);
    if (!n)
        return __sr_text_converting_from_pre;
    for (var e = document.getElementById("sorttable_elSortDir" + n.table_number), e = (e && vjs_removeChilde(e),
    n.querySelectorAll("tr")), e = (vjs_forEach.call(e, function(e, t) {
        (vjs_hasClass(e, "hidden") || vjs_hasClass(e, "thead") || vjs_getAttr(e, "style") && "none" === e.style.display) && vjs_removeChild(e)
    }),
    null === n.tHead && (n.tHead = n.getElementsByTagName("thead")[0]),
    n.tHead.rows[n.tHead.rows.length - 1].cells), a = n.rows.length, i = e.length, l = new Array(a), c = new Array(i), _ = 0; _ <= a; _++) {
        l[_] = new Array(i);
        for (var d = 0; d <= i; d++)
            l[_][d] = -9999
    }
    for (var u = 0, h = (t && (u = n.tHead.rows.length - 1),
    n.tHead.rows.length), p = 0, m = 0; m < a; m++) {
        for (var f = 0, v = 0, g = 0; g < i; g++)
            if (-9999 === l[m][g]) {
                var b = 1
                  , y = 1
                  , w = (n.rows[m].cells[g - v] && (b = n.rows[m].cells[g - v].getAttribute("rowspan"),
                y = n.rows[m].cells[g - v].getAttribute("colspan")),
                sr_sorttable.getInnerText(n.rows[m].cells[g - v], !0, !!r))
                  , j = _get_cell_align(n.rows[m].cells[g - v])
                  , E = (w = (w = m < u ? w.substring(0, 4) : w).replace(/,/g, "")).split(sr_append_csv_string)
                  , S = E[1];
                if (w = E[0],
                S && (l[m][i + f] = S,
                l[0][i + f] = l[0][g].concat("-additional"),
                f++),
                l[m][g] = w,
                m === h && o && (c[g] = j),
                1 < b) {
                    for (var k = 0; k < b; k++)
                        for (var x = 0; x < y; x++)
                            l[m + k][g + x] = w,
                            m === h && o && (c[g + x] = j);
                    1 < y && (v += y - 1,
                    g = g + y - 1)
                } else if (y && 1 < y) {
                    for (k = 1; k < y; k++)
                        l[m][g + k] = s ? "" : w,
                        m === h && o && (c[g + k] = j),
                        v++;
                    g += y - 1
                }
            }
        p < f && (p = f)
    }
    var C = "";
    if (o) {
        for (var A = new Array, g = 0; g < i; g++)
            A.push(c[g]);
        C = C + "\nalign:" + A.join(",")
    }
    for (m = 0; m < a; m++) {
        var T = new Array;
        for (g = 0; g < i; g++)
            T.push(l[m][g]);
        for (g = i; g < p + i; g++)
            T.push(l[m][g] || "");
        C = C + "\n" + T.join(",")
    }
    return "\x3c!-- ALREADYCSV --\x3e" + C
}
function _get_cell_align(e) {
    var t = "left";
    return vjs_hasClass(e, "center") ? t = "center" : vjs_hasClass(e, "right") && (t = "right"),
    t
}
function table2csv(e) {
    var t, s = document.getElementById("div_" + e);
    return s.innerHTML.match(/ALREADYPRE/) ? (alert(__sr_text_we_can_not_convert_from_pre),
    !1) : !s.innerHTML.match(/ALREADYCSV/) && (t = "--- " + __sr_text_share_cite_plaintext + "\n\n\n ",
    t += get_csv_output(e),
    s.innerHTML = __sr_text_reload_page_to_return + '<div style="overflow:auto"><pre id="csv_' + e + '">' + t + "</pre></div>",
    !0)
}
function sr_st_add_table_headers(e) {
    if (!e)
        return !1;
    var s = document.getElementById(e);
    if (!s)
        return !1;
    if (vjs_hasClass(s, "suppress_headers"))
        return !1;
    if (vjs_hasClass(s, "long"))
        return !1;
    if (s.querySelectorAll("tr.thead").length)
        return !1;
    var r = s.querySelectorAll("tbody > tr");
    if (r.length < 30)
        return !1;
    var e = vjs_viewportGetHeight()
      , t = vjs_getHeight(s);
    if (t < e)
        return !1;
    for (var o = 5 * Math.floor(e / (t / r.length) / 5 - 1), n = r.length, a = 0, i = s.querySelectorAll("thead > tr"); 5 < n; )
        a && a % o == 0 && vjs_forEach.call(i, function(e, t) {
            e = e.cloneNode(!0);
            vjs_addClass(e, "thead"),
            s.tBodies[0].insertBefore(e, r[a])
        }),
        a++,
        n--;
    return !0
}
function sr_st_build_table(e) {
    var s = document.createElement("table")
      , t = ""
      , r = e.structure
      , o = e.data;
    if (!(o.length < 1)) {
        r.table_class && (n = r.table_class.split(/ +/),
        vjs_forEach.call(n, function(e, t) {
            vjs_addClass(s, e)
        })),
        t = "<thead><tr>";
        var n, a = r.headers, i = new Array;
        for (d in a)
            for (var l in a[d])
                i.push(l),
                t += '<th class="tooltip">' + a[d][l] + "</th>";
        var c, _ = 0;
        for (c in t += "</tr></thead><tbody>",
        o)
            if (!o[c].skip) {
                for (var d in _ = 1,
                t += "<tr>",
                i)
                    t += "<td>" + e.data[c][i[d]] + "</td>";
                t += "</tr>"
            }
        t += "</tbody>",
        _ && (s.innerHTML = t)
    }
    return s
}
function sr_st_check_for_perMatch(e, t) {
    return !!e && !!e.querySelector('thead tr th[data-stat="' + t, '"]')
}
function sr_st_compute_perMatch(e, o) {
    var t = document.getElementById(e.id + "_per_match_toggle");
    if (!t)
        return !1;
    var s, t = t.parentNode, r = document.querySelector("#all_" + e.id + " .section_heading h2"), n = document.querySelector("#all_" + e.id + " .section_heading h2 span.per_match");
    e.perMatch ? (s = e.querySelectorAll("[data-original-value]"),
    vjs_forEach.call(s, function(e, t) {
        e.innerHTML = unescape(vjs_getAttr(e, "data-original-value")),
        vjs_removeClass(e, "modified")
    }),
    vjs_removeClass(t, "modified"),
    e.perMatch = !1,
    vjs_removeChild(n)) : (vjs_addClass(t, "modified"),
    e.perMatch = !0,
    r && (r.innerHTML = r.innerHTML + ' <span class="modified per_match">' + ("fb" === sr_SITE_ABB ? "(per 90)" : "(per Game)") + "</span>"),
    s = e.querySelectorAll("tbody tr,tfoot tr"),
    vjs_forEach.call(s, function(e, t) {
        var r = 0
          , e = e.querySelectorAll("td");
        vjs_forEach.call(e, function(e, t) {
            var s;
            0 < r && (!(s = (s = vjs_getAttr(e, "data-stat")).toLowerCase()) || -1 !== s.indexOf("pct") || -1 !== s.indexOf("perMatch") || -1 !== s.indexOf("_rec") && "fb" !== sr_SITE_ABB || -1 !== s.indexOf("_perc") || -1 !== s.indexOf("_avg") || -1 !== s.indexOf("average") || -1 !== s.indexOf("_wowy") || -1 !== s.indexOf("_long") && "fb" !== sr_SITE_ABB || -1 !== s.indexOf("_rating") || -1 !== s.indexOf("qbr") || -1 !== s.indexOf("gs") && "fb" !== sr_SITE_ABB || -1 !== s.indexOf("games_started") || -1 !== s.indexOf("per90") || -1 !== s.indexOf("wins") && "fb" !== sr_SITE_ABB || -1 !== s.indexOf("losses") && "fb" !== sr_SITE_ABB || -1 !== s.indexOf("srs") || -1 !== s.indexOf("sos") || -1 !== s.indexOf("_per_") || (s = parseFloat(e.textContent) / (vjs_getAttr(e, "data-per-g-den") ? vjs_getAttr(e, "data-per-g-den") : r),
            isNaN(s)) || (vjs_setAttr(e, "data-original-value", escape(e.innerHTML || " ")),
            e.textContent = s < 10 ? s.toFixed(2) : s.toFixed(1),
            vjs_addClass(e, "modified"))),
            vjs_getAttr(e, "data-stat") === o && (r = parseFloat(e.textContent))
        })
    }))
}
var sr_tableToExcel = function(e) {
    var s, e = (e = e.nodeType ? e : document.getElementById(e)).cloneNode(!0), t = e.querySelector("caption"), r = e.querySelector("colgroup"), t = (t && vjs_removeChild(t),
    r && vjs_removeChild(r),
    e.querySelectorAll("th,td")), r = (vjs_forEach.call(t, function(e, t) {
        e.innerHTML = e.textContent
    }),
    e.querySelectorAll("tr.thead")), t = (vjs_forEach.call(r, function(e, t) {
        vjs_removeChild(e)
    }),
    e.querySelectorAll("tr.hidden")), r = (vjs_forEach.call(t, function(e, t) {
        vjs_removeChild(e)
    }),
    e.querySelectorAll("tr")), t = (500 < r.length && (alert(__sr_text_excel_constraints),
    vjs_forEach.call(r, function(e, t) {
        500 < t && vjs_removeChild(e)
    })),
    {
        worksheet: "Worksheet",
        table: e.innerHTML
    }), r = document.getElementById("dlink");
    r.href = "data:application/vnd.ms-excel;base64," + (s = t,
    e = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table>{table}</table></body></html>'.replace(/{(\w+)}/g, function(e, t) {
        return s[t]
    }),
    window.btoa(unescape(encodeURIComponent(e)))),
    r.download = "sportsref_download.xls",
    r.click()
};
function set_value_on_open(e, t) {
    var s;
    t.includes(":") ? (s = t.split(":"),
    document.querySelector('[name="' + s[0] + '"]').value = s[1]) : e.querySelectorAll("input").forEach(e => {
        "radio" == e.type ? e.value == t && (e.checked = !0) : e.value = t
    }
    )
}
function scroll_to_stathead_results() {
    document.querySelector("html").classList.contains("phone") && new URLSearchParams(location.search).has("request") && document.getElementById("stathead_results").scrollIntoView()
}
function check_modal_pos(e, t) {
    t.getBoundingClientRect().top < 0 ? e.classList.add("fixed") : e.classList.remove("fixed")
}
function indicateChangedFormfield(e) {
    var t, s, r, o, e = (e.target || e).closest(".fieldset");
    e && !e.classList.contains("no_getresults_overlay") && (t = document.querySelector(".pi_forms .pi_modal"),
    s = document.querySelector(".pi_forms .pi_modal_bg"),
    r = document.querySelector(".pi_forms .pi_modal_bg"),
    o = document.querySelector(".pi_forms .stats_table tbody"),
    e.classList.add("changed"),
    t.classList.add("changed"),
    s.classList.add("changed"),
    r.classList.add("changed"),
    o) && check_modal_pos(t, o)
}
function handle_stat_criteria_options(e) {
    e.preventDefault();
    var e = e.target
      , t = e.closest(".fieldset")
      , s = e.getAttribute("data-opt");
    e.classList.toggle("open"),
    t.querySelector(".crit_options div#" + s).classList.toggle("open"),
    "ratio" == s && (t.querySelector(".criteria-comp").value = "eq",
    t.querySelector(".criteria-val").value = "1.0"),
    t.querySelector(".opener") && t.querySelector(".opener").classList.remove("open")
}
function set_filter_select_state(e) {
    e.selectedIndex = 0,
    e.options[0].innerText = e.options[0].innerText.replace(" a ", " another ")
}
function addCriteriaEventListeners(s) {
    s.querySelector(".formlabel").addEventListener("click", function(e) {
        var t = this.closest("div.stat_criteria")
          , e = (250 < e.offsetX && (this.closest(".fieldset").remove(),
        sr_form_changeDesc(document.querySelector("form.pi_forms"), "criteria-filter-remove")),
        t.querySelector("select.stat_criteria"));
        0 == t.querySelectorAll("div.fieldset:not(.template)").length && (e.options[0].innerText = e.options[0].innerText.replace(" another ", " a "))
    }),
    s.querySelector(".crit_options_selector") && s.querySelector(".crit_options_selector button").addEventListener("click", handle_stat_criteria_options),
    s.querySelector(".opener") && s.querySelector(".opener").addEventListener("click", function(e) {
        e.preventDefault();
        var e = this.getAttribute("data-id")
          , t = this.getAttribute("data-selector");
        this.classList.toggle("open"),
        e && s.querySelector("#" + e).classList.toggle("open"),
        t && s.querySelectorAll(t).forEach(e => {
            e.classList.toggle("open")
        }
        )
    }),
    s.querySelectorAll("input, select, textarea").forEach(e => {
        "button" != e.type && (e.addEventListener("change", indicateChangedFormfield),
        e.addEventListener("change", function(e) {
            sr_form_changeDesc_caller(s.closest("form"), "new-criteria")
        }))
    }
    )
}
function remove_tiny_cta(e) {
    e.remove(),
    document.querySelector(".criteria .stathead_cta_bg").remove()
}
function sr_form_spawn_spinner() {
    document.querySelector(".pi_forms .pi_modal_spinner").classList.add("changed"),
    document.querySelectorAll(".sh-get-results").forEach(e => {
        e.disabled = !0
    }
    )
}
function get_defaults(e, s) {
    let r = {};
    if (s.dataset.defaults) {
        let e = s.dataset.defaults;
        e = e.replace(/'/g, '"'),
        r = JSON.parse(e)
    } else {
        let t = "";
        s.dataset.default && (t = s.dataset.default),
        s.querySelectorAll("input, textarea, select").forEach(e => {
            r[e.getAttribute("name")] = t
        }
        )
    }
    for (var t in r)
        !e.elements.namedItem(t) && e.elements.namedItem(t + "[]") && (r[t + "[]"] = r[t]);
    return r
}
sr_utilities_js_loader.push(function() {
    let r = document.querySelector("form.pi_forms");
    if (r) {
        r.data_old_desc = [];
        let n = document.querySelectorAll(".pi_filter_sets > div.stat_criteria > .fieldset.open").length;
        var e = vjs_readCookie("stathead_site")
          , t = r.dataset.site;
        r.addEventListener("submit", sr_form_spawn_spinner),
        r.classList.contains("tinyrequest") && Modernizr.desktop && document.getElementById("criteria_opener").firstElementChild.click(),
        document.querySelectorAll(".pi_filter_sets > div").forEach(s => {
            if (s.querySelectorAll(".fieldset.open").length) {
                let t;
                for (let e = 0; e < s.children.length; ++e)
                    "SELECT" == s.children[e].nodeName && (t = s.children[e]);
                set_filter_select_state(t)
            }
        }
        ),
        document.querySelectorAll(".pi_filter_sets > div > select").forEach(r => {
            var e;
            r.classList.contains("stat_criteria") ? (r.addEventListener("change", function(e) {
                var t = this.parentNode;
                if (11 <= t.querySelectorAll(".fieldset").length)
                    t.querySelector(".criteria_warning") || ((s = document.createElement("p")).classList.add("criteria_warning"),
                    s.innerText = "Warning: You have reached the maximum of 10 Criteria",
                    r.after(s));
                else {
                    t.querySelector(".criteria_warning") && t.querySelector(".criteria_warning").remove();
                    var s = t.querySelector(".template").cloneNode(!0)
                      , o = (s.classList.remove("template"),
                    s.classList.add("open"),
                    s.classList.add("changed"),
                    s.querySelector("select.criteria-comp").removeAttribute("disabled"),
                    s.querySelector(".formlabel").innerText = this.options[this.selectedIndex].text,
                    ++n,
                    s.querySelectorAll("[name]"));
                    let r;
                    vjs_forEach.call(o, function(e, t) {
                        var s = e.getAttribute("name");
                        s += "[" + n + "]",
                        e.setAttribute("name", s),
                        "text" == e.getAttribute("type") && (r = e)
                    }),
                    s.querySelector(".criteria-stat").value = this.options[this.selectedIndex].value,
                    t.insertBefore(s, this),
                    r.focus(),
                    set_filter_select_state(this),
                    addCriteriaEventListeners(s)
                }
            }),
            e = r.parentNode.querySelectorAll(".fieldset:not(.template)"),
            vjs_forEach.call(e, function(e, t) {
                addCriteriaEventListeners(e)
            })) : r.addEventListener("change", function(e) {
                var t = this.parentNode.querySelector(".fieldset:nth-of-type(" + this.value + ")");
                t.hasAttribute("data-onopen") && set_value_on_open(t, t.getAttribute("data-onopen")),
                t.querySelectorAll(".formfield").forEach(e => {
                    var t;
                    e.parentNode.hasAttribute("data-onopen") && (t = e.parentNode.getAttribute("data-onopen"),
                    set_value_on_open(e, t))
                }
                );
                t.classList.add("open"),
                set_filter_select_state(this)
            })
        }
        ),
        document.querySelectorAll(".pi_filter_sets > div:not(.stat_criteria) > .fieldset").forEach(e => {
            e.addEventListener("click", function(e) {
                e.target.classList.contains("formlabel") && 250 < e.offsetX && (e = get_defaults(r, this),
                vjs_deserializeForm(r, e),
                this.classList.toggle("changed"),
                this.classList.toggle("open"),
                sr_form_changeDesc(r, "filter-remove"))
            })
        }
        ),
        r.querySelectorAll("input, select, textarea").forEach(t => {
            "button" != t.type && t.addEventListener("change", function(e) {
                t.closest(".options") ? (document.querySelectorAll(".options .choice").forEach(e => {
                    e.classList.remove("selected")
                }
                ),
                this.closest(".choice").classList.add("selected"),
                r.querySelector(".pi_modal").classList.add("changed"),
                r.querySelector(".pi_modal_bg").classList.add("changed")) : indicateChangedFormfield(e),
                sr_form_changeDesc_caller(t.closest("form"), "inputs")
            })
        }
        ),
        document.querySelectorAll(".fieldset.minimized").forEach(e => {
            e.querySelector(".formlabel button").addEventListener("click", function(e) {
                this.closest(".fieldset").classList.toggle("show")
            })
        }
        );
        document.querySelectorAll(".fieldset.has_toggleable_combos").forEach(e => {
            e.querySelectorAll("input").forEach(e => {
                e.addEventListener("click", function(e) {
                    e.target.closest(".fieldset").querySelectorAll(".combo.toggleable").forEach(e => {
                        e.classList.remove("open")
                    }
                    );
                    e = e.target.closest(".choice").querySelector(".combo.toggleable");
                    e && e.classList.add("open")
                })
            }
            )
        }
        );
        var o = document.querySelector(".criteria .stathead_cta");
        o && ("all" == e || e == t ? remove_tiny_cta(o) : o.querySelector(".close").addEventListener("click", function(e) {
            e.preventDefault(),
            remove_tiny_cta(o)
        })),
        document.querySelectorAll("#stathead_results .stathead_cta, .stathead_results .stathead_cta").forEach(s => {
            var r = s.nextElementSibling;
            if (r) {
                var o, n, r = r.querySelector("tbody"), a = r.offsetTop, i = r.querySelectorAll("tr");
                let e, t = r.offsetWidth;
                window.innerWidth < t && (t = document.getElementById("content").offsetWidth),
                s.style.width = t + "px",
                s.classList.contains("stathead_cta_bottom") ? (n = i[(o = i.length) - 10].offsetTop,
                o = i[o - 1].offsetTop + i[o - 1].offsetHeight - 2,
                e = o - n,
                s.style.top = n + "px") : (e = 10 < i.length ? (n = i[10].offsetTop) - a : r.offsetHeight,
                s.style.top = a + "px"),
                s.style.height = e + "px"
            }
        }
        );
        let s = document.querySelector(".pi_modal");
        if (s) {
            let t = r.querySelector("tbody");
            t && window.addEventListener("scroll", function(e) {
                check_modal_pos(s, t)
            })
        }
        scroll_to_stathead_results()
    }
}),
window.addEventListener("pageshow", e => {
    e.persisted && ((e = document.querySelector(".pi_forms .pi_modal_spinner")) && e.classList.remove("changed"),
    document.querySelectorAll(".pi_forms input, .pi_forms submit").forEach(e => {
        e.disabled = !1
    }
    ))
}
),
window.addEventListener("pagehide", e => {
    e.persisted
}
);
class FormEvents {
    constructor() {
        this.needs_desc_change_after_load = 0,
        this.needs_desc_change = 0,
        this.sh_form = document.querySelector("form.pi_forms"),
        "undefined" != typeof sh_events && Object.keys(sh_events).forEach(r => {
            if (sh_events[r].event_handlers)
                for (let s in sh_events[r].event_handlers) {
                    var e;
                    if ("change_load" === s && (e = document.querySelector('[name="' + r + '"]'),
                    this.check_action(e, s, r, "load")),
                    "change" == s || "change_load" == s)
                        if ("radio" === sh_events[r].type)
                            document.querySelectorAll('[name="' + r + '"]').forEach(t => {
                                t.addEventListener("click", e => this.check_action(t, s, r, e.type))
                            }
                            );
                        else {
                            let t = document.querySelector('[name="' + r + '"]');
                            t && t.addEventListener("change", e => this.check_action(t, s, r, e.type))
                        }
                    else
                        "click" == s && document.querySelectorAll("#" + r + ".sr_preset_group span button").forEach(t => {
                            t.addEventListener(s, e => this.check_action(t, s, r, e.type))
                        }
                        )
                }
        }
        )
    }
    check_action(e, t, s, r) {
        t = sh_events[s].event_handlers[t];
        this.handled_el = e,
        t.forEach(e => {
            let t = 1;
            (t = e.match ? e.match.every(e => {
                let t;
                return t = e.param ? document.querySelector('[name="' + e.param + '"]').value : e.id ? this.handled_el.dataset.id : e.dataset ? this.get_data_from_route(s, e.dataset, r) : "load" == r ? sh_param[s] || sh_events[s].default : this.handled_el.value,
                this.check_if(e, t)
            }
            ) : t) && e.actions.forEach(e => {
                this.run_action(s, e, r)
            }
            )
        }
        ),
        this.needs_desc_change && sr_form_changeDesc_caller(this.sh_form, "newjs-preset")
    }
    check_if(e, t) {
        if (void 0 !== e.val && t == e.val)
            return !0;
        if (e.id && t == e.id)
            return !0;
        if (void 0 !== e.val_ne && t != e.val_ne)
            return !0;
        if (e.regex && new RegExp(e.regex).test(t))
            return !0;
        return !1
    }
    check_filter(t, e) {
        let s = !1;
        return e.forEach(e => {
            e.eq ? t[e.key] == e.eq && (s = !0) : e.gte && t[e.key] >= e.gte && (s = !0)
        }
        ),
        s
    }
    run_action(n, a, i) {
        let t = [];
        if (a.target_field && a.target_field.forEach(e => {
            t.push('[name="' + e + '"]')
        }
        ),
        a.target_selector && a.target_selector.forEach(e => {
            t.push(e)
        }
        ),
        t.length) {
            let e = t.join(",");
            if ("repopulate" == a.type) {
                let t = []
                  , s = [];
                a.options.forEach(o => {
                    if (o.dataset) {
                        let r = this.get_data_from_route(n, o.dataset, i);
                        if (r && Array.isArray(r))
                            r.forEach(e => {
                                t.push({
                                    val: e,
                                    label: e
                                })
                            }
                            );
                        else if (r) {
                            let s = [];
                            Object.keys(r).forEach(e => {
                                let t = !0;
                                (t = o.filter ? this.check_filter(r[e], o.filter) : t) && r[e][o.label] && s.push({
                                    val: e,
                                    label: r[e][o.label]
                                })
                            }
                            );
                            var e = a.sort_by || "label";
                            (s = this.data_sort(s, e)).forEach(e => t.push(e))
                        }
                    } else if (o.stats)
                        this.get_stats_options(o.stats).forEach(e => t.push(e));
                    else if (o.range)
                        for (let e = o.range[0]; e <= o.range[1]; ++e)
                            t.push({
                                val: e,
                                label: e
                            });
                    else if (o.ajax) {
                        let r = [];
                        Object.entries(o.ajax.params).map( ([e,t]) => {
                            let s = e + "=";
                            s += t.fieldval ? document.querySelector('[name="' + encodeURIComponent(t.fieldval) + '"]').value : s += t,
                            r.push(s)
                        }
                        );
                        e = r.join("&");
                        s.push(fetch(o.ajax.source + "?" + e, {
                            method: "GET",
                            headers: {
                                Accept: "application/json"
                            }
                        }).then(e => e.json()).then(e => {
                            e.forEach(e => {
                                t.push({
                                    val: e.val,
                                    label: e.label
                                })
                            }
                            )
                        }
                        ).catch( () => {}
                        ))
                    } else
                        t.push({
                            val: o.val,
                            label: o.label,
                            disabled: o.disabled
                        })
                }
                ),
                s.length ? Promise.all(s).then( () => {
                    this.populate_select(e, i, a, t)
                }
                ) : this.populate_select(e, i, a, t)
            } else if ("filter" == a.type) {
                let r = [];
                if (a.dataset) {
                    var s = this.get_data_from_route(n, a.dataset, i);
                    r = Array.isArray(s) ? s : Object.keys(s)
                } else if (a.min)
                    for (const o of document.querySelectorAll(e)[0].options)
                        o.value >= a.min && r.push(o.value);
                document.querySelectorAll(e).forEach(t => {
                    var e = t.value;
                    if (t.value = "",
                    t.options)
                        for (const s of t.options)
                            "" !== s.value && (s.hidden = !0,
                            s.disable = !0);
                    r.forEach(e => {
                        e = t.querySelector('option[value="' + e + '"]');
                        e && (e.hidden = !1,
                        e.disable = !1)
                    }
                    ),
                    r.includes(e) && (t.value = e)
                }
                )
            } else
                "unfilter" == a.type ? document.querySelectorAll(e).forEach(e => {
                    if (e.options)
                        for (const t of e.options)
                            t.hidden = !1,
                            t.disable = !1
                }
                ) : "trigger" == a.type ? document.querySelectorAll(e).forEach(e => {
                    e.dispatchEvent(new Event(a.trigger_event))
                }
                ) : "set" == a.type ? (document.querySelectorAll(e).forEach(e => {
                    var t;
                    e.name;
                    void 0 !== a.set_val && ("radio" === e.type ? (e.checked = !1,
                    e.value == a.set_val && (e.checked = !0,
                    e.dispatchEvent(new Event("click")))) : "checkbox" === e.type ? (e.checked = !1,
                    JSON.parse(a.set_val).includes(e.value) && (e.checked = !0,
                    e.dispatchEvent(new Event("change")))) : ("match-this" == a.set_val ? e.value = "checkbox" == this.handled_el.type ? this.handled_el.checked ? 1 : 0 : this.handled_el.value : new RegExp("from:").test(a.set_val) ? (t = a.set_val.replace("from:", "").trim(),
                    e.value = document.querySelector('[name="' + t + '"]').value) : e.value = a.set_val,
                    e.dispatchEvent(new Event("change")),
                    this.check_reset_chosen(e)))
                }
                ),
                "load" == i ? this.needs_desc_change_after_load = 1 : this.needs_desc_change = 1) : "hide" == a.type ? document.querySelectorAll(e).forEach(e => {
                    e.classList.contains("toggleable") ? e.classList.remove("open") : e.classList.add("hidden")
                }
                ) : "show" == a.type && (a.target_selector_from_field_val && (s = document.querySelector('[name="' + a.target_selector_from_field_val + '"]'),
                e = s.value),
                document.querySelectorAll(e).forEach(e => {
                    e.classList.contains("toggleable") ? (e.classList.add("open"),
                    sr_chosen_enable_select(e)) : e.classList.remove("hidden")
                }
                ))
        }
    }
    populate_select(e, t, r, o) {
        document.querySelectorAll(e).forEach(s => {
            var e;
            s && "SELECT" === s.tagName && (r.append || r.prepend || r.remove || !s.options || (s.options.length = 0),
            o.forEach(t => {
                var e;
                r.remove ? (e = s.querySelectorAll('option[value="' + t.val + '"]')) && (t.label ? s.removeChild(Array.from(e).find(e => e.textContent == t.label)) : s.removeChild(e[0])) : (e = new Option(t.label,t.val),
                t.disabled && (e.disabled = !0),
                r.prepend ? s.insertBefore(e, s.firstChild) : s.add(e))
            }
            ),
            e = s.name || "",
            "load" == t && (s.value = e && sh_param[e] ? sh_param[e] : ""),
            r.set_to && ("load" == t && r.set_to.not_on_load || void 0 !== r.set_to.val && (s.value = r.set_to.val),
            "load" == t ? this.needs_desc_change_after_load = 1 : this.needs_desc_change = 1),
            "load" != t) && this.check_reset_chosen(s)
        }
        )
    }
    check_reset_chosen(e) {
        var t = e.parentNode.querySelector(".chosen-container");
        t && (e.parentNode.removeChild(t),
        e.has_chosen = !1,
        e.style.display = "block",
        sr_chosen_enable_select(e.parentNode))
    }
    get_data_from_route(r, e, t) {
        let o = sh_dataset;
        return e.forEach(e => {
            if (e.key_from_param) {
                let t;
                if ("radio" === sh_events[e.key_from_param].type)
                    document.querySelectorAll('[name="' + e.key_from_param + '"]').forEach(e => {
                        e.checked && (t = e.value)
                    }
                    );
                else {
                    var s = document.querySelector('[name="' + e.key_from_param + '"]');
                    if (!s)
                        return;
                    t = s.value || sh_events[r].default
                }
                t && (o = o[t])
            } else
                e.key_from_value ? (s = "load" == t ? sh_param[r] || sh_events[r].default : this.handled_el.value,
                o = o[s]) : e.key && (o = o && (o[e.key] || 0))
        }
        ),
        o
    }
    data_sort(e, r, o) {
        if (e.length) {
            o = o || "a";
            let s;
            s = e[0][r].match(/^[0-9.]*$/) ? "num" : "str",
            e.sort( (e, t) => "num" === s ? "a" === o ? parseFloat(e[r].replace(/,/g, "")) - parseFloat(t[r].replace(/,/g, "")) : parseFloat(t[r].replace(/,/g, "")) - parseFloat(e[r].replace(/,/g, "")) : "str" === s ? "a" === o ? e[r].localeCompare(t[r]) : t[r].localeCompare(e[r]) : void 0)
        }
        return e
    }
    get_stats_options(e) {
        let r = [], t, s;
        e.type && (e.type.set ? t = e.type.set : e.type.read_field && (t = document.querySelector('input[name="' + e.type.read_field + '"]:checked').value)),
        e.match && (e.match.set ? s = e.match.set : e.match.read_field && (s = document.querySelector('input[name="' + e.match.read_field + '"]:checked').value));
        let o;
        return t && s ? o = sh_stats.type[t].match[s] || sh_stats.type[t].match.general : t && sh_stats.type[t] ? o = sh_stats.type[t] : s && (o = sh_stats.match[s] || sh_stats.match.general),
        e.base && sh_stats.order_by_base_list && (sh_stats.order_by_base_list.forEach(function(e, t) {
            r.push({
                val: Object.keys(e)[0],
                label: Object.values(e)[0]
            })
        }),
        r.push({
            val: "",
            label: "---",
            disabled: !0
        })),
        (o.groupings_order || Object.keys(o.groupings)).forEach(function(e, t) {
            o.groupings[e] && (o.groupings[e].label && (r.push({
                val: "",
                label: "",
                disabled: !0
            }),
            r.push({
                val: "",
                label: "--- " + o.groupings[e].label + " ---",
                disabled: !0
            })),
            o.groupings[e].list.forEach(function(e, t) {
                var s = Object.values(e)[0]
                  , e = Object.keys(e)[0];
                r.push({
                    val: e,
                    label: s
                })
            }))
        }),
        r
    }
}
var utm_campaign = "2023_02_bnnr_norms_stathead"
  , desktop_event_labels = ["bttn_desktop_cta_happyplace", "bttn_desktop_cta_userslikeyou", "bttn_desktop_cta_adfree", "bttn_desktop_cta_allaccess"]
  , mobile_event_labels = ["bttn_mobile_cta_userslikeyou", "bttn_mobile_cta_happyplace", "bttn_mobile_cta_allaccess", "bttn_mobile_cta_adfree"]
  , desktop_norm_ads = ['<div id="ad_top" class="SITEID"><div class="ad_copy"><div class="ad_headline">Is SITENAME your happy place? Stathead is for you.</div><div class="ad_subhed"><ul class="ad_bullet"><li>Access the SITENAME database</li><li>Affordable</li><li>Discovery Tools</li><li>Ad-Free Viewing</li></ul></div></div><div id="right_button"><a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_desktop_cta_happyplace">Get your first month FREE</a></div></div>', '<div id="ad_top" class="SITEID"><div class="ad_copy"><div class="ad_headline">We built Stathead for users like you</div><div class="ad_subhed">Stathead is your all access pass to the SITENAME database. A search engine to easily answer all your statistical questions, plus ad-free viewing.</div></div><div id="right_button"><a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_desktop_cta_userslikeyou">Get your first month FREE</a></div></div>', '<div id="ad_top" class="SITEID"><div class="ad_copy"><div class="ad_headline">Get Ad-Free viewing with Stathead</div><div class="ad_subhed">and go inside the SITENAME database. Our sports search engine easily answers all your statistical questions.</div></div><div id="right_button"><a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_desktop_cta_adfree">Get your first month FREE</a></div></div>', '<div id="ad_top" class="SITEID"><div class="ad_copy"><div class="ad_headline">Stathead is your all-access ticket to the SITENAME database</div><div class="ad_subhed">A sports search engine to easily answer all your statistical questions</div></div><div id="right_button"><a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_desktop_cta_userslikeyou">Get your first month FREE</a></div></div>']
  , mobile_chart = '<div id="mobile_ad_top" class="SITEID no_logo"><div class="mobile_ad_copy"><div class="ad_subhed mobile_table">Go beyond the basics.<br />Go Inside the SITENAME Database.<br />Go to Stathead.</div><table id="stathead_table"><thead><tr><th>&nbsp;</th><th id="mobile_table_pennant"><img src="https://cdn.ssref.net/req/202301032/pennants/full/SITEID-pennant.svg"></th><th><img src="https://cdn.ssref.net/req/202301032/logos/stathead-SITEID.svg"></th></tr></thead><tbody><tr><td class="first">Affordable</td><td><span class="check_yes">&#10003;</span></td><td><span class="check_yes">&#10003;</span></td></tr><tr><td class="first">Discovery tools to search</td><td><span class="check_no">x</span></td><td><span class="check_yes">&#10003;</span></td></tr><tr><td class="first">Customized leaderboards</td><td><span class="check_no">x</span></td><td><span class="check_yes">&#10003;</span></td></tr><tr><td class="first">Ad-free viewing</td><td><span class="check_no">x</span></td><td><span class="check_yes">&#10003;</span></td></tr></tbody></table><div class="ad_foot">' + ("fb" == sr_SITE_ABB ? "Stathead FBref is free for a limited time" : "Get your first month FREE. Cancel anytime.") + '&nbsp;<a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_mobile_cta_happyplace">SIGN ME UP!</a></div></div></div>'
  , mobile_norm_ads = [mobile_chart, '<div id="mobile_ad_top" class="SITEID"><div class="mobile_ad_copy"><div class="ad_headline">We built Stathead for users like you</div><div class="ad_subhed">Stathead is your all access pass to the SITENAME database. A search engine to easily answer all your statistical questions, plus ad-free viewing.</div></div><div id="mobile_button"><a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_mobile_cta_userslikeyou">Get your first month FREE</a></div></div>', '<div id="mobile_ad_top" class="SITEID"><div class="mobile_ad_copy"><div class="ad_headline">Is SITENAME your happy place? Stathead is for you.</div><div class="ad_subhed"><ul class="ad_bullet"><li>Access the SITENAME database</li><li>Affordable</li><li>Discovery Tools</li><li>Ad-Free Viewing</li></ul></div></div><div id="mobile_button"><a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_mobile_cta_happyplace">Get your first month FREE</a></div></div>', '<div id="mobile_ad_top" class="SITEID"><div class="mobile_ad_copy"><div class="ad_headline">Stathead is your all-access ticket to the SITENAME database</div><div class="ad_subhed">A sports search engine to easily answer all your statistical questions</div></div><div id="mobile_button"><a class="button ad_button" href="https://stathead.com/sport/SPORT/?utm_medium=sr_xsite&utm_source=SITEID&utm_campaign=UTM_CAMPAIGN&utm_content=bttn_mobile_cta_allaccess">Get your first month FREE</a></div></div>']
  , norm_ad_strings = {
    pfr: {
        SITEID: "pfr",
        SITENAME: "Pro Football Reference",
        SPORT: "football",
        SHORTNAME: "Pro Football Ref"
    },
    cfb: {
        SITEID: "cfb",
        SITENAME: "College Football Reference",
        SPORT: "college football",
        SHORTNAME: "College Football Ref"
    },
    br: {
        SITEID: "br",
        SITENAME: "Baseball Reference",
        SPORT: "baseball",
        SHORTNAME: "Baseball Ref"
    },
    bbr: {
        SITEID: "bbr",
        SITENAME: "Basketball Reference",
        SPORT: "basketball",
        SHORTNAME: "Basketball Ref"
    },
    cbb: {
        SITEID: "cbb",
        SITENAME: "College Basketball Reference",
        SPORT: "college basketball",
        SHORTNAME: "College Basketball Ref"
    },
    hr: {
        SITEID: "hr",
        SITENAME: "Hockey Reference",
        SPORT: "hockey",
        SHORTNAME: "Hockey Ref"
    },
    fb: {
        SITEID: "fb",
        SITENAME: "FBref",
        SPORT: "fb",
        SHORTNAME: "FBref"
    }
};
function sr_norm_ad_parse(s, e) {
    var r = norm_ad_strings[e];
    return Object.keys(r).forEach(function(e) {
        var t = new RegExp(e,"g");
        s = s.replace(t, r[e])
    }),
    s = s.replace(/UTM_CAMPAIGN/, utm_campaign)
}
function sr_norm_tracker() {
    var t = (t = localStorage.getItem("sr_v")) ? (t = atob(t),
    JSON.parse(t)) : new Object
      , e = new Date
      , s = new Date
      , r = (s.setDate(e.getDate() - 7),
    0)
      , o = (Object.keys(t).forEach(function(e) {
        new Date(e) < s ? delete t[e] : r = (r += t[e].a ? 1 : 0) + (t[e].p ? 1 : 0)
    }),
    e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate());
    return t[o] || (t[o] = new Object),
    12 <= e.getHours() ? 1 != t[o].p && (t[o].p = 1,
    r++) : 1 != t[o].a && (t[o].a = 1,
    r++),
    localStorage.setItem("sr_v", btoa(JSON.stringify(t))),
    4 <= r ? 1 : 0
}
function sr_pv_tracker(e) {
    var t, s = "sr_s" + (e ? "_" + e : ""), r = sessionStorage.getItem(s), o = vjs_readCookie("sr_n"), n = 0, o = (o && (n = (o = o.split("|"))[0],
    t = new Date(o[1])),
    0), r = (r && (o = r),
    7);
    1 < n && (r = 14),
    "fb" == sr_SITE_ABB && (r = 5),
    1 == ++o && "stathead" == sr_SITE_ABB ? sr_show_desktop_modal_first_visit_ad((Modernizr.desktop || Modernizr.laptop ? 0 : 1) ? "mobile" : "desktop", e) : 5 == o && "cfb" != sr_SITE_ABB && ((e = new Date).setDate(e.getDate() - r),
    t && e < t || ((Modernizr.desktop || Modernizr.laptop ? 0 : 1) ? (utm_campaign = "2023_02_bnnr_5pagesession_stathead",
    event_label = mobile_event_labels[n],
    sr_record_analytics_event(utm_campaign + "_mobile", document.location.hostname, event_label),
    sr_show_mobile_top_norm_ad(n)) : n < 1 ? (sr_record_analytics_event((utm_campaign = "2023_02_mdl_5pagesession_stathead") + "_desktop", document.location.hostname, sr_record_directory()),
    sr_show_desktop_modal_norm_ad(1)) : (utm_campaign = "2023_02_bnnr_5pagesession_stathead",
    1 == n ? (event_label = desktop_event_labels[3],
    sr_record_analytics_event(utm_campaign + "_desktop", document.location.hostname, event_label),
    sr_show_desktop_top_norm_ad(3)) : (event_label = desktop_event_labels[n - 1],
    sr_record_analytics_event(utm_campaign + "_desktop", document.location.hostname, event_label),
    sr_show_desktop_top_norm_ad(n - 1))),
    4 <= ++n && (n = 0),
    r = new Date,
    vjs_createCookie("sr_n", n + "|" + r.toUTCString(), 90))),
    sessionStorage.setItem(s, o)
}
function sr_norm_ad() {
    var e, t = vjs_readCookie("sr_n"), s = 0, t = (t && (s = (t = t.split("|"))[0],
    e = new Date(t[1])),
    7);
    if ("fb" == sr_SITE_ABB && (t = 10),
    e) {
        var r = new Date;
        if (r.setDate(r.getDate() - t),
        r < e)
            return 0
    }
    (Modernizr.desktop || Modernizr.laptop ? 0 : 1) ? (event_label = mobile_event_labels[s],
    sr_record_analytics_event("2023_02_bnnr_norms_stathead_mobile", document.location.hostname, event_label),
    sr_show_mobile_top_norm_ad(s)) : s < 1 ? (sr_record_analytics_event("2023_02_normspopup_stathead_desktop", document.location.hostname, sr_record_directory()),
    sr_show_desktop_modal_norm_ad()) : (event_label = desktop_event_labels[s - 1],
    sr_record_analytics_event("2023_02_bnnr_norms_stathead_desktop", document.location.hostname, event_label),
    sr_show_desktop_top_norm_ad(s - 1)),
    4 <= ++s && (s = 0);
    t = new Date;
    vjs_createCookie("sr_n", s + "|" + t.toUTCString(), 90)
}
function sr_show_desktop_modal_norm_ad(e) {
    var e = e ? ("cfb" == sr_SITE_ABB || "cbb" == sr_SITE_ABB ? "/" + sr_SITE_ABB : "") + "/inc/stathead/" + sr_SITE_ABB + "_stathead_5pv.html" : ("cfb" == sr_SITE_ABB || "cbb" == sr_SITE_ABB ? "/" + sr_SITE_ABB : "") + "/inc/stathead/" + sr_SITE_ABB + "_stathead_ad.html"
      , s = (Modal.open({
        ajaxContent: e,
        draggable: !1,
        showOverlay: !0,
        pin: !0,
        params: {}
    }),
    new MutationObserver(function(e, t) {
        document.getElementById("modal-content") && (document.getElementById("modal-content").style.padding = "0px",
        document.getElementById("modal-container").style.padding = "0px",
        document.getElementById("modal-container").style.backgroundImage = "url('https://cdn.ssref.net/req/202301032/images/stathead/stathead-newspaper-texture.jpg')",
        document.getElementById("modal-close").style.top = "12px",
        document.getElementById("modal-close").style.color = "#fff",
        Modal.center(),
        s.disconnect())
    }
    ));
    s.observe(document.body, {
        childList: !0,
        subtree: !0
    })
}
function sr_show_desktop_modal_first_visit_ad(e, t) {
    Modal.open({
        ajaxContent: ("cfb" == sr_SITE_ABB || "cbb" == sr_SITE_ABB ? "/" + sr_SITE_ABB : "") + "/inc/stathead/" + t + "_stathead_first_visit" + ("mobile" == e ? "_mobile" : "") + ".html",
        draggable: !1,
        showOverlay: !0,
        pin: !0,
        params: {}
    });
    var s = new MutationObserver(function(e, t) {
        document.getElementById("modal-content") && (document.getElementById("modal-content").style.padding = "0px",
        document.getElementById("modal-container").style.backgroundImage = "url('https://cdn.ssref.net/req/202301032/images/stathead/stathead-newspaper-texture.jpg')",
        document.getElementById("modal-container").style.padding = "0px",
        document.getElementById("modal-close").style.top = "12px",
        document.getElementById("modal-close").style.color = "#fff",
        Modal.center(),
        s.disconnect())
    }
    );
    s.observe(document.body, {
        childList: !0,
        subtree: !0
    })
}
function sr_show_desktop_top_norm_ad(e) {
    e = e || 0;
    var t = document.createElement("div")
      , e = (t.setAttribute("class", "stathead_ad"),
    t.setAttribute("id", "stathead_ad"),
    t.innerHTML = sr_norm_ad_parse(desktop_norm_ads[e], sr_SITE_ABB),
    document.createElement("div"));
    return e.setAttribute("class", "closer"),
    e.onclick = function() {
        document.getElementById("stathead_ad").parentNode.removeChild(document.getElementById("stathead_ad"))
    }
    ,
    t.firstChild.appendChild(e),
    document.getElementById("wrap").insertBefore(t, document.getElementById("header").nextSibling),
    0
}
function sr_show_mobile_top_norm_ad(e) {
    e = e || 0;
    var t = document.createElement("div")
      , e = (t.setAttribute("class", "mobile_stathead_ad"),
    t.setAttribute("id", "mobile_stathead_ad"),
    t.innerHTML = sr_norm_ad_parse(mobile_norm_ads[e], sr_SITE_ABB),
    document.createElement("div"));
    return e.setAttribute("class", "closer"),
    e.onclick = function() {
        document.getElementById("mobile_stathead_ad").parentNode.removeChild(document.getElementById("mobile_stathead_ad"))
    }
    ,
    t.firstChild.appendChild(e),
    document.getElementById("wrap").insertBefore(t, document.getElementById("header").nextSibling),
    document.querySelector(".ad_subhed").style.display = "block",
    0
}
function sr_af_user_check() {
    var e = vjs_readCookie(sr_auth_cookie);
    if (e) {
        var e = e.split(/::/)[2]
          , t = {
            br: 2,
            pfr: 3,
            cfb: 3,
            bbr: 4,
            cbb: 4,
            hr: 5,
            fb: 6
        }[sr_SITE_ABB];
        if (t && (e.match(new RegExp(t + "$")) || e.match(/1$/)))
            return 1
    }
    return 0
}
function sr_norm_check() {
    var e, t, s;
    "pfr" == sr_SITE_ABB || "cfb" == sr_SITE_ABB || "br" == sr_SITE_ABB || "bbr" == sr_SITE_ABB || "cbb" == sr_SITE_ABB || "hr" == sr_SITE_ABB || "fb" == sr_SITE_ABB ? (sr_pv_tracker(),
    sr_norm_tracker() && "cfb" != sr_SITE_ABB && sr_norm_ad()) : "stathead" == sr_SITE_ABB && document.location.pathname.includes("/tiny") && (s = vjs_readCookie("stathead_user"),
    (t = document.querySelector("html").getAttribute("data-root")).includes("/pfr") ? e = "pfr" : t.includes("/cfb") ? e = "cfb" : t.includes("/br") ? e = "br" : t.includes("/bbr") ? e = "bbr" : t.includes("/cbb") ? e = "cbb" : t.includes("/hr") ? e = "hr" : t.includes("/fb") && (e = "fb"),
    !s && e && sr_pv_tracker(e),
    t = vjs_readCookie("stathead_site"),
    s = {
        bbr: "cbb",
        pfr: "cfb"
    },
    "pay" == vjs_readCookie("stathead_type")) && (t == e || s[t] && s[t] == e || "all" == t) && (s = document.getElementById("stathead_trial_box")) && (s.style.display = "none")
}
var is_af = sr_af_user_check()
  , sr_note_box_cookie = (is_af || sr_utilities_js_loader.push(sr_norm_check),
"sr_note_box_stathead")
  , sr_note_box_countdown_cookie = "sr_note_box_countdown"
  , sr_note_box_before_first_show = 3
  , sr_note_box_show_every = 6
  , sr_note_box_show_times = 12
  , sr_note_box_countdown_num = sr_note_box_before_first_show + (sr_note_box_show_every = "fb" === sr_SITE_ABB ? 4 : sr_note_box_show_every) * sr_note_box_show_times - 2;
function sr_note_box_show_social_media(e, t) {
    var s = document.createElement("DIV")
      , r = (s.id = "social_cta",
    vjs_addClass(s, "sr_note_box"),
    {
        br: "baseball_ref",
        bbr: "bball_ref",
        pfr: "pfref",
        hr: "hockey_ref",
        cbb: "collegebb_ref",
        cfb: "collegefb_ref",
        sr: "sports_ref"
    })
      , t = (s.innerHTML = "sr" != e ? '\t<div role="button" aria-label="close" class="closer" onclick="sr_note_box_set_cookie()"></div>        <img src="https://cdn.ssref.net/req/202204281/logos/' + e + '-logo.svg" alt="Stathead.com Logo">        <p class="cta">FOLLOW US ON SOCIAL MEDIA<br>Want more of the ' + t + ' Reference content you love? Connect with us!</p>        <span class="cta_mobile">Our Social Media</span>        <div class="img_row">            <div class="img_column">            <a href="https://www.twitter.com/' + r[e] + '" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/twitter_logo_small.png" alt="Twitter logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.instagram.com/' + {
        br: "baseball.reference",
        bbr: "basketball.reference",
        pfr: "profootballreference",
        hr: "hockeyreference",
        cbb: "basketball.reference",
        cfb: "profootballreference"
    }[e] + '" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/instagram_logo_small.png" alt="Instagram logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.tiktok.com/@' + {
        br: "baseball.reference",
        bbr: "basketball.reference",
        pfr: "profootballreference",
        hr: "hockeyreference",
        cbb: "collegebb_ref",
        cfb: "collegefb_ref"
    }[e] + '" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/tiktok_logo_small.png" alt="Tik tok logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.facebook.com/' + {
        br: "Baseball.Reference",
        bbr: "Basketball.Reference",
        pfr: "Pro.Football.Reference",
        hr: "Hockey.Reference",
        cbb: "SR.CollegeBasketball",
        cfb: "SR.CollegeFootball"
    }[e] + '" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/facebook_logo_small.png" alt="Facebook logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.youtube.com/user/sportsreference " target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/youtube-logo-small.png" alt="Youtube logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.reddit.com/r/sportsreference" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/reddit_logo_small.png" alt="Reddit logo" style="padding: 6px 0;" /></a>            </div>        </div>        <p class="links"><a href="https://' + window.location.hostname + '/email" onclick="sr_note_box_set_cookie(90,0,1)" target="_blank">Subscribe to our newsletter</a> &bull; <a href="javascript:sr_note_box_set_cookie()">Hide This</a></p>    ' : '\t<div role="button" aria-label="close" class="closer" onclick="sr_note_box_set_cookie()"></div>        <img src="https://cdn.ssref.net/req/202204281/logos/' + e + '-logo.svg" alt="Stathead.com Logo">        <p class="cta">FOLLOW US ON SOCIAL MEDIA<br>Want more of the ' + t + ' Reference content you love? Connect with us!</p>        <span class="cta_mobile">Our Social Media</span>        <div class="img_row">            <div class="img_column">            <a href="https://www.twitter.com/' + r[e] + '" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/twitter_logo_small.png" alt="Twitter logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.linkedin.com/company/sports-reference-llc" target="_blank"> <img src="https://cdn.ssref.net/req/202204282/logos/linkedin_logo_small.png" alt="LinkedIn logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.youtube.com/user/sportsreference" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/youtube-logo-small.png" alt="YouTube logo" style="padding: 6px 0;" /></a>            </div>            <div class="img_column">            <a href="https://www.reddit.com/r/sportsreference" target="_blank"> <img src="https://cdn.ssref.net/req/202204281/logos/reddit_logo_small.png" alt="Reddit logo" style="padding: 6px 0;" /></a>            </div>        </div>        <p class="links"><a href="https://' + window.location.hostname + '/email" onclick="sr_note_box_set_cookie(90,0,1)" target="_blank">Subscribe to our newsletter</a> &bull; <a href="javascript:sr_note_box_set_cookie()">Hide This</a></p>    ',
    document.getElementById("inner_nav") || document.getElementById("srcom"));
    if (!t)
        return !1;
    vjs_insertAfter(s, t),
    vjs_addClass(s, "open"),
    setTimeout(function() {
        vjs_addClass(s, "alert")
    }, 2e3),
    sr_record_analytics_event("note_box_show-social", document.location.hostname, sr_record_directory())
}
function sr_note_box_show() {
    var e = /(^[^\s]+)/g.exec(document.body.className)[0];
    if ("stathead" === e || "fb" === e)
        return !1;
    if ("en" != document.lang)
        return !1;
    var t = {
        br: "Baseball",
        bbr: "Basketball",
        pfr: "Pro Football",
        hr: "Hockey",
        cbb: "College Basketball",
        cfb: "College Football",
        sr: "Sports"
    }[e]
      , s = {
        br: "fed1d666-0c08-47ad-a630-98a55512861c",
        bbr: "d84fbf7e-d395-49c6-a64a-2ddaf9a1ab7f",
        pfr: "a4af36f0-eb4e-41fa-a97f-5f35a80b0c44",
        hr: "f283333c-e259-48f0-96e0-15bd344135fd",
        cbb: "8d46fcbe-04b4-4710-9804-c5781bed3a28",
        cfb: "a7ec16f0-83d4-4897-8202-a72ee9c7ba13",
        fb: "76f967c3-cdb0-4f34-97e9-8bcfe6bf0e53"
    }[e];
    if (.5 < Math.random() && "fb" != e)
        sr_note_box_show_social_media(e, t);
    else {
        var r = document.createElement("DIV")
          , o = (r.id = "newsletter_cta",
        vjs_addClass(r, "sr_note_box"),
        r.innerHTML = "fb" === e ? '\t<div role="button" aria-label="close" class="closer" onclick="sr_note_box_set_cookie()"></div>        <img src="https://cdn.ssref.net/req/202204281/logos/' + e + '-logo.svg" alt="Stathead.com Logo">        <span>- NEWSLETTER -</span>        <p class="cta">Get 2022 Men\'s World Cup news, advanced stats, leaderboards and more to your inbox!</p>        <p class="links"><a href="https://' + window.location.hostname + '/email" onclick="sr_note_box_set_cookie(90,0,1)" target="_blank">Find out More</a> &bull; <a href="javascript:sr_note_box_set_cookie()">Hide This</a></p>    ' : '\t<div role="button" aria-label="close" class="closer" onclick="sr_note_box_set_cookie()"></div>        <img src="https://cdn.ssref.net/req/202204281/logos/' + e + '-logo.svg" alt="Stathead.com Logo">        <span>- NEWSLETTER -</span>        <p class="cta">Subscribe to our newsletter and get curated stats and recaps from ' + t + ' Reference in your inbox!</p>        <p class="links"><a href="https://' + window.location.hostname + '/email" onclick="sr_note_box_set_cookie(90,0,1)" target="_blank">Find out More</a> &bull; <a href="javascript:sr_note_box_set_cookie()">Hide This</a></p>    ',
        document.createElement("script"))
          , n = (o.src = "//js.hsforms.net/forms/v2.js",
        o.type = "text/javascript",
        document.createElement("script"))
          , e = (n.type = "text/javascript",
        document.getElementById("inner_nav") || document.getElementById("srcom"));
        if (!e)
            return !1;
        vjs_insertAfter(r, e),
        vjs_addClass(r, "open"),
        n.innerHTML = 'hbspt.forms.create({         region: "na1",         portalId: "20503178",         formId: "' + s + '"    });    ',
        setTimeout(function() {
            r.appendChild(o)
        }, 1e3),
        setTimeout(function() {
            r.appendChild(n)
        }, 2e3),
        setTimeout(function() {
            vjs_addClass(r, "alert")
        }, 2e3),
        setTimeout(function() {
            vjs_addEvent(document.getElementById("hs-form-iframe-0").contentWindow.document.getElementById("hsForm_" + s), "submit", function() {
                sr_note_box_set_cookie(365, !0)
            })
        }, 7e3),
        sr_record_analytics_event("note_box_show-email", document.location.hostname, sr_record_directory())
    }
    return !0
}
function sr_note_box_check_display() {
    if ("en" === Modernizr.lang) {
        if (window.location.host.includes("d."))
            return sr_note_box_show(),
            !0;
        var e;
        window.location.host.includes("stathead") || window.location.host.includes("user") || window.location.host.includes("ozzie") || window.location.host.includes("otto") || window.location.host.includes("widgets") || vjs_readCookie(sr_note_box_cookie) || vjs_readCookie("SR_user") || "0" !== (e = vjs_readCookie(sr_note_box_countdown_cookie)) && (parseInt(e) % sr_note_box_show_every == 0 ? (vjs_createCookie(sr_note_box_countdown_cookie, parseInt(e) - 1, 30),
        sr_note_box_show()) : parseInt(e) ? vjs_createCookie(sr_note_box_countdown_cookie, parseInt(e) - 1, 30) : vjs_createCookie(sr_note_box_countdown_cookie, sr_note_box_countdown_num, 30))
    }
    return !1
}
function sr_note_box_set_cookie(e, t, s) {
    e = e || 60,
    vjs_createCookie(sr_note_box_cookie, !0, e);
    e = document.querySelector(".sr_note_box");
    e && !t && vjs_removeChild(e),
    sr_record_analytics_event(s ? "note_box_accept" : "note_box_hide", document.location.hostname, sr_record_directory())
}
sr_utilities_js_loader.push(sr_note_box_check_display);
var is_sr_debugging = sr_debugging();
function sr_fire_js() {
    Modernizr.is_stathead || document.body.classList.contains("stathead") && (sr_html.classList.add("is_stathead"),
    Modernizr.is_stathead = !0),
    log_performance && sr_perf_logPerformance("entering jsFire"),
    (is_sr_debugging || is_new_jscss_version) && (sessionStorage.clear(),
    localStorage.clear(),
    window.sessionStorage.sr_jscss_version = sr_jscss_version),
    Modernizr.sessionstorage && (is_new_jscss_version = !(sr_jscss_version === window.sessionStorage.sr_jscss_version),
    window.sessionStorage.sr_jscss_version = sr_jscss_version),
    is_sr_debugging && (sr_logger.enableLogger(),
    vjs_clearCookies(),
    sr_dropmenu_url = sr_dropmenu_url.replace("/short/", "/nocdn/"),
    log_performance = !0) && sr_perf_logPerformance("starting js"),
    "fb" === sr_SITE_ABB && (sr_utils_match_url_to_canonical(),
    document.querySelector("body.front_page")) && (fb_front_setupPlayerRoster(),
    fb_front_country_choice()),
    sr_display_fill_search_placeholder(),
    Modernizr.desktop || Modernizr.laptop ? sr_menus_checkInfoCookie("desktop") : sr_menus_checkInfoCookie("mobile"),
    sr_utilities_person_age(),
    log_performance && sr_perf_logPerformance("person age"),
    sr_utilities_compute_localtime(),
    log_performance && sr_perf_logPerformance("local time"),
    sr_menus_setupMenus(),
    sr_form_setup_goto_page(),
    log_performance && sr_perf_logPerformance("setup menus all"),
    Modernizr.cookies && (sr_auth_login(),
    log_performance) && sr_perf_logPerformance("setup sr auth all"),
    sr_menus_setSwitchers(),
    sr_menus_setOpeners(),
    log_performance && sr_perf_logPerformance("toggleDiv"),
    sr_cc_setup_commented_divs(),
    sr_cc_setup_long_divs(),
    sr_menus_setSwitchers(),
    log_performance && sr_perf_logPerformance("sr_cc_setup_commented_divs"),
    sr_record_page_link_clicks();
    var e = document.querySelectorAll(".stats_table")
      , r = 0
      , e = (sr_statsTables_rowSum_init(),
    vjs_forEach.call(e, function(e, t) {
        var s = e.id;
        vjs_hasClass(e, "linescore") || 0 !== s.length || (s = "st_" + r++,
        e.id = s),
        e.id && sr_st_construct_stats_table_features(s, !0)
    }),
    document.querySelectorAll(".wikitable"))
      , e = (vjs_forEach.call(e, function(e, t) {
        vjs_wrapInElementOfType(e, "div", "", "wikitable_wrapper")
    }),
    document.querySelectorAll(".data_grid"));
    vjs_forEach.call(e, function(e, t) {
        sr_st_construct_data_grid_features(e.id, !0)
    }),
    sr_sorttable.useDocHashValue(),
    sr_form_setupForms(),
    Modernizr && (!Modernizr.touch || Modernizr.desktop || Modernizr.laptop) && (sr_display_tooltipShow(),
    sr_display_modalShow(),
    log_performance) && sr_perf_logPerformance("tooltipShow"),
    sr_display_flyInSVGsprite(),
    sr_form_cpi_init(),
    log_performance && sr_perf_logPerformance("cpi_init   "),
    !sr_detect_operaMini && Modernizr.sessionstorage && completely_config && sr_setup_autocomplete_instances(".completely", completely_config),
    freezer_div = sr_get_freezer_div(),
    sr_menus_enable_freeze(),
    log_performance && sr_perf_logPerformance("enableFreezeBar"),
    log_performance && sr_perf_logPerformance("search_ac_autocomplete   "),
    sr_utilities_js_load(),
    log_performance && sr_perf_logPerformance("js_load   "),
    sr_utilities_set_server_cookie(),
    log_performance && sr_perf_logPerformance("sr_server_cookie_set"),
    log_performance && sr_perf_appendLog(),
    vjs_hasClass(document.body, "widescreen") && sr_st_reduceFormatting()
}
function sr_utils_match_url_to_canonical() {
    var e, t, s;
    return !(!Modernizr.history || !window.location.host.match(/fbref.com/) || window.location.href.match(/srdev/) || window.location.href.match(/players-who/) || !window.location.pathname.match(/(squads|players|comps)/) || (e = document.URL,
    t = document.querySelector("link[rel='canonical']").href,
    s = location.hash,
    t.vjs_isMatch(/\/[45]0[0-9].html/)) || e.vjs_isMatch(/\/players2/)) && (t = t.replace(/.*fbref.com/g, ""),
    void ((e = e.replace(/.*fbref.com/g, "")) && t && e !== t && !e.includes("sr_debugger") && window.history.replaceState("object or string", "title", t + s)))
}
document && document.body && (document.body.lang = document.lang || "");

