const { addImport } = require('./utils')

module.exports = () => {
  return (tree) => {
    let preTree = { children: [] }
    let componentName

    tree.children = tree.children.map((node, index) => {
      // Start of horizontal block: -- block
      if (
        node.type === 'paragraph' &&
        node.children.length === 1 &&
        node.children[0].value === '-- block'
      ) {
        node.type = 'jsx'
        node.value = `<div className='grid md:grid-cols-2 md:gap-8'><div>`
      }

      // Start a new column: -- column
      if (
        node.type === 'paragraph' &&
        node.children.length === 1 &&
        node.children[0].value === '-- column'
      ) {
        node.type = 'jsx'
        node.value = `</div><div>`
      }

      // End of horizontal block: -- /block
      if (
        node.type === 'paragraph' &&
        node.children.length === 1 &&
        node.children[0].value === '-- /block'
      ) {
        node.type = 'jsx'
        node.value = `</div></div>`
      }

      if (node.type === 'jsx') {
        let [, props = '', html] =
          node.value.trim().match(/^<Example(?:>|\s(.*?)>)(.*?)<\/Example>$/is) ?? []

        if (html) {
          let next = tree.children[index + 1]
          if (!componentName) {
            componentName = addImport(preTree, '@/components/Example', 'Example')
          }

          node.value = `<${componentName} ${props} containerClassName="${
            next?.type === 'code' ? 'mt-4 -mb-3' : 'my-6'
          }" html={${JSON.stringify(html)}} />`
        }
      }

      return node
    })

    tree.children = [...preTree.children, ...tree.children]
  }
}
