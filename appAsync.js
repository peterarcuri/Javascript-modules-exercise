// 4) =====================================================
// ================ Dynamic Imports =======================
// ========================================================

async function loadConfig() {

    const theme = await import("./theme.js");
    const currentHour = new Date().getHours();

    if (currentHour > 18) {
        theme.setLightTheme();
    }
    else {
        theme.setDarkTheme();
    }
};

loadConfig();
