import { usePathname } from 'next/navigation';

const hidePagePaths = ['/signup', '/signin'];

export default function useHideComponent() {
  const pathname = usePathname();

  const isComponentHidden = hidePagePaths.includes(pathname);

  return isComponentHidden;
}
