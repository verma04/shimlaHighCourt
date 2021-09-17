import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({to}:any) => {
  const router = useRouter();

  useEffect(() => {
    router.push({pathname: to})
  }, [])

  return null;
}

export default Redirect;