const BusinessProducts = () => {
    const solutions = [
    {
        id: 1,
        name: "AC Central",
        description: "Sistem pendingin udara untuk gedung komersial dan industri",
        image: "/business-ac.jpg"
    },
    {
        id: 2,
        name: "Solar Panel",
        description: "Solusi energi terbarukan untuk kebutuhan bisnis Anda",
        image: "/business-solar.jpg"
    },
    {
        id: 3,
        name: "Security System",
        description: "Sistem keamanan terintegrasi dengan kamera CCTV canggih",
        image: "/business-security.jpg"
    },
    {
        id: 4,
        name: "Proyektor",
        description: "Proyektor profesional untuk presentasi dan home theater",
        image: "/business-projector.jpg"
    }
    ];

    return (
    <section id="business" className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Solusi Bisnis</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-700">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
};

export default BusinessProducts;