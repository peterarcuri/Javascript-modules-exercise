// 1) =====================================================
// =================== Named Export =======================
// ========================================================

const inventory = [];

const addItem = (item) => {
    inventory.push(item);
    console.log(`${item} has been added to inventory.`);
};
function removeItem(item) {
    let itemRemoved = false;  // track if item was found and removed
    
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === item) {
            inventory.splice(i, 1); // Remove the item from the array
            console.log(`${item} removed from inventory.`);
            itemRemoved = true; // Mark as removed
            break; // Stop the loop once the item is found and removed
        }
    }
    
    if (!itemRemoved) {
        console.log(`${item} does not exist in inventory.`);
    }
};

const listItems = () => {
    console.log("Items listing:");

    for (const item of inventory) {
        console.log(`- ${item}`);
    }
};

export { addItem, removeItem, listItems };