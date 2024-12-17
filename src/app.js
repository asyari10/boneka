document.addEventListener('alpine:init', () => {
    Alpine.data('product', () =>({
       items : [
            {id: 1, name: 'Boneka Biasa', img: '6.png', price: 30000},
            {id: 2, name: 'Boneka Spesial', img: '7.png', price: 40000},
            {id: 3, name: 'Boneka Pernikahan', img: '8.png', price: 30000},
            {id: 4, name: 'Boneka Ulang Tahun', img: '10.png', price: 25000}
        ],
    }));
});