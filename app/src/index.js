/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

/*
 * Local import
 */
import Blog from 'src/components/Blog';

/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  // Composant racine
  const rootComponent = <Blog />;
  // Noeud du DOM
  const node = document.getElementById('root');
  // on fait le rendu
  render(rootComponent, node);
});
