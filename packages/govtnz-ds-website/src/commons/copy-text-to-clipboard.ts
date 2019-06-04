// Based on https://github.com/sindresorhus/copy-text-to-clipboard
// Licenced under MIT
// Fixes for IE11 made.

const copyTextToClipboard = (input: string) => {
  const element = document.createElement('textarea');

  element.value = input;

  // Prevent keyboard from showing on mobile
  element.setAttribute('readonly', '');

  (element.style as any).contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  const selection = document.getSelection();
  let originalRange: boolean | Range = false;
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }

  document.body.appendChild(element);
  element.select();

  // Explicit selection workaround for iOS
  element.selectionStart = 0;
  element.selectionEnd = input.length;

  let isSuccess = false;
  try {
    isSuccess = document.execCommand('copy');
  } catch (_) {}

  document.body.removeChild(element);

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  return isSuccess;
};

export default copyTextToClipboard;
