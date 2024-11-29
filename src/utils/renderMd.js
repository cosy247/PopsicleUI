import markdownit from 'markdown-it';

const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return '';
  },
});

md.block.ruler.before('paragraph', '@Dome', function (state, startLine, endLine) {
  var ch,
    level,
    tmp,
    token,
    pos = state.bMarks[startLine] + state.tShift[startLine],
    max = state.eMarks[startLine];
  ch = state.src.charCodeAt(pos);

  if (ch !== 0x40 /*@*/ || pos >= max) {
    return false;
  }

  let text = state.src.substring(pos, max);
  let rg = /^@\s(.*)/;
  let match = text.match(rg);

  if (match && match.length) {
    let result = match[1];
    token = state.push('heading_open', 'h1', 1);
    token.markup = '@';
    token.map = [startLine, state.line];

    token = state.push('inline', '', 0);
    token.content = result;
    token.map = [startLine, state.line];
    token.children = [];

    token = state.push('heading_close', 'h1', -1);
    token.markup = '@';

    state.line = startLine + 1;
    return true;
  }
});

export default (d) => md.render(d);
