import {
  Activity,
  Album,
  Calendar1,
  Home,
  ImagePlus,
  LibraryBig,
  List,
  Newspaper,
  Scroll,
  Settings,
  Store,
  Users,
  Video,
} from 'lucide-react';

export const navLinks = [
  {
    href: '/',
    label: 'Home',
    icon: <Home />,
  },
  {
    href: '/',
    label: 'Friends',
    icon: <Users />,
  },
  {
    href: '/',
    label: 'Stories',
    icon: <Scroll />,
  },
];

export const leftBarLinks = [
  {
    href: '/',
    icon: <ImagePlus />,
    label: 'My Posts',
  },
  {
    href: '/',
    icon: <Activity />,
    label: 'Activity',
  },
  {
    href: '/',
    icon: <Store />,
    label: 'Marketplace',
  },
  {
    href: '/',
    icon: <Calendar1 />,
    label: 'Events',
  },
  {
    href: '/',
    icon: <Album />,
    label: 'Albums',
  },
  {
    href: '/',
    icon: <Video />,
    label: 'Videos',
  },
  {
    href: '/',
    icon: <Newspaper />,
    label: 'News',
  },
  {
    href: '/',
    icon: <LibraryBig />,
    label: 'Courses',
  },
  {
    href: '/',
    icon: <List />,
    label: 'Lists',
  },
  {
    href: '/',
    icon: <Settings />,
    label: 'Settings',
  },
];
