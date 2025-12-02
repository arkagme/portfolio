import { visit } from 'unist-util-visit';
import { createHighlighter } from 'shiki';
import { fromHtml } from 'hast-util-from-html';

let highlighter;

export function rehypeCodeBlocks() {
  return async (tree) => {
    if (!highlighter) {
      highlighter = await createHighlighter({
        themes: ['rose-pine', 'rose-pine-moon'],
        langs: [
          'javascript',
          'typescript',
          'python',
          'html',
          'css',
          'json',
          'bash',
          'shell',
          'svelte',
          'markdown',
          'sql',
          'diff',
          'mermaid',
          'yaml',
          'rust',
          'c++'
        ]
      });
    }

    const nodesToProcess = [];

    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'pre' &&
        node.children &&
        node.children[0]?.tagName === 'code'
      ) {
        const codeNode = node.children[0];
        const className = codeNode.properties?.className || [];
        const languageClass = className.find((cls) =>
          cls.startsWith('language-')
        );
        const lang = languageClass
          ? languageClass.replace('language-', '')
          : 'text';

        // Skip math (and latex) so remark-math + rehype-katex-svelte can render them
        if (lang === 'math' || lang === 'latex') return;

        nodesToProcess.push(node);
      }
    });

    for (const node of nodesToProcess) {
      const codeNode = node.children[0];
      const className = codeNode.properties?.className || [];
      const languageClass = className.find((cls) =>
        cls.startsWith('language-')
      );
      const lang = languageClass
        ? languageClass.replace('language-', '')
        : 'text';

      const codeContent = codeNode.children[0]?.value || '';

      try {
        const highlightedHtml = highlighter.codeToHtml(codeContent, {
          lang,
          theme: 'rose-pine',
          structure: 'inline'
        });

        const hast = fromHtml(highlightedHtml, { fragment: true });

        // Remove background-color from the outer span to prevent "white highlight" effect
        if (
          hast.children[0] &&
          hast.children[0].properties &&
          hast.children[0].properties.style
        ) {
          hast.children[0].properties.style =
            hast.children[0].properties.style.replace(
              /background-color:[^;]+;?/,
              ''
            );
        }

        const highlightedNodes = hast.children;

        node.tagName = 'Pre';
        node.properties = {
          ...node.properties,
          className: languageClass ? [languageClass] : ['language-text']
        };

        codeNode.children = highlightedNodes;
      } catch (e) {
        console.error(`Failed to highlight code block: ${e.message}`);
        node.tagName = 'Pre';
      }
    }
  };
}
