namespace React {
  interface ZeroMarkdownElement {
    src: string;
  }

  namespace JSX {
    interface IntrinsicElements {
      'zero-md': React.DetailedHTMLProps<ZeroMarkdownElement>;
    }
  }
}
