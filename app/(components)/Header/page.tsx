import Link from "next/link"

export default function Header(){

    return (
        <>
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
            </nav>
            </section>
            </div>
            </>
    )
}