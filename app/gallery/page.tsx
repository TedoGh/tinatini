"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const onInit = () => {
    console.log("lightGallery initialized");
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-16">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={false}
          elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <Link href="https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg">
            <Image
              src={
                "https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg"
              }
              width={600}
              height={600}
              alt=""
            />
          </Link>
          <Link href="https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg">
            <Image
              src={
                "https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg"
              }
              width={600}
              height={600}
              alt=""
            />
          </Link>
          <Link href="https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg">
            <Image
              src={
                "https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg"
              }
              width={600}
              height={600}
              alt=""
            />
          </Link>
          <Link href="https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg">
            <Image
              src={
                "https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg"
              }
              width={600}
              height={600}
              alt=""
            />
          </Link>
          <Link href="https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg">
            <Image
              src={
                "https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg"
              }
              width={600}
              height={600}
              alt=""
            />
          </Link>
          <Link href="https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg">
            <Image
              src={
                "https://dvqlxo2m2q99q.cloudfront.net/000_clients/3252904/page/tuija-hanhikoski-headshots-2-c17bbb.jpg"
              }
              width={600}
              height={600}
              alt=""
            />
          </Link>
        </LightGallery>
      </div>
    </div>
  );
};

export default Page;
