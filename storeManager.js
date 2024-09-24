// 1) =====================================================
// =================== Named Import =======================
// ========================================================

import { addItem, removeItem, listItems } from "./inventory.js";

addItem("t-shirt");
addItem("pants");
addItem("shoes");
addItem("party favors");
console.log('=======================================================');
listItems();
console.log('=======================================================');
removeItem("party favors");
console.log('=======================================================');
listItems();