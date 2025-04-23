const Footer = () => {
    return (
    <footer className="bg-blue-900 text-white py-12 mt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
            <h3 className="text-2xl font-bold mb-4">Panasonic Indonesia</h3>
            <p className="text-blue-200 max-w-md">
            Komitmen kami adalah memberikan produk dan layanan terbaik untuk meningkatkan kualitas hidup masyarakat Indonesia.
            </p>
        </div>
        <div className="space-y-2">
            <h4 className="font-semibold text-lg">Ikuti Kami</h4>
            <div className="flex space-x-4">
            <a href="https://facebook.com/panasonic" className="hover:text-blue-300">Facebook</a>
            <a href="https://instagram.com/panasonic" className="hover:text-blue-300">Instagram</a>
            <a href="https://twitter.com/panasonic" className="hover:text-blue-300">Twitter</a>
            </div>
        </div>
        </div>
        </footer>
    );
};

export default Footer;
