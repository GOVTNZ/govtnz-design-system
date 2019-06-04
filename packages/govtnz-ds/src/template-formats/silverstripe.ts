export default function(template: string, classReplacer: ReplacerType) {
  // Parses a SilverStripe template and calls a classReplacer on each
  // CSS class to allow replacements.

  // FIXME: Replace with a proper SilverStripe parser but considering that
  // the correct parser is in PHP that might be difficult. SilverStripe uses
  // PHP-PEG https://github.com/hafriedlander/php-peg so perhaps we could
  // adapt that for JavaScript?
  let newTemplate = template;
  let currPos = template.indexOf('<');
  while (currPos !== -1 && currPos <= template.length) {
    const endPos = seekEnd(template, currPos);
    const tag = template.substring(currPos, endPos);
    const tagName = tag.substring(1, tag.search(/[\s>]/));
    const newTag = tag.replace(/class="([\s\S].*?)"/, (ignore, classData) => {
      const allClasses = classData
        .split(/\s+/g)
        .filter(className => !!className.trim())
        .map(className => classReplacer(tagName, className))
        .join(' ');
      return `class="${allClasses}"`;
    });
    newTemplate = newTemplate.replace(tag, newTag);
    currPos = template.indexOf('<', endPos);
  }
  return newTemplate;
}

type ReplacerType = (tag: string, oldValue: string) => string;

function seekEnd(block: string, startIndex: number) {
  // Derived from https://stackoverflow.com/a/27088184
  let currPos = startIndex,
    openBrackets = 0,
    stillSearching = true,
    waitForChar: boolean | string = false;

  while (stillSearching && currPos <= block.length) {
    const currChar = block.charAt(currPos);
    const nextChar = block.charAt(currPos + 1);

    if (!waitForChar) {
      switch (currChar) {
        case '(':
          openBrackets++;
          break;
        case ')':
          openBrackets--;
          break;
        case '"':
        case "'":
          waitForChar = currChar;
          break;
        case '<':
          openBrackets++;
          if (nextChar === '%') {
            waitForChar = '%';
          } else {
            // waitForChar = '';
          }
          break;
        case '>':
          openBrackets--;
          break;
        case '/':
          if (nextChar === '/') {
            waitForChar = '\n';
          } else if (nextChar === '*') {
            waitForChar = '*/';
          }
          break;
        default: {
          // pass
        }
      }
    } else {
      if (currChar === waitForChar) {
        if (waitForChar === '"' || waitForChar === "'") {
          if (block.charAt(currPos - 1) !== '\\') {
            waitForChar = false;
          }
        } else {
          waitForChar = false;
        }
      } else if (currChar === '*') {
        block.charAt(currPos + 1) === '/' && (waitForChar = false);
      }
    }

    currPos++;
    if (openBrackets === 0) {
      stillSearching = false;
    }
  }
  return currPos;
}
