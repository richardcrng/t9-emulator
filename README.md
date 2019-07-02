# T9 Emulator

A number to word list converter built with React and Redux.

## Expected Behaviour
- Every time you press one of the 1-9 keys, it gets added to the input
- Based on the accumulated input, a list of possibly intended 'words' is shown
- Only the first ten such words are displayed
- Pressing the `*` or `CLR` key will clear all input
- Pressing the `#` or `DEL` key will backspace the input
- Pressing the `0` or `TGL` key will toggle a filter on/off
  - If the filter is on, all 'words' that do not appear in this [list of top 10,000 most common English words](https://github.com/first20hours/google-10000-english/blob/master/google-10000-english-no-swears.txt) will be filtered out
- Input can also be entered through a physical keyboard

## Getting Started

Clone the repo:
```bash
git clone git@github.com:richardcrng/t9-emulator.git
cd t9-emulator
```

Run locally:
```bash
npm start
```

Run tests:
```bash
npm run test-all
```