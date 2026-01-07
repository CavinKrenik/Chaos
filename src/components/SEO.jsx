import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
    const siteTitle = 'Chaos to Code';
    const defaultDescription = 'Chaos to Code is a creative portfolio exploring web development and experimental coding projects through hands-on learning.';
    const defaultImage = '/og-chaostocode.png';
    const siteUrl = 'https://chaostocode.com';

    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const metaTitle = title ? `${title} | Chaos to Code` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={fullUrl} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charset="utf-8" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content="Chaos to Code" />
            <meta property="og:description" content="Turning chaos into code through creative development." />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content="Chaos to Code" />
            <meta name="twitter:description" content="creative coding" />
            <meta name="twitter:image" content="https://chaostocode.com/twitter-chaostocode.png" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Cavin Krenik",
                    "url": "https://chaostocode.com",
                    "sameAs": [
                        "https://github.com/CavinKrenik"
                    ],
                    "jobTitle": "Web & AI Developer",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Chaos to Code"
                    }
                })}
            </script>
        </Helmet>
    );
}
