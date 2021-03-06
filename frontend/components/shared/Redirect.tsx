
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({to, query}:any) => {
  const router = useRouter();

  useEffect(() => {
    router.push({pathname: to, query})
  }, [])

  return null;
}

export default Redirect;