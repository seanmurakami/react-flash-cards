const hash = {
  parse(string) {
    const [path] = string.split('?')
    return {
      path: path.slice(1) || ''
    }
  }
}

export default hash
