/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */


/*
 * Code
 */
const Footer = () => {
  // Date courante
  const now = new Date();
  // Je récup l'année
  const year = now.getFullYear();

  // JSX retourné
  return (
    <footer id="footer">
      DevOfThrones, le blog du développeur React - {year}
    </footer>
  );
};


/*
 * Export
 */
export default Footer;
