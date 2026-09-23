import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrackPage from "@/components/site/TrackPage";
import { tracks, trackBySlug } from "@/lib/tracks";

export const dynamicParams = false;

export function generateStaticParams() {
  return tracks.map(t => ({ track: t.slug }));
}

type Props = { params: Promise<{ track: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const track = trackBySlug((await params).track);
  if (!track) return {};
  return {
    title: `Matthew Rundle | ${track.title}`,
    description: track.lede,
    alternates: { canonical: `/${track.slug}` },
    openGraph: { title: `Matthew Rundle | ${track.title}`, description: track.lede, type: "website", url: `/${track.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const track = trackBySlug((await params).track);
  if (!track) notFound();
  return <TrackPage track={track} />;
}
