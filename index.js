class Formatter {
  //add static methods here
    static capitalize(string) {
      return `${string[0].toUpperCase()}${string.slice(1)}`
    }
  
    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9 '-]/g, '')
    }
  
    static titleize(string) {
      let stringArr = string.split(" ")
      let newString = []
      let lowerCaseString = ["a", "an", "but", "of", "and", "for", "at", "by", "the", "from"]
      stringArr.forEach(function (word) {
        if (!lowerCaseString.includes(word)) {
          newString.push(`${word[0].toUpperCase()}${word.slice(1)}`)
        } else {
          newString.push(word)
        }
      })
      return `${newString[0][0].toUpperCase()}${newString[0].slice(1)} ${newString.slice(1).join(" ")}`
    }
  }
  
  
  
  Formatter.titleize("chicken soup with rice and a few other songs")
  Footer
  
