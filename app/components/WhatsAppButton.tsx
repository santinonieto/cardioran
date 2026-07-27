import { clinica } from "@/lib/data";

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.593 4.462 1.72 6.404L3.2 28.8l6.57-1.717a12.74 12.74 0 006.234 1.594h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.054A12.72 12.72 0 0016.004 3.2zm0 23.36h-.004a10.58 10.58 0 01-5.39-1.476l-.386-.23-3.9 1.02 1.04-3.8-.252-.39a10.56 10.56 0 01-1.62-5.634c0-5.867 4.775-10.64 10.646-10.64a10.58 10.58 0 017.523 3.12 10.55 10.55 0 013.117 7.526c0 5.867-4.775 10.64-10.64 10.64zm5.83-7.96c-.32-.16-1.89-.933-2.184-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.592-1.893-1.779-2.213-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.524-.539-.72-.549l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.358.526 1.822.674.766.243 1.463.209 2.014.127.614-.092 1.89-.773 2.157-1.52.266-.746.266-1.386.186-1.52-.08-.133-.293-.213-.613-.373z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      href={clinica.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar turno por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-wa-500 py-3 pl-3 pr-3 text-white shadow-lg shadow-black/20 transition hover:bg-wa-600 hover:pr-5 hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
        Pedir turno
      </span>
    </a>
  );
}
