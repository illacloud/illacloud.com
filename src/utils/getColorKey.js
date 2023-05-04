export const isColorKey = (key) => {
  switch (key) {
    case 'content.sql-generate.title-2':
    case 'content.for-developer.title-2':
    case 'content.date-integrate.title-3':
    case 'content.collaborative-develop.title-3':
    case 'content.ui-library.title-2':
    case 'deployment.title-1':
    case 'partner':
      return true
    default:
      return false
  }
}