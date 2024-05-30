import React from 'react';
import Link from '@docusaurus/Link';

// Hardcode this to BramblSC current scasladocs
export default function ScaladocLink({children, path}) {
    // Hardcode this
  return (
    <Link to={`https://topl.github.io/BramblSc/scaladoc/current/${path}`} target="_blank">{children}</Link>
  );
}
