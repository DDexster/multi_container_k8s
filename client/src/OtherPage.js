import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return <div>
  Other page
  <Link to={'/'}>Go home, you're drunk!</Link>
  </div>
}