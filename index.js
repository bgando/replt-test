function endsWith(string, searchString) {
  return string.slice(string.length - searchString.length) === searchString;
}

endsWith('Cats are the best!', 'best!') // => true
endsWith('Cats are the best!', 'worst!') // => false