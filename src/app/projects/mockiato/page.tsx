'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Zap, Globe, FileJson, Shield } from 'lucide-react';
import { Modal } from '../../../components/modal';

const galleryImages = [
    {
        src: '/mockiato/gallery/request-rules.png',
        alt: 'Mockiato request rule editor interface',
        title: 'Request Rule Editor',
    },
    {
        src: '/mockiato/gallery/mocks-list.png',
        alt: 'Mockiato active mocks management interface',
        title: 'Active Mocks Dashboard',
    },
    {
        src: '/mockiato/gallery/headers-panel.png',
        alt: 'Mockiato headers injection interface',
        title: 'Header Injection Panel',
    },
];

export default function MockiatoProjectPage() {
    const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null);

    return (
        <div className="mx-auto flex flex-col gap-16 md:gap-16 w-full max-w-7xl px-4 md:px-8 py-8 md:py-24">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                <div className="flex flex-col gap-6 flex-1 items-center md:items-start">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Mockiato</h1>

                    <Image src="/logo/mockiato.png" width={250} height={250} alt="Mockiato extension logo" className="rounded-2xl md:hidden" />

                    <p className="text-center md:text-start text-text-secondary leading-relaxed">
                        An open source Chrome extension built for frontend developers who need full control over network requests.
                        It lets you intercept outgoing API calls in real time and replace them with custom mock responses, no backend required.
                    </p>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Open source
                    </span>

                    <div className="flex justify-center md:justify-start gap-3 mt-2">
                        <Link
                            href="https://chromewebstore.google.com/detail/mockiato-%E2%80%94-free-api-testi/ilbkkhmnmnehcicempfpekgcpneeekao"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors"
                            target="_blank"
                        >
                            <ExternalLink size={14} />
                            Install extension
                        </Link>

                        <Link
                            href="https://github.com/avivasyuta/mockiato"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-text-secondary text-sm font-medium hover:border-border-hover hover:text-foreground transition-all"
                            target="_blank"
                        >
                            <Github size={14} />
                            Source code
                        </Link>
                    </div>
                </div>

                <Image src="/logo/mockiato.png" width={400} height={400} alt="Mockiato extension logo" className="rounded-2xl hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-surface/50">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                            <FileJson size={18} className="text-primary" />
                        </div>

                        <h3 className="font-semibold text-foreground">Response Mocking</h3>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed">
                        Create mocks by specifying URL patterns (regex supported), HTTP method, response body, status code, delay, and headers. Simulate any server behavior without touching the backend.
                    </p>
                </div>

                <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-surface/50">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                            <Shield size={18} className="text-primary" />
                        </div>

                        <h3 className="font-semibold text-foreground">Header Injection</h3>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed">
                        Add or modify headers on outgoing requests on the fly. Perfect for testing authentication flows, CORS policies, and other header-dependent scenarios.
                    </p>
                </div>

                <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-surface/50">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                            <Zap size={18} className="text-primary" />
                        </div>

                        <h3 className="font-semibold text-foreground">Zero Setup</h3>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed">
                        Works instantly in the browser: no proxy servers, no config files, no CLI tools. Install and start mocking in seconds.
                    </p>
                </div>

                <div className="flex flex-col gap-3 p-5 rounded-xl border border-border bg-surface/50">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                            <Globe size={18} className="text-primary" />
                        </div>

                        <h3 className="font-semibold text-foreground">Open Source</h3>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed">
                        Fully open source and free to use. Inspect the code, contribute features, or fork it to fit your workflow.
                    </p>
                </div>
            </div>

            <section className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Gallery</h2>

                    <p className="text-sm md:text-base text-text-secondary">
                        A quick look at Mockiato in action: create rules, manage mocks, and test headers directly in the browser.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image) => (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => setSelectedImage(image)}
                            aria-label={`Open image in modal: ${image.title}`}
                            className="cursor-pointer group overflow-hidden rounded-xl border border-border bg-surface/60 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                        >
                            <Image
                                src={image.src}
                                width={1280}
                                height={900}
                                alt={image.alt}
                                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                            />

                            <div className="px-4 py-3 border-t border-border transition-colors group-hover:bg-primary/5">
                                <h3 className="text-left text-sm font-medium text-foreground">{image.title}</h3>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <Modal
                isOpen={Boolean(selectedImage)}
                onClose={() => setSelectedImage(null)}
                title={selectedImage?.title}
            >
                {selectedImage ? (
                    <Image
                        src={selectedImage.src}
                        width={1280}
                        height={900}
                        alt={selectedImage.alt}
                        className="w-full h-auto rounded-lg border border-border bg-white"
                    />
                ) : null}
            </Modal>
        </div>
    );
}
