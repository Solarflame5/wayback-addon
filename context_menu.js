browser.runtime.onInstalled.addListener(() => {
    browser.menus.create({
        "id": "earliest_capture",
        "title": "Earliest archived version",
        "contexts": ["all"]
    });
    browser.menus.create({
        "id": "capture_calendar",
        "title": "Pick a date",
        "contexts": ["all"]
    });
    browser.menus.create({
        "id": "latest_capture",
        "title": "Latest archived version",
        "contexts": ["all"]
    });
});