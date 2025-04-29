const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <img
                        src="/about-panasonic.jpg"
                        alt="Tentang Panasonic"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-blue-800 dark:text-white mb-6">Tentang Panasonic</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        Didirikan pada tahun 1918, Panasonic Corporation adalah pemimpin global dalam pengembangan teknologi dan solusi elektronik di berbagai bidang kebutuhan konsumen, perumahan, otomotif, dan bisnis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
