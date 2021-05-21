global.mockLocationAssign = test => () => {
    const location = global.location;
    delete global.location;
    global.location = { ...location, assign: jest.fn() };
    try {
        test();
    } finally {
        global.location = location;
    }
};

window.matchMedia = window.matchMedia ?? (query => ({
    matches: false,
    query,
    addListener: () => {},
    removeListener: () => {}
}));

window.scrollBy = () => {};
window.scrollTo = () => {};
Element.prototype.scrollIntoView = jest.fn();
