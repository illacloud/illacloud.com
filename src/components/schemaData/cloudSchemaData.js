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
          "@type": "WebPage",
          "url": "www.illacloud.com/illacloud/#WebPage",
          "name": "ILLA Cloud",
          "description": "An open-source low-code platform with react component library to build AI native internal applications in minutes.",
        },
        {
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is ILLA Cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ILLA Cloud is a low-code platform that inherits multiple capabilities from ILLA Builder and ILLA Drive. It provides a seamless experience by allowing users to log in and register to access its features. With ILLA Cloud, you can effortlessly build internal tools, dashboards, CRUD (create, read, update, delete) applications, and more. The platform significantly improves work efficiency and helps companies save costs."
            }
          }, {
            "@type": "Question",
            "name": "Who can use ILLA Cloud",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Whether you are a product manager, full-stack developer, project manager, data analyst...anyone can use ILLA Cloud to build tools: From designing front-end interfaces with drag-and-drop components to integrating with data sources and generating queries using AI assistance, ILLA provides a streamlined experience that removes unnecessary complexities. You don't need to be a tech expert to create your own applications."
            }
          }, {
            "@type": "Question",
            "name": "What kinds of applications can you develop using ILLA Cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1. Rapid idea implementation: When enterprises experience a high demand for internal tools during rapid growth, ILLA can significantly accelerate the development speed and quality of your internal applications. This helps expedite your company's growth by quickly addressing the tooling needs. 2. No skill limitations for editors: With ILLA, any individual within the organization can build the tools they need without requiring specialized teams or technical skills. This empowers employees across various roles to create their own solutions, fostering innovation and productivity. 3. Cost reduction: By leveraging ILLA, enterprises can allocate their time, workforce, and financial resources towards core business activities. This results in reduced costs as ILLA streamlines the development process, eliminates the need for specialized teams, and minimizes the investment required for tooling development."
            }
          }, {
            "@type": "Question",
            "name": "What problems can ILLA Cloud solve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With ILLA Cloud, you can build any application you need, such as commonly used internal tools like Dashboards, Admin Panels, CRUD apps, CRM, CMS, and more. Additionally, you can develop AI applications, such as text-to-image applications with Stable Diffusion, audio-to-text applications with Whisper, and even embed OpenAI's GPT models to assist you in completing various tasks."
            }
          }, {
            "@type": "Question",
            "name": "Which data sources does ILLA support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ILLA supports integration with a variety of data sources, including PostgreSQL, MongoDB, REST API, GraphQL, Google Sheets, and more. You can swiftly connect to any data source without writing code, enabling seamless access to your desired data."
            }
          }]
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/home/home3/Frame%203341.svg",
          "datePublished": "2023-06-15",
          "description": "40+ components in ILLA Cloud",
          "name": "ILLA Cloud components"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/cloud/cloud1.svg",
          "datePublished": "2023-06-15",
          "description": "ILLA Cloud integrate ILLA Builder and ILLA Drive. ",
          "name": "ILLA Cloud workspace"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/cloud/cloud2.svg",
          "datePublished": "2023-06-15",
          "description": "Use components to build your interface",
          "name": "Components in ILLA Cloud"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/cloud/cloud3.svg",
          "datePublished": "2023-06-15",
          "description": "Integrate any datasources with ILLA Cloud",
          "name": "Data sources in ILLA Cloud"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/cloud/cloud4.svg",
          "datePublished": "2023-06-15",
          "description": "Generate SQL with natural language in ILLA Cloud",
          "name": "SQL generation based-on OpenAI in ILLA Cloud"
        },
        {
          "@type": "ImageObject",
          "author": "ILLA Cloud",
          "contentUrl": "https://cdn.illacloud.com/official-website/img/cloud/cloud5.svg",
          "datePublished": "2023-06-15",
          "description": "Code anywhere in ILLA Cloud",
          "name": "Code anywhere"
        },
        ]
      }
    }
    />
  )
}