"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-5 px-5 py-20 text-center">
      <h1 className="font-heading text-3xl font-semibold text-foreground">
        Terjadi kesalahan
      </h1>
      <p className="text-muted-foreground">
        Maaf, ada yang tidak beres saat memuat halaman ini. Silakan coba lagi.
      </p>
      <button
        onClick={reset}
        className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 font-medium text-primary-foreground hover:bg-primary-hover"
      >
        Coba lagi
      </button>
    </div>
  );
}
