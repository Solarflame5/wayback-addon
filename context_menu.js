function addonStartup() {
    browser.menus.create({
        "id": "earliest_capture",
        "title": "Travel to the earliest archived version of this page",
        "contexts": ["all"]
    });
    browser.menus.create({
        "id": "capture_calendar",
        "title": "Pick a date to travel to",
        "contexts": ["all"]
    });
    browser.menus.create({
        "id": "latest_capture",
        "title": "Travel to the latest archived version of this page",
        "contexts": ["all"]
    });
    browser.menus.create({
        "id": "capture_page",
        "title": "Freeze this page in time",
        "contexts": ["all"]
    });
}

browser.menus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "earliest_capture") {
        browser.tabs.create({
            url: "https://web.archive.org/web/1995/" + info.pageUrl
        });
    } else if (info.menuItemId === "capture_calendar") {
        browser.tabs.create({
            url: "https://web.archive.org/web/*/" + info.pageUrl
        });
    } else if (info.menuItemId === "latest_capture") {
        browser.tabs.create({
            url: "https://web.archive.org/web/" + info.pageUrl
        });
    } else if (info.menuItemId === "capture_page") {
        browser.tabs.create({
            url: "https://web.archive.org/save/" + info.pageUrl
        });
    }
});

browser.runtime.onInstalled.addListener((addonStartup));
browser.runtime.onStartup.addListener((addonStartup));