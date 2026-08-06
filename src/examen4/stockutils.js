export function addItem(item, setData) {
    setData((prev) => {
        const id = prev.items.length ? Math.max(...prev.items.map(i => i.id)) + 1 : 1;
        return { ...prev, items: [...prev.items, { ...item, id }] };
    });
}

export function updateItem(id, newData, setData) {
    setData((prev) => ({
        ...prev,
        items: prev.items.map((i) => (i.id === id ? { ...i, newData } : i))
    }));
}

export function deleteItem(id, setData) {
    setData((prev) => ({
        ...prev,
        items: prev.items.filter((i) => i.id !== id)
    }));
}

export function addStockMovement(mv, setData) {
    setData((prev) => {
        const movementId = prev.stockMovement.length
        ? Math.max(...prev.stockMovement.map((m) => m.id)) + 1
        : 1;

        const updatedItems = prev.items.map((i) => {
            if (i.id === mv.itemId) {
                const delta = mv.type === "in" ? mv.qty : -mv.qty;
                return { ...i, quantity: i.quantity + delta };
            }
            return i;
        });

        
    })
}