import {
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
  Link as LinkIcon,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

const UserInfoCard = () => (
  <div className="home-section text-sm">
    {/* Top */}
    <div className="flex items-center justify-between font-medium">
      <span className="text-gray-500">User Information</span>
      <Link href="/" className="text-xs text-brand">See All</Link>
    </div>

    {/* Bottom */}
    <div className="flex flex-col gap-4 text-gray-500">
      <div className="flex items-center gap-2">
        <span className="text-xl text-black">Lionel Messi</span>
        <span className="text-sm">@lm10</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus ullam, molestias optio distinctio fugiat dolores error accusamus. Dicta fuga.
      </p>
      <div className="flex items-center gap-2">
        <MapPin />
        <span>
          Living in
          {' '}
          <b>Cardiff</b>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <GraduationCap />
        <span>
          Went to
          {' '}
          <b>University of South Wales</b>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <BriefcaseBusiness />
        <span>
          Works at
          {' '}
          <b>British Gas</b>
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <LinkIcon />
          <Link
            href="https://khaledcse.netlify.app"
            className="font-medium text-brand"
          >
            khaledcse.netlify.app
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Calendar />
          <span className="font-medium">Joined November 2024</span>
        </div>
      </div>
      <button
        type="button"
        className="rounded-md bg-brand p-2 text-sm text-white hover:bg-brand-600"
      >
        Follow
      </button>
      <span className="cursor-pointer self-end text-xs text-red-400">Block User</span>
    </div>
  </div>
);

export default UserInfoCard;
