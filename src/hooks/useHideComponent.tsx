import { usePathname } from 'next/navigation';

const hidePagePaths = ['/signup', '/signin'];

export default function useHideComponent() {
  const pathname = usePathname();

  const hideComponent = hidePagePaths.includes(pathname);

  return hideComponent;
}
