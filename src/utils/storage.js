export const setItems = (items) => {
  try {
    Object.keys(items).forEach((key) => {
      items[key] && localStorage.setItem(key, items[key])
    })
  } catch (e) {
    console.log(e)
  }
}

export const getItems = (keys) => {
  try {
    const items = {}
    keys.forEach((key) => {
      items[key] = localStorage.getItem(key)
    })
    return items
  } catch (e) {
    console.log(e)
  }
}