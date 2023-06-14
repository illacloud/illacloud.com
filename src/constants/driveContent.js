import driveEssy from '@/img/imageTemp/driveEssy.svg'
import dirveTheft from '@/img/imageTemp/dirveTheft.svg'
import driveFile from '@/img/imageTemp/driveFile.svg'
import temp from '@/img/imageTemp/driveTitle.svg'


import security from '@/img/drive/security.svg'
import silmplicity from '@/img/drive/silmplicity.svg'

export const DriveContent = {
  feature: {
    title: 'Features',
    items: [
      {
        label: 'Easy to Use',
        desc: 'You can upload or select files directly within the ILLA Builder interface, simplifying the process of incorporating files into your application.',
        imageAlt: '',
        image: driveEssy,
      },
      {
        label: 'Easy to Use',
        desc: 'You can upload or select files directly within the ILLA Builder interface, simplifying the process of incorporating files into your application.',
        imageAlt: '',
        image: driveFile,
      },
      {
        label: 'Easy to Use',
        desc: 'You can upload or select files directly within the ILLA Builder interface, simplifying the process of incorporating files into your application.',
        imageAlt: '',
        image: dirveTheft,
      }
    ]
  },
  advantage: {
    title: 'Advantage',
    items: [
      {
        image: silmplicity,
        imageAlt: '',
        label: 'Simplicity',
        desc: "ILLA Drive ensures the security of your files by offering options such as public signed URLs with expiration and theft prevention links."
      },
      {
        image: security,
        imageAlt: '',
        label: 'Security',
        desc: "ILLA Drive ensures the security of your files by offering options such as public signed URLs with expiration and theft prevention links."
      }
    ]
  },
  benefits: {
    title: 'Benefits',
    items: [
      {
        label: 'Cost-effective',
        desc: "With ILLA Drive, there's no need to invest in separate content delivery network (CDN) services. You can fulfill your file storage and delivery requirements within the ILLA platform, reducing maintenance costs associated with additional CDN subscriptions or infrastructure.",
      },
      {
        label: 'Simplified development',
        desc: "ILLA Drive allows you to store and access files for use in content management systems and other internal tools. This simplifies the process of incorporating files into your internal applications, accelerating development and making it more efficient.",
      },
      {
        label: 'Simplified development',
        desc: "With ILLA Drive, there's no need to invest in separate content delivery network (CDN) services. You can fulfill your file storage and delivery requirements within the ILLA platform, reducing maintenance costs associated with additional CDN subscriptions or infrastructure.",
      }
    ]
  }
}

export const DriveTitle = {
  title: 'ILLA Drive',
  desc: 'With ILLA Drive, you can securely store documents, images, and other files in the cloud, eliminating the need for local storage and providing convenient access from anywhere with an internet connection. ',
  btn1: 'Try now',
  btn1Link: '#',
  btn2: 'ILLA Drive Doc',
  btn2Link: '#',
  image: temp,
  imageAlt: 'Screenshot of ILLA Cloud app editor',
}