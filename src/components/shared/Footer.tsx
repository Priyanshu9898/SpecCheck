import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/logoImg.png"
              alt="Logo"
              width={235}
              height={60}
            />
          </Link>
          <p className="mt-4">
            2261 Market Street, #5183
            <br />
            San Francisco, CA 94114
          </p>
          <div className="flex mt-4 space-x-4">
            <Link href="https://linkedin.com/company/speccheck" target="_blank">
              <Image
                src="/Images/linkdein.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://twitter.com/SpecCheckRx" target="_blank">
              <Image
                src="/Images/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.ycombinator.com/companies/speccheck"
              target="_blank"
            >
              <Image
                src="/Images/Y_Combinator.png"
                alt="Y_Combinator"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.ycombinator.com/companies/speccheck"
              target="_blank"
            >
              <Image src="/Images/cb.png" alt="cb" width={24} height={24} />
            </Link>

            <Link href="https://www.youtube.com/@SpecCheckRx" target="_blank">
              <Image
                src="/Images/yt.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold">CUSTOMERS</h5>
          <Link href="/doctors" className="block hover:text-blue-500">
            Doctors
          </Link>
          <Link href="/optical-labs" className="block hover:text-blue-500">
            Optical Labs
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Enterprise
          </Link>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold">SOLUTIONS</h5>
          <Link href="/doctors" className="block hover:text-blue-500">
            All-In-One Dashboard
          </Link>
          <Link href="/optical-labs" className="block hover:text-blue-500">
            Lab Pay
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Order Entry
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Live Chat
          </Link>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold">RESOURCES</h5>
          <Link href="/doctors" className="block hover:text-blue-500">
            About
          </Link>
          <Link href="/optical-labs" className="block hover:text-blue-500">
            Blog
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Integrations
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Careers
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Video Walkthroughs
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Contact
          </Link>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold">LEGAL</h5>
          <Link href="/doctors" className="block hover:text-blue-500">
            Terms of Use
          </Link>
          <Link href="/optical-labs" className="block hover:text-blue-500">
            Privacy Policy
          </Link>
          <Link href="/enterprise" className="block hover:text-blue-500">
            Cookie Policy
          </Link>
        </div>
      </div>
      <div className="bg-gray-700 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            Copyright © 2024 SpecCheck Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
