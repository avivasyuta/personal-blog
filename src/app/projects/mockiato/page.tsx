import Image from 'next/image';
import Link from 'next/link';

export default function MockiatoProjectPage() {
    return (
        <div className="mx-auto flex flex-col gap-6 md:gap-12 w-full max-w-7xl px-4 md:px-8 py-16">
            <div className='flex gap-8'>
                <div>
                    <h1 className="mb-8 text-4xl font-bold">Mockiato</h1>

                    <p>An open source Chrome extension for intercepting requests, creating real-time mocks, and auto-inserting headers for web development and API testing.</p>



                    <Link href="https://chromewebstore.google.com/detail/mockiato-%E2%80%94-free-api-testi/ilbkkhmnmnehcicempfpekgcpneeekao" className="btn btn-lg bg-primary" target="_blank">
                        Try it!
                    </Link>

                    <Link href="https://github.com/avivasyuta/mockiato" className="btn btn-lg" target="_blank">
                        Source code
                    </Link>
                </div>

                <Image src="/logo/mockiato.png" width={640} height={640} alt="Mockiato extension logo" />
            </div>


            <div>
                Chrome extension to intercept requests, create real-time mocks, and auto-insert headers for web development & testing API.

                Mockiato is an extension for Google Chrome, designed to optimize web application development and testing. It allows you to intercept outgoing requests in real-time and create mocks for them, ensuring quick emulation of server responses.

                In addition, Mockiato enables the addition or modification of headers in requests. This feature significantly simplifies request configuration and saves developers' time. Combined, these tools provide flexibility and convenience, making the development and testing process more efficient and reliable.
            </div>
        </div>
    )
}   