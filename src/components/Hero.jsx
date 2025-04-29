const Hero = () => {
    return (
        <section className="fade-in relative w-full min-h-screen flex items-center bg-gradient-to-r from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-6 md:px-10 lg:px-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 dark:text-white leading-tight">
                            Selamat Datang di Panasonic
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            Inovasi elektronik rumah tangga dan bisnis yang membantu kehidupan lebih baik.
                        </p>
                        <a
                            href="#consumer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all"
                        >
                            Lihat Produk Kami
                        </a>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/hero-image.jpg"
                            alt="Panasonic Products"
                            className="rounded-xl shadow-xl w-full max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
