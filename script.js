function convertMarkdown() {
    const markdownInput = document.getElementById('markdown-input')?.value || '';
      let html = markdownInput;

        // 1. Headings (H3, H2, H1) at the beginning of lines
          html = html.replace(/^###\s+(.*)$/gm, '<h3>$1</h3>');
            html = html.replace(/^##\s+(.*)$/gm, '<h2>$1</h2>');
              html = html.replace(/^#\s+(.*)$/gm, '<h1>$1</h1>');

                // 2. Blockquotes
                  html = html.replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>');

                    // 3. Bold text (** or __)
                      html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

                          // 4. Italic text (* or _)
                            html = html.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
                              html = html.replace(/(?<!_)_(?!_)(.*?)(?<!_)_(?!_)/g, '<em>$1</em>');

                                // 5. Images: ![alt](url)
                                  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

                                    // 6. Links: [text](url)
                                      html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

                                        return html;
                                        }

                                        // Event listener to update output and preview elements dynamically
                                        const markdownInputEl = document.getElementById('markdown-input');
                                        const htmlOutputEl = document.getElementById('html-output');
                                        const previewEl = document.getElementById('preview');

                                        if (markdownInputEl) {
                                          markdownInputEl.addEventListener('input', () => {
                                              const result = convertMarkdown();
                                                  
                                                      if (htmlOutputEl) {
                                                            htmlOutputEl.textContent = result;
                                                                }
                                                                    if (previewEl) {
                                                                          previewEl.innerHTML = result;
                                                                              }
                                                                                });
                                        }
