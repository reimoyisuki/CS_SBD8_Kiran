const ConsumerProducts = () => {
    const products = [
    {
        id: 1,
        name: "DC-S1R",
        description: "Kamera DSLM Full-frame dengan Sensor MOS 47,3MP dan mode Resolusi Tinggi 187MP.",
        image: "/consumer-camera.jpg"
    },
    {
        id: 2,
        name: "AC Inverter",
        description: "Solusi hemat listrik dengan AC SI-BIRU INVERTER 2 IN 1 (AC + AIR PURIFIER)",
        image: "/consumer-ac.jpg"
    },
    {
        id: 3,
        name: "Mesin Cuci",
        description: "Mesin cuci front loading dengan fitur AI wash dan hemat air",
        image: "/consumer-washing.jpg"
    },
    {
        id: 4,
        name: "4K Mini LED TV",
        description: "TV LED 4K dengan warna kaya dan sistem Dolby Vision",
        image: "/consumer-tv.jpg"
    }
    ];

    return (
    <section id="consumer" className="py-24 bg-white">
        <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Produk Konsumen Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
};

export default ConsumerProducts;
