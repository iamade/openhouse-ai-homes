import Link from "next/link";

// export default function MenuItem({ title, address, Icon }) {
  const MenuItem: React.FC<{title: string, address: string, Icon: any}> = (props) => {
  return (
    <div>
      <Link href={props.address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <props.Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{props.title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;