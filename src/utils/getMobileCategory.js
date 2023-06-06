export const getMobileCategory = (key) => {
  if(!key) return ''
  return `${key.split('_click')[0]}_mob_click`
}