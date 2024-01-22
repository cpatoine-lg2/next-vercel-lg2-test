import Link from "next/link";

export default function Header() {
    return (
        <>
            <div>
                <ul>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul>
            </div>
        </>
    )
}