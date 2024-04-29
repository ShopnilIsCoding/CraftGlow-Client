import Lottie from 'lottie-react';
import banneranim from '../Lotties/bannerlottie.json'

const Footer = () => {
    return (
        <footer className=" footer p-10 container mx-auto text-base-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
            <aside>
            <div className='clip-circle-50 rounded-full overflow-hidden  mt-3 border-4 border-rose-300 m-2 lg:m-0 md:m-16 size-20'><Lottie className='' animationData={banneranim}></Lottie>
            
            </div>
                <p>
                    Igniting Your Creativity!<br />
                    <span className="font-serif font-black">
                        &copy; 2024 <span className="bg-gradient-to-r from-orange-300 via-violet-400 to-rose-300 text-transparent bg-clip-text bg-300% animate-gradient">CraftGlow</span>. All Rights Reserved.
                    </span>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Explore</h6>
                <span className="link link-hover">Card Making</span>
                <span className="link link-hover">Paper Quilling & Origami</span>
                <span className="link link-hover">Glass Painting</span>
                <span className="link link-hover">Lampworking</span>
            </nav>
            <nav>
                <h6 className="footer-title">Resources</h6>
                <span className="link link-hover">Tutorials</span>
                <span className="link link-hover">Guides</span>
                <span className="link link-hover">Blogs</span>
            </nav>
            <nav>
                <h6 className="footer-title">Policies</h6>
                <span className="link link-hover">Terms of Use</span>
                <span className="link link-hover">Privacy Policy</span>
                <span className="link link-hover">Cookie Policy</span>
            </nav>
        </footer>
    );
};

export default Footer;
