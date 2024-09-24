// 4) =====================================================
// ================ Dynamic Imports =======================
// ========================================================

let theme = null;

const setLightTheme = () => {
    console.log("Light theme set.");
    theme = "light";
};

const setDarkTheme = () => {
    console.log("Dark theme set.");
    theme = "dark";
};

export { setLightTheme, setDarkTheme };