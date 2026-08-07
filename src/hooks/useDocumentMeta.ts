import { useEffect } from 'react';

export function useDocumentMeta(title: string, lang = 'fr') {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
  }, [title, lang]);
}
