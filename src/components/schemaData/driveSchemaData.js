import { StructuredData } from '@/components/StructuredData'

export const DriveSchemaData = () => {
  return (
    <StructuredData data={
      {
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Organization",
          "name": "ILLA Cloud",
          "url": "https://www.illacloud.com/#organization",
          "logo": "https://www.illacloud.com/#logo",
          "sameAs": [
            "https://twitter.com/illacloudhq",
            "https://github.com/illacloud/illa-builder",
            "https://www.illacloud.com/",
            "https://www.youtube.com/@illacloud",
            "https://www.linkedin.com/company/illacloud/"
          ]
        },
        {
          "@type": "WebSite",
          "name": "ILLA Cloud",
          "url": "https://www.illacloud.com/#Website",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.illacloud.com/?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is cloud storage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cloud storage is a type of data storage service that allows users to store their files remotely on servers that are accessed over the internet. Instead of storing data on a local hard drive or other physical storage device, users can upload their files to a cloud storage provider's servers."
              }
            }, {
              "@type": "Question",
              "name": "Can I share files at ILLA Drive to people from outside of my team?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Certainly! With ILLA Drive, sharing files is a breeze. Simply set the link to \"public\" and share it with anyone you want. This way, you can easily collaborate and share files with others without any hassle."
              }
            }, {
              "@type": "Question",
              "name": "Why should I use ILLA Drive as my cloud storage provider?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use ILLA Drive as your cloud storage provider because it offers a secure, affordable, user-friendly, and accessible solution for all your storage needs. With end-to-end encryption, your data will remain safe and private. ILLA Drive is competitively priced, making it an affordable option for individuals and businesses. The user-friendly interface makes it easy to upload, access, and share files, while the collaboration feature allows teams to work together effectively. And finally, with accessibility from anywhere with an internet connection, you can easily access and manage your files on any device."
              }
            }, {
              "@type": "Question",
              "name": "How much free space does a team can get?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ILLA Drive provides a free usage of 100 Megabytes to each team."
              }
            }
          ]
        },
        {
          "@type": "WebPage",
          "url": "www.illacloud.com/illadrive/#WebPage",
          "name": "ILLA drive",
          "description": "ILLA Drive is a user-friendly CDN that provides faster and better global content delivery to support your business.",
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/product/illaDrive/Workspace%20-%20Drive.svg",
          "datePublished": "2023-06-15",
          "description": "ILLA Drive provides a dashboard to upload and preview all files.",
          "name": "ILLA Drive dashboard"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/product/illaDrive/Mask%20group.svg",
          "datePublished": "2023-06-15",
          "description": "To load your files in ILLA Builder and directly select file and insert into your website",
          "name": "ILLA Builder File list in ILLA Drive"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/product/illaDrive/Frame%202890.svg",
          "datePublished": "2023-06-15",
          "description": "Allow to storage files and share to anyone",
          "name": "File storage of ILLA Cloud"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/product/illaDrive/Frame%203268.svg",
          "datePublished": "2023-06-15",
          "description": "Alow to generate links and enable hotlinking",
          "name": "Share files"
        }
        ]
      }
    }
    />
  )
}