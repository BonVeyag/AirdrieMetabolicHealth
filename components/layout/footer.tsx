import Image from "next/image";
import Link from "next/link";
import { medicalDisclaimerSummary, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50/35">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/logo-20260221.png"
            alt={siteConfig.name}
            width={1024}
            height={1024}
            className="h-36 w-auto"
          />
          <p className="mt-2 text-sm text-slate-600">{siteConfig.description}</p>
          <p className="mt-3 text-sm text-slate-700">{siteConfig.clinic.name}</p>
          <p className="text-sm text-slate-700">{siteConfig.clinic.address}</p>
          <a
            href={`tel:${siteConfig.clinic.phone.replace(/[^+\d]/g, "")}`}
            className="mt-1 inline-flex text-sm font-semibold text-slate-800 hover:text-slate-950"
          >
            {siteConfig.clinic.phone}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Navigate
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-900 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-slate-900 hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="hover:text-slate-900 hover:underline"
              >
                Medical Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Important
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {medicalDisclaimerSummary}
          </p>
          <p className="mt-4 text-xs text-slate-500">
            If you are experiencing a medical emergency, call 911 or visit your
            nearest emergency department.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Primary-care-adjacent education and coaching in Alberta.</p>
        </div>
      </div>
    </footer>
  );
}
