export const uiRaws = import.meta.glob('/ui/**/*', { query: '?raw', import: 'default' });
export const docsRaws = import.meta.glob('/docs/**/*', { query: '?raw', import: 'default' });
export const examplesRaws = import.meta.glob('/examples/**/*', { query: '?raw', import: 'default' });
export const examplesComponents = import.meta.glob('/examples/**/*', { import: 'default' });
