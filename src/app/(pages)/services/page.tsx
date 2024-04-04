'use client';
import { useEffect } from 'react';
import LoadingScreen from '../blog/loading';

export default function Redirect() {
  useEffect(() => {
    window.location.href = '/services/all';
  }, []);

  return <LoadingScreen></LoadingScreen>;
}
