import { StructuredData } from '@/components/StructuredData'

export const PricingSchemaData = () => {
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
          "@context": "https://schema.org",
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
          }, {
            "@type": "Question",
            "name": "What can I build in ILLA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can use ILLA to build websites for any device. We provide dozens of components and data resources, which you can use to develop internal websites (such as dashboard, admin panel, etc) and AI applications such as (speech to text, text to generate pictures, etc.)"
            }
          }, {
            "@type": "Question",
            "name": "How long does it take to learn ILLA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It generally takes an engineer around ten minutes to understand the concepts of ILLA, and another hour for it to feel natural."
            }
          }, {
            "@type": "Question",
            "name": "Can I deploy ILLA on-premises and how to deploy ILLA Cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The ILLA CLI enables you to deploy the open-source ILLA Builder on-premises in your own VPC. The setup is via Docker and takes around 15 minutes to get running. We provide all features individual developers or small teams need to build internal applications in the open-source version.If you need more advanced features, please book a call with an engineer to learn more about the Enterprise plan above."
            }
          }, {
            "@type": "Question",
            "name": "Who counts as a member?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the Free plan, a user in the team as an owner, administrator, editor, or viewer is counted as a member. In the Plus plan, only the owner, administrator, and editor in your team will be counted as a member to be charged."
            }
          }]
        },
        {
          "@type": "WebPage",
          "url": "www.illacloud.com/pricing/#WebPage",
          "name": "ILLA Cloud Pricing",
          "description": "ILLA Cloud Plus supports access control, SQL generation, Audit logs",
        }
        ]
      }
    }
    />
  )
}