const Hero = () => {
    return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white">
        <div className="text-center px-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 leading-tight mb-4">
            Selamat Datang di Panasonic
        </h1>
        <p className="text-gray-700 text-lg mb-6">
            Inovasi elektronik rumah tangga dan bisnis yang membantu kehidupan lebih baik.
        </p>
        <a
            href="#consumer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all"
        >
            Lihat Produk Kami
        </a>
        </div>
    </section>
    );
};

export default Hero;
