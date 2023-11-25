import Link from "next/link";

function About(){
    return(
        
        <div>
            <section className="Sub-header">
        <nav>
            <a href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">

                {/* <!-- reposnive bar open and close --> */}
                
                {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
                <ul>
                <li><Link href="/">Home</Link></li>
                    <li><Link href="/Course">Course</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
            
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>About Us</h1>
    </section>

    {/* <!-- About Us Section Start --> */}

    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <a href="#" className="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src="img/about.png" alt="" />
            </div>
        </div>
    </section>

    {/* <!-- About Us Section end --> */}

    {/* <!-- Footer Section start --> */}
    
    </div>
    )
}
export default About