import hero from '../../assets/hero.jpg';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md md:max-w-5xl">
                    <h1 className="mb-5 text-4xl md:text-7xl font-bold text-accent">Welcome to the best electric tools maker company in Bangladesh!</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;