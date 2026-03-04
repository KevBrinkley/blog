export default function AboutPage() {
  return (
    <>
      <header className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          About
        </h1>
        <p className="mt-1 text-mute">
          A bit about me and this site.
        </p>
      </header>

      <div className="space-y-8">
        {/* Name */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">
            Kevin Brinkley
          </h2>
        </section>

        {/* Intro */}
        <section>
          <p className="text-ink leading-relaxed">
            Your intro paragraph goes here. Who you are, what you do, or why this
            site exists—in a sentence or two.
          </p>
        </section>

        {/* Born / Lives in / Previously / Languages */}
        <section className="space-y-1">
          <p className="text-ink">
            <span className="font-medium text-ink">Born:</span>{" "}
            <span className="text-mute">Place, year</span>
          </p>
          <p className="text-ink">
            <span className="font-medium text-ink">Lives in:</span>{" "}
            <span className="text-mute">City, State / Country</span>
          </p>
          <p className="text-ink">
            <span className="font-medium text-ink">Previously:</span>{" "}
            <span className="text-mute">
              Virginia, Florida, South Carolina, San Diego, Brazil, Sweden
            </span>
          </p>
          <p className="text-ink">
            <span className="font-medium text-ink">Languages:</span>{" "}
            <span className="text-mute">
              English, Spanish (travel), Swedish (conversational), French (basic)
            </span>
          </p>
        </section>

        {/* Career */}
        <section>
          <h3 className="font-display text-xl font-semibold text-ink">
            Career
          </h3>
          <p className="mt-2 text-ink leading-relaxed">
            A short paragraph about your work—current role, background, or what
            you care about professionally.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-ink">
            <li>Current or recent role</li>
            <li>Previous company or focus</li>
            <li>Another bullet</li>
          </ul>
        </section>

        {/* Interests / Passions */}
        <section>
          <h3 className="font-display text-xl font-semibold text-ink">
            Interests / Passions
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-ink">
            <li>Golf</li>
            <li>Wine</li>
            <li>Adventure / travel</li>
            <li>Add more as you like</li>
          </ul>
        </section>

        {/* 2026 Goals */}
        <section>
          <h3 className="font-display text-xl font-semibold text-ink">
            2026 Goals
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-ink">
            <li>Break 80 consistently and play at least two new courses.</li>
            <li>Ship a side project from idea to launch and get real users.</li>
            <li>Travel to one new country and use Spanish or Swedish in context.</li>
            <li>Read 24 books and keep a short log somewhere.</li>
            <li>Build a sustainable morning routine and protect deep work blocks.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
